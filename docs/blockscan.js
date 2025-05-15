let classifier;
let video;
let modelReady = false;
let confidence = 0;
let isScanning = false;
let classestest = ['109', '2', '21', '22', '4', '42', '48', '57', '64', '69', '73'];
let classes = ['1', '10', '100', '1000', '1002', '1004', '1005', '1007', '1009', '101', '1010', '1011', '1014', '1017', '1018', '102', '1027', '103', '1036', '1037', '1040', '1041', '1044', '1047', '1050', '1052', '1054', '1060', '1061', '1064', '1066', '107', '1071', '1073', '1074', '1075', '1076', '108', '1084', '1086', '1088', '109', '1093', '1094', '1095', '1097', '1098', '11', '110', '1100', '1101', '1102', '1105', '1106', '1107', '1109', '111', '1110', '1111', '1112', '1114', '1116', '1118', '112', '1122', '1123', '1124', '1126', '1127', '113', '1132', '1133', '1135', '1137', '1138', '114', '1140', '1142', '1143', '1144', '1145', '1146', '1148', '1150', '1153', '1157', '1158', '1159', '116', '1160', '1161', '1162', '1163', '1165', '1166', '1168', '1169', '117', '1170', '1172', '1175', '1179', '118', '1180', '1185', '1188', '119', '1192', '1194', '1196', '1197', '1198', '1199', '12', '120', '1200', '1201', '1204', '1205', '121', '1212', '1216', '1219', '1220', '1222', '1223', '1224', '1225', '1226', '1227', '1228', '1229', '123', '1230', '1231', '1232', '1233', '1234', '1235', '1236', '1237', '1238', '1239', '124', '1240', '1241', '1242', '1243', '1244', '1245', '1246', '1247', '1248', '1253', '1256', '1260', '1262', '1263', '1265', '1266', '1267', '1268', '1269', '1271', '1273', '1275', '1278', '1279', '1280', '1281', '1282', '1284', '1285', '1287', '1289', '1290', '1291', '1292', '1296', '1297', '13', '133', '1331', '1333', '1334', '1335', '1336', '1337', '1338', '1339', '1340', '1341', '1342', '1343', '1344', '1345', '1348', '1349', '135', '1351', '1352', '1353', '1354', '1355', '1359', '136', '1360', '1361', '1363', '1365', '1366', '1367', '1368', '137', '1372', '1374', '1376', '1377', '1379', '138', '1385', '1386', '139', '1395', '1396', '1397', '14', '1400', '1401', '1403', '1404', '1407', '141', '1410', '1411', '1414', '1415', '1417', '142', '1424', '1425', '1426', '1427', '1428', '143', '1430', '1431', '1432', '1433', '1437', '1443', '1446', '1452', '1454', '1456', '146', '1461', '1465', '1469', '1479', '1481', '15', '1507', '152', '1538', '1545', '159', '1595', '1598', '16', '160', '1600', '1601', '1609', '161', '1610', '1613', '1615', '1622', '1623', '1625', '1626', '1627', '165', '1652', '167', '168', '17', '1708', '1710', '1730', '1739', '1742', '175', '1765', '1766', '1767', '1768', '1769', '177', '1770', '1771', '1772', '1773', '1774', '1775', '1776', '1777', '1778', '1779', '1780', '1781', '1782', '1783', '1784', '1785', '1787', '1788', '1789', '179', '1790', '1794', '1798', '1799', '180', '1802', '1805', '1807', '181', '1810', '1811', '1815', '1817', '182', '1826', '1832', '1833', '1835', '1840', '1843', '1846', '1848', '1849', '1854', '1855', '1856', '1858', '186', '1861', '1862', '1864', '1865', '1866', '1867', '1868', '1869', '187', '1870', '1874', '1876', '1879', '188', '1880', '1881', '1882', '1883', '1885', '1888', '189', '19', '192', '194', '1948', '1949', '195', '1959', '196', '1977', '2', '2005', '2011', '2021.1 5746', '2021.1 5762', '2022.1.3', '2022.1.4b', '2022.1.6b', '206', '2065', '2066', '2068', '2069', '207', '2089', '2094', '2099', '21', '210', '2100', '2101', '2104', '2106', '2107', '2112', '2113', '2116', '2118', '2119', '212', '2121', '2129', '213', '2130', '2131', '2133', '2137', '2139', '2143', '2145', '2146', '215', '2151', '2155', '216', '2162', '2164', '2165', '2167', '2168', '217', '2170', '2171', '2173', '2178', '218', '2182', '2187', '219', '2191', '2193', '2199', '22', '2202', '2204', '221', '2216', '2223', '2224', '2229', '223', '224', '2241', '2242', '2243', '2244', '2245', '2247', '2248', '2249', '225', '2250', '2251', '2254', '2256', '2257', '2258', '2259', '226', '2260', '2261', '2262', '2263', '2264', '2265', '2266', '2267', '2268', '2269', '227', '2270', '2271', '2272', '2273', '2276', '2277', '2278', '228', '2280', '2281', '2282', '2283', '2284', '2285', '2286', '2287', '2289', '229', '2292', '2293', '2298', '23', '2309', '2312', '2314', '2315', '232', '2332', '2334', '2336', '2338', '2339', '2340', '2341', '2346', '2347', '2348', '2349', '235', '2350', '2351', '2352', '2353', '2355', '2356', '2363', '2378', '2388', '239', '2390', '2392', '2393', '2394', '2395', '24', '240', '2400', '2401', '2404', '2411', '2415', '242', '243', '2436', '2438', '2440', '2442', '2443', '2449', '245', '2450', '246', '2496', '25', '2505', '2508', '2512', '2513', '2514', '2515', '2516', '2521', '2524', '254', '2542', '2544', '2546', '2549', '2555', '2556', '2559', '256', '2561', '2563', '2564', '2566', '2569', '257', '2571', '2574', '2575', '2576', '2577', '2578', '2579', '258', '2580', '2583', '2584', '2585', '2589', '2590', '2592', '2593', '2599', '26', '2601', '2604', '2605', '261', '2611', '2612', '2613', '2616', '2617', '2618', '2619', '262', '2620', '2621', '2624', '2626', '2628', '2629', '263', '2630', '2631', '2633', '2634', '2638', '2642', '2644', '2649', '2652', '2657', '2665', '2669', '267', '2672', '2674', '2675', '2676', '2678', '268', '2680', '2685', '2686', '2688', '2689', '269', '2693', '2694', '2696', '2698', '27', '270', '2701', '2706', '2708', '271', '2712', '2714', '2716', '2718', '2719', '272', '2720', '2721', '2723', '2724', '2727', '2728', '2729', '273', '2730', '2731', '2732', '2733', '2734', '2736', '2737', '2738', '2739', '2743', '2745', '2746', '2749', '2750', '2751', '2754', '2756', '276', '2761', '2762', '2763', '2764', '2765', '2768', '2769', '277', '2772', '2788', '2790', '2791', '2795', '2796', '2797', '2799', '28', '2801', '2802', '2803', '2804', '2805', '2806', '2808', '2809', '2810', '2811', '2813', '2816', '2817', '2818', '2819', '2820', '2822', '2824', '2825', '2826', '2828', '2829', '283', '2831', '2832', '2833', '2836', '2837', '2838', '2839', '284', '2841', '2843', '2846', '2847', '2848', '2849', '2850', '2851', '2867', '287', '2887', '2888', '2890', '2891', '2892', '2894', '2895', '2896', '2898', '2899', '29', '2902', '2903', '2905', '2906', '2907', '2908', '2912', '2915', '2916', '2918', '2919', '292', '2920', '2922', '2925', '2926', '294', '295', '2951', '2957', '297', '298', '2986', '2987', '299', '2995', '3', '300', '302', '3021', '303', '304', '3043', '3044', '3045', '3046', '3047', '3048', '3049', '305', '3050', '3051', '3052', '3053', '3054', '3056', '3058', '3059', '306', '3060', '3061', '3063', '3064', '3065', '3066', '3067', '3069', '307', '3070', '3071', '3073', '3074', '3076', '3077', '3078', '308', '3080', '3081', '3082', '3083', '3084', '3085', '3086', '3087', '3088', '3089', '309', '3091', '3092', '3093', '3094', '3096', '3097', '3098', '3099', '31', '3100', '3101', '3102', '3103', '3104', '3105', '3106', '3107', '311', '3110', '3111', '3112', '3115', '3116', '3117', '3118', '3119', '312', '3120', '3123', '3124', '3125', '3126', '3127', '3128', '3129', '3130', '3132', '3133', '3134', '3137', '3138', '3139', '314', '3140', '3141', '3142', '3143', '3144', '3147', '3148', '3149', '315', '3150', '3151', '3152', '3154', '3155', '3156', '3157', '3158', '316', '3160', '3161', '3162', '3163', '3164', '3165', '3166', '3168', '317', '3171', '3172', '3173', '3174', '3176', '3178', '3179', '318', '3181', '3182', '3183', '3184', '3185', '3186', '3187', '3188', '3189', '319', '3190', '3191', '3192', '3193', '3196', '3198', '32', '320', '3200', '3201', '3203', '3205', '3206', '3208', '3209', '321', '3210', '3211', '3213', '3214', '3215', '3216', '3217', '3218', '3219', '322', '3221', '3223', '3224', '3225', '3226', '3227', '3228', '3229', '323', '3232', '3233', '3234', '3235', '3236', '3237', '3238', '324', '3240', '3241', '3242', '3245', '3246', '3247', '3248', '3249', '325', '3250', '3252', '3253', '3254', '3255', '3256', '3257', '326', '3260', '3264', '3265', '3269', '327', '328', '3281', '329', '3290', '33', '3315', '3364', '3382', '3384', '3388', '3392', '3393', '3395', '3396', '3398', '3399', '34', '3400', '3401', '3402', '3405', '3406', '3407', '3409', '3411', '3416', '3417', '3418', '3419', '342', '3420', '3422', '3424', '3425', '3428', '3429', '3431', '3432', '3433', '3434', '3435', '3436', '3437', '3438', '3439', '3440', '3441', '3442', '3443', '3445', '3446', '3448', '3449', '3450', '3452', '3453', '3454', '3455', '3456', '3459', '346', '3460', '3461', '3464', '3465', '3466', '3467', '3468', '3469', '347', '3470', '3471', '3472', '3474', '3475', '3476', '3477', '3478', '3498', '35', '3504', '3506', '3507', '351', '3513', '3514', '3515', '3516', '3518', '3519', '352', '3520', '3530', '3531', '3538', '3555', '3556', '3557', '3566', '3568', '357', '3570', '3573', '3574', '3575', '3576', '3577', '3578', '3579', '358', '3580', '3581', '3582', '359', '3590', '3593', '3595', '3598', '36', '360', '3603', '3604', '3605', '3607', '3609', '3612', '3613', '3617', '3618', '3619', '3621', '3622', '3623', '3624', '3625', '3626', '3629', '363', '3630', '3631', '3632', '3634', '3635', '3636', '3637', '3638', '3639', '3641', '3642', '3643', '3645', '3647', '3649', '365', '3650', '3654', '3659', '3661', '3664', '3665', '3666', '3668', '3671', '3674', '3675', '3676', '3677', '3680', '3681', '3682', '3684', '3685', '3686', '3688', '369', '3691', '3692', '3693', '3694', '3698', '3699', '37', '3701', '3702', '3703', '3704', '3705', '3706', '3710', '3712', '3714', '3715', '3716', '3718', '3719', '3720', '3721', '3722', '3723', '3724', '3725', '3726', '3727', '3728', '3730', '3731', '3733', '3734', '3735', '3736', '3737', '3738', '3740', '3743', '3744', '3745', '3746', '3748', '3749', '375', '3750', '3752', '3754', '3755', '3757', '3758', '376', '3760', '3761', '3763', '3765', '3767', '3769', '3776', '3779', '3780', '3784', '3787', '3790', '3791', '3792', '3794', '3795', '3798', '3799', '38', '380', '3800', '3802', '3804', '3805', '3806', '3807', '3808', '3810', '3813', '3814', '3815', '3816', '3820', '3821', '3823', '3824', '3825', '3826', '3827', '3828', '3829', '3834', '3839', '384', '3840', '3841', '3844', '3849', '3852', '3857', '3860', '3865', '3871', '3874', '3883', '3885', '3886', '3887', '3888', '3890', '3894', '3895', '3896', '3897', '39', '390', '3902', '3905', '3906', '3907', '3909', '391', '3910', '3912', '3914', '3921', '3926', '3928', '3929', '3931', '3932', '3933', '3935', '3936', '3937', '3938', '394', '3940', '3941', '3943', '3945', '3947', '3949', '395', '3950', '3953', '3955', '3956', '3957', '3962', '3963', '3964', '3965', '3967', '3971', '3972', '3973', '3982', '3983', '3984', '3985', '3986', '3987', '3988', '399', '3992', '3999', '4', '40', '4002', '401', '4010', '4011', '4013', '4014', '4015', '4016', '4018', '4019', '4020', '4024', '4025', '4026', '4027', '403', '4032', '4033', '4034', '4035', '4036', '4037', '4039', '4041', '4042', '4045', '4046', '4048', '4049', '4050', '4054', '4056', '4057', '4058', '4061', '4062', '4064', '4067', '4071', '4072', '4073', '4074', '4075', '4077', '408', '4080', '4081', '4082', '4083', '4084', '4086', '4089', '409', '4092', '4093', '4095', '4096', '4097', '4098', '41', '410', '4100', '4102', '4103', '4106', '4107', '4108', '411', '4110', '4111', '4116', '4118', '4120', '4121', '4122', '4125', '4127', '4128', '413', '4133', '4134', '4135', '4136', '4138', '414', '4141', '4144', '4146', '4147', '4149', '415', '4150', '4153', '4155', '4156', '4157', '416', '4161', '4162', '4164', '4165', '4167', '4168', '4169', '417', '4170', '4171', '4172', '4174', '4175', '4177', '418', '4180', '4181', '4182', '4188', '4189', '419', '4191', '4192', '4193', '4195', '4198', '4199', '42', '420', '4201', '4203', '4207', '4208', '4209', '421', '4211', '4213', '4214', '4217', '4218', '4220', '4222', '4224', '4228', '4229', '423', '4232', '4233', '4234', '4235', '4236', '4237', '4238', '424', '4240', '4241', '4244', '4245', '4247', '4249', '4253', '4254', '4256', '4257', '4258', '4259', '4260', '4261', '4263', '4264', '4265', '4266', '4267', '4272', '4274', '4277', '4281', '4282', '4288', '429', '4290', '4292', '4296', '4299', '4300', '4301', '4303', '4304', '4306', '4307', '4308', '431', '4311', '4313', '4314', '4315', '4316', '4317', '4318', '4327', '4328', '433', '4331', '4332', '4333', '4339', '4340', '4346', '4347', '4348', '4349', '435', '4350', '4351', '4354', '4356', '4357', '4360', '4361', '4362', '4363', '4366', '437', '4371', '4372', '4373', '4374', '4375', '4376', '4377', '4378', '4379', '438', '4380', '4381', '4382', '4383', '4384', '4385', '4386', '4387', '4388', '439', '4391', '4393', '44', '4400', '4405', '4408', '4409', '4410', '4411', '4415', '4417', '4421', '4422', '4423', '4426', '4427', '4430', '4432', '4434', '4437', '4439', '4441', '4443', '4444', '4445', '4450', '4454', '4479', '4484', '45', '452', '4525', '4530', '4531', '4532', '4533', '4534', '4536', '4538', '4539', '4541', '4542', '4544', '4546', '4547', '4549', '455', '4550', '4551', '4553', '4554', '4557', '4558', '4559', '4560', '4561', '4562', '4564', '4565', '4566', '457', '4576', '4585', '459', '46', '4603', '4608', '461', '4626', '4627', '4629', '4630', '4632', '4635', '4636', '4637', '4639', '464', '4645', '4646', '4648', '4649', '4650', '4652', '4653', '4654', '4656', '4657', '4658', '4659', '466', '4660', '4663', '4665', '4666', '4667', '4669', '467', '4670', '4671', '4672', '4673', '4674', '4675', '4677', '4679', '4680', '4681', '4683', '4685', '4687', '4692', '4697', '4698', '4699', '4700', '4702', '4703', '4704', '4705', '4706', '4709', '471', '4710', '4712', '4713', '4714', '4715', '4716', '4718', '4719', '472', '4720', '4723', '4724', '4725', '4727', '4731', '4733', '4735', '4736', '4737', '4739', '474', '4740', '4741', '4742', '4744', '4745', '4746', '4747', '475', '4750', '4751', '4752', '4753', '4754', '4755', '4756', '4757', '4758', '4759', '476', '4760', '4762', '4763', '4765', '4766', '4767', '4769', '477', '4771', '4772', '4775', '4777', '478', '4780', '4781', '4783', '4784', '4785', '4787', '4788', '4790', '4791', '4792', '4793', '4794', '4795', '4797', '48', '4800', '4802', '4803', '4804', '481', '4816', '4818', '4822', '4829', '483', '4837', '4838', '4839', '4841', '4842', '4843', '4845', '4846', '4847', '4848', '4850', '4851', '4852', '4853', '4855', '4856', '4857', '4859', '4860', '4862', '4864', '4865', '4866', '4867', '4868', '4869', '487', '4870', '4871', '4872', '4873', '4875', '4876', '4877', '4878', '488', '4884', '489', '4894', '4895', '4898', '49', '490', '4900', '4903', '4905', '4909', '491', '4910', '4911', '4912', '492', '4923', '4924', '4925', '4929', '493', '4931', '4933', '4934', '4935', '4936', '4938', '4940', '4941', '4943', '4945', '4948', '495', '4951', '4953', '4962', '4964', '4966', '4968', '4969', '497', '4971', '4975', '4976', '4978', '4980', '4982', '4984', '4988', '499', '4991', '4992', '4994', '4995', '4996', '4997', '4998', '4999', '5', '500', '5000', '5001', '5002', '5005', '5007', '5008', '5009', '501', '5015', '5016', '5017', '5018', '5019', '5020', '5021', '5022', '5023', '5024', '5025', '5026', '5029', '503', '5030', '5031', '5032', '5033', '5034', '5035', '5037', '5038', '5039', '504', '5040', '5041', '5042', '5045', '5046', '5047', '5048', '5051', '5056', '5059', '5060', '5061', '5062', '5064', '5067', '5068', '5069', '5070', '5075', '5076', '5077', '5078', '5080', '5081', '5082', '5084', '5085', '5086', '5087', '5090', '5092', '5093', '5095', '5097', '5098', '5101', '5105', '5106', '5107', '5108', '5109', '5110', '5111', '5112', '5114', '5115', '5116', '5118', '5120', '5121', '5123', '5126', '513', '5133', '5140', '5145', '5147', '5150', '5151', '5153', '5154', '5155', '5159', '5163', '5165', '5169', '5170', '5171', '5174', '5177', '5179', '5197', '52', '5200', '5203', '5204', '521', '5214', '5215', '5216', '5217', '5218', '5220', '5221', '5222', '5223', '5225', '5229', '5238', '5240', '5241', '5242', '5243', '5244', '5245', '5246', '5247', '525', '5252', '5253', '526', '5267', '527', '5270', '5271', '5273', '5274', '5278', '5280', '5281', '5282', '5283', '5284', '5289', '5294', '5298', '5299', '53', '534', '5340', '5347', '5348', '5349', '5353', '5354', '5356', '5359', '536', '5361', '5363', '5366', '5370', '5371', '5373', '5375', '5377', '5378', '5379', '5380', '5381', '5382', '5383', '5384', '5385', '5386', '5387', '5388', '5389', '5390', '5392', '540', '5400', '5401', '5403', '5406', '5407', '5408', '5409', '5410', '5411', '5412', '5414', '5416', '5418', '5423', '5431', '5437', '5438', '544', '5440', '5442', '5444', '5445', '5446', '5447', '5449', '5450', '5451', '5452', '5453', '5458', '5459', '5460', '5465', '5467', '5468', '547', '5470', '5479', '548', '5480', '5483', '5484', '5485', '5492', '5499', '550', '5507', '551', '5526', '5527', '5529', '553', '5530', '5531', '5532', '5535', '5536', '554', '5541', '5548', '5553', '5554', '5556', '5557', '5558', '556', '5569', '557', '5577', '558', '5580', '5581', '5601', '561', '5616', '5617', '5618', '562', '5620', '5621', '5623', '5624', '5625', '5627', '5628', '5629', '563', '5630', '5631', '5632', '5633', '5634', '5636', '5637', '5639', '564', '5640', '5641', '5642', '5643', '5644', '5646', '565', '5651', '5658', '566', '5660', '5670', '5676', '5677', '5678', '568', '5683', '5686', '5687', '5689', '5690', '5691', '5694', '5695', '5697', '5698', '5699', '57', '570', '5700', '5701', '5702', '5703', '5704', '5705', '5706', '5709', '571', '5710', '5711', '5712', '5714', '5715', '5716', '5717', '5720', '5721', '5722', '5723', '5724', '5725', '5726', '5727', '5729', '5730', '5732', '5737', '5739', '574', '5740', '5741', '5742', '5743', '5744', '5745', '5747', '5748', '5749', '5750', '5751', '5752', '5753', '5754', '5755', '5756', '5757', '5763', '5764', '5765', '5766', '5767', '5768', '5769', '5770', '5771', '5772', '5773', '5774', '5775', '5777', '5778', '5779', '5781', '5782', '5783', '5785', '5786', '58', '580', '582', '583', '585', '586', '59', '590', '592', '595', '597', '598', '6', '60', '600', '605', '607', '616', '617', '62', '623', '63', '632', '635', '636', '64', '640', '641', '647', '65', '650', '66', '662', '67', '68', '69', '694', '7', '70', '702', '703', '707', '709', '71', '710', '711', '712', '713', '714', '72', '720', '721', '722', '725', '728', '729', '73', '730', '733', '734', '738', '739', '741', '745', '746', '747', '75', '750', '754', '755', '757', '759', '763', '767', '77', '770', '773', '781', '784', '785', '786', '787', '788', '79', '795', '798', '8', '801', '802', '806', '807', '81', '82', '823', '828', '829', '83', '839', '840', '844', '845', '848', '849', '850', '851', '86', '862', '863', '865', '868', '87', '873', '874', '876', '88', '887', '889', '89', '895', '899', '900', '902', '906', '920', '921', '93', '930', '933', '935', '942', '944', '945', '946', '950', '951', '956', '959', '96', '961', '963', '965', '97', '972', '974', '975', '980', '981', '983', '984', '985', '986', '989', '99', '998', '999'] ;
let i;
let img;
let brkpt;
let header;
let confidencePara;
let classData = [];
let card;
let pred_buckets = new Array(classes.length).fill(0);
var popupWindow = document.getElementById("popup-window");
var closeButton = document.getElementById("close-button");
var wrongButton = document.getElementById("wrong-button");
var progressBar = document.getElementById('progress-button');

