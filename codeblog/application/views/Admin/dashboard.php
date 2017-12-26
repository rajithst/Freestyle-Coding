<?php include 'includes/header.php';

if ($this->session->flashdata('welocme')){

    echo "<h3>".$this->session->flashdata('welocme')."</h3>";

        }
        ?>




<?php include 'includes/footer.php'; ?>