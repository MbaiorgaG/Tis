package com.sdl.tistrade.controller;

import java.util.Locale;
import javax.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

  private Logger logger = LoggerFactory.getLogger(MainController.class);
  private Locale locale;

  public MainController() {

  }
@RequestMapping(value = {"/", "/home"})
  public String getHomePage(HttpSession session){
    session.invalidate();
    logger.info("application home now");
    return "ret-login";
  }

}