popupWindow.style.display = 'none';

function startScanning() {
    isScanning = true;
    scanButton.style.backgroundColor = '#272594'; 
    scanButton.textContent = 'SCANNING...';
    runScanLoop();
}

function stopScanning() {
    isScanning = false;
    pred_buckets.fill(0); // reset the prediction buckets
    scanButton.style.backgroundColor = '#413efc'; 
    scanButton.textContent = 'HOLD TO SCAN';
    const progressBar = document.getElementById('progress-button');
    percentage = 0;
    progressBar.setAttribute('aria-valuenow', percentage);
    progressBar.style.width = percentage + "%";

}

function runScanLoop() {
    if (isScanning) {
        classifyFrame().then(() => {
            requestAnimationFrame(runScanLoop);
        });
    }
}

const scanButton = document.getElementById('scan-button');
scanButton.style.display = 'none';

const loadingUI = document.createElement('div');
loadingUI.style.textAlign = 'center';
loadingUI.style.padding = '20px';
loadingUI.style.position = 'fixed';
loadingUI.style.top = '50%';
loadingUI.style.left = '50%';
loadingUI.style.transform = 'translate(-50%, -50%)';
loadingUI.style.backgroundColor = 'white';
loadingUI.style.zIndex = '9999';
loadingUI.style.width = '90%';
loadingUI.style.maxWidth = '500px';
loadingUI.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
loadingUI.style.borderRadius = '10px';

