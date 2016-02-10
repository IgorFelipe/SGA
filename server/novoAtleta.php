<?php

$data = array();

if(isset($_GET['files']))
{  
    $error = false;
    $files = array();
    
    print_r($_POST);
    
    $uploaddir = '../img_doc/';
    foreach($_FILES as $file)
    {
        if(move_uploaded_file($file['tmp_name'], $uploaddir .basename($file['name'])))
        {
            $files[] = $uploaddir .$file['name'];
        }
        else
        {
            $error = true;
        }
    }
    $data = ($error) ? array('error' => 'There was an error uploading your files') : array('files' => $files);
}
else if(isset($_GET['atleta']))
{  
    $error = false;
    $atleta  = array();
    
    print($_GET);
}
else
{
    $data = array('success' => 'Form was submitted', 'formData' => $_POST);
}

echo json_encode($data);

?>