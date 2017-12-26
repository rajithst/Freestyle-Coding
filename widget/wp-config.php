<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'widget');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '&&+w<Idud933%n@=SN~_NOww|J:UxrUw[p>193u>MNl;F:X{n$$Bat,;AOj~kfOY');
define('SECURE_AUTH_KEY',  'Mdyl`a{[?#C5oGH1C1+h?}h6iYh@s3%80)l6!wm&|&G&o=(WO-Oc:OymWzt..]/[');
define('LOGGED_IN_KEY',    '^U<!LXUidk%!Xi;$b$XK/af3O,PB%1U F}W%pJrd=2Ze0w%2%D&K5_4z%gR<iiw<');
define('NONCE_KEY',        'w5jI!y;Mm}Cl4,T,U;$:Uf(/$phc-h~+]eV5DVES8` ~1U*VVbNOI.:a[0/QDfrD');
define('AUTH_SALT',        't~mS4Eutort9~D:84G2 `P.L6T+R.s1$fUBD%]h!$atX<h_KnZ$<HUajHB=r?M<(');
define('SECURE_AUTH_SALT', '} zcc?/O+(SkPXCN{A@F)VKO4q6^ltPG%p{:tnA0Y=8lv?&@HP-ZGS[QAoSN%,Yu');
define('LOGGED_IN_SALT',   'F|`;Go1ZlH{[3)-?(zD}..41+)1V=~#8U_3+f$:O@1Id{[*?oL)?w|HyM`4/e/xD');
define('NONCE_SALT',       'u]?5|^;|PXlxm;VK}a0:e?ymungN2}T/Lm*6,?5[rY5g|Wc{/lY6u@Bc{s^U+MWC');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
