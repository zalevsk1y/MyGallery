<?php
use MyGallery\Menu\Admin\MenuPage;
use MyGallery\Utils\MenuConfig;
/**
 * class MenuPageTest
 * 
 * @package MyGallery
 */

 class MenuPageTest extends \WP_UnitTestCase{
    
    public function setUp()
    {
        
        parent::setUp();

        wp_set_current_user($this->factory->user->create_and_get([
            'role' => 'administrator',
        ]));
        
        $this->instance=new MenuPage();

       
    }
    public function addMainMenuTest (){
        $menu_config=new MenuConfig('mock/menu-config.php');
        $this->instance->init($menu_config);
        $menu_slug=MYGALLERY_PLUGIN_SLUG . '-main-menu';
        $this->assertNotEmpty(menu_page_url( $menu_slug ));

    }
}