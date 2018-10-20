<div class="jumbotron">
    <p class="lead">Admins</p>
</div>
<table class="table table-striped table-hover table-sm">
    <caption>Manage Admins</caption>
    <thead class="thead-dark">
        <th>Id</th>
        <th>Name</th>
        <th>Type</th>
    </thead>
    <?php foreach ($data->items as $item) { ?>
        <tr>
            <td><?= $item->user_id; ?></td>
            <td><?= $item->user_name; ?></td>
            <td><?= $item->accounttype; ?></td>
        </tr>
    <?php } ?>
</table>
<a type="button" class="btn btn-outline-secondary" href='/admin'>First</a>
<a type="button" class="btn btn-outline-secondary" href='/admin?page=<?= $data->before; ?>'>Previous</a>
<a type="button" class="btn btn-outline-secondary" href='/admin?page=<?= $data->next; ?>'>Next</a>
<a type="button" class="btn btn-outline-secondary" href='/admin?page=<?= $data->last; ?>'>Last</a>