package com.qcl.controller;

import com.qcl.api.ResultVO;
import com.qcl.bean.Leimu;
import com.qcl.bean.PictureInfo;
import com.qcl.bean.StoreInfo;
import com.qcl.global.GlobalData;
import com.qcl.repository.LeiMuRepository;
import com.qcl.repository.StoreRepository;
import com.qcl.request.LeimuReq;
import com.qcl.request.StoreReq;
import com.qcl.utils.ApiUtil;
import com.qcl.utils.ExcelImportUtils;
import com.qcl.yichang.DianCanException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.StringUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.List;

/**
 * @author oygh
 * @date 2020/5/14 - 9:04
 */
/**
 * 商铺信息
 *
 */
@Controller
@RequestMapping("/store")
@Slf4j
public class StoreController {

    @Autowired
    private StoreRepository storeRepository;

    //商店列表
    @GetMapping("/list")
    public String list(ModelMap map) {
        List<StoreInfo> storeList = storeRepository.findAll();
        log.error("商店list={}", storeList);
        map.put("storeList", storeList);
        return "store/list";
    }

    //商店详情页
    @GetMapping("/detail")
    public String index(@RequestParam(value = "stid", required = false) Integer stid,
                        ModelMap map) {
        if (stid != null) {
            StoreInfo store = storeRepository.findById(stid).orElse(null);
            map.put("store", store);
            return "store/detail";
        }
        return "store/detail";

    }



    //删除商店
    @GetMapping("/remove")
    public String remove(@RequestParam(value = "stid", required = false) Integer stid,
                         ModelMap map) {
        storeRepository.deleteById(stid);
        map.put("url", "/diancan/store/list");
        return "zujian/success";
    }
    //添加/更新
    @PostMapping("/save")
    public String save(@Valid StoreReq form,
                       BindingResult bindingResult,
                       ModelMap map) {
        if (bindingResult.hasErrors()) {
            map.put("msg", bindingResult.getFieldError().getDefaultMessage());
            map.put("url", "/diancan/store/detail");
            return "zujian/error";
        }

        StoreInfo store = new StoreInfo();
        try {
//            if (!StringUtils.isEmpty(form.getStid())) {
//                store = storeRepository.findById(form.getStid()).orElse(null);
//            }
            BeanUtils.copyProperties(form, store);
            storeRepository.save(store);
        } catch (DianCanException e) {
            map.put("msg", e.getMessage());
            map.put("url", "/diancan/store/detail");
            return "zujian/error";
        }

        map.put("url", "/diancan/store/list");
        return "zujian/success";
    }
    /*
     * 返回json给小程序
     * */
    @GetMapping("/getAll")
    @ResponseBody
    public ResultVO getUserInfo() {
        List<StoreInfo> pictures = storeRepository.findAll();
        return ApiUtil.success(pictures);
    }

    /*@GetMapping("/getStore")
    @ResponseBody
    public ResultVO getStoreInfo(@RequestParam("stid") Integer stid) {
        List<StoreInfo> pictures = storeRepository.findAll();
        return ApiUtil.success(pictures);
    }*/

}
