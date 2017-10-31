<html>
    <head>
        <title>Admin Management</title>
        <?php $this->assets->outputCss(); ?>
    </head>
    <body>
        <table class="table table-striped table-hover table-sm">
            <caption>Manage Moments</caption>
            <thead class="thead-dark">
                <th>Id</th>
                <th>Message</th>
                <th>Image</th>
                <th>Pet</th>
                <th>Date</th>
                <th>Display</th>
            </thead>
            <?php foreach ($data->items as $item) { ?>
                <tr>
                    <td><?= $item->moment_id; ?></td>
                    <td><?= $item->moment_message; ?></td>
                    <td><?= $item->image_name; ?></td>
                    <td><?= $item->pet_id; ?></td>
                    <td><?= $item->moment_date; ?></td>
                    <td><?= $item->display; ?></td>
                </tr>
            <?php } ?>
        </table>
        <a href='/admin/list/moment'>First</a>
        <a href='/admin/list/moment?page=<?= $data->before; ?>'>Previous</a>
        <a href='/admin/list/moment?page=<?= $data->next; ?>'>Next</a>
        <a href='/admin/list/moment?page=<?= $data->last; ?>'>Last</a>
    </body>
</html>