const loadingText = document.createElement('div');
loadingText.textContent = 'Loading data, this may take a few seconds...';
loadingText.style.fontSize = '50px';
loadingText.style.marginBottom = '20px';
loadingText.style.color = '#000';
loadingText.style.fontWeight = 'bold';

const spinner = document.createElement('div');
spinner.className = 'spinner-border text-primary';
spinner.style.width = '7rem';
spinner.style.height = '7rem';
spinner.style.marginBottom = '20px';

const orientationText = document.createElement('div');
orientationText.textContent = 'Remember to hold your phone vertically when scanning.';
orientationText.style.fontSize = '40px';
orientationText.style.color = '#666';

loadingUI.appendChild(loadingText);
loadingUI.appendChild(spinner);
loadingUI.appendChild(orientationText);
document.body.appendChild(loadingUI);

// Desktop
scanButton.addEventListener('mousedown', startScanning);
scanButton.addEventListener('mouseup', stopScanning);
scanButton.addEventListener('mouseleave', stopScanning);

// mobile
scanButton.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startScanning();
});
scanButton.addEventListener('touchend', (e) => {
    e.preventDefault();
    stopScanning();
});
scanButton.addEventListener('touchcancel', stopScanning);


let model;

async function loadModel2() {
    const modelUrl = 'https://raw.githubusercontent.com/BlockScanning/Block-Scan/refs/heads/main/docs/allpanels3_mobilenet/model.json';
    console.log("modelURL:", modelUrl);
    try {
        console.log("Loading model from:", modelUrl);
        model = await tf.loadLayersModel(modelUrl);
        console.log("Model Loaded");
        modelReady = true;


        const warmupTensor = tf.zeros([1, 224, 224, 3]);
        model.predict(warmupTensor).dispose(); // run and dispose immediately
        warmupTensor.dispose();

        console.log("Model warmed up");
    } catch (error) {
        console.error("Error loading model:", error);
    }
}

