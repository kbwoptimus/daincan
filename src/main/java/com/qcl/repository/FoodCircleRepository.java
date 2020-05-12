package com.qcl.repository;

import com.qcl.bean.FoodCircle;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FoodCircleRepository extends JpaRepository<FoodCircle,Integer> {
    List<FoodCircle> findAllByOpenid(String openid);
}
