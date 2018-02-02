<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="<?= $this->config->appName; ?> is an photo sharing social website for pets. All pets have their own homepage. You could share your moments with your pets or follow any lovely pet you like  here.">
		<meta name="keywords" content="pets, dogs, cats, animals, social, pet images, gallery, puppy, puppies, dog, cat, pet, bird, birds, fish, fishes, moment, story, pet image, pet photo, cute, beauty, smart, share, life, lovely, pet gallery, image sharing, pet social">
		<meta name="robots" content="all">
		<meta name="author" content="Baozier">
		<title><?= $this->config->appName; ?> - Homepage for pets</title>
		<link rel="shortcut icon" href="/img/logo.png" type="image/x-icon"/>
		<?php $this->assets->outputCss('header'); ?>
	</head>
	<body>
		<div id="root"></div>
		<script>
			var data = <?= $data; ?>;
		</script>
		<script type="text/javascript" src="/js/public.bundle.js"></script>
	</body>
</html>