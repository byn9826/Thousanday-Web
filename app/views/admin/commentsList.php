<div class="jumbotron">
    <p class="lead">Comments</p>
</div>
<table class="table table-striped table-hover table-sm">
    <caption>Manage Comments</caption>
    <thead class="thead-dark">
        <th>Id</th>
        <th>Comment</th>
        <th>Moment</th>
        <th>User</th>
        <th>Date</th>
        <th>Manage</th>
    </thead>
    <?php foreach ($data->items as $item) { ?>
        <tr>
            <td><?= $item->comment_id; ?></td>
            <td><?= $item->comment_content; ?></td>
            <td><?= $item->moment_id; ?></td>
            <td><?= $item->user_id; ?></td>
            <td><?= $item->comment_date; ?></td>
            <td>
                <a role="button" onclick="confirmDelete()" class="btn btn-info">
                    Delete
                </a>
            </td>
        </tr>
    <?php } ?>
</table>
<a type="button" class="btn btn-outline-secondary" href='/admin/list/comment'>First</a>
<a type="button" class="btn btn-outline-secondary" href='/admin/list/comment?page=<?= $data->before; ?>'>Previous</a>
<a type="button" class="btn btn-outline-secondary" href='/admin/list/comment?page=<?= $data->next; ?>'>Next</a>
<a type="button" class="btn btn-outline-secondary" href='/admin/list/comment?page=<?= $data->last; ?>'>Last</a>

<script>
    function confirmDelete () {
        var result = confirm("Are your sure want to delete this comment ?");
        if (result === true) {
            window.location.replace("/admin/comment/delete?id=<?= $item->comment_id; ?>");
        }
    }
</script>