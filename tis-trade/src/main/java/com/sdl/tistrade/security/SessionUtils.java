package com.sdl.tistrade.security;

import java.util.Locale;
import javax.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;

public class SessionUtils {

  private final Logger logger = LoggerFactory.getLogger(getClass());

  private final MessageSource messageSource;
  private final Locale locale = LocaleContextHolder.getLocale();

  public SessionUtils(MessageSource messageSource) {
    this.messageSource = messageSource;
  }

  public void setTimeOut(HttpSession session){
    try {
      //Get the session value from the database: Session timeout can be enabled or disabled in this system
    }
    catch (Exception exception){
      logger.error("Exception Occurred: {}", exception.getMessage());
    }
  }
}
