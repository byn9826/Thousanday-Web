<html>
    <head>
        <title>Admin Dashboard</title>
        <?php $this->assets->outputCss(); ?>
    </head>
    <body>
        <ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link disabled" href="/admin">Admins</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="/admin/list/pet">Pets</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="/admin/list/user">Users</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="/admin/list/moment">Moments</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="/admin/list/comment">Comments</a>
            </li>
        </ul>
        <?php echo $this->getContent(); ?>
    </body>
</html>