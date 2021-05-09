import sqlite3 as db
from xml.dom.minidom import parse

db_path = 'city.db'
xml_path = 'city-code.xml'
node_name = 'county'

create = '''
    create table city(
        id int,
        name char(20)
    );
'''
insert = '''
    insert into city(id, name) values(?, ?)
'''

def create_table(db_path):
    c = db.connect(db_path)
    cursor = c.cursor()
    sql = create
    try:
        cursor.execute(sql)
    except Exception as e:
        print('Failed to create table, error: ', e)
    cursor.close()
    return c
        
def insert_datas(c: db.Connection, xml_path, node_name):
    cursor = c.cursor()
    sql = insert
    try:
        for v in parse_xml(xml_path, node_name):
            cursor.execute(sql, (v['city_id'], v['city_name']))
        c.commit()
    except Exception as e:
        print('Failed to insert data, error: ', e)
        c.rollback()
    cursor.close()
    c.close()

def parse_xml(xml_path, node_name) -> list:
    dom_tree = parse(xml_path)
    elements = dom_tree.getElementsByTagName(node_name)
    city_list = []
    for v in elements:
        city_id = v.getAttribute('weatherCode')
        city_name = v.getAttribute('name')
        city_list.append({ 'city_id': city_id, 'city_name': city_name })
    return city_list

def main():
    c = create_table(db_path)
    insert_datas(c, xml_path, node_name)

if __name__ == '__main__':
    main()