add_filter( 'wpcf7_form_elements', 'do_shortcode' );

add_shortcode('woocommerce_product_options', 'get_woocomerce_product_names_prices');

add_filter('wpcf7_form_tag_data_option', function($n, $options, $args) {
  if (in_array('vehicles', $options)){
    $product_names = array();

    $products = wc_get_products(array('status' => 'publish'));

    foreach ($products as $product) {
        $vehicles[] = $product->get_name() . ' - $' . $product->get_price();
    }

    return $vehicles;
  }
  return $n;
}, 10, 3);