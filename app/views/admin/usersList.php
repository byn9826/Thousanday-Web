<div class="jumbotron">
    <p class="lead">Users</p>
</div>
<table class="table table-striped table-hover table-sm">
    <caption>Manage Users</caption>
    <thead class="thead-dark">
        <th>Id</th>
        <th>Name</th>
        <th>Google</th>
        <th>Facebook</th>
        <th>About</th>
        <th>Type</th>
    </thead>
    <?php foreach ($data->items as $item) { ?>
        <tr>
            <td><?= $item->user_id; ?></td>
            <td><?= $item->user_name; ?></td>
            <td><?= $item->google_id; ?></td>
            <td><?= $item->facebook_id; ?></td>
            <td><?= $item->user_about; ?></td>
            <td><?= $item->accounttype; ?></td>
        </tr>
    <?php } ?>
</table>
<a type="button" class="btn btn-outline-secondary" href='/admin/list/user'>First</a>
<a type="button" class="btn btn-outline-secondary" href='/admin/list/user?page=<?= $data->before; ?>'>Previous</a>
<a type="button" class="btn btn-outline-secondary" href='/admin/list/user?page=<?= $data->next; ?>'>Next</a>
<a type="button" class="btn btn-outline-secondary" href='/admin/list/user?page=<?= $data->last; ?>'>Last</a>