package com.qcl.repository;

import com.qcl.bean.AdminInfo;
import com.qcl.bean.Food;
import com.qcl.bean.Leimu;
import com.qcl.bean.StoreInfo;
import org.apache.catalina.Store;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @author oygh
 * @date 2020/5/14 - 9:09
 */
public interface StoreRepository extends JpaRepository<StoreInfo, Integer> {
    StoreInfo findByStid(Integer stid);



}