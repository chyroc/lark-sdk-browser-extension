// map, url -> {name, code}

const meta = {
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//AddApprovalsInLarkAttendance": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.CreateAttendanceUserApproval(ctx, \u0026lark.CreateAttendanceUserApprovalReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "由于部分企业使用的是自己的审批系统，而不是飞书审批系统，因此员工的请假、加班等数据无法流入到飞书考勤系统中，导致员工在请假时间段内依然收到打卡提醒，并且被记为缺卡。\n\n对于这些只使用飞书考勤系统，而未使用飞书审批系统的企业，可以通过考勤开放接口的形式，将三方审批结果数据回写到飞书的考勤系统中。\n\n目前支持加班、请假、出差和外出这四种审批结果的写入。\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//BatchQueryCheckinFlowHistory": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.BatchGetAttendanceUserFlow(ctx, \u0026lark.BatchGetAttendanceUserFlowReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "批量查询授权内员工的实际打卡记录。例如，企业给一个员工设定的班次是上午 9 点和下午 6 点各打一次上下班卡，但是员工在这期间打了多次卡，该接口会把所有的打卡记录都返回。\n\n如果只需获取打卡结果，而不需要打卡的详细数据，可使用“获取打卡结果”的接口。\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//CreateandEditShifts": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.CreateUpdateAttendanceUserDailyShift(ctx, \u0026lark.CreateUpdateAttendanceUserDailyShiftReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "班表是用来描述考勤组内人员每天按哪个班次进行上班。目前班表支持按一个整月对一位或多位人员进行排班。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//GetCardSwipeHistory": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.GetAttendanceUserFlow(ctx, \u0026lark.GetAttendanceUserFlowReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "通过打卡记录 ID 获取用户的打卡流水记录。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//GetCheckinResults": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.GetAttendanceUserTask(ctx, \u0026lark.GetAttendanceUserTaskReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取企业内员工的实际打卡结果，包括上班打卡结果和下班打卡结果。\n\n* 如果企业给一个员工设定的班次是上午 9 点和下午 6 点各打一次上下班卡，即使员工在这期间打了多次卡，该接口也只会返回 1 条记录。\n* 如果要获取打卡的详细数据，如打卡位置等信息，可使用“获取打卡流水记录”或“批量查询打卡流水记录”的接口。\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//GetUsersRemedyRecords": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.GetAttendanceUserTaskRemedy(ctx, \u0026lark.GetAttendanceUserTaskRemedyReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取授权内员工的补卡记录。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//ImportAttendanceFlowRecords": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.BatchCreateAttendanceUserFlow(ctx, \u0026lark.BatchCreateAttendanceUserFlowReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "导入授权内员工的打卡流水记录。导入后，会根据员工所在的考勤组班次规则，计算最终的打卡状态与结果。\n\n适用于考勤机数据导入等场景。\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//RetrieveUserApprovals": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.GetAttendanceUserApproval(ctx, \u0026lark.GetAttendanceUserApprovalReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取员工在某段时间内的请假、加班、外出和出差四种审批的通过数据。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//group": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.GetAttendanceGroup(ctx, \u0026lark.GetAttendanceGroupReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "通过考勤组 ID 获取考勤组详情。\n\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//group_create_update": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.CreateUpdateAttendanceGroup(ctx, \u0026lark.CreateUpdateAttendanceGroupReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "考勤组，是对部门或者员工在某个特定场所及特定时间段内的出勤情况（包括上下班、迟到、早退、病假、婚假、丧假、公休、工作时间、加班情况等）的一种规则设定。\n\n通过设置考勤组，可以从部门、员工两个维度，来设定考勤方式、考勤时间、考勤地点等考勤规则。\n出于安全考虑，目前通过该接口只允许修改自己创建的考勤组。\n### 考勤组负责人\n考勤组负责人可修改该考勤组的排班，并查看该考勤组的考勤数据。\n\n如果考勤组负责人同时被企业管理员赋予了考勤管理员的角色，则该考勤组负责人还拥有考勤管理员的权限，可以编辑及删除考勤规则。\n\n### 考勤组人员\n可按部门、员工两个维度，设置需要参加考勤或无需参加考勤的人员。\n- 若是按部门维度添加的考勤人员，当有新员工加入该部门时，其会自动加入该考勤组。\n- 若是按员工维度添加的考勤人员，当其上级部门被添加到其他考勤组时，该员工不会更换考勤组。\n\n### 考勤组类型\n提供 3 种不同的考勤类型：固定班制、排班制、自由班制。\n- 固定班制：指考勤组内每位人员的上下班时间一致，适用于上下班时间固定或无需安排多个班次的考勤组。\n- 排班制：指考勤组人员的上下班时间不完全一致，可自定义安排每位人员的上下班时间，适用于存在多个班次如早晚班的考勤组。\n- 自由班制：指没有具体的班次，考勤组人员可以在打卡时段内自由打卡，按照打卡时段统计上班时长。\n\n### 考勤班次\n- 固定班制下，需设置周一到周日每天安排哪个班次，以及可针对特殊日期进行打卡设置。\n- 排班制下，需对考勤组内每一位人员的每一天进行班次指定。\n- 自由班制下，需设置一天中最早打卡时间和最晚打卡时间，以及一周中哪几天需要打卡。\n\n### 考勤方式\n支持 3 种考勤方式：GPS 打卡、Wi-Fi 打卡、考勤机打卡。\n- GPS 打卡：需设置经纬度信息及考勤地点名称。\n- Wi-Fi 打卡：需设置 Wi-Fi 名称及 Wi-Fi 的 MAC 地址。\n- 考勤机打卡：需设置考勤机名称及考勤机序号。\n\n### 考勤其他设置\n- 规则设置：支持设置是否允许外勤打卡，是否允许补卡以及一个月补卡的次数，是否允许 PC 端打卡。\n- 安全设置：支持设置是否开启人脸识别打卡，以及什么情况下开启人脸识别。\n- 统计设置：支持设置考勤组人员是否可以查看到某些维度的统计数据。\n- 加班设置：支持配置加班时间的计算规则。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//group_delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.DeleteAttendanceGroup(ctx, \u0026lark.DeleteAttendanceGroupReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "通过考勤组 ID 删除考勤组。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//rule/batch-query-user-settings": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.QueryAttendanceUserSettings(ctx, \u0026lark.QueryAttendanceUserSettingsReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "批量查询授权内员工的用户设置信息，包括人脸照片文件 ID、人脸照片更新时间。\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//rule/download-file": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.DownloadAttendanceFile(ctx, \u0026lark.DownloadAttendanceFileReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "通过文件 ID 下载指定的文件。\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//rule/file_upload": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.UploadAttendanceFile(ctx, \u0026lark.UploadAttendanceFileReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "上传文件并获取文件 ID，可用于“修改用户设置”接口的 face_key 参数。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//rule/user-setting-modify": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.UpdateAttendanceUserSettings(ctx, \u0026lark.UpdateAttendanceUserSettingsReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "修改授权内员工的用户设置信息，包括人脸照片文件 ID。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//shift_by_id": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.GetAttendanceShiftByID(ctx, \u0026lark.GetAttendanceShiftByIDReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "通过班次 ID 获取班次详情。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//shift_by_name": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.GetAttendanceShiftByName(ctx, \u0026lark.GetAttendanceShiftByNameReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "通过班次的名称获取班次信息。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//shift_create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.CreateAttendanceShift(ctx, \u0026lark.CreateAttendanceShiftReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "班次是描述一次考勤任务时间规则的统称，比如一天打多少次卡，每次卡的上下班时间，晚到多长时间算迟到，晚到多长时间算缺卡等。\n\n- 创建一个考勤组前，必须先创建一个或者多个班次。\n- 一个公司内的班次是共享的，你可以直接引用他人创建的班次，但是需要注意的是，若他人修改了班次，会影响到你的考勤组及其考勤结果。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//shift_delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.DeleteAttendanceShift(ctx, \u0026lark.DeleteAttendanceShiftReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "通过班次 ID 删除班次。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//task/GetScheduledShifts": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.GetAttendanceUserDailyShift(ctx, \u0026lark.GetAttendanceUserDailyShiftReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "支持查询多个用户的排班情况，查询的时间跨度不能超过 30 天。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//task/notify-approval-status-update": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.UpdateAttendanceRemedyApproval(ctx, \u0026lark.UpdateAttendanceRemedyApprovalReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "对于只使用飞书考勤系统而未使用飞书审批系统的企业，可以通过该接口更新写入飞书考勤系统中的三方系统审批状态，例如请假、加班、外出、出差、补卡等审批，状态包括通过、不通过、撤销等。\n发起状态的审批才可以被更新为通过、不通过，已经通过的审批才可以被更新为撤销。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//task/notify-remedy-approval-initiation": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.InitAttendanceRemedyApproval(ctx, \u0026lark.InitAttendanceRemedyApprovalReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "对于只使用飞书考勤系统而未使用飞书审批系统的企业，可以通过该接口，将在三方审批系统中发起的补卡审批数据，写入到飞书的考勤系统中。\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//task/query-statistics-data": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.GetAttendanceStatisticsData(ctx, \u0026lark.GetAttendanceStatisticsDataReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "查询日度统计或月度统计的统计数据。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//task/query-statistics-header": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.GetAttendanceStatisticsHeader(ctx, \u0026lark.GetAttendanceStatisticsHeaderReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "查询日度统计或月度统计的统计表头。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//task/query-user-allowed-remedys": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.GetAttendanceUserAllowedRemedy(ctx, \u0026lark.GetAttendanceUserAllowedRemedyReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取用户某天可以补第几次上/下班卡的时间。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//task/query-user-statistics-settings": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.GetAttendanceUserStatisticsSettings(ctx, \u0026lark.GetAttendanceUserStatisticsSettingsReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "查询日度统计或月度统计的统计设置信息。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/Attendance//task/update-user-stats-settings": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Attendance.UpdateAttendanceUserStatisticsSettings(ctx, \u0026lark.UpdateAttendanceUserStatisticsSettingsReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "更新日度统计或月度统计的统计设置信息。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/acs-v1/access_record-access_photo/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.ACS.GetACSAccessRecordPhoto(ctx, \u0026lark.GetACSAccessRecordPhotoReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "用户在门禁考勤机上成功开门或打卡后，智能门禁应用都会生成一条门禁记录，对于使用人脸识别方式进行开门的识别记录，还会有抓拍图。\n\n可以用该接口下载开门时的人脸识别照片{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=acs\u0026version=v1\u0026resource=access_record.access_photo\u0026method=get)\n\n\n\n\n\n\n\n\n\n\n\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/acs-v1/access_record/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.ACS.GetACSAccessRecordList(ctx, \u0026lark.GetACSAccessRecordListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "用户在门禁考勤机上成功开门或打卡后，智能门禁应用都会生成一条门禁记录。\n\n该接口返回满足查询参数的识别记录{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=acs\u0026version=v1\u0026resource=access_record\u0026method=list)\n\n\n\n\n\n\n\n\n\n\n\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/acs-v1/device/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.ACS.GetACSDeviceList(ctx, \u0026lark.GetACSDeviceListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "使用该接口获取租户内所有设备"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/acs-v1/user-face/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.ACS.GetACSUserFace(ctx, \u0026lark.GetACSUserFaceReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "对于已经录入人脸图片的用户，可以使用该接口下载用户人脸图片"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/acs-v1/user-face/update": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.ACS.UpdateACSUserFace(ctx, \u0026lark.UpdateACSUserFaceReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "用户需要录入人脸图片才可以使用门禁考勤机。使用该 API 上传门禁用户的人脸图片。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/acs-v1/user/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.ACS.GetACSUser(ctx, \u0026lark.GetACSUserReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取智能门禁中单个用户的信息。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/acs-v1/user/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.ACS.GetACSUserList(ctx, \u0026lark.GetACSUserListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "使用该接口获取智能门禁中所有用户信息"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/acs-v1/user/patch": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.ACS.UpdateACSUser(ctx, \u0026lark.UpdateACSUserReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "飞书智能门禁在人脸识别成功后会有韦根信号输出，输出用户的卡号。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/bytedance-open-ecosystem/aweme_ecosystem-v1/aweme_user/get_bind_info": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Ecosystem.GetEcosystemBindAwemeUser(ctx, \u0026lark.GetEcosystemBindAwemeUserReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取绑定信息"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/ehr/ehr-v1/attachment/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.EHR.DownloadEHRAttachments(ctx, \u0026lark.DownloadEHRAttachmentsReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据文件 token 下载文件。\n\n调用「[批量获取员工花名册信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/ehr/employees)」接口的返回值中，「文件」类型的字段 id，即是文件 token\n\n![image.png](//sf1-ttcdn-tos.pstatp.com/obj/open-platform-opendoc/bed391d2a8ce6ed2d5985ea69bf92850_9GY1mnuDXP.png){尝试一下}(url=/api/tools/api_explore/api_explore_config?project=ehr\u0026version=v1\u0026resource=attachment\u0026method=get)\n\n\n\n\n\n\n\n\n\n\n\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/ehr/ehr-v1/employee/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.EHR.GetEHREmployeeList(ctx, \u0026lark.GetEHREmployeeListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据员工飞书用户 ID / 员工状态 / 雇员类型等搜索条件 ，批量获取员工花名册字段信息。字段包括「系统标准字段 / system_fields」和「自定义字段 / custom_fields」"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/agent-schedules/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.DeleteHelpdeskAgentSchedule(ctx, \u0026lark.DeleteHelpdeskAgentScheduleReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于删除客服"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/agent-schedules/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.GetHelpdeskAgentSchedule(ctx, \u0026lark.GetHelpdeskAgentScheduleReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取客服信息"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/agent-schedules/patch": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.UpdateHelpdeskAgentSchedule(ctx, \u0026lark.UpdateHelpdeskAgentScheduleReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于更新客服"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/agent/agent_email": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.GetHelpdeskAgentEmail(ctx, \u0026lark.GetHelpdeskAgentEmailReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取客服邮箱地址"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/agent/patch": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.UpdateHelpdeskAgent(ctx, \u0026lark.UpdateHelpdeskAgentReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "更新客服状态等信息"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/agent_schedule/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.CreateHelpdeskAgentSchedule(ctx, \u0026lark.CreateHelpdeskAgentScheduleReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于创建客服"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/agent_schedule/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.GetHelpdeskAgentScheduleList(ctx, \u0026lark.GetHelpdeskAgentScheduleListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取所有客服信息"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/agent_skill/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.CreateHelpdeskAgentSkill(ctx, \u0026lark.CreateHelpdeskAgentSkillReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于创建客服技能"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/agent_skill/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.DeleteHelpdeskAgentSkill(ctx, \u0026lark.DeleteHelpdeskAgentSkillReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于删除客服技能"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/agent_skill/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.GetHelpdeskAgentSkill(ctx, \u0026lark.GetHelpdeskAgentSkillReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取客服技能"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/agent_skill/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.GetHelpdeskAgentSkillList(ctx, \u0026lark.GetHelpdeskAgentSkillListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取全部客服技能"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/agent_skill/patch": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.UpdateHelpdeskAgentSkill(ctx, \u0026lark.UpdateHelpdeskAgentSkillReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于更新客服技能"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/agent_skill_rule/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.GetHelpdeskAgentSkillRuleList(ctx, \u0026lark.GetHelpdeskAgentSkillRuleListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取全部客服技能。仅支持自建应用。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/category/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.CreateHelpdeskCategory(ctx, \u0026lark.CreateHelpdeskCategoryReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于创建知识库分类。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/category/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.DeleteHelpdeskCategory(ctx, \u0026lark.DeleteHelpdeskCategoryReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于删除知识库分类详情。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/category/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.GetHelpdeskCategory(ctx, \u0026lark.GetHelpdeskCategoryReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取知识库分类。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/category/list-categories": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.GetHelpdeskCategoryList(ctx, \u0026lark.GetHelpdeskCategoryListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取服务台知识库所有分类。\n\n\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/category/patch": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.UpdateHelpdeskCategory(ctx, \u0026lark.UpdateHelpdeskCategoryReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于更新知识库分类详情。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/event/subscribe": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.SubscribeHelpdeskEvent(ctx, \u0026lark.SubscribeHelpdeskEventReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "用于订阅服务台事件"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/event/unsubscribe": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.UnsubscribeHelpdeskEvent(ctx, \u0026lark.UnsubscribeHelpdeskEventReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "用于取消订阅服务台事件"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/faq/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.CreateHelpdeskFAQ(ctx, \u0026lark.CreateHelpdeskFAQReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于创建知识库。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/faq/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.DeleteHelpdeskFAQ(ctx, \u0026lark.DeleteHelpdeskFAQReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于删除知识库。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/faq/faq_image": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.GetHelpdeskFAQImage(ctx, \u0026lark.GetHelpdeskFAQImageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取知识库图像。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/faq/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.GetHelpdeskFAQ(ctx, \u0026lark.GetHelpdeskFAQReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取服务台知识库详情。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/faq/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.GetHelpdeskFAQList(ctx, \u0026lark.GetHelpdeskFAQListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取服务台知识库详情。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/faq/patch": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.UpdateHelpdeskFAQ(ctx, \u0026lark.UpdateHelpdeskFAQReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于修改知识库。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/faq/search": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.SearchHelpdeskFAQ(ctx, \u0026lark.SearchHelpdeskFAQReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于搜索服务台知识库。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/ticket-message/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.SendHelpdeskTicketMessage(ctx, \u0026lark.SendHelpdeskTicketMessageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于工单发送消息。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/ticket-message/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.GetHelpdeskTicketMessageList(ctx, \u0026lark.GetHelpdeskTicketMessageListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取服务台工单消息详情。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/ticket/answer_user_query": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.AnswerHelpdeskTicketUserQuery(ctx, \u0026lark.AnswerHelpdeskTicketUserQueryReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于回复用户提问结果至工单，需要工单仍处于进行中且未接入人工状态。仅支持自建应用。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/ticket/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.GetHelpdeskTicket(ctx, \u0026lark.GetHelpdeskTicketReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取单个服务台工单详情。仅支持自建应用。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/ticket/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.GetHelpdeskTicketList(ctx, \u0026lark.GetHelpdeskTicketListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取全部工单详情。仅支持自建应用。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/ticket/start_service": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.StartHelpdeskService(ctx, \u0026lark.StartHelpdeskServiceReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于创建服务台对话。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/ticket/ticket_image": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.DownloadHelpdeskTicketImage(ctx, \u0026lark.DownloadHelpdeskTicketImageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取服务台工单消息图象。仅支持自建应用。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/ticket/update": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.UpdateHelpdeskTicket(ctx, \u0026lark.UpdateHelpdeskTicketReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于更新服务台工单详情。只会更新数据，不会触发相关操作。如修改工单状态到关单，不会关闭聊天页面。仅支持自建应用。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/ticket_customized_field/create-ticket-customized-field": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.CreateHelpdeskTicketCustomizedField(ctx, \u0026lark.CreateHelpdeskTicketCustomizedFieldReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于创建自定义字段\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/ticket_customized_field/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.DeleteHelpdeskTicketCustomizedField(ctx, \u0026lark.DeleteHelpdeskTicketCustomizedFieldReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于删除工单自定义字段。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/ticket_customized_field/get-ticket-customized-field": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.GetHelpdeskTicketCustomizedField(ctx, \u0026lark.GetHelpdeskTicketCustomizedFieldReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取工单自定义字段详情。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/ticket_customized_field/list-ticket-customized-fields": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.GetHelpdeskTicketCustomizedFieldList(ctx, \u0026lark.GetHelpdeskTicketCustomizedFieldListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取全部工单自定义字段。\n\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/helpdesk-v1/ticket_customized_field/update-ticket-customized-field": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Helpdesk.UpdateHelpdeskTicketCustomizedField(ctx, \u0026lark.UpdateHelpdeskTicketCustomizedFieldReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于更新自定义字段。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/admin-v1/admin_dept_stat/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Admin.GetAdminDeptStats(ctx, \u0026lark.GetAdminDeptStatsReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取部门维度的用户活跃和功能使用数据，即IM（即时通讯）、日历、云文档、音视频会议功能的使用数据。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/admin-v1/admin_user_stat/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Admin.GetAdminUserStats(ctx, \u0026lark.GetAdminUserStatsReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "用于获取用户维度的用户活跃和功能使用数据，即IM（即时通讯）、日历、云文档、音视频会议功能的使用数据。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/ai/face_detection-v1/image/detect_face_attributes": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.AI.DetectFaceAttributes(ctx, \u0026lark.DetectFaceAttributesReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "检测图片中的人脸属性和质量等信息"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/ai/optical_char_recognition-v1/image/basic_recognize": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.AI.RecognizeBasicImage(ctx, \u0026lark.RecognizeBasicImageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "可识别图片中的文字，按区域划分返回文本列表"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/ai/speech_to_text-v1/speech/file_recognize": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.AI.RecognizeSpeechFile(ctx, \u0026lark.RecognizeSpeechFileReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "语音文件识别接口，上传整段语音文件进行一次性识别。接口适合 60 秒以内音频识别"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/ai/speech_to_text-v1/speech/stream_recognize": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.AI.RecognizeSpeechStream(ctx, \u0026lark.RecognizeSpeechStreamReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "语音流式接口，将整个音频文件分片进行传入模型。能够实时返回数据。建议每个音频分片的大小为 100-200ms"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/ai/translation-v1/text/detect": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.AI.DetectTextLanguage(ctx, \u0026lark.DetectTextLanguageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "机器翻译 (MT)，支持 100 多种语言识别，返回符合 ISO 693-1 标准"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/ai/translation-v1/text/translate": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.AI.TranslateText(ctx, \u0026lark.TranslateTextReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "机器翻译 (MT)，支持中日英（zh、ja、en）三语互译"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/authen-v1/authen/access_token": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Auth.GetAccessToken(ctx, \u0026lark.GetAccessTokenReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取登录预授权码 code 对应的登录用户身份。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/authen-v1/authen/refresh_access_token": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Auth.RefreshAccessToken(ctx, \u0026lark.RefreshAccessTokenReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "user_access_token 具有一定的时效性，默认最长有效期为7200秒。该接口用于在 user_access_token 过期时用 refresh_token 重新获取 access_token。此时会返回新的 refresh_token，再次刷新 access_token 时需要使用新的 refresh_token。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/authen-v1/authen/user_info": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Auth.GetUserInfo(ctx, \u0026lark.GetUserInfoReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "通过 user_access_token 获取登录用户的信息。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Bitable.CreateBitableField(ctx, \u0026lark.CreateBitableFieldReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于在数据表中新增一个字段"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Bitable.DeleteBitableField(ctx, \u0026lark.DeleteBitableFieldReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于在数据表中删除一个字段"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Bitable.GetBitableFieldList(ctx, \u0026lark.GetBitableFieldListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据 app_token 和 table_id，获取数据表的所有字段"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/update": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Bitable.UpdateBitableField(ctx, \u0026lark.UpdateBitableFieldReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于在数据表中更新一个字段"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/batch_create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Bitable.BatchCreateBitableRecord(ctx, \u0026lark.BatchCreateBitableRecordReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于在数据表中新增多条记录"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/batch_delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Bitable.BatchDeleteBitableRecord(ctx, \u0026lark.BatchDeleteBitableRecordReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于删除数据表中现有的多条记录"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/batch_update": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Bitable.BatchUpdateBitableRecord(ctx, \u0026lark.BatchUpdateBitableRecordReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于更新数据表中的多条记录"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Bitable.CreateBitableRecord(ctx, \u0026lark.CreateBitableRecordReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于在数据表中新增一条记录"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Bitable.DeleteBitableRecord(ctx, \u0026lark.DeleteBitableRecordReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于删除数据表中的一条记录"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Bitable.GetBitableRecord(ctx, \u0026lark.GetBitableRecordReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 record_id 的值检索现有记录"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Bitable.GetBitableRecordList(ctx, \u0026lark.GetBitableRecordListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于列出数据表中的现有记录，单次最多列出 100 行记录，支持分页获取。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/update": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Bitable.UpdateBitableRecord(ctx, \u0026lark.UpdateBitableRecordReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于更新数据表中的一条记录"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-view/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Bitable.CreateBitableView(ctx, \u0026lark.CreateBitableViewReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "在数据表中新增一个视图"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-view/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Bitable.DeleteBitableView(ctx, \u0026lark.DeleteBitableViewReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "删除数据表中的视图"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-view/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Bitable.GetBitableViewList(ctx, \u0026lark.GetBitableViewListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据 app_token 和 table_id，获取数据表的所有视图"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/batch_create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Bitable.BatchCreateBitableTable(ctx, \u0026lark.BatchCreateBitableTableReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "新增多个数据表"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/batch_delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Bitable.BatchDeleteBitableTable(ctx, \u0026lark.BatchDeleteBitableTableReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "删除多个数据表"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Bitable.CreateBitableTable(ctx, \u0026lark.CreateBitableTableReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "新增一个数据表"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Bitable.DeleteBitableTable(ctx, \u0026lark.DeleteBitableTableReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "删除一个数据表"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Bitable.GetBitableTableList(ctx, \u0026lark.GetBitableTableListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据  app_token，获取多维表格下的所有数据表"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Bitable.GetBitableMeta(ctx, \u0026lark.GetBitableMetaReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "通过 app_token 获取多维表格元数据"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-acl/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.CreateCalendarACL(ctx, \u0026lark.CreateCalendarACLReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于以当前身份（应用 / 用户）给日历添加访问控制权限，即日历成员。\n\n身份由 Header Authorization 的 Token 类型决定。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=calendar\u0026version=v4\u0026resource=calendar.acl\u0026method=create)\n\n\n\n\n\n\n\n当前身份需要有日历的 owner 权限，并且日历的类型只能为 primary 或 shared。\n\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-acl/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.DeleteCalendarACL(ctx, \u0026lark.DeleteCalendarACLReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于以当前身份（应用 / 用户）删除日历的控制权限，即日历成员。\n\n身份由 Header Authorization 的 Token 类型决定。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=calendar\u0026version=v4\u0026resource=calendar.acl\u0026method=delete)\n\n\n\n\n\n\n\n当前身份需要有日历的 owner 权限，并且日历的类型只能为 primary 或 shared。\n\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-acl/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.GetCalendarACLList(ctx, \u0026lark.GetCalendarACLListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于以当前身份（应用 / 用户）获取日历的控制权限列表。\n\n身份由 Header Authorization 的 Token 类型决定。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=calendar\u0026version=v4\u0026resource=calendar.acl\u0026method=list)\n\n\n\n\n\n\n\n当前身份需要有日历的 owner 权限，并且日历的类型只能为 primary 或 shared。\n\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-acl/subscription": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.SubscribeCalendarACL(ctx, \u0026lark.SubscribeCalendarACLReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于以用户身份订阅指定日历下的日历成员变更事件。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event-attendee-chat_member/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.GetCalendarEventAttendeeChatMemberList(ctx, \u0026lark.GetCalendarEventAttendeeChatMemberListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取日程的群参与人的群成员列表。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event-attendee/batch_delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.DeleteCalendarEventAttendee(ctx, \u0026lark.DeleteCalendarEventAttendeeReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "批量删除日程的参与人。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event-attendee/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.CreateCalendarEventAttendee(ctx, \u0026lark.CreateCalendarEventAttendeeReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "批量给日程添加参与人。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event-attendee/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.GetCalendarEventAttendeeList(ctx, \u0026lark.GetCalendarEventAttendeeListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取日程的参与人列表，若参与者列表中有群组，请使用 [获取参与人群成员列表](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event-attendee-chat_member/list) 。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.CreateCalendarEvent(ctx, \u0026lark.CreateCalendarEventReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于以当前身份（应用 / 用户）在日历上创建一个日程。\n\n身份由 Header Authorization 的 Token 类型决定。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=calendar\u0026version=v4\u0026resource=calendar.event\u0026method=create)\n\n\n\n\n\n\n\n当前身份必须对日历有 writer 或 owner 权限，并且日历的类型只能为 primary 或 shared。\n\n\n\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.DeleteCalendarEvent(ctx, \u0026lark.DeleteCalendarEventReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于以当前身份（应用 / 用户）删除日历上的一个日程。\n\n身份由 Header Authorization 的 Token 类型决定。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=calendar\u0026version=v4\u0026resource=calendar.event\u0026method=delete)\n\n\n\n\n\n\n\n当前身份必须对日历有 writer 或 owner 权限，并且日历的类型只能为 primary 或 shared。\n\n当前身份必须是日程的组织者。\n\n\n\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.GetCalendarEvent(ctx, \u0026lark.GetCalendarEventReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于以当前身份（应用 / 用户）获取日历上的一个日程。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.GetCalendarEventList(ctx, \u0026lark.GetCalendarEventListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于以当前身份（应用 / 用户）获取日历下的日程列表。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/patch": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.UpdateCalendarEvent(ctx, \u0026lark.UpdateCalendarEventReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于以当前身份（应用 / 用户）更新日历上的一个日程。\n\n身份由 Header Authorization 的 Token 类型决定。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=calendar\u0026version=v4\u0026resource=calendar.event\u0026method=patch)\n\n\n\n\n\n\n\n当前身份必须对日历有 writer 或 owner 权限，并且日历的类型只能为 primary 或 shared。\n\n当前身份为日程组织者时，可修改所有可编辑字段。\n\n当前身份为日程参与者时，仅可编辑部分字段。（如：visibility, free_busy_status, color, reminders）\n\n\n\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/search": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.SearchCalendarEvent(ctx, \u0026lark.SearchCalendarEventReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于以用户身份搜索某日历下的相关日程。\n\n身份由 Header Authorization 的 Token 类型决定。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=calendar\u0026version=v4\u0026resource=calendar.event\u0026method=search)\n\n\n\n\n\n\n\n当前身份必须对日历有访问权限。\n\n\n\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/subscription": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.SubscribeCalendarEvent(ctx, \u0026lark.SubscribeCalendarEventReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于以用户身份订阅指定日历下的日程变更事件。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.CreateCalendar(ctx, \u0026lark.CreateCalendarReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于为当前身份（应用 / 用户）创建一个共享日历。\n\n身份由 Header Authorization 的 Token 类型决定。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=calendar\u0026version=v4\u0026resource=calendar\u0026method=create)\n\n\n\n\n\n\n\n\n\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.DeleteCalendar(ctx, \u0026lark.DeleteCalendarReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于以当前身份（应用 / 用户）删除一个共享日历。\n\n身份由 Header Authorization 的 Token 类型决定。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=calendar\u0026version=v4\u0026resource=calendar\u0026method=delete)\n\n\n\n\n\n\n\n当前身份必须对日历具有 owner 权限。\n\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.GetCalendar(ctx, \u0026lark.GetCalendarReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于以当前身份（应用 / 用户）根据日历 ID 获取日历信息。\n\n身份由 Header Authorization 的 Token 类型决定。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=calendar\u0026version=v4\u0026resource=calendar\u0026method=get)\n\n\n\n\n\n\n\n当前身份必须对日历有访问权限。\n\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.GetCalendarList(ctx, \u0026lark.GetCalendarListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于分页获得当前身份（应用 / 用户）的日历列表。\n\n身份由 Header Authorization 的 Token 类型决定。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=calendar\u0026version=v4\u0026resource=calendar\u0026method=list)\n\n\n\n\n\n\n\n调用时首先使用 page_token 分页拉取存量数据，之后使用 sync_token 增量同步变更数据。\n\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/patch": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.UpdateCalendar(ctx, \u0026lark.UpdateCalendarReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于以当前身份（应用 / 用户）修改日历信息。\n\n身份由 Header Authorization 的 Token 类型决定。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=calendar\u0026version=v4\u0026resource=calendar\u0026method=patch)\n\n\n\n\n\n\n\n当前身份对日历有 owner 权限时，可修改全局字段：summary, description, permission。\n\n当前身份对日历不具有 owner 权限时，仅可修改对自己生效的字段：color, summary_alias。\n\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/search": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.SearchCalendar(ctx, \u0026lark.SearchCalendarReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于通过关键字查询公共日历或用户主日历。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/subscribe": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.SubscribeCalendar(ctx, \u0026lark.SubscribeCalendarReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于以当前身份（应用 / 用户）订阅某个日历。\n\n身份由 Header Authorization 的 Token 类型决定。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=calendar\u0026version=v4\u0026resource=calendar\u0026method=subscribe)\n\n\n\n\n\n\n\n仅可订阅类型为 primary 或 shared 的公开日历。\n\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/subscription": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.SubscribeCalendarChangeEvent(ctx, \u0026lark.SubscribeCalendarChangeEventReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于以用户身份订阅当前身份下日历列表中的所有日历变更。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/unsubscribe": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.UnsubscribeCalendar(ctx, \u0026lark.UnsubscribeCalendarReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于以当前身份（应用 / 用户）取消对某日历的订阅状态。\n\n身份由 Header Authorization 的 Token 类型决定。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=calendar\u0026version=v4\u0026resource=calendar\u0026method=unsubscribe)\n\n\n\n\n\n\n\n仅可操作已经被当前身份订阅的日历。\n\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/freebusy/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.GetCalendarFreeBusyList(ctx, \u0026lark.GetCalendarFreeBusyListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "查询用户主日历或会议室的忙闲信息。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/setting/generate_caldav_conf": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.GenerateCaldavConf(ctx, \u0026lark.GenerateCaldavConfReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "用于为当前用户生成一个CalDAV账号密码，用于将飞书日历信息同步到本地设备日历。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/timeoff_event/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.CreateCalendarTimeoffEvent(ctx, \u0026lark.CreateCalendarTimeoffEventReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "为指定用户创建一个请假日程，可以是一个普通请假日程，也可以是一个全天日程。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/timeoff_event/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Calendar.DeleteCalendarTimeoffEvent(ctx, \u0026lark.DeleteCalendarTimeoffEventReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "删除一个指定的请假日程，请假日程删除，用户个人签名页的请假信息也会消失。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/custom_attr/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.GetContactCustomAttrList(ctx, \u0026lark.GetContactCustomAttrListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取企业自定义的用户字段配置信息"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.CreateDepartment(ctx, \u0026lark.CreateDepartmentReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于向通讯录中创建部门。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.DeleteDepartment(ctx, \u0026lark.DeleteDepartmentReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于向通讯录中删除部门。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.GetDepartment(ctx, \u0026lark.GetDepartmentReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于向通讯录获取单个部门信息。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.GetDepartmentList(ctx, \u0026lark.GetDepartmentListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取当前部门子部门列表。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/parent": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.GetParentDepartment(ctx, \u0026lark.GetParentDepartmentReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用来递归获取部门父部门的信息，并按照由子到父的顺序返回有权限的父部门信息列表。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/patch": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.UpdateDepartmentPatch(ctx, \u0026lark.UpdateDepartmentPatchReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于更新通讯录中部门的信息中的任一个字段。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/search": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.SearchDepartment(ctx, \u0026lark.SearchDepartmentReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "搜索部门，用户通过关键词查询可见的部门数据，部门可见性需要管理员在后台配置"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/update": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.UpdateDepartment(ctx, \u0026lark.UpdateDepartmentReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于更新当前部门所有信息。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.CreateEmployeeTypeEnum(ctx, \u0026lark.CreateEmployeeTypeEnumReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "新增自定义人员类型"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.DeleteEmployeeTypeEnum(ctx, \u0026lark.DeleteEmployeeTypeEnumReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "删除自定义人员枚举"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.GetEmployeeTypeEnumList(ctx, \u0026lark.GetEmployeeTypeEnumListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取员工的人员类型"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/update": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.UpdateEmployeeTypeEnumPatch(ctx, \u0026lark.UpdateEmployeeTypeEnumPatchReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "更新自定义人员类型"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group-member/add": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.AddContactGroupMember(ctx, \u0026lark.AddContactGroupMemberReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "向用户组中添加成员(目前成员仅支持用户，未来会支持部门)，如果应用的通讯录权限范围是“全部员工”，则可将任何成员添加到任何用户组。如果应用的通讯录权限范围不是“全部员工”，则仅可将通讯录权限范围中的成员添加到通讯录权限范围的用户组中，[点击了解通讯录权限范围](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/scope/overview)。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group-member/remove": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.DeleteContactGroupMember(ctx, \u0026lark.DeleteContactGroupMemberReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "从用户组中移除成员 (目前成员仅支持用户，未来会支持部门)，如果应用的通讯录权限范围是“全部员工”，则可将任何成员移出任何用户组。如果应用的通讯录权限范围不是“全部员工”，则仅可将通讯录权限范围中的成员从通讯录权限范围的用户组中移除, [点击了解通讯录权限范围](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/scope/overview)。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group-member/simplelist": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.GetContactGroupMember(ctx, \u0026lark.GetContactGroupMemberReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "通过该接口可查询某个用户组的成员(目前成员仅支持用户，未来会支持部门)列表，如果应用的通讯录权限范围是“全部员工”，则可查询企业内任何用户组的成员列表。如果应用的通讯录权限范围不是“全部员工”，则仅可查询通讯录权限范围中的用户组的成员列表，[点击了解通讯录权限范围](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/scope/overview)。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.CreateContactGroup(ctx, \u0026lark.CreateContactGroupReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "使用该接口创建用户组，请注意创建用户组时应用的通讯录权限范围需为“全部员工”，否则会创建失败，[点击了解通讯录权限范围](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/scope/overview)。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.DeleteContactGroup(ctx, \u0026lark.DeleteContactGroupReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "通过该接口可删除企业中的用户组，请注意删除用户组时应用的通讯录权限范围需为“全部员工”，否则会删除失败，[点击了解通讯录权限范围](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/scope/overview)。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.GetContactGroup(ctx, \u0026lark.GetContactGroupReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据用户组 ID 查询某个用户组的基本信息，请确保应用的通讯录权限范围里包括该用户组或者是“全部员工”，[点击了解通讯录权限范围](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/scope/overview)。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/patch": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.UpdateContactGroup(ctx, \u0026lark.UpdateContactGroupReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "使用该接口更新用户组信息，请注意更新用户组时应用的通讯录权限范围需为“全部员工”，否则会更新失败。[点击了解通讯录权限范围](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/scope/overview)。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/simplelist": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.GetContactGroupList(ctx, \u0026lark.GetContactGroupListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "通过该接口可查询企业的用户组列表，如果应用的通讯录权限范围是“全部员工”，则可获取企业全部用户组列表。如果应用的通讯录权限范围不是“全部员工”，则仅可获取通讯录权限范围内的用户组。[点击了解通讯录权限范围](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/scope/overview)。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.CreateUser(ctx, \u0026lark.CreateUserReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "使用该接口向通讯录创建一个用户，可以理解为员工入职。创建部门后只返回有数据权限的数据。具体的数据权限的与字段的对应关系请参照[应用权限](https://open.feishu.cn/document/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN)。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.DeleteUser(ctx, \u0026lark.DeleteUserReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口向通讯录删除一个用户信息，可以理解为员工离职。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.GetUser(ctx, \u0026lark.GetUserReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取通讯录中单个用户的信息。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.GetUserList(ctx, \u0026lark.GetUserListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "当应用的通讯录权限范围为全员时，传入 department_id，以获取该部门下所有的直属成员。根部门的 department_id 是 0。\n\n当应用的通讯录权限范围为非全员时，传入权限范围内的 department_id，以获取该部门下所有的直属成员。不传 department_id 时，会获取到权限范围内的独立成员。（当权限范围包含了某成员，但不包含成员所在部门，则该成员视为权限范围内的独立成员）{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=contact\u0026version=v3\u0026resource=user\u0026method=list)\n\n\n\n\n\u003cb\u003e以应用身份访问通讯录\u003c/b\u003e 权限为历史版本，不推荐申请。应用访问通讯录相关接口请申请 \u003cb\u003e以应用身份读取通讯录\u003c/b\u003e\n\n\n该接口部分返回字段受到 \u003cb\u003e数据权限控制\u003c/b\u003e ，应用要获取对应字段数据需要额外申请数据权限。具体的数据权限与字段的关系请参考[应用权限](/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN)，或查看每个接口响应体参数列表的字段描述。\n\n\n\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/patch": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.UpdateUserPatch(ctx, \u0026lark.UpdateUserPatchReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于更新通讯录中用户的字段，未传递的参数不会更新。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/update": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.UpdateUser(ctx, \u0026lark.UpdateUserReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于更新通讯录中用户的字段。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.DeleteDriveComment(ctx, \u0026lark.DeleteDriveCommentReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "删除云文档中的某条回复。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment-reply/update": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.UpdateDriveComment(ctx, \u0026lark.UpdateDriveCommentReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "更新云文档中的某条回复。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.CreateDriveComment(ctx, \u0026lark.CreateDriveCommentReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "往云文档添加一条评论。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.GetDriveComment(ctx, \u0026lark.GetDriveCommentReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取云文档中的某条评论。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.GetDriveCommentList(ctx, \u0026lark.GetDriveCommentListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "通过分页方式获取云文档中的全文评论列表。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-comment/patch": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.UpdateDriveCommentPatch(ctx, \u0026lark.UpdateDriveCommentPatchReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "解决或恢复云文档中的评论。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-statistics/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.GetDriveFileStatistics(ctx, \u0026lark.GetDriveFileStatisticsReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "此接口用于获取文件统计信息，包括文档阅读人数、次数和点赞数。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/download": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.DownloadDriveFile(ctx, \u0026lark.DownloadDriveFileReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "使用该接口可以下载在云空间目录下的文件（不含飞书文档/表格/思维导图等在线文档）。支持range下载。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/upload_all": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.UploadDriveFile(ctx, \u0026lark.UploadDriveFileReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "向云空间指定目录下上传一个文件"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/upload_finish": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.FinishUploadDriveFile(ctx, \u0026lark.FinishUploadDriveFileReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "触发完成上传。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/upload_part": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.PartUploadDriveFile(ctx, \u0026lark.PartUploadDriveFileReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "上传对应的文件块。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/upload_prepare": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.PrepareUploadDriveFile(ctx, \u0026lark.PrepareUploadDriveFileReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "发送初始化请求获取上传事务ID和分块策略，目前是以4MB大小进行定长分片。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.CreateDriveImportTask(ctx, \u0026lark.CreateDriveImportTaskReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "创建导入任务。支持导入为 doc、sheet、bitable，参考[导入用户指南](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/import-user-guide)"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.GetDriveImportTask(ctx, \u0026lark.GetDriveImportTaskReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据创建导入任务返回的 ticket 查询导入结果。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/batch_get_tmp_download_url": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.BatchGetDriveMediaTmpDownloadURL(ctx, \u0026lark.BatchGetDriveMediaTmpDownloadURLReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "通过file_token获取素材临时下载链接，链接时效性是24小时，过期失效。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/download": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.DownloadDriveMedia(ctx, \u0026lark.DownloadDriveMediaReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "使用该接口可以下载素材。素材表示在各种创作容器里的文件，如Doc文档内的图片，文件均属于素材。支持range下载。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_all": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.UploadDriveMedia(ctx, \u0026lark.UploadDriveMediaReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "将云文档或其他飞书套件所需要的素材（图片/文件）上传到云空间。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_finish": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.FinishUploadDriveMedia(ctx, \u0026lark.FinishUploadDriveMediaReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "触发完成上传。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_part": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.PartUploadDriveMedia(ctx, \u0026lark.PartUploadDriveMediaReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "上传对应的文件块。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_prepare": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.PrepareUploadDriveMedia(ctx, \u0026lark.PrepareUploadDriveMediaReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "发送初始化请求获取上传事务ID和分块策略，目前是以4MB大小进行定长分片。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-member/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.CreateDriveMemberPermission(ctx, \u0026lark.CreateDriveMemberPermissionReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 filetoken 给用户增加文档的权限。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-member/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.DeleteDriveMemberPermission(ctx, \u0026lark.DeleteDriveMemberPermissionReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 filetoken 移除文档协作者的权限。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-member/update": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.UpdateDriveMemberPermission(ctx, \u0026lark.UpdateDriveMemberPermissionReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 filetoken 更新文档协作者的权限。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-public/patch": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.UpdateDrivePublicPermission(ctx, \u0026lark.UpdateDrivePublicPermissionReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 filetoken 更新文档的公共设置。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/human_authentication-v1/face/facial-image-cropping": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.HumanAuth.CropFaceVerifyImage(ctx, \u0026lark.CropFaceVerifyImageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "无源人脸比对接入需申请白名单，接入前请联系飞书开放平台工作人员，邮箱：openplatform@bytedance.com。\n\n无源人脸比对流程，开发者后台通过调用此接口对基准图片做规范校验及处理。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/human_authentication-v1/face/query-recognition-result": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.HumanAuth.GetFaceVerifyAuthResult(ctx, \u0026lark.GetFaceVerifyAuthResultReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "无源人脸比对接入需申请白名单，接入前请联系飞书开放平台工作人员，邮箱：openplatform@bytedance.com。\n无源人脸比对流程，开发者后台通过调用此接口请求飞书后台，对本次活体比对结果做校验。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/human_authentication-v1/face/upload-facial-reference-image": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.HumanAuth.UploadFaceVerifyImage(ctx, \u0026lark.UploadFaceVerifyImageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "无源人脸比对接入需申请白名单，接入前请联系飞书开放平台工作人员，邮箱：openplatform@bytedance.com。\n无源人脸比对流程，开发者后台通过调用此接口将基准图片上传到飞书后台，做检测时的对比使用。\n\n#"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/human_authentication-v1/identity/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.HumanAuth.CreateIdentity(ctx, \u0026lark.CreateIdentityReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于录入实名认证的身份信息，在唤起有源活体认证前，需要使用该接口进行实名认证。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-announcement/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Chat.GetChatAnnouncement(ctx, \u0026lark.GetChatAnnouncementReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取会话中的群公告信息，公告信息格式与[云文档](https://open.feishu.cn/document/ukTMukTMukTM/uAzM5YjLwMTO24CMzkjN)格式相同。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-announcement/patch": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Chat.UpdateChatAnnouncement(ctx, \u0026lark.UpdateChatAnnouncementReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "更新会话中的群公告信息，更新公告信息的格式和更新[云文档](https://open.feishu.cn/document/ukTMukTMukTM/uAzM5YjLwMTO24CMzkjN)格式相同。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Chat.AddChatMember(ctx, \u0026lark.AddChatMemberReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "将用户或机器人拉入群聊。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Chat.DeleteChatMember(ctx, \u0026lark.DeleteChatMemberReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "将用户或机器人移出群聊。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Chat.GetChatMemberList(ctx, \u0026lark.GetChatMemberListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "如果用户在群中，则返回该群的成员列表。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/is_in_chat": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Chat.IsInChat(ctx, \u0026lark.IsInChatReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据使用的access_token判断对应的用户或者机器人是否在群里。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/me_join": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Chat.JoinChat(ctx, \u0026lark.JoinChatReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "用户或机器人主动加入群聊。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Chat.CreateChat(ctx, \u0026lark.CreateChatReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "创建群并设置群头像、群名、群描述等。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Chat.DeleteChat(ctx, \u0026lark.DeleteChatReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "解散群组"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Chat.GetChat(ctx, \u0026lark.GetChatReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取群名称、群描述、群头像、群主 ID 等群基本信息。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Chat.GetChatListOfSelf(ctx, \u0026lark.GetChatListOfSelfReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取用户或者机器人所在群列表。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/search": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Chat.SearchChat(ctx, \u0026lark.SearchChatReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "搜索对用户或机器人可见的群列表，包括：用户或机器人所在的群、对用户或机器人公开的群。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/update": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Chat.UpdateChat(ctx, \u0026lark.UpdateChatReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "更新群头像、群名称、群描述、群配置、转让群主等。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/file/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.File.UploadFile(ctx, \u0026lark.UploadFileReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "上传文件，可以上传视频，音频和常见的文件类型"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/file/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.File.DownloadFile(ctx, \u0026lark.DownloadFileReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "下载文件接口，只能下载应用自己上传的文件"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.File.UploadImage(ctx, \u0026lark.UploadImageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "上传图片接口，可以上传 JPEG、PNG、WEBP 格式图片"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.File.DownloadImage(ctx, \u0026lark.DownloadImageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "下载图片资源，只能下载应用自己上传且图片类型为message的图片"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-resource/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Message.GetMessageFile(ctx, \u0026lark.GetMessageFileReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取消息中的资源文件，包括音频，视频，图片和文件，**暂不支持表情包资源下载**。当前仅支持 100M 以内的资源文件的下载。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Message.SendRawMessage(ctx, \u0026lark.SendRawMessageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "给指定用户或者会话发送消息，支持文本、富文本、卡片、群名片、个人名片、图片、视频、音频、文件、表情包。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Message.DeleteMessage(ctx, \u0026lark.DeleteMessageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "机器人撤回机器人自己发送的消息或群主撤回群内消息。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Message.GetMessage(ctx, \u0026lark.GetMessageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "通过 message_id 查询消息内容"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Message.GetMessageList(ctx, \u0026lark.GetMessageListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取会话（包括单聊、群组）的历史消息。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/patch": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Message.UpdateMessage(ctx, \u0026lark.UpdateMessageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "更新应用已发送的消息卡片内容。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/read_users": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Message.GetMessageReadUserList(ctx, \u0026lark.GetMessageReadUserListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "查询消息的已读信息。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/reply": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Message.ReplyRawMessage(ctx, \u0026lark.ReplyRawMessageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "回复指定消息，支持文本、富文本、卡片、群名片、个人名片、图片、视频、文件等多种消息类型。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/urgent_app": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Message.SendUrgentAppMessage(ctx, \u0026lark.SendUrgentAppMessageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "对指定消息进行应用内加急。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/urgent_phone": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Message.SendUrgentPhoneMessage(ctx, \u0026lark.SendUrgentPhoneMessageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "对指定消息进行应用内加急与电话加急"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/urgent_sms": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Message.SendUrgentSmsMessage(ctx, \u0026lark.SendUrgentSmsMessageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "对指定消息进行应用内加急与短信加急。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup-member/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.CreateMailGroupMember(ctx, \u0026lark.CreateMailGroupMemberReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "向邮件组添加单个成员"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup-member/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.DeleteMailGroupMember(ctx, \u0026lark.DeleteMailGroupMemberReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "删除邮件组单个成员"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup-member/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.GetMailGroupMember(ctx, \u0026lark.GetMailGroupMemberReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取邮件组单个成员信息"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup-member/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.GetMailGroupMemberList(ctx, \u0026lark.GetMailGroupMemberListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "分页批量获取邮件组成员列表"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup-permission_member/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.CreateMailGroupPermissionMember(ctx, \u0026lark.CreateMailGroupPermissionMemberReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "向邮件组添加单个自定义权限成员，添加后该成员可发送邮件到该邮件组"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup-permission_member/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.DeleteMailGroupPermissionMember(ctx, \u0026lark.DeleteMailGroupPermissionMemberReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "从自定义成员中删除单个成员，删除后该成员无法发送邮件到该邮件组"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup-permission_member/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.GetMailGroupPermissionMember(ctx, \u0026lark.GetMailGroupPermissionMemberReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取邮件组单个权限成员信息"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup-permission_member/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.GetMailGroupPermissionMemberList(ctx, \u0026lark.GetMailGroupPermissionMemberListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "分页批量获取邮件组权限成员列表"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.CreateMailGroup(ctx, \u0026lark.CreateMailGroupReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "创建一个邮件组"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.DeleteMailGroup(ctx, \u0026lark.DeleteMailGroupReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "删除一个邮件组"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.GetMailGroup(ctx, \u0026lark.GetMailGroupReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取特定邮件组信息"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.GetMailGroupList(ctx, \u0026lark.GetMailGroupListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "分页批量获取邮件组"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup/patch": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.UpdateMailGroupPatch(ctx, \u0026lark.UpdateMailGroupPatchReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "更新邮件组部分字段，没有填写的字段不会被更新"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/mailgroup/update": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.UpdateMailGroup(ctx, \u0026lark.UpdateMailGroupReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "更新邮件组所有信息"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/public_mailbox-member/clear": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.ClearPublicMailboxMember(ctx, \u0026lark.ClearPublicMailboxMemberReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "删除公共邮箱所有成员"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/public_mailbox-member/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.CreatePublicMailboxMember(ctx, \u0026lark.CreatePublicMailboxMemberReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "向公共邮箱添加单个成员"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/public_mailbox-member/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.DeletePublicMailboxMember(ctx, \u0026lark.DeletePublicMailboxMemberReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "删除公共邮箱单个成员"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/public_mailbox-member/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.GetPublicMailboxMember(ctx, \u0026lark.GetPublicMailboxMemberReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取公共邮箱单个成员信息"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/public_mailbox-member/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.GetPublicMailboxMemberList(ctx, \u0026lark.GetPublicMailboxMemberListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "分页批量获取公共邮箱成员列表"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/public_mailbox/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.CreatePublicMailbox(ctx, \u0026lark.CreatePublicMailboxReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "创建一个公共邮箱"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/public_mailbox/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.GetPublicMailbox(ctx, \u0026lark.GetPublicMailboxReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取公共邮箱信息"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/public_mailbox/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.GetPublicMailboxList(ctx, \u0026lark.GetPublicMailboxListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "分页批量获取公共邮箱列表"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/public_mailbox/patch": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.UpdatePublicMailboxPatch(ctx, \u0026lark.UpdatePublicMailboxPatchReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "更新公共邮箱部分字段，没有填写的字段不会被更新"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/public_mailbox/update": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Mail.UpdatePublicMailbox(ctx, \u0026lark.UpdatePublicMailboxReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "更新公共邮箱所有信息"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/okr-v1/okr/batch_get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.OKR.BatchGetOKR(ctx, \u0026lark.BatchGetOKRReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据OKR id批量获取OKR"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/okr-v1/period/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.OKR.GetOKRPeriodList(ctx, \u0026lark.GetOKRPeriodListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取OKR周期列表"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/okr-v1/user-okr/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.OKR.GetUserOKRList(ctx, \u0026lark.GetUserOKRListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据用户的id获取OKR列表"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/task-v1/task-collaborator/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Task.CreateTaskCollaborator(ctx, \u0026lark.CreateTaskCollaboratorReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于新增任务协作者"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/task-v1/task-collaborator/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Task.DeleteTaskCollaborator(ctx, \u0026lark.DeleteTaskCollaboratorReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于删除任务协作者"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/task-v1/task-collaborator/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Task.GetTaskCollaboratorList(ctx, \u0026lark.GetTaskCollaboratorListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于查询任务协作者列表，支持分页，最大值为50"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/task-v1/task-comment/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Task.CreateTaskComment(ctx, \u0026lark.CreateTaskCommentReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于创建和回复任务的评论。当parent_id字段为0时，为创建评论；当parent_id不为0时，为回复某条评论"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/task-v1/task-comment/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Task.DeleteTaskComment(ctx, \u0026lark.DeleteTaskCommentReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于通过评论ID删除评论"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/task-v1/task-comment/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Task.GetTaskComment(ctx, \u0026lark.GetTaskCommentReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于通过评论ID获取评论详情"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/task-v1/task-comment/update": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Task.UpdateTaskComment(ctx, \u0026lark.UpdateTaskCommentReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于更新评论内容"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/task-v1/task-follower/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Task.CreateTaskFollower(ctx, \u0026lark.CreateTaskFollowerReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于创建任务关注者"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/task-v1/task-follower/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Task.DeleteTaskFollower(ctx, \u0026lark.DeleteTaskFollowerReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于删除任务关注者"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/task-v1/task-follower/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Task.GetTaskFollowerList(ctx, \u0026lark.GetTaskFollowerListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于查询任务关注者列表，支持分页，最大值为50"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/task-v1/task-reminder/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Task.CreateTaskReminder(ctx, \u0026lark.CreateTaskReminderReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于创建任务的提醒时间"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/task-v1/task-reminder/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Task.DeleteTaskReminder(ctx, \u0026lark.DeleteTaskReminderReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "删除提醒时间，返回结果状态"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/task-v1/task-reminder/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Task.GetTaskReminderList(ctx, \u0026lark.GetTaskReminderListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "返回提醒时间列表，支持分页，最大值为50"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/task-v1/task/complete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Task.CompleteTask(ctx, \u0026lark.CompleteTaskReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于将接任务状态修改为已完成"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/task-v1/task/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Task.CreateTask(ctx, \u0026lark.CreateTaskReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口可以创建一个任务（基本信息），如果需要绑定协作者等需要调用别的资源管理接口。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/task-v1/task/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Task.DeleteTask(ctx, \u0026lark.DeleteTaskReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于删除任务"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/task-v1/task/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Task.GetTask(ctx, \u0026lark.GetTaskReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取任务详情，包括任务标题、描述、时间、来源等信息"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/task-v1/task/patch": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Task.UpdateTask(ctx, \u0026lark.UpdateTaskReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于修改任务的标题、描述、时间、来源等相关信息"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/task-v1/task/uncomplete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Task.UncompleteTask(ctx, \u0026lark.UncompleteTaskReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于取消任务的已完成状态"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting-recording/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.VC.GetVCMeetingRecording(ctx, \u0026lark.GetVCMeetingRecordingReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取一个会议的录制文件。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting-recording/set_permission": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.VC.SetVCPermissionMeetingRecording(ctx, \u0026lark.SetVCPermissionMeetingRecordingReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "将一个会议的录制文件授权给组织、用户或公开到公网"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting-recording/start": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.VC.StartVCMeetingRecording(ctx, \u0026lark.StartVCMeetingRecordingReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "在会议中开始录制。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting-recording/stop": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.VC.StopVCMeetingRecording(ctx, \u0026lark.StopVCMeetingRecordingReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "在会议中停止录制。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/end": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.VC.EndVCMeeting(ctx, \u0026lark.EndVCMeetingReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "结束一个进行中的会议"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.VC.GetVCMeeting(ctx, \u0026lark.GetVCMeetingReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取一个会议的详细数据"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/invite": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.VC.InviteVCMeeting(ctx, \u0026lark.InviteVCMeetingReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "邀请参会人进入会议"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/kickout": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.VC.KickoutVCMeeting(ctx, \u0026lark.KickoutVCMeetingReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "将参会人从会议中移除"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/set_host": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.VC.SetVCHostMeeting(ctx, \u0026lark.SetVCHostMeetingReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "设置会议的主持人"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/report/get_daily": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.VC.GetVCDailyReport(ctx, \u0026lark.GetVCDailyReportReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取一段时间内组织的每日会议使用报告。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/report/get_top_user": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.VC.GetVCTopUserReport(ctx, \u0026lark.GetVCTopUserReportReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取一段时间内组织内会议使用的top用户列表。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve/apply": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.VC.ApplyVCReserve(ctx, \u0026lark.ApplyVCReserveReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "创建一个会议预约。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.VC.DeleteVCReserve(ctx, \u0026lark.DeleteVCReserveReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "删除一个预约"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.VC.GetVCReserve(ctx, \u0026lark.GetVCReserveReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取一个预约的详情"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve/get_active_meeting": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.VC.GetVCReserveActiveMeeting(ctx, \u0026lark.GetVCReserveActiveMeetingReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取一个预约的当前活跃会议"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve/update": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.VC.UpdateVCReserve(ctx, \u0026lark.UpdateVCReserveReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "更新一个预约"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_config/query": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.VC.GetVCRoomConfig(ctx, \u0026lark.GetVCRoomConfigReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "查询一个范围内的会议室配置。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_config/set": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.VC.SetVCRoomConfig(ctx, \u0026lark.SetVCRoomConfigReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "设置一个范围内的会议室配置。"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/search-v2/data_source-item/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Search.CreateSearchDataSourceItem(ctx, \u0026lark.CreateSearchDataSourceItemReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "索引一条数据记录"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/search-v2/data_source-item/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Search.DeleteSearchDataSourceItem(ctx, \u0026lark.DeleteSearchDataSourceItemReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "删除数据记录"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/search-v2/data_source-item/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Search.GetSearchDataSourceItem(ctx, \u0026lark.GetSearchDataSourceItemReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取单个数据记录"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/search-v2/data_source/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Search.CreateSearchDataSource(ctx, \u0026lark.CreateSearchDataSourceReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "创建一个数据源"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/search-v2/data_source/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Search.DeleteSearchDataSource(ctx, \u0026lark.DeleteSearchDataSourceReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "删除一个已存在的数据源"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/search-v2/data_source/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Search.GetSearchDataSource(ctx, \u0026lark.GetSearchDataSourceReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取已经创建的数据源"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/search-v2/data_source/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Search.GetSearchDataSourceList(ctx, \u0026lark.GetSearchDataSourceListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取创建的所有数据源信息"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/search-v2/data_source/patch": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Search.UpdateSearchDataSource(ctx, \u0026lark.UpdateSearchDataSourceReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "更新一个已经存在的数据源"
    },
    "https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/tenant-v2/tenant/query": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Tenant.GetTenant(ctx, \u0026lark.GetTenantReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取企业名称、企业编号等企业信息"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uADNyUjLwQjM14CM0ITN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Approval.GetApproval(ctx, \u0026lark.GetApprovalReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据 Approval Code 获取某个审批定义的详情，用于构造创建审批实例的请求。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uADOyUjLwgjM14CM4ITN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.MeetingRoom.GetMeetingRoomRoomList(ctx, \u0026lark.GetMeetingRoomRoomListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取指定建筑下的会议室。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uADOzYjLwgzM24CM4MjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Approval.CreateApprovalCarbonCopy(ctx, \u0026lark.CreateApprovalCarbonCopyReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "通过接口可以将当前审批实例抄送给其他人。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uATM2UjLwEjN14CMxYTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.DeleteDriveFile(ctx, \u0026lark.DeleteDriveFileReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 docToken 删除对应的 Docs 文档。\n\n:::html\n\n\u003cmd-alert type=\"warn\"\u003e\n\n文档只能被文档所有者删除，文档被删除后将会放到回收站里\n\u003c/md-alert\u003e\n\n:::\n该接口不支持并发调用，且调用频率上限为5QPS\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.DeleteSheetConditionFormat(ctx, \u0026lark.DeleteSheetConditionFormatReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于删除已有的条件格式，单次最多支持删除10个条件格式，每个条件格式的删除会返回成功或者失败，失败的情况包括各种参数的校验。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.GetSheetConditionFormat(ctx, \u0026lark.GetSheetConditionFormatReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据sheetId查询详细的条件格式信息，最多支持同时查询10个sheetId。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-set": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.CreateSheetConditionFormat(ctx, \u0026lark.CreateSheetConditionFormatReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于创建新的条件格式，单次最多支持增加10个条件格式，每个条件格式的设置会返回成功或者失败，失败的情况包括各种参数的校验。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-update": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.UpdateSheetConditionFormat(ctx, \u0026lark.UpdateSheetConditionFormatReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于更新已有的条件格式，单次最多支持更新10个条件格式，每个条件格式的更新会返回成功或者失败，失败的情况包括各种参数的校验。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/delete-datavalidation": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.DeleteSheetDataValidationDropdown(ctx, \u0026lark.DeleteSheetDataValidationDropdownReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口根据 spreadsheetToken 、range 移除选定数据范围单元格的下拉列表设置，但保留选项文本。单个删除范围不超过5000单元格。单次请求range最大数量100个。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/query-datavalidation": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.GetSheetDataValidationDropdown(ctx, \u0026lark.GetSheetDataValidationDropdownReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口根据 spreadsheetToken 、range 查询range内的下拉列表设置信息；单次查询范围不超过5000行，100列。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/set-dropdown": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.CreateSheetDataValidationDropdown(ctx, \u0026lark.CreateSheetDataValidationDropdownReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口根据 spreadsheetToken 、range 和下拉列表属性给单元格设置下拉列表规则；单次设置范围不超过5000行，100列。当一个数据区域中已有数据，支持将有效数据直接转为选项。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/update-datavalidation": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.UpdateSheetDataValidationDropdown(ctx, \u0026lark.UpdateSheetDataValidationDropdownReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口根据 spreadsheetToken 、sheetId、dataValidationId 更新下拉列表的属性。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uATN3UjLwUzN14CM1cTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.GetDriveMemberPermissionList(ctx, \u0026lark.GetDriveMemberPermissionListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 filetoken 查询协作者，目前包括人(\"user\")和群(\"chat\") 。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uATNwUjLwUDM14CM1ATN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Application.CheckUserIsInApplicationPaidScope(ctx, \u0026lark.CheckUserIsInApplicationPaidScopeReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "当付费套餐是按人数收费 或者 限制最大使用人数时，开放平台会引导企业管理员设置“付费功能开通范围”。  但是受开通范围限制，部分用户就无法使用对应的付费功能。  可以通过此接口，在付费功能点入口判断是否允许某个用户进入使用。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uATNwYjLwUDM24CM1AjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.MeetingRoom.CreateMeetingRoomBuilding(ctx, \u0026lark.CreateMeetingRoomBuildingReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口对应管理后台的添加建筑，添加楼层的功能，可用于创建建筑物和建筑物的楼层信息。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uATNzUjLwUzM14CM1MTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.UnmergeSheetCell(ctx, \u0026lark.UnmergeSheetCellReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 spreadsheetToken 和维度信息拆分单元格；单次操作不超过5000行，100列。\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uATO2YjLwkjN24CM5YjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.ImportSheet(ctx, \u0026lark.ImportSheetReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于将本地表格导入到云空间上。\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uAjMxEjLwITMx4CMyETM": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Bot.GetBotInfo(ctx, \u0026lark.GetBotInfoReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取机器人的基本信息。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uAjMzUjLwIzM14CMyMTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.SetSheetValue(ctx, \u0026lark.SetSheetValueReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 spreadsheetToken 和 range 向单个范围写入数据，若范围内有数据，将被更新覆盖；单次写入不超过5000行，100列，每个格子大小为0.5M。\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uAjNzUjLwYzM14CM2MTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.GetDriveFolderMeta(ctx, \u0026lark.GetDriveFolderMetaReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 folderToken 获取该文件夹的元信息。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uAzMzUjLwMzM14CMzMTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.BatchSetSheetStyle(ctx, \u0026lark.BatchSetSheetStyleReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 spreadsheetToken 、range和样式信息 批量更新单元格样式；单次写入不超过5000行，100列。\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uEDNyUjLxQjM14SM0ITN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Approval.GetApprovalInstance(ctx, \u0026lark.GetApprovalInstanceReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "通过审批实例 Instance Code  获取审批实例详情。Instance Code 由 [批量获取审批实例](/ssl:ttdoc/ukTMukTMukTM/uQDOyUjL0gjM14CN4ITN) 接口获取。\n\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uEDOyUjLxgjM14SM4ITN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.MeetingRoom.BatchGetMeetingRoomRoom(ctx, \u0026lark.BatchGetMeetingRoomRoomReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取指定会议室的详细信息。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uETMzUjLxEzM14SMxMTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.GetSheetMeta(ctx, \u0026lark.GetSheetMetaReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 spreadsheetToken 获取表格元数据。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uETN0YjLxUDN24SM1QjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Application.GetApplicationUsageOverview(ctx, \u0026lark.GetApplicationUsageOverviewReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "查询应用在指定时间段内企业员工的使用概览信息。\n:::warning\n此接口目前仅支持小程序的使用情况查询，不支持网页应用和机器人应用的使用情况查询；\n仅支持查询自建应用，不支持查询商店应用\n:::\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uETNwUjLxUDM14SM1ATN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Application.GetApplicationOrderList(ctx, \u0026lark.GetApplicationOrderListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于分页查询应用租户下的已付费订单，每次购买对应一个唯一的订单，订单会记录购买的套餐的相关信息，业务方需要自行处理套餐的有效期和付费方案的升级。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uETNwYjLxUDM24SM1AjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.MeetingRoom.UpdateMeetingRoomBuilding(ctx, \u0026lark.UpdateMeetingRoomBuildingReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于编辑建筑信息，添加楼层，删除楼层，编辑楼层信息。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uETOyYjLxkjM24SM5IjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Message.SendEphemeralMessage(ctx, \u0026lark.SendEphemeralMessageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "用于机器人在群会话中发送指定用户可见的消息卡片。\u003cbr\u003e\n\n## 使用场景\n临时消息卡片多用于群聊中用户与机器人交互的中间态。例如在群聊中用户需要使用待办事项类bot创建一条提醒，bot 发送了可设置提醒日期和提醒内容的一张可交互的消息卡片，此卡片在没有设置为临时卡片的情况下为群内全员可见，即群内可看见该用户与 bot 交互的过程。而设置为临时卡片后，交互过程仅该用户可见，群内其他成员只会看到最终设置完成的提醒卡片。\u003cbr\u003e临时消息卡片可降低群消息的信噪比，并间接增加 bot 通知的用户触达。\n\n需要启用机器人能力；需要机器人在会话群里。\n\n\n-  仅触发临时卡片的用户自己可见。\n- 不支持转发。\n- 只能在群聊使用。\n- 仅在用户处于在线状态的飞书客户端上可见。\n- 临时消息卡片的[呈现能力](/ssl:ttdoc/ukTMukTMukTM/ugTNwUjL4UDM14CO1ATN)、[交互能力](/ssl:ttdoc/ukTMukTMukTM/uYjNwUjL2YDM14iN2ATN)与消息卡片一致。\n\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uEjMzUjLxIzM14SMyMTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.BatchSetSheetValue(ctx, \u0026lark.BatchSetSheetValueReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 spreadsheetToken 和 range 向多个范围写入数据，若范围内有数据，将被更新覆盖；单次写入不超过5000行，100列，每个格子大小为0.5M。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uEjNzUjLxYzM14SM2MTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.GetDriveFolderChildren(ctx, \u0026lark.GetDriveFolderChildrenReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 folderToken 获取该文件夹的文档清单，如 doc、sheet、folder。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uIDNyUjLyQjM14iM0ITN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Approval.CreateApprovalInstance(ctx, \u0026lark.CreateApprovalInstanceReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "创建一个审批实例，调用方需对审批定义的表单有详细了解，将按照定义的表单结构，将表单 Value 通过接口传入。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uIDOyUjLygjM14iM4ITN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.MeetingRoom.BatchGetMeetingRoomFreebusy(ctx, \u0026lark.BatchGetMeetingRoomFreebusyReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取指定会议室的忙闲日程实例列表。非重复日程只有唯一实例；重复日程可能存在多个实例，依据重复规则和时间范围扩展。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uITM3YjLyEzN24iMxcjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.GetDrivePublicPermissionV2(ctx, \u0026lark.GetDrivePublicPermissionV2Req{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 filetoken 获取文档的公共设置。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uITN0YjLyUDN24iM1QjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Application.GetApplicationUsageTrend(ctx, \u0026lark.GetApplicationUsageTrendReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "查询应用在指定时间段内企业员工的使用趋势信息。\n:::warning\n此接口目前仅支持小程序的使用情况查询，不支持网页应用和机器人应用的使用情况查询;仅支持查询自建应用，不支持查询商店应用\n:::\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uITN1EjLyUTNx4iM1UTM": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Application.IsApplicationUserAdmin(ctx, \u0026lark.IsApplicationUserAdminReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于查询用户是否为应用管理员。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uITN5UjLyUTO14iM1kTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.UpdateDrivePublicPermissionV2Old(ctx, \u0026lark.UpdateDrivePublicPermissionV2OldReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 filetoken 更新文档的公共设置。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uITNwUjLyUDM14iM1ATN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Application.GetApplicationOrder(ctx, \u0026lark.GetApplicationOrderReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于查询某个订单的具体信息\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uITNwYjLyUDM24iM1AjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.MeetingRoom.CreateMeetingRoomRoom(ctx, \u0026lark.CreateMeetingRoomRoomReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于创建会议室。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uITOyYjLykjM24iM5IjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Message.DeleteEphemeralMessage(ctx, \u0026lark.DeleteEphemeralMessageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "在群会话中删除指定用户的临时消息卡片\u003cbr\u003e\n临时卡片消息可以通过该接口进行显式删除，临时卡片消息删除后将不会在该设备上留下任何痕迹。\n**权限说明** ：需要启用机器人能力；需要机器人在会话群里\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uIjM3UjLyIzN14iMycTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Application.GetApplicationAppVisibility(ctx, \u0026lark.GetApplicationAppVisibilityReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于查询应用在该企业内可以被使用的范围，只能被企业自建应用调用。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uIjM5UjLyITO14iMykTN/": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.MeetingRoom.BatchGetMeetingRoomSummary(ctx, \u0026lark.BatchGetMeetingRoomSummaryReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "通过日程的Uid和Original time，查询会议室日程主题。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uIjMzUjLyIzM14iMyMTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.PrependSheetValue(ctx, \u0026lark.PrependSheetValueReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 spreadsheetToken 和 range 向范围之前增加相应数据的行和相应的数据，相当于数组的插入操作；单次写入不超过5000行，100列，每个格子大小为0.5M。\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uIzNz4iM3MjLyczM": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.BatchGetUser(ctx, \u0026lark.BatchGetUserReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "为了更好地提升该接口的安全性，我们对其进行了升级，请尽快迁移至[新版本\u003e\u003e](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/list)\n\n\n该接口用于批量获取用户详细信息。\n\n\n- 调用该接口需要申请“以应用身份读取通讯录”以及[用户数据权限](/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN)。请求的用户如果在当前应用的通讯录授权范围内，会返回该用户的详细信息；否则不会返回。\n\n\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMDNyUjLzQjM14yM0ITN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Approval.ApproveApprovalInstance(ctx, \u0026lark.ApproveApprovalInstanceReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "对于单个审批任务进行同意操作。同意后审批流程会流转到下一个审批人。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMTM4UjLzEDO14yMxgTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.SearchUserOld(ctx, \u0026lark.SearchUserOldReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "以用户身份搜索其他用户的信息，无法搜索到外部企业或已离职的用户。\u003cbr\u003e\n调用该接口需要申请 `搜索用户` 权限。\n\n\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMTN0YjLzUDN24yM1QjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Application.GetApplicationUsageDetail(ctx, \u0026lark.GetApplicationUsageDetailReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": ""
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMTNwYjLzUDM24yM1AjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.MeetingRoom.UpdateMeetingRoomRoom(ctx, \u0026lark.UpdateMeetingRoomRoomReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于更新会议室。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMTO5QjLzkTO04yM5kDN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Chat.GetChatOld(ctx, \u0026lark.GetChatOldReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": ":::html\n\n\u003cmd-alert type=\"error\"\u003e\n\n为了更好地提升该接口的安全性，我们对其进行了升级，请尽快迁移至[新版本\u003e\u003e](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/get)\n\n\u003c/md-alert\u003e\n\n:::\n获取群名称、群主 ID、成员列表 ID 等群基本信息。  \n\n- 需要启用机器人能力；机器人必须在群里\n\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMjM3UjLzIzN14yMycTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Application.GetApplicationUserVisibleApp(ctx, \u0026lark.GetApplicationUserVisibleAppReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于查询用户可用的应用列表，只能被企业自建应用调用。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMjMzUjLzIzM14yMyMTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.AppendSheetValue(ctx, \u0026lark.AppendSheetValueReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 spreadsheetToken 和 range 遇到空行则进行覆盖追加或新增行追加数据。 空行：默认该行第一个格子是空，则认为是空行；单次写入不超过5000行，100列，每个格子大小为0.5M。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMjN3UjLzYzN14yM2cTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.GetDriveFileMeta(ctx, \u0026lark.GetDriveFileMetaReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 token 获取各类文件的元数据。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/application-interview/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Hire.GetHireApplicationInterviewList(ctx, \u0026lark.GetHireApplicationInterviewListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据投递 ID 获取面试记录列表"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/application/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Hire.CreateHireApplication(ctx, \u0026lark.CreateHireApplicationReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据人才 ID 和职位 ID 创建投递"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/application/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Hire.GetHireApplication(ctx, \u0026lark.GetHireApplicationReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据投递 ID 获取单个投递信息"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/application/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Hire.GetHireApplicationList(ctx, \u0026lark.GetHireApplicationListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据限定条件获取投递列表信息"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/application/offer": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Hire.GetHireOfferByApplication(ctx, \u0026lark.GetHireOfferByApplicationReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据投递 ID 获取 Offer 信息"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/application/terminate": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Hire.TerminateHireApplication(ctx, \u0026lark.TerminateHireApplicationReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据投递 ID 修改投递状态为「已终止」"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/application/transfer_onboard": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Hire.MakeHireTransferOnboardByApplication(ctx, \u0026lark.MakeHireTransferOnboardByApplicationReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据投递 ID 操作候选人入职并创建员工，投递须处于「待入职」阶段"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/attachment/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Hire.GetHireAttachment(ctx, \u0026lark.GetHireAttachmentReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取招聘系统中附件的元信息，比如文件名、创建时间、文件url等"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/attachment/preview": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Hire.GetHireAttachmentPreview(ctx, \u0026lark.GetHireAttachmentPreviewReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据附件 ID 获取附件预览信息"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/employee/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Hire.GetHireEmployee(ctx, \u0026lark.GetHireEmployeeReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "通过员工 ID 获取入职信息"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/employee/get_by_application": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Hire.GetHireEmployeeByApplication(ctx, \u0026lark.GetHireEmployeeByApplicationReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "通过投递 ID 获取入职信息"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/employee/patch": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Hire.UpdateHireEmployee(ctx, \u0026lark.UpdateHireEmployeeReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据员工 ID 更新员工转正、离职状态"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/job-manager/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Hire.GetHireJobManager(ctx, \u0026lark.GetHireJobManagerReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据职位 ID 获取职位上的招聘人员信息，如招聘负责人、用人经理"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/job/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Hire.GetHireJob(ctx, \u0026lark.GetHireJobReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据职位 ID 获取职位信息"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/job_process/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Hire.GetHireJobProcessList(ctx, \u0026lark.GetHireJobProcessListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取全部招聘流程信息"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/note/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Hire.CreateHireNote(ctx, \u0026lark.CreateHireNoteReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "创建备注信息"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/note/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Hire.GetHireNote(ctx, \u0026lark.GetHireNoteReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据备注 ID 获取备注信息"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/note/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Hire.GetHireNoteList(ctx, \u0026lark.GetHireNoteListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取备注列表"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/note/patch": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Hire.UpdateHireNote(ctx, \u0026lark.UpdateHireNoteReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据备注 ID 更新备注信息"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/offer_schema/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Hire.GetHireOfferSchema(ctx, \u0026lark.GetHireOfferSchemaReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据 Offer 申请表 ID，获取 Offer 申请表的详细信息"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/referral/get_by_application": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Hire.GetHireReferralByApplication(ctx, \u0026lark.GetHireReferralByApplicationReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据投递 ID 获取内推信息"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/resume_source/list": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Hire.GetHireResumeSource(ctx, \u0026lark.GetHireResumeSourceReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取简历来源列表"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/talent/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Hire.GetHireTalent(ctx, \u0026lark.GetHireTalentReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据人才 ID 获取人才信息"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzMxYjLzMTM24yMzEjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.MeetingRoom.DeleteMeetingRoomBuilding(ctx, \u0026lark.DeleteMeetingRoomBuildingReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于删除建筑物（办公大楼）。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzN3QjLzczN04yM3cDN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Application.GetApplicationUserAdminScope(ctx, \u0026lark.GetApplicationUserAdminScopeReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取应用管理员的管理范围，即该应用管理员能够管理哪些部门。  \n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uMzNzUjLzczM14yM3MTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.CreateDriveMemberPermissionOld(ctx, \u0026lark.CreateDriveMemberPermissionOldReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 filetoken 给用户增加文档的权限。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uQDNyUjL0QjM14CN0ITN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Approval.RejectApprovalInstance(ctx, \u0026lark.RejectApprovalInstanceReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "对于单个审批任务进行拒绝操作。拒绝后审批流程结束。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uQDOyUjL0gjM14CN4ITN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Approval.GetApprovalInstanceList(ctx, \u0026lark.GetApprovalInstanceListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据 approval_code 批量获取审批实例的 instance_code，用于拉取租户下某个审批定义的全部审批实例。\n默认以审批创建时间排序。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uQTM5YjL0ETO24CNxkjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.GetSheetProtectedDimension(ctx, \u0026lark.GetSheetProtectedDimensionReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据保护范围ID查询详细的保护行列信息，最多支持同时查询5个ID。\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uQTN0YjL0UDN24CN1QjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Application.GetApplicationMessageOverview(ctx, \u0026lark.GetApplicationMessageOverviewReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": ""
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uQTNwYjL0UDM24CN1AjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.MeetingRoom.GetMeetingRoomCountryList(ctx, \u0026lark.GetMeetingRoomCountryListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "新建建筑时需要标明所处国家/地区，该接口用于获得系统预先提供的可供选择的国家 /地区列表。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uQTNzUjL0UzM14CN1MTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.CreateDriveFile(ctx, \u0026lark.CreateDriveFileReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 folderToken 创建 Doc、 Sheet 或 Bitable 。\n\n若没有特定的文件夹用于承载创建的文档，可以先调用「获取文件夹元信息」文档中的「获取 root folder (我的空间) meta」接口，获得我的空间的 token，然后再使用此接口。创建的文档将会在「我的空间」的「归我所有」列表里。\n\n\n该接口不支持并发创建，且调用频率上限为 5QPS 且 10000次/天\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uQjMxYjL0ITM24CNyEjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Approval.SearchApprovalInstance(ctx, \u0026lark.SearchApprovalInstanceReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口通过不同条件查询审批系统中符合条件的审批实例列表。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uQjMzUjL0IzM14CNyMTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.InsertSheetDimensionRange(ctx, \u0026lark.InsertSheetDimensionRangeReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 spreadsheetToken 和维度信息 插入空行/列。  \n如 startIndex=3， endIndex=7，则从第 4 行开始开始插入行列，一直到第 7 行，共插入 4 行；单次操作不超过5000行或列。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uQzMxYjL0MTM24CNzEjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.MeetingRoom.BatchGetMeetingRoomBuildingID(ctx, \u0026lark.BatchGetMeetingRoomBuildingIDReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据租户自定义建筑 ID 查询建筑 ID。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uQzNzUjL0czM14CN3MTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.TransferDriveMemberPermission(ctx, \u0026lark.TransferDriveMemberPermissionReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据文档信息和用户信息转移文档的所有者。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDM2YjL1AjN24SNwYjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.GetDriveDocContent(ctx, \u0026lark.GetDriveDocContentReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "在使用此接口前，请仔细阅读[概述](/ssl:ttdoc/ukTMukTMukTM/ukjM5YjL5ITO24SOykjN)和[准备接入文档 API](/ssl:ttdoc/ukTMukTMukTM/ugzNzUjL4czM14CO3MTN/guide/getting-start)了解文档调用的规则和约束，确保你的文档数据不会丢失或出错。  \n文档数据结构定义可参考：[文档数据结构概述](/ssl:ttdoc/ukTMukTMukTM/uAzM5YjLwMTO24CMzkjN) \n该接口用于获取结构化的文档内容。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.CreateSheetFilter(ctx, \u0026lark.CreateSheetFilterReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "参数值可参考[筛选指南](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter/filter-user-guide)"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.DeleteSheetFilter(ctx, \u0026lark.DeleteSheetFilterReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "删除子表的筛选"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.GetSheetFilter(ctx, \u0026lark.GetSheetFilterReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取子表的详细筛选信息"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter/update": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.UpdateSheetFilter(ctx, \u0026lark.UpdateSheetFilterReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "参数值可参考[筛选指南](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter/filter-user-guide)"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.CreateSheetFilterViewCondition(ctx, \u0026lark.CreateSheetFilterViewConditionReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "筛选条件参考 [筛选视图的筛选条件指南](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/filter-view-condition-user-guide)"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.DeleteSheetFilterViewCondition(ctx, \u0026lark.DeleteSheetFilterViewConditionReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "删除筛选视图的筛选范围某一列的筛选条件。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.GetSheetFilterViewCondition(ctx, \u0026lark.GetSheetFilterViewConditionReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "筛选条件含义参考 [筛选视图的筛选条件指南](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/filter-view-condition-user-guide)"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/query": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.QuerySheetFilterViewCondition(ctx, \u0026lark.QuerySheetFilterViewConditionReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "筛选条件含义可参考 [筛选视图的筛选条件指南](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/filter-view-condition-user-guide)"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/update": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.UpdateSheetFilterViewCondition(ctx, \u0026lark.UpdateSheetFilterViewConditionReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "筛选条件参数可参考 [筛选视图的筛选条件指南](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/filter-view-condition-user-guide)"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.CreateSheetFilterView(ctx, \u0026lark.CreateSheetFilterViewReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "筛选范围的设置参考：[筛选视图的筛选条件指南](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/filter-view-condition-user-guide)"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.DeleteSheetFilterView(ctx, \u0026lark.DeleteSheetFilterViewReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "删除指定 id 对应的筛选视图。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.GetSheetFilterView(ctx, \u0026lark.GetSheetFilterViewReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "获取指定筛选视图 id 的名字和筛选范围。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view/patch": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.UpdateSheetFilterView(ctx, \u0026lark.UpdateSheetFilterViewReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "筛选范围的设置参考：[筛选视图的筛选条件指南](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/filter-view-condition-user-guide)"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view/query": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.QuerySheetFilterView(ctx, \u0026lark.QuerySheetFilterViewReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "查询子表内所有的筛选视图基本信息，包括 id、name 和 range"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.CreateSheetFloatImage(ctx, \u0026lark.CreateSheetFloatImageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "浮动图片的设置参考：[浮动图片指南](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/float-image-user-guide)"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/delete": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.DeleteSheetFloatImage(ctx, \u0026lark.DeleteSheetFloatImageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "删除 float_image_id 对应的浮动图片。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/get": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.GetSheetFloatImage(ctx, \u0026lark.GetSheetFloatImageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "浮动图片参考：[浮动图片指南](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/float-image-user-guide)"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/patch": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.UpdateSheetFloatImage(ctx, \u0026lark.UpdateSheetFloatImageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "浮动图片更新参考：[浮动图片指南](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/float-image-user-guide)"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/query": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.QuerySheetFloatImage(ctx, \u0026lark.QuerySheetFloatImageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "浮动图片参考：[浮动图片指南](https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/float-image-user-guide)"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/find": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.FindSheet(ctx, \u0026lark.FindSheetReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "按照指定的条件查找子表的某个范围内的数据符合条件的单元格位置。请求体中的 range 和 find 字段为必填。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/move_dimension": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.MoveSheetDimension(ctx, \u0026lark.MoveSheetDimensionReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于移动行列，行列被移动到目标位置后，原本在目标位置的行列会对应右移或下移。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/replace": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.ReplaceSheet(ctx, \u0026lark.ReplaceSheetReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "按照指定的条件查找子表的某个范围内的数据符合条件的单元格并替换值，返回替换成功的单元格位置。一次请求最多允许替换5000个单元格，如果超过请将range缩小范围再操作。请求体中的 range、find、replaccement 字段必填。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet/create": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.CreateSheet(ctx, \u0026lark.CreateSheetReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "使用该接口可以在指定的目录下创建在线表格。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDNxYjL1QTM24SN0EjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.SetSheetValueImage(ctx, \u0026lark.SetSheetValueImageReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 spreadsheetToken 和 range 向单个格子写入图片。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDNyUjL1QjM14SN0ITN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Approval.TransferApprovalInstance(ctx, \u0026lark.TransferApprovalInstanceReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "对于单个审批任务进行转交操作。转交后审批流程流转给被转交人。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUDOyUjL1gjM14SN4ITN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Approval.UploadApprovalFile(ctx, \u0026lark.UploadApprovalFileReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "当审批表单中有图片或附件控件时，开发者需在创建审批实例前通过审批上传文件接口将文件上传到审批系统。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUTM5YjL1ETO24SNxkjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.UpdateSheetProtectedDimension(ctx, \u0026lark.UpdateSheetProtectedDimensionReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据保护范围ID修改保护范围，单次最多支持同时修改10个ID。\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUTN0YjL1UDN24SN1QjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Application.GetApplicationMessageTrend(ctx, \u0026lark.GetApplicationMessageTrendReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": ""
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUTNwYjL1UDM24SN1AjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.MeetingRoom.GetMeetingRoomDistrictList(ctx, \u0026lark.GetMeetingRoomDistrictListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "新建建筑时需要选择所处国家/地区，该接口用于获得系统预先提供的可供选择的城市列表。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUTNzUjL1UzM14SN1MTN/delete-sheet": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.DeleteDriveSheetFile(ctx, \u0026lark.DeleteDriveSheetFileReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 spreadsheetToken 删除对应的 sheet 文档。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUjMxYjL1ITM24SNyEjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Approval.SearchApprovalCarbonCopy(ctx, \u0026lark.SearchApprovalCarbonCopyReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口通过不同条件查询审批系统中符合条件的审批抄送列表。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUjMzUjL1IzM14SNyMTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.AddSheetDimensionRange(ctx, \u0026lark.AddSheetDimensionRangeReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 spreadsheetToken 和长度，在末尾增加空行/列；单次操作不超过5000行或列。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUjNz4SN2MjL1YzM": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Message.SendRawMessageOld(ctx, \u0026lark.SendRawMessageOldReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": ""
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUzMxYjL1MTM24SNzEjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.MeetingRoom.DeleteMeetingRoomRoom(ctx, \u0026lark.DeleteMeetingRoomRoomReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于删除会议室。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uUzMyUjL1MjM14SNzITN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Contact.BatchGetUserByID(ctx, \u0026lark.BatchGetUserByIDReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "根据用户邮箱或手机号查询用户 open_id 和 user_id，支持批量查询。\u003cbr\u003e\n调用该接口需要申请 `通过手机号或邮箱获取用户 ID` 权限。\u003cbr\u003e只能查询到应用可用性范围内的用户 ID，不在范围内的用户会表现为不存在。\n\n\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uYDN3UjL2QzN14iN0cTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Application.GetApplicationAppList(ctx, \u0026lark.GetApplicationAppListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于查询企业安装的应用列表，只能被企业自建应用调用。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uYDNyUjL2QjM14iN0ITN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Approval.CancelApprovalInstance(ctx, \u0026lark.CancelApprovalInstanceReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "对于单个审批实例进行撤销操作，撤销后审批流程结束。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uYDO04iN4QjL2gDN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Bot.AddBotToChat(ctx, \u0026lark.AddBotToChatReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "拉机器人进群\u003cbr\u003e\n\n**权限说明** ：需要启用机器人能力；机器人的owner需要已经在群里"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uYTM5YjL2ETO24iNxkjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.DeleteSheetProtectedDimension(ctx, \u0026lark.DeleteSheetProtectedDimensionReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据保护范围ID删除保护范围，最多支持同时删除10个ID。\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uYTMzUjL2EzM14iNxMTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.BatchUpdateSheet(ctx, \u0026lark.BatchUpdateSheetReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 spreadsheetToken 操作表格，如增加工作表，复制工作表、删除工作表。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uYTN0YjL2UDN24iN1QjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Application.GetApplicationMessageDetail(ctx, \u0026lark.GetApplicationMessageDetailReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": ""
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uYTN3UjL2UzN14iN1cTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.DeleteDriveMemberPermissionOld(ctx, \u0026lark.DeleteDriveMemberPermissionOldReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 filetoken 移除文档协作者的权限。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uYTNzUjL2UzM14iN1MTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.CopyDriveFile(ctx, \u0026lark.CopyDriveFileReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据文件 token 复制 Doc 或 Sheet  到目标文件夹中。\n若没有特定的文件夹用于承载创建的文档，可以先调用「获取文件夹元信息」文档中的「获取 root folder (我的空间) meta」接口，获得我的空间的 token，然后再使用此接口。复制的文档将会在「我的空间」的「归我所有」列表里。\n\n\n该接口不支持并发创建，且调用频率上限为 5QPS 且 10000次/天\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uYjMxYjL2ITM24iNyEjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Approval.SearchApprovalTask(ctx, \u0026lark.SearchApprovalTaskReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口通过不同条件查询审批系统中符合条件的审批任务列表\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uYjMzUjL2IzM14iNyMTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.UpdateSheetDimensionRange(ctx, \u0026lark.UpdateSheetDimensionRangeReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 spreadsheetToken 和维度信息更新隐藏行列、单元格大小；单次操作不超过5000行或列。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uYzMxYjL2MTM24iNzEjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.MeetingRoom.BatchGetMeetingRoomRoomID(ctx, \u0026lark.BatchGetMeetingRoomRoomIDReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据租户自定义会议室ID查询会议室ID。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uYzN3UjL2czN14iN3cTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.CheckDriveMemberPermission(ctx, \u0026lark.CheckDriveMemberPermissionReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 filetoken 判断当前登录用户是否具有某权限。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uYzN4UjL2cDO14iN3gTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.MeetingRoom.ReplyMeetingRoomInstance(ctx, \u0026lark.ReplyMeetingRoomInstanceReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于回复会议室日程实例，包括未签到释放和提前结束释放。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/ucDN3UjL3QzN14yN0cTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Application.UpdateApplicationAppVisibility(ctx, \u0026lark.UpdateApplicationAppVisibilityReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于增加或者删除指定应用被哪些人可用，只能被企业自建应用调用。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/ucDOwYjL3gDM24yN4AjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Application.GetApplicationAppAdminUserList(ctx, \u0026lark.GetApplicationAppAdminUserListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "查询应用管理员列表，返回应用的最新10个管理员账户id列表。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/ucTMzUjL3EzM14yNxMTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.UpdateSheetProperty(ctx, \u0026lark.UpdateSheetPropertyReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 spreadsheetToken 更新表格属性，如更新表格标题。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/ucTN3UjL3UzN14yN1cTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.UpdateDriveMemberPermissionOld(ctx, \u0026lark.UpdateDriveMemberPermissionOldReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 filetoken 更新文档协作者的权限。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/ucjMzUjL3IzM14yNyMTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.DeleteSheetDimensionRange(ctx, \u0026lark.DeleteSheetDimensionRangeReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 spreadsheetToken 和维度信息删除行/列 。单次删除最大5000行/列。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/uczN3UjL3czN14yN3cTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.GetDriveDocMeta(ctx, \u0026lark.GetDriveDocMetaReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 docToken 获取元数据。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/ugDM2YjL4AjN24COwYjN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.CreateDriveDoc(ctx, \u0026lark.CreateDriveDocReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "在使用此接口前，请仔细阅读[概述](/ssl:ttdoc/ukTMukTMukTM/ukjM5YjL5ITO24SOykjN)和[准备接入文档 API](/ssl:ttdoc/ukTMukTMukTM/ugzNzUjL4czM14CO3MTN/guide/getting-start)了解文档调用的规则和约束，确保你的文档数据不会丢失或出错。  \n文档数据结构定义可参考：[文档数据结构概述](/ssl:ttdoc/ukTMukTMukTM/uAzM5YjLwMTO24CMzkjN) \n\n该接口用于创建并初始化文档。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/ugDM4UjL4ADO14COwgTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.SearchDriveFile(ctx, \u0026lark.SearchDriveFileReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据搜索条件进行文档搜索。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/ugDNzUjL4QzM14CO0MTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.CreateSheetProtectedDimension(ctx, \u0026lark.CreateSheetProtectedDimensionReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 spreadsheetToken 和维度信息增加多个保护范围；单次操作不超过5000行或列。\n\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/ugTMzUjL4EzM14COxMTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.GetSheetValue(ctx, \u0026lark.GetSheetValueReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 spreadsheetToken 和 range 读取表格单个范围的值，返回数据限制为10M。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/get-root-folder-meta": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.GetDriveRootFolderMeta(ctx, \u0026lark.GetDriveRootFolderMetaReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取 \"我的空间\" 的元信息\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/ugzNyUjL4cjM14CO3ITN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.MeetingRoom.GetMeetingRoomBuildingList(ctx, \u0026lark.GetMeetingRoomBuildingListReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取本企业下的建筑物（办公大楼）。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/app_ticket_resend": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Auth.ResendAppTicket(ctx, \u0026lark.ResendAppTicketReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "飞书每隔 1 小时会给应用推送一次最新的 app_ticket，应用也可以主动调用此接口，触发飞书进行及时的重新推送。（该接口并不能直接获取app_ticket，而是触发事件推送）"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/ukDNzUjL5QzM14SO0MTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.MergeSheetCell(ctx, \u0026lark.MergeSheetCellReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 spreadsheetToken 和维度信息合并单元格；单次操作不超过5000行，100列。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/ukTM3UjL5EzN14SOxcTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.UpdateDrivePublicPermissionV1Old(ctx, \u0026lark.UpdateDrivePublicPermissionV1OldReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 filetoken 更新文档的公共设置。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/ukTM5UjL5ETO14SOxkTN/approval-preview": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Approval.PreviewApprovalInstance(ctx, \u0026lark.PreviewApprovalInstanceReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "提交审批前，预览审批流程。或者发起审批后，在某一审批节点预览后续流程\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/ukTM5UjL5ETO14SOxkTN/approval-task-addsign": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Approval.AddApprovalInstanceSign(ctx, \u0026lark.AddApprovalInstanceSignReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "对于单个审批任务进行加签操作。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/ukTMzUjL5EzM14SOxMTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.BatchGetSheetValue(ctx, \u0026lark.BatchGetSheetValueReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 spreadsheetToken 和 ranges 读取表格多个范围的值，返回数据限制为10M。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/ukTNzUjL5UzM14SO1MTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.CreateDriveFolder(ctx, \u0026lark.CreateDriveFolderReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 folderToken 在该 folder 下创建文件夹。\n\n该接口不支持并发创建，且调用频率上限为 5QPS 以及 10000次/天\n\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/ukjMzUjL5IzM14SOyMTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.SetSheetStyle(ctx, \u0026lark.SetSheetStyleReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于根据 spreadsheetToken 、range 和样式信息更新单元格样式；单次写入不超过5000行，100列。\n\n#"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/ukzNyUjL5cjM14SO3ITN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.MeetingRoom.BatchGetMeetingRoomBuilding(ctx, \u0026lark.BatchGetMeetingRoomBuildingReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取指定建筑物的详细信息。"
    },
    "https://open.feishu.cn/document/ukTMukTMukTM/ukzNzUjL5czM14SO3MTN": {
        "code": "package example\n\nimport (\n\t\"context\"\n\t\"fmt\"\n\n\t\"github.com/chyroc/lark\"\n)\n\nfunc example(ctx context.Context, cli *lark.Lark) {\n\tres, response, err := cli.Drive.GetDriveDocRawContent(ctx, \u0026lark.GetDriveDocRawContentReq{\n\t\t...\n\t})\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(\"req-id:\", response.RequestID)\n\tfmt.Println(\"res:\", res)\n}\n",
        "desc": "该接口用于获取文档的纯文本内容，不包含富文本格式信息。\n\n#"
    }
}

function copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

function callback(url) {
    console.log('url', url)
    const apiMeta = meta[url]
    var copyButton = document.getElementById('go');

    if (apiMeta) {
        document.getElementById('info').innerHTML = '已支持本方法'
        document.getElementById('desc').innerHTML = apiMeta['desc']

        copyButton.addEventListener('click', function () {
            copyToClipboard(apiMeta['code'])
        }, false);
    }
    // copyToClipboard(url);
}

chrome.tabs.query({currentWindow: true, active: true},
    function (foundTabs) {
        if (foundTabs.length > 0) {
            callback(foundTabs[0].url)
        }
    }
);