function preprocessVideoFrame(video) {
    return tf.tidy(() => {
        let tensor = tf.browser.fromPixels(video)
            .resizeNearestNeighbor([224, 224]) // match MobileNet input size
            .toFloat()
            .expandDims();
        return tensor;
    });
}

async function classifyFrame() {
    if (modelReady && video && video.elt.readyState === 4) {

        const inputTensor = preprocessVideoFrame(video.elt);
        const prediction = await model.predict(inputTensor).data();
        
        inputTensor.dispose();

        // instead of making independent predictions repeatedly until confidence for one independent frame is high enough, each call to classifyFrame will 
        // add element wise to the previous prediction, and once one element is high enough, it will show the popup window
        pred_buckets = pred_buckets.map((bucket, index) => bucket + prediction[index]);
        
        // sort buckets
        sorted_buckets = pred_buckets.map((bucket, index) => ({ bucket, index }))      
        .sort((a, b) => b.bucket - a.bucket)                   

        // check the value of largest bucket
        // if it is greater than 50, show the popup window and stop scanning
        max_bucket = sorted_buckets[0].bucket;
        percentage = Math.round(max_bucket / 15 * 100); // convert to percentage
        progressBar.setAttribute('aria-valuenow', percentage);
        progressBar.style.width = percentage + "%";


        if (max_bucket > 15) {

            //hide buttons and video
            scanButton.style.display = "none";
            progressBar.style.display = "none";
            video.elt.style.display = "none";


            j = sorted_buckets[0].index
            console.log("j: ", j);
            console.log("Max bucket: ", max_bucket);
            pred = classes[j];
            confidence = prediction[j];
            popupWindow.style.display = "block";

            video.pause();
            card = document.getElementById("img-card");
            card.style.display = "block";
            card.innerHTML = ''; // Clear old content
            populatePopup(pred, card);
                
            // sslice through pred_buckets and find the top 10 classes and their confidences (changed to top 20)
            top10 = sorted_buckets.slice(0, 15);    
            console.log("Pred buckets: ", pred_buckets);
            console.log("Top 10 predictions: ", top10);
            pred_buckets.fill(0);
            return;
                
            }
    }

    await sleep(10);
    return;
}

