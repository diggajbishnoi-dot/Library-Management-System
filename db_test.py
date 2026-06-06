import mysql.connector
from dotenv import load_dotenv
import os
load_dotenv()
mydb = mysql.connector.connect(
    host= "localhost",
    user= "library_user",
    password =os.getenv("DB_PASS"),
    database="library_manager"
)
print(" connected sucessfully !")