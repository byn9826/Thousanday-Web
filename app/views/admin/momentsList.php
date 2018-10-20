<div class="jumbotron">
    <p class="lead">Moments</p>
</div>
<table class="table table-striped table-hover table-sm">
    <caption>Manage Moments</caption>
    <thead class="thead-dark">
        <th>Id</th>
        <th>Message</th>
        <th>Image</th>
        <th>Pet</th>
        <th>Date</th>
        <th>Display</th>
        <th>Manage</th>
    </thead>
    <?php foreach ($data->items as $item) { ?>
        <tr>
            <td><?= $item->moment_id; ?></td>
            <td><?= $item->moment_message; ?></td>
            <td><a href="/img/pet/<?= $item->pet_id; ?>/moment/<?= $item->image_name; ?>">
                <?= $item->image_name; ?>
            </a></td>
            <td><?= $item->pet_id; ?></td>
            <td><?= $item->moment_date; ?></td>
            <td><?= $item->display; ?></td>
            <td>
                <a role="button" class="btn btn-info" href="/admin/moment/display?id=<?= $item->moment_id; ?>">
                    <?= $item->display === '1' ? 'Hide' : 'Show'?>
                </a>
            </td>
        </tr>
    <?php } ?>
</table>
<a type="button" class="btn btn-outline-secondary" href='/admin/list/moment'>First</a>
<a type="button" class="btn btn-outline-secondary" href='/admin/list/moment?page=<?= $data->before; ?>'>Previous</a>
<a type="button" class="btn btn-outline-secondary" href='/admin/list/moment?page=<?= $data->next; ?>'>Next</a>
<a type="button" class="btn btn-outline-secondary" href='/admin/list/moment?page=<?= $data->last; ?>'>Last</a>