// Load CSV data
async function loadCSVData() {
    const response = await fetch('https://raw.githubusercontent.com/sarah12121212/Stamp-Scan/refs/heads/main/docs/class_data.csv');
    const csvText = await response.text();

    const parsed = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
    });

    classData = parsed.data;
}

async function setup() {

    const p5Main = document.querySelector('main');
    if (p5Main) {
        p5Main.remove();
    }

    try {
        await Promise.all([
            loadModel2(),
            loadCSVData()
        ]);
        
        // Remove loading UI and show scan button once everything is loaded
        loadingUI.remove();
        scanButton.style.display = 'block';
        
        const videoContainer = document.getElementById('video-container');
        const constraints = {
            video: {
                facingMode: "environment"
            },
            audio: false
        };

        video = createCapture(constraints);
        video.elt.muted = true;
        video.parent(videoContainer);
        video.elt.style.objectFit = "cover";
        video.elt.style.width = "100%";
        video.elt.style.height = "100%";

    } catch (error) {
        console.error('Error during setup:', error);
        loadingText.textContent = 'Error loading resources. Please refresh the page.';
        spinner.style.display = 'none';
    }
}

// Hide the pop-up window when the close button is clicked
closeButton.addEventListener("click", function() {
    Array.from(popupWindow.children).forEach(child => {
        if (child !== closeButton && child !== wrongButton && child !== card) {
            popupWindow.removeChild(child);
        }
    });


    popupWindow.style.display = "none";
    video.play();
    scanButton.style.display = "block";
    progressBar.style.display = "block";
    video.elt.style.display = "block";

});


