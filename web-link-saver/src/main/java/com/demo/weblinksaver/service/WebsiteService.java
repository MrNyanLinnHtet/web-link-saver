package com.demo.weblinksaver.service;

import com.demo.weblinksaver.dao.WebsiteDao;
import com.demo.weblinksaver.dto.Website;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WebsiteService {

    @Autowired
    private WebsiteDao websiteDao;

    public void insertData(Website website) {
        websiteDao.insertData(website);
    }

    public List<Website> findAllData() {
        return websiteDao.findAllData();
    }

    public Website findById(int id) {
        return websiteDao.findById(id);
    }
}
