# sql中删除表中数据的两种方法 -SQL

1. `delete * from TALBENAME`
2. `truncate table TABLENAME`

上面的两种方式均是能够删除TABLENAME中的数据，但是第二种方式性能更好，第二种方式是不进行日志的记录。