wrongButton.addEventListener("click", function() {
    Array.from(popupWindow.children).forEach(child => {
        if (child !== closeButton && child !== wrongButton && child !== card) {
            popupWindow.removeChild(child);
        }
    });

    popupWindow.style.display = "none";
    wrongButton.style.display = "none";
    //hide card
    card.style.display = "none";


    const listContainer = document.createElement("div");
    listContainer.id = "top10-list";
    listContainer.style.maxHeight = "80vh";
    listContainer.style.overflowY = "auto";
    listContainer.style.padding = "10px";
    listContainer.style.borderTop = "1px solid #ccc";
    listContainer.style.margin = "12% auto"; 

    top10.forEach(entry => {
        const container = document.createElement("div");
        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.marginBottom = "15px";
        container.style.marginRight = "15px";
        container.style.cursor = "pointer";
        container.style.border = "1px solid #ddd";
        container.style.padding = "10px";
        container.style.borderRadius = "10px";
        container.style.backgroundColor = "#f9f9f9";
    

        const image = document.createElement('img');
        image.src = `compressed_images/${classes[entry.index]}.jpeg`;

        image.onerror = function () {
            console.log("Loading as a jpg instead of jpeg");
            image.src = `compressed_images/${classes[entry.index]}.jpg`;

            image.onerror = function () {
                    img.src = 'compressed_images/placeholder.jpg'; // Placeholder image if both fail
                
            };

        };

        image.style.width = "400px";
        image.style.height = "500px";
        image.style.objectFit = "cover";
        image.style.marginRight = "15px";
        image.style.borderRadius = "10px";
    
        const text = document.createElement("div");
        text.style.flex = "1"; 
        text.style.wordWrap = "break-word"; 
        text.style.marginLeft = "15px"; 

        const match = classData.find(row => row["Accession #"] === classes[entry.index]);

        if (match && match["Title"]) {
            text.innerHTML = `<strong style="font-size: 34px;">${match["Title"]}</strong>`;
        } else {          
            text.innerHTML = `<strong style="font-size: 34px;">Title not found</strong>`;
        }
    
        container.appendChild(image);
        container.appendChild(text);
    
        container.addEventListener("click", () => {

            const listContainer = document.getElementById("top10-list");
            if (listContainer) {
                listContainer.remove();
            }
            wrongButton.style.display = "block";
            wrongButton.style.backgroundColor = "#dc3545"; // danger red
            wrongButton.style.fontSize = "1.5rem";
            wrongButton.style.marginTop = "0";
            wrongButton.style.padding = "15px 30px";
            wrongButton.textContent = "Wrong block? Press here to see similar";

            card = document.getElementById("img-card");
            card.style.display = "block";

            Array.from(popupWindow.children).forEach(child => {
                if (child !== closeButton && child !== wrongButton && child !== card) {
                    popupWindow.removeChild(child);
                }
            });
            card.innerHTML = ''; // Clear old content
            populatePopup(classes[entry.index], card);
        });
    
        listContainer.appendChild(container);
    });

    popupWindow.appendChild(listContainer);
    popupWindow.style.display = "block";
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }

function populatePopup(predictedClass, parentElement) {
const img = document.createElement('img');
img.classList.add("round-img");
img.style.maxHeight = "50vh";
img.style.maxWidth = "100%";
img.style.width = "auto";      
img.style.objectFit = "contain"; 
img.style.marginBottom = "20px"; 
img.src = `compressed_images/${predictedClass}.jpeg`;
wrongButton.style.display = "block";
wrongButton.style.backgroundColor = "#dc3545"; // Bootstrap danger red
wrongButton.style.fontSize = "2rem"; // Increased font size
wrongButton.style.margin = "5"; 
wrongButton.style.padding = "20px 30px";
wrongButton.textContent = "Wrong block? Press here to see similar";
wrongButton.style.width = "100%"; 
wrongButton.style.position = "sticky"; // Make button stick to image holderr thing
wrongButton.style.top = "0";

img.onerror = function () {
    console.log("Loading as a jpg instead of jpeg");
    img.src = `compressed_images/${predictedClass}.jpg`;

    img.onerror = function () {
            img.src = 'compressed_images/placeholder.jpg'; // Placeholder image if both fail

    };
};

parentElement.appendChild(img);

const order = ["Title", "Description", "Publication", "page number", "Panel #", "Accession #"];
const match = classData.find(row => row["Accession #"] === predictedClass);

if (!match) {
    let filler = "Information coming soon! ";
    console.error("No match found for predicted class:", predictedClass);
    const para = document.createElement('p');
    para.innerHTML = `<span style="font-size: 60px; font-weight: bold;">${filler}</span>`;
    parentElement.appendChild(para);
    return;

}


order.forEach((key) => {

    if (match[key] && key == "Title") {
        const para = document.createElement('p');
        para.innerHTML = `<span style="font-size: 60px; font-weight: bold;">${match[key].replace(/\n/g, '<br>')}</span>`;
        parentElement.appendChild(para);

    }
    else if (match[key] && key == "Accession #") {
        const para = document.createElement('p');
        para.textContent = "Block no. " + match[key];
        para.style.fontSize = "40px";
        parentElement.appendChild(para);
    }
    else if (match[key] && key == "Panel #") {
        parentElement.appendChild(document.createElement('br'));
        const para = document.createElement('p');
        para.textContent = "Panel: " + match[key];
        para.style.fontSize = "40px";
        parentElement.appendChild(para);
    }
    else if (match[key] && key == "page number") {
        const para = document.createElement('p');
        para.textContent = "Page: " + match[key];
        para.style.fontSize = "40px";
        parentElement.appendChild(para);
    }
    else if (match[key]  && key == "Publication" ) {
        parentElement.appendChild(document.createElement('br'));
        const para = document.createElement('p');
        para.innerHTML = match[key].replace(/\n/g, '<br>');
        para.style.fontSize = "44px";
        para.style.fontWeight = "bold";
        para.style.fontStyle = "italic"
        parentElement.appendChild(para);
    }
    else if (match[key] && key == "Description") {
        const para = document.createElement('p');
        para.innerHTML = match[key].replace(/\n/g, '<br>') + '<br>';
        para.style.fontSize = "44px";
        parentElement.appendChild(para);
        
    }
});

// Update paragraph margins
parentElement.querySelectorAll('p').forEach(p => {
    p.style.marginBottom = '5px';
});
}
