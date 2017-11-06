<html>
    <head>
        <title>Simple DataTables Application</title>
        <?php $this->assets->outputCss(); ?>
    </head>
    <body>
        <table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%">
            <thead>
                <th>Petname</th>
            </thead>
            <tbody>
            </tbody>
        </table>
        <?php $this->assets->outputJs(); ?>
        <script type="text/javascript">
            $(document).ready(function() {
                $('#example').DataTable({
                    serverSide: true,
                    ajax: {
                        url: '/test/read',
                        method: 'POST'
                    },
                    columns: [
                        {data: "pet_name"},
                    ]
                });
            });
        </script>
    </body>
</html>