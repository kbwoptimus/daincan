package com.qcl.bean;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.qcl.meiju.FoodStatusEnum;
import com.qcl.meiju.StoreStatusEnum;
import com.qcl.utils.EnumUtil;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

/**
 * @author oygh
 * @date 2020/5/13 - 21:11
 */
@Entity
@Data
@EntityListeners(AuditingEntityListener.class)
public class StoreInfo {
    @Id
    private int stid;//店铺id
    private String stname;//店铺名称
    private String stimg;//店铺图片
    private String stphone;//店铺联系电话
    private String staddress;//店铺地址
    @LastModifiedDate//自动添加更新时间的注解
    private Date updateTime;




}
