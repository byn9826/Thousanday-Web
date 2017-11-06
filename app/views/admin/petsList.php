<div class="jumbotron">
    <p class="lead">Pets</p>
</div>
<table class="table table-striped table-hover table-sm">
    <caption>Manage Pets</caption>
    <thead class="thead-dark">
        <th>Id</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Type</th>
        <th>Nature</th>
        <th>Owner</th>
        <th>Relative</th>
        <th>Create At</th>
        <th>Last Update</th>
        <th>Last View</th>
    </thead>
    <?php foreach ($data->items as $item) { ?>
        <tr>
            <td><?= $item->pet_id; ?></td>
            <td><?= $item->pet_name; ?></td>
            <td><?= $item->gendername; ?></td>
            <td><?= $item->typename; ?></td>
            <td><?= $item->naturename; ?></td>
            <td><?= $item->owner_id; ?></td>
            <td><?= $item->relative_id; ?></td>
            <td><?= $item->pet_reg; ?></td>
            <td><?= $item->last_update; ?></td>
            <td><?= $item->last_grow; ?></td>
        </tr>
    <?php } ?>
</table>
<a type="button" class="btn btn-outline-secondary" href='/admin/list/pet'>First</a>
<a type="button" class="btn btn-outline-secondary" href='/admin/list/pet?page=<?= $data->before; ?>'>Previous</a>
<a type="button" class="btn btn-outline-secondary" href='/admin/list/pet?page=<?= $data->next; ?>'>Next</a>
<a type="button" class="btn btn-outline-secondary" href='/admin/list/pet?page=<?= $data->last; ?>'>Last</a>