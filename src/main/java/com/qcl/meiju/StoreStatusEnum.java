package com.qcl.meiju;

import lombok.Getter;

/**
 * @author oygh
 * @date 2020/5/13 - 21:19
 */

@Getter
public class StoreStatusEnum implements CodeNumEnum {



    private Integer code;

    private String message;

    StoreStatusEnum(Integer code, String message) {
        this.code = code;
        this.message = message;
    }
}
