<?php
require __DIR__ . '/functions.php';
$data = load_site_data();
?>
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title><?= isset($data['SITE']['name']) ? htmlspecialchars($data['SITE']['name']) : 'Site' ?></title>
    <link rel="stylesheet" href="/web_static/styles.css">
  </head>
  <body>
    <?php include __DIR__ . '/components/header.php'; ?>

    <main class="main-content">
      <?php include __DIR__ . '/components/hero.php'; ?>
      <section style="max-width:1280px;margin:24px auto;padding:0 20px">
        <h2>Programas destacados</h2>
        <p>Contenido estático para replicar la apariencia original.</p>
      </section>
    </main>

    <?php include __DIR__ . '/components/footer.php'; ?>

    <script src="/web_static/scripts.js"></script>
  </body>
</html>
