function whitelist_domains($result, $tag) {
	if('file-link' == $tag->name) {
		$your_link = isset( $_POST['file-link'] ) ? trim( $_POST['file-link'] ) : '';
		$regex_check_gdocs = preg_match("/(https?:\/\/)?docs\.google\.com\/([A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?/", $your_link);
		$regex_check_gdrive = preg_match("/(https?:\/\/)?drive\.google\.com\/([A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?/", $your_link);
		$regex_check_dropbox = preg_match("/(https?:\/\/)?(www\.)?dropbox\.com\/([A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?/", $your_link);

		if($regex_check_dropbox == 0 && $regex_check_gdocs == 0 && $regex_check_gdrive == 0) {
			$result->invalidate($tag, "Not valid Google Drive/Docs or Dropbox link.");
		}
	}

	return $result;
}

add_filter( 'wpcf7_validate_url', 'whitelist_domains', 20, 2 );