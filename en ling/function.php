function cust_display_sermon_series($pod_id) {
  $child_args = array(
        'taxonomy' => 'sermon_series',
        'parent' => $pod_id,
        'hide_empty' => false,
  );

  $child_terms = get_terms($child_args);

  if (!empty($child_terms)) {
        echo '<ul>';

        foreach ($child_terms as $child_term) {
          echo '<li>' . $child_term->name . '</li>';
        }

        echo '</ul>';
   } else {
		return '';
   }
}