<?ph

CREATE TABLE publications (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    date VARCHAR(255),
    short_content VARCHAR(255),
    content VARCHAR(255),
    author_name VARCHAR(255),
    preview VARCHAR(255),
    type VARCHAR(255),
    PRIMARY KEY(id)
); 


$dsn = 'mysql:host=localhost;dbname=people';
$username = 'root';
$password = 'root';

$db = new PDO($dsn, $username, $password);     
                                                     
if ($db){                                                
     echo "connection established";
}
 
