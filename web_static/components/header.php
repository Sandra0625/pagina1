<?php
$data = load_site_data();
$SITE = $data['SITE'] ?? [];
$TOP_LINKS = $data['TOP_LINKS'] ?? [];
$NAV_ITEMS = $data['NAV_ITEMS'] ?? [];
?>
<header class="site-header">
  <div class="top-bar">
    <div class="top-inner">
      <div class="top-links">
        <?php foreach($TOP_LINKS as $link): ?>
          <a href="<?= esc($link['href']) ?>"><?= esc($link['label']) ?></a>
        <?php endforeach; ?>
      </div>
      <div class="phone"><?= esc($SITE['phone'] ?? '') ?></div>
    </div>
  </div>

  <div class="main-nav">
    <a href="/" class="logo">
      <div class="logo-img" aria-hidden="true">🏫</div>
      <div class="brand"><?= esc($SITE['name'] ?? '') ?></div>
    </a>

    <nav class="nav" aria-label="Main navigation">
      <?php foreach($NAV_ITEMS as $item): ?>
        <a href="<?= esc($item['href']) ?>"><?= esc($item['label']) ?></a>
      <?php endforeach; ?>
    </nav>

    <div class="actions">
      <a href="<?= esc($SITE['loginHref'] ?? '#') ?>" class="login">Acceso</a>
      <button class="cta">Solicita información</button>
    </div>

    <button class="mobile-btn mobile-toggle" aria-label="Abrir menú">☰</button>
  </div>

  <div class="mobile-menu"></div>
</header>
