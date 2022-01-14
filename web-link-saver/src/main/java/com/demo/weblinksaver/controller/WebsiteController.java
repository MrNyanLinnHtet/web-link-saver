package com.demo.weblinksaver.controller;

import com.demo.weblinksaver.dto.Website;
import com.demo.weblinksaver.service.WebsiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class WebsiteController {
    @Autowired
    private WebsiteService websiteService;

    @RequestMapping(value = "/insertData",method = RequestMethod.POST)
    public @ResponseBody
    void insertData(@RequestBody Website website) {
        websiteService.insertData(website);
    }
}
