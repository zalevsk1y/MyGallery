<?php

namespace MyGallery\Core;

/**
 * Initialize scripts and styles.
 *
 * @package Core
 * @author  Evgeniy S.Zalevskiy <2600@ukr.net>
 * @license MIT https://opensource.org/licenses/MIT
 */

class Main
{
    /**
     * Function constructor
     *
     * @param \MyGallery\Render\Slider $templateRender 
     */
    public function __construct(\MyGallery\Render\Slider $templateRender)
    {
        $this->template = $templateRender;
        $this->registerActions();
    }

    /**
     * Add script to Post Edit section of admin menu.
     * 
     * @param mixed $hook name of page passed by the hook
     * 
     * @return void
     */
    public function enqueueAdminScripts($hook)
    {
        if ('post.php' == $hook) {
            wp_enqueue_script('my_gallery');
        }
    }

    /**
     * Add slider and gallery scripts to the post page.
     * 
     * @return void
     */
    public function enqueueScripts()
    {
        wp_enqueue_script('gallery_script');
    }

    /**
     * Add styles for slider and gallery to the post page.
     * 
     * @return void
     */
    public function enqueueStyles()
    {
        wp_enqueue_style('my_gallery_style', MYGALLERY_PLUGIN_URL . '/public/css/1.css');
    }

    /**
     * Register scripts and their dependencies.
     * 
     * @return void
     */
    public function registerScripts()
    {
        wp_register_script('my_gallery', MYGALLERY_PLUGIN_URL . '/public/js/0.bundle.js', array('react', 'react-dom', 'lodash', 'media-models'), MYGALLERY_VERSION);
        wp_register_script('gallery_script', MYGALLERY_PLUGIN_URL . '/public/js/1.bundle.js', array('jquery'), MYGALLERY_VERSION);
    }

    /**
     * Register actions and shortcode.
     * 
     * @return void
     */
    private function registerActions()
    {
        add_action('wp_loaded', array($this, 'registerScripts'));
        add_action('admin_enqueue_scripts', array($this, 'enqueueAdminScripts'));
        add_action('wp_enqueue_scripts', array($this, 'enqueueStyles'));
        add_action('wp_enqueue_scripts', array($this, 'enqueueScripts'));
        add_shortcode('my-gallery', array($this, 'renderSlider'));
    }
    /**
     * Facade for render function.
     *
     * @param array $shortcodeParameters params for slider
     *
     * @return string
     */
    public function renderSlider($shortcodeParameters)
    {
        return $this->template->render($shortcodeParameters);
    }
}
