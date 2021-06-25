<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends AbstractController
{
    private $superkebab;

    public function __construct()
    {
        $this->superkebab = '| SuperKebab';
    }
    public function index(): Response
    {
        return $this->render('index.html.twig');
    }

    public function about(): Response
    {
        return $this->render('about.html.twig');
    }

    public function menu(): Response
    {
        return $this->render('menu.html.twig');
    }

    public function openingHours(): Response
    {
        return $this->render('open.html.twig');
    }

    public function contact(): Response
    {
        return $this->render('contact.html.twig');
    }
}
