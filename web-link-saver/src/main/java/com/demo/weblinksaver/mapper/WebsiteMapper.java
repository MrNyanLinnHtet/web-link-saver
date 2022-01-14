package com.demo.weblinksaver.mapper;

import com.demo.weblinksaver.dto.Website;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface WebsiteMapper {

    void insertData(Website website);
}
