package com.demo.weblinksaver.mapper;

import com.demo.weblinksaver.dto.Website;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface WebsiteMapper {

    void insertData(Website website);

    List<Website> findAllData();

    Website findById(int id);

    int updateData(Website website);

    void deleteData(int id);
}
