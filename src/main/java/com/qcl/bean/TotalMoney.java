package com.qcl.bean;

import lombok.Data;

import java.math.BigDecimal;

/**
 * 总金额
 */
@Data
public class TotalMoney {
    private String time;
    private BigDecimal totalMoney;
}
