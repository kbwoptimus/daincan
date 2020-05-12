package com.qcl.controller;

import com.qcl.api.ResultVO;
import com.qcl.bean.FoodCircle;
import com.qcl.meiju.ResultEnum;
import com.qcl.repository.FoodCircleRepository;
import com.qcl.utils.ApiUtil;
import com.qcl.yichang.DianCanException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FoodCircleController {
    @Autowired
    private FoodCircleRepository repository;

    //美食圈页面呈现
    @GetMapping("/foodcircle")
    public ResultVO<FoodCircle> detail(
                                       @RequestParam("content") String content,
                                       @RequestParam("openid") String openid,
                                       @RequestParam("foodCircleId") int foodCircleId,
                                       @RequestParam("name") String name,
                                       @RequestParam("imageUrl") String imageUrl,
                                       @RequestParam("avatarUrl") String avatarUrl
    ){
        if (StringUtils.isEmpty(openid) || StringUtils.isEmpty(foodCircleId)){
            throw new DianCanException(ResultEnum.PARAM_ERROR);
        }
        //提交美食圈
        FoodCircle foodCircle = new FoodCircle();
        foodCircle.setOpenid(openid);
        foodCircle.setImageUrl(imageUrl);
        foodCircle.setAvatarUrl(avatarUrl);
        foodCircle.setFoodCircleId(foodCircleId);
        foodCircle.setContent(content);
        foodCircle.setName(name);
        FoodCircle save = repository.save(foodCircle);
        return ApiUtil.success(save);
    }

    //查看美食圈
    @GetMapping("/seefoodcircle")
    public ResultVO<List<FoodCircle>> foodCircleList(){
        List<FoodCircle> all = repository.findAll();
        return ApiUtil.success(all);
    }
}
