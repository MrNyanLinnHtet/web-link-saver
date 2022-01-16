package com.demo.weblinksaver.controller;

import com.demo.weblinksaver.dto.Website;
import com.demo.weblinksaver.service.WebsiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class WebsiteController {
    @Autowired
    private WebsiteService websiteService;

    @RequestMapping(value = "/insertData", method = RequestMethod.POST)
    public @ResponseBody
    void insertData(@RequestBody Website website) {
        websiteService.insertData(website);
    }

    @RequestMapping(value = "/findAllData", method = RequestMethod.GET)
    public @ResponseBody
    List<Website> findAllData() {
        return websiteService.findAllData();
    }

    @RequestMapping(value = "/findById", method = RequestMethod.GET)
    public @ResponseBody
    Website findById(@RequestParam(value = "id", required = true) int id) {
        return websiteService.findById(id);
    }
}
