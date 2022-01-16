package com.demo.weblinksaver.dao;

import com.demo.weblinksaver.dto.Website;
import com.demo.weblinksaver.mapper.WebsiteMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class WebsiteDao {

    @Autowired
    private WebsiteMapper websiteMapper;

    public void insertData(Website website) {
        websiteMapper.insertData(website);
    }

    public List<Website> findAllData() {
        return websiteMapper.findAllData();
    }

    public Website findById(int id) {
        return websiteMapper.findById(id);
    }


}
