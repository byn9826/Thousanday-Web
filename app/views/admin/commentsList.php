<html>
    <head>
        <title>Admin Management</title>
        <?php $this->assets->outputCss(); ?>
    </head>
    <body>
        <table class="table table-striped table-hover table-sm">
            <caption>Manage Comments</caption>
            <thead class="thead-dark">
                <th>Id</th>
                <th>Comment</th>
                <th>Moment</th>
                <th>User</th>
                <th>Date</th>
            </thead>
            <?php foreach ($data->items as $item) { ?>
                <tr>
                    <td><?= $item->comment_id; ?></td>
                    <td><?= $item->comment_content; ?></td>
                    <td><?= $item->moment_id; ?></td>
                    <td><?= $item->user_id; ?></td>
                    <td><?= $item->comment_date; ?></td>
                </tr>
            <?php } ?>
        </table>
        <a href='/admin/list/comment'>First</a>
        <a href='/admin/list/comment?page=<?= $data->before; ?>'>Previous</a>
        <a href='/admin/list/comment?page=<?= $data->next; ?>'>Next</a>
        <a href='/admin/list/comment?page=<?= $data->last; ?>'>Last</a>
    </body>
</html>