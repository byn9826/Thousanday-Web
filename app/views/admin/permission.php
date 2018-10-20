<script>
    let id = localStorage.getItem("id");
    let token = localStorage.getItem("token");
    window.location.replace('/admin/permission?id=' + id + '&token=' + token);
</script>