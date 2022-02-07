//// Create StyleKit Object
var StyleKitName = {};
var pathCounter = 628;
var drawPath = 0;

//// Drawing Methods

function drawCanvas1(canvas, targetFrame, resizing) {
    //// General Declarations
    canvas = initializeCanvas(typeof canvas === 'string' ? document.getElementById(canvas) : canvas);
    var context = canvas.getContext('2d');
    var pixelRatio = canvas.paintCodePixelRatio;

    //// Resize to Target Frame
    context.save();
    var resizedFrame = applyResizingBehavior(resizing, makeRect(0, 0, 1068, 1262), targetFrame);
    context.translate(resizedFrame.x, resizedFrame.y);
    context.scale(resizedFrame.w / 1068, resizedFrame.h / 1262);

    function drawNextPath() {
        drawPath++;
        if (drawPath > pathCounter) {
            console.log("绘图完成")
        } else if (drawPath === 1) {
            console.log("开始绘图")
            drawPath1()
            drawNextPath()
        } else {
            console.log("开始阶段" + drawPath)
            setTimeout(function () {
                eval("drawPath" + drawPath + "()")
                drawNextPath()
            }, 10)
        }
    }

    drawNextPath()
    //// Color Declarations
    var fillColor1 = 'rgba(254, 217, 222, 1)';
    var fillColor2 = 'rgba(252, 169, 163, 1)';
    var fillColor3 = 'rgba(235, 169, 170, 1)';
    var fillColor4 = 'rgba(252, 181, 177, 1)';
    var fillColor5 = 'rgba(224, 150, 145, 1)';
    var fillColor6 = 'rgba(252, 180, 178, 1)';
    var fillColor7 = 'rgba(224, 149, 143, 1)';
    var fillColor8 = 'rgba(250, 159, 149, 1)';
    var fillColor9 = 'rgba(251, 165, 158, 1)';
    var fillColor10 = 'rgba(251, 166, 159, 1)';
    var fillColor11 = 'rgba(252, 176, 171, 1)';
    var fillColor12 = 'rgba(231, 151, 144, 1)';
    var fillColor13 = 'rgba(253, 186, 186, 1)';
    var fillColor14 = 'rgba(252, 187, 187, 1)';
    var fillColor15 = 'rgba(252, 198, 203, 1)';
    var fillColor16 = 'rgba(250, 162, 156, 1)';
    var fillColor17 = 'rgba(226, 150, 146, 1)';
    var fillColor18 = 'rgba(225, 145, 138, 1)';
    var fillColor19 = 'rgba(253, 220, 208, 1)';
    var fillColor20 = 'rgba(227, 158, 156, 1)';
    var fillColor21 = 'rgba(250, 205, 208, 1)';
    var fillColor22 = 'rgba(250, 175, 170, 1)';
    var fillColor23 = 'rgba(254, 202, 200, 1)';
    var fillColor24 = 'rgba(252, 202, 206, 1)';
    var fillColor25 = 'rgba(253, 199, 202, 1)';
    var fillColor26 = 'rgba(228, 146, 139, 1)';
    var fillColor27 = 'rgba(251, 179, 167, 1)';
    var fillColor28 = 'rgba(250, 173, 167, 1)';
    var fillColor29 = 'rgba(248, 184, 187, 1)';
    var fillColor30 = 'rgba(252, 199, 202, 1)';
    var fillColor31 = 'rgba(248, 158, 148, 1)';
    var fillColor32 = 'rgba(207, 129, 126, 1)';
    var fillColor33 = 'rgba(251, 189, 188, 1)';
    var fillColor34 = 'rgba(253, 179, 177, 1)';
    var fillColor35 = 'rgba(252, 194, 197, 1)';
    var fillColor36 = 'rgba(222, 137, 128, 1)';
    var fillColor37 = 'rgba(251, 185, 187, 1)';
    var fillColor38 = 'rgba(222, 133, 124, 1)';
    var fillColor39 = 'rgba(252, 199, 204, 1)';
    var fillColor40 = 'rgba(245, 195, 194, 1)';
    var fillColor41 = 'rgba(252, 198, 205, 1)';
    var fillColor42 = 'rgba(211, 136, 130, 1)';
    var fillColor43 = 'rgba(253, 209, 197, 1)';
    var fillColor44 = 'rgba(250, 193, 196, 1)';
    var fillColor45 = 'rgba(244, 166, 160, 1)';
    var fillColor46 = 'rgba(252, 176, 176, 1)';
    var fillColor47 = 'rgba(230, 154, 147, 1)';
    var fillColor48 = 'rgba(252, 196, 182, 1)';
    var fillColor49 = 'rgba(252, 224, 210, 1)';
    var fillColor50 = 'rgba(239, 161, 153, 1)';
    var fillColor51 = 'rgba(250, 184, 178, 1)';
    var fillColor52 = 'rgba(251, 198, 200, 1)';
    var fillColor53 = 'rgba(222, 185, 175, 1)';
    var fillColor54 = 'rgba(250, 202, 203, 1)';
    var fillColor55 = 'rgba(253, 217, 221, 1)';
    var fillColor56 = 'rgba(255, 255, 255, 1)';
    var fillColor57 = 'rgba(217, 161, 165, 1)';
    var fillColor58 = 'rgba(223, 177, 175, 1)';
    var fillColor59 = 'rgba(128, 183, 158, 1)';
    var fillColor60 = 'rgba(235, 161, 155, 1)';
    var fillColor61 = 'rgba(228, 150, 146, 1)';
    var fillColor62 = 'rgba(251, 217, 208, 1)';
    var fillColor63 = 'rgba(254, 242, 232, 1)';
    var fillColor64 = 'rgba(252, 221, 202, 1)';
    var fillColor65 = 'rgba(84, 162, 128, 1)';
    var fillColor66 = 'rgba(245, 180, 178, 1)';
    var fillColor67 = 'rgba(249, 210, 209, 1)';
    var fillColor68 = 'rgba(251, 201, 203, 1)';
    var fillColor69 = 'rgba(242, 177, 172, 1)';
    var fillColor70 = 'rgba(219, 193, 180, 1)';
    var fillColor71 = 'rgba(239, 161, 152, 1)';
    var fillColor72 = 'rgba(95, 170, 136, 1)';
    var fillColor73 = 'rgba(220, 154, 150, 1)';
    var fillColor74 = 'rgba(252, 209, 204, 1)';
    var fillColor75 = 'rgba(231, 157, 148, 1)';
    var fillColor76 = 'rgba(234, 185, 186, 1)';
    var fillColor77 = 'rgba(249, 189, 189, 1)';
    var fillColor78 = 'rgba(195, 158, 161, 1)';
    var fillColor79 = 'rgba(249, 209, 176, 1)';
    var fillColor80 = 'rgba(222, 183, 172, 1)';
    var fillColor81 = 'rgba(216, 143, 133, 1)';
    var fillColor82 = 'rgba(142, 193, 167, 1)';
    var fillColor83 = 'rgba(103, 183, 146, 1)';
    var fillColor84 = 'rgba(116, 186, 154, 1)';
    var fillColor85 = 'rgba(185, 162, 125, 1)';
    var fillColor86 = 'rgba(208, 160, 140, 1)';
    var fillColor87 = 'rgba(37, 152, 104, 1)';
    var fillColor88 = 'rgba(252, 200, 190, 1)';
    var fillColor89 = 'rgba(223, 185, 158, 1)';
    var fillColor90 = 'rgba(106, 178, 146, 1)';
    var fillColor91 = 'rgba(152, 51, 55, 1)';
    var fillColor92 = 'rgba(228, 174, 171, 1)';
    var fillColor93 = 'rgba(151, 205, 184, 1)';
    var fillColor94 = 'rgba(133, 191, 163, 1)';
    var fillColor95 = 'rgba(171, 177, 150, 1)';
    var fillColor96 = 'rgba(92, 122, 112, 1)';
    var fillColor97 = 'rgba(196, 168, 137, 1)';
    var fillColor98 = 'rgba(251, 234, 199, 1)';
    var fillColor99 = 'rgba(133, 209, 175, 1)';
    var fillColor100 = 'rgba(253, 200, 202, 1)';
    var fillColor101 = 'rgba(214, 182, 149, 1)';
    var fillColor102 = 'rgba(247, 180, 177, 1)';
    var fillColor103 = 'rgba(190, 217, 233, 1)';
    var fillColor104 = 'rgba(246, 179, 175, 1)';
    var fillColor105 = 'rgba(96, 161, 132, 1)';
    var fillColor106 = 'rgba(216, 181, 146, 1)';
    var fillColor107 = 'rgba(117, 178, 152, 1)';
    var fillColor108 = 'rgba(155, 142, 131, 1)';
    var fillColor109 = 'rgba(229, 181, 155, 1)';
    var fillColor110 = 'rgba(250, 222, 215, 1)';
    var fillColor111 = 'rgba(85, 153, 122, 1)';
    var fillColor112 = 'rgba(215, 185, 182, 1)';
    var fillColor113 = 'rgba(169, 169, 164, 1)';
    var fillColor114 = 'rgba(253, 225, 192, 1)';
    var fillColor115 = 'rgba(254, 219, 220, 1)';
    var fillColor116 = 'rgba(215, 158, 155, 1)';
    var fillColor117 = 'rgba(253, 229, 234, 1)';
    var fillColor118 = 'rgba(240, 176, 170, 1)';
    var fillColor119 = 'rgba(98, 122, 117, 1)';
    var fillColor120 = 'rgba(121, 175, 150, 1)';
    var fillColor121 = 'rgba(215, 149, 145, 1)';
    var fillColor122 = 'rgba(138, 195, 170, 1)';
    var fillColor123 = 'rgba(252, 194, 187, 1)';
    var fillColor124 = 'rgba(207, 149, 150, 1)';
    var fillColor125 = 'rgba(207, 165, 165, 1)';
    var fillColor126 = 'rgba(66, 138, 107, 1)';
    var fillColor127 = 'rgba(251, 194, 189, 1)';
    var fillColor128 = 'rgba(243, 169, 162, 1)';
    var fillColor129 = 'rgba(132, 209, 175, 1)';
    var fillColor130 = 'rgba(245, 191, 197, 1)';
    var fillColor131 = 'rgba(251, 218, 217, 1)';
    var fillColor132 = 'rgba(106, 178, 144, 1)';
    var fillColor133 = 'rgba(53, 158, 118, 1)';
    var fillColor134 = 'rgba(202, 150, 151, 1)';
    var fillColor135 = 'rgba(36, 151, 105, 1)';
    var fillColor136 = 'rgba(209, 149, 147, 1)';
    var fillColor137 = 'rgba(98, 156, 129, 1)';
    var fillColor138 = 'rgba(30, 133, 92, 1)';
    var fillColor139 = 'rgba(239, 252, 252, 1)';
    var fillColor140 = 'rgba(217, 143, 137, 1)';
    var fillColor141 = 'rgba(245, 186, 181, 1)';
    var fillColor142 = 'rgba(212, 183, 171, 1)';
    var fillColor143 = 'rgba(250, 185, 176, 1)';
    var fillColor144 = 'rgba(252, 196, 194, 1)';
    var fillColor145 = 'rgba(236, 168, 165, 1)';
    var fillColor146 = 'rgba(219, 148, 140, 1)';
    var fillColor147 = 'rgba(137, 202, 173, 1)';
    var fillColor148 = 'rgba(11, 11, 11, 1)';
    var fillColor149 = 'rgba(220, 144, 135, 1)';
    var fillColor150 = 'rgba(238, 167, 168, 1)';
    var fillColor151 = 'rgba(214, 156, 155, 1)';
    var fillColor152 = 'rgba(28, 130, 90, 1)';
    var fillColor153 = 'rgba(130, 208, 173, 1)';
    var fillColor154 = 'rgba(113, 169, 143, 1)';
    var fillColor155 = 'rgba(225, 162, 157, 1)';
    var fillColor156 = 'rgba(95, 165, 130, 1)';
    var fillColor157 = 'rgba(249, 186, 184, 1)';
    var fillColor158 = 'rgba(212, 167, 169, 1)';
    var fillColor159 = 'rgba(98, 159, 131, 1)';
    var fillColor160 = 'rgba(139, 211, 179, 1)';
    var fillColor161 = 'rgba(251, 236, 216, 1)';
    var fillColor162 = 'rgba(61, 160, 127, 1)';
    var fillColor163 = 'rgba(216, 151, 143, 1)';
    var fillColor164 = 'rgba(78, 151, 117, 1)';
    var fillColor165 = 'rgba(130, 201, 169, 1)';
    var fillColor166 = 'rgba(244, 167, 172, 1)';
    var fillColor167 = 'rgba(133, 205, 171, 1)';
    var fillColor168 = 'rgba(239, 168, 162, 1)';
    var fillColor169 = 'rgba(218, 159, 159, 1)';
    var fillColor170 = 'rgba(223, 158, 154, 1)';
    var fillColor171 = 'rgba(244, 169, 169, 1)';
    var fillColor172 = 'rgba(252, 223, 211, 1)';
    var fillColor173 = 'rgba(249, 185, 180, 1)';
    var fillColor174 = 'rgba(227, 175, 178, 1)';
    var fillColor175 = 'rgba(220, 238, 254, 1)';
    var fillColor176 = 'rgba(139, 209, 179, 1)';
    var fillColor177 = 'rgba(14, 115, 75, 1)';
    var fillColor178 = 'rgba(193, 214, 214, 1)';
    var fillColor179 = 'rgba(130, 207, 171, 1)';
    var fillColor180 = 'rgba(127, 197, 166, 1)';
    var fillColor181 = 'rgba(238, 172, 161, 1)';
    var fillColor182 = 'rgba(127, 177, 163, 1)';
    var fillColor183 = 'rgba(252, 214, 187, 1)';
    var fillColor184 = 'rgba(173, 118, 115, 1)';
    var fillColor185 = 'rgba(29, 128, 89, 1)';
    var fillColor186 = 'rgba(158, 215, 188, 1)';
    var fillColor187 = 'rgba(89, 158, 126, 1)';
    var fillColor188 = 'rgba(248, 187, 175, 1)';
    var fillColor189 = 'rgba(223, 160, 155, 1)';
    var fillColor190 = 'rgba(140, 188, 167, 1)';
    var fillColor191 = 'rgba(209, 180, 155, 1)';
    var fillColor192 = 'rgba(253, 209, 209, 1)';
    var fillColor193 = 'rgba(252, 223, 214, 1)';
    var fillColor194 = 'rgba(90, 102, 99, 1)';
    var fillColor195 = 'rgba(249, 206, 190, 1)';
    var fillColor196 = 'rgba(216, 147, 143, 1)';
    var fillColor197 = 'rgba(220, 192, 163, 1)';
    var fillColor198 = 'rgba(244, 182, 177, 1)';
    var fillColor199 = 'rgba(226, 165, 152, 1)';
    var fillColor200 = 'rgba(107, 183, 146, 1)';
    var fillColor201 = 'rgba(252, 226, 195, 1)';
    var fillColor202 = 'rgba(252, 237, 218, 1)';
    var fillColor203 = 'rgba(246, 201, 179, 1)';
    var fillColor204 = 'rgba(132, 193, 165, 1)';
    var fillColor205 = 'rgba(252, 222, 193, 1)';
    var fillColor206 = 'rgba(250, 202, 186, 1)';
    var fillColor207 = 'rgba(230, 167, 172, 1)';
    var fillColor208 = 'rgba(229, 173, 160, 1)';
    var fillColor209 = 'rgba(64, 158, 117, 1)';
    var fillColor210 = 'rgba(236, 182, 183, 1)';
    var fillColor211 = 'rgba(228, 199, 185, 1)';
    var fillColor212 = 'rgba(247, 193, 177, 1)';
    var fillColor213 = 'rgba(149, 215, 185, 1)';
    var fillColor214 = 'rgba(135, 192, 168, 1)';
    var fillColor215 = 'rgba(152, 213, 184, 1)';
    var fillColor216 = 'rgba(89, 165, 132, 1)';
    var fillColor217 = 'rgba(79, 162, 125, 1)';
    var fillColor218 = 'rgba(211, 165, 144, 1)';
    var fillColor219 = 'rgba(119, 181, 152, 1)';
    var fillColor220 = 'rgba(240, 168, 161, 1)';
    var fillColor221 = 'rgba(136, 162, 135, 1)';
    var fillColor222 = 'rgba(77, 132, 107, 1)';
    var fillColor223 = 'rgba(163, 171, 147, 1)';
    var fillColor224 = 'rgba(245, 204, 175, 1)';
    var fillColor225 = 'rgba(179, 158, 123, 1)';
    var fillColor226 = 'rgba(117, 200, 163, 1)';
    var fillColor227 = 'rgba(209, 175, 148, 1)';
    var fillColor228 = 'rgba(242, 174, 168, 1)';
    var fillColor229 = 'rgba(211, 181, 152, 1)';
    var fillColor230 = 'rgba(173, 128, 119, 1)';
    var fillColor231 = 'rgba(168, 161, 141, 1)';
    var fillColor232 = 'rgba(247, 185, 182, 1)';
    var fillColor233 = 'rgba(253, 201, 202, 1)';
    var fillColor234 = 'rgba(69, 166, 126, 1)';
    var fillColor235 = 'rgba(124, 181, 153, 1)';
    var fillColor236 = 'rgba(72, 127, 110, 1)';
    var fillColor237 = 'rgba(230, 194, 163, 1)';
    var fillColor238 = 'rgba(251, 196, 195, 1)';
    var fillColor239 = 'rgba(135, 193, 169, 1)';
    var fillColor240 = 'rgba(195, 128, 123, 1)';
    var fillColor241 = 'rgba(251, 195, 195, 1)';
    var fillColor242 = 'rgba(141, 201, 174, 1)';
    var fillColor243 = 'rgba(252, 234, 233, 1)';
    var fillColor244 = 'rgba(147, 163, 141, 1)';
    var fillColor245 = 'rgba(252, 222, 209, 1)';
    var fillColor246 = 'rgba(221, 150, 142, 1)';
    var fillColor247 = 'rgba(251, 203, 199, 1)';
    var fillColor248 = 'rgba(86, 162, 129, 1)';
    var fillColor249 = 'rgba(218, 173, 173, 1)';
    var fillColor250 = 'rgba(149, 195, 173, 1)';
    var fillColor251 = 'rgba(137, 157, 126, 1)';
    var fillColor252 = 'rgba(239, 162, 156, 1)';
    var fillColor253 = 'rgba(251, 201, 202, 1)';
    var fillColor254 = 'rgba(34, 149, 105, 1)';
    var fillColor255 = 'rgba(104, 173, 142, 1)';
    var fillColor256 = 'rgba(114, 167, 146, 1)';
    var fillColor257 = 'rgba(229, 172, 166, 1)';
    var fillColor258 = 'rgba(87, 163, 131, 1)';
    var fillColor259 = 'rgba(119, 173, 150, 1)';
    var fillColor260 = 'rgba(79, 186, 141, 1)';
    var fillColor261 = 'rgba(0, 0, 0, 1)';
    var fillColor262 = 'rgba(122, 194, 170, 1)';
    var fillColor263 = 'rgba(210, 141, 136, 1)';
    var fillColor264 = 'rgba(136, 193, 174, 1)';
    var fillColor265 = 'rgba(151, 209, 184, 1)';
    var fillColor266 = 'rgba(255, 247, 232, 1)';
    var fillColor267 = 'rgba(135, 187, 168, 1)';
    var fillColor268 = 'rgba(135, 163, 132, 1)';
    var fillColor269 = 'rgba(102, 181, 152, 1)';
    var fillColor270 = 'rgba(238, 168, 162, 1)';
    var fillColor271 = 'rgba(143, 141, 127, 1)';
    var fillColor272 = 'rgba(225, 183, 180, 1)';
    var fillColor273 = 'rgba(89, 149, 122, 1)';
    var fillColor274 = 'rgba(236, 164, 157, 1)';
    var fillColor275 = 'rgba(137, 169, 159, 1)';
    var fillColor276 = 'rgba(123, 184, 155, 1)';
    var fillColor277 = 'rgba(220, 168, 167, 1)';
    var fillColor278 = 'rgba(205, 147, 142, 1)';
    var fillColor279 = 'rgba(25, 122, 81, 1)';
    var fillColor280 = 'rgba(51, 167, 122, 1)';
    var fillColor281 = 'rgba(134, 167, 159, 1)';
    var fillColor282 = 'rgba(139, 194, 168, 1)';
    var fillColor283 = 'rgba(76, 168, 129, 1)';
    var fillColor284 = 'rgba(247, 192, 191, 1)';
    var fillColor285 = 'rgba(214, 157, 154, 1)';
    var fillColor286 = 'rgba(65, 158, 116, 1)';
    var fillColor287 = 'rgba(135, 194, 165, 1)';
    var fillColor288 = 'rgba(116, 172, 134, 1)';
    var fillColor289 = 'rgba(90, 165, 132, 1)';
    var fillColor290 = 'rgba(208, 164, 165, 1)';
    var fillColor291 = 'rgba(254, 236, 235, 1)';
    var fillColor292 = 'rgba(248, 203, 196, 1)';
    var fillColor293 = 'rgba(202, 143, 138, 1)';
    var fillColor294 = 'rgba(206, 147, 141, 1)';
    var fillColor295 = 'rgba(101, 178, 141, 1)';
    var fillColor296 = 'rgba(251, 167, 160, 1)';
    var fillColor297 = 'rgba(250, 179, 171, 1)';
    var fillColor298 = 'rgba(211, 169, 168, 1)';
    var fillColor299 = 'rgba(202, 202, 202, 1)';
    var fillColor300 = 'rgba(91, 164, 132, 1)';
    var fillColor301 = 'rgba(114, 177, 147, 1)';
    var fillColor302 = 'rgba(95, 116, 85, 1)';
    var fillColor303 = 'rgba(154, 164, 142, 1)';
    var fillColor304 = 'rgba(221, 150, 140, 1)';
    var fillColor305 = 'rgba(223, 152, 147, 1)';
    var fillColor306 = 'rgba(111, 178, 148, 1)';
    var fillColor307 = 'rgba(207, 134, 128, 1)';
    var fillColor308 = 'rgba(249, 223, 224, 1)';
    var fillColor309 = 'rgba(214, 153, 151, 1)';
    var fillColor310 = 'rgba(252, 237, 217, 1)';
    var fillColor311 = 'rgba(209, 138, 131, 1)';
    var fillColor312 = 'rgba(250, 198, 197, 1)';
    var fillColor313 = 'rgba(88, 164, 131, 1)';
    var fillColor314 = 'rgba(240, 171, 165, 1)';
    var fillColor315 = 'rgba(252, 226, 213, 1)';
    var fillColor316 = 'rgba(183, 152, 151, 1)';
    var fillColor317 = 'rgba(226, 143, 136, 1)';
    var fillColor318 = 'rgba(222, 138, 130, 1)';
    var fillColor319 = 'rgba(213, 146, 142, 1)';
    var fillColor320 = 'rgba(234, 185, 178, 1)';
    var fillColor321 = 'rgba(251, 199, 200, 1)';
    var fillColor322 = 'rgba(81, 144, 118, 1)';
    var fillColor323 = 'rgba(169, 170, 149, 1)';
    var fillColor324 = 'rgba(247, 206, 192, 1)';
    var fillColor325 = 'rgba(249, 211, 209, 1)';
    var fillColor326 = 'rgba(88, 165, 132, 1)';
    var fillColor327 = 'rgba(211, 153, 137, 1)';
    var fillColor328 = 'rgba(251, 190, 187, 1)';
    var fillColor329 = 'rgba(213, 152, 148, 1)';
    var fillColor330 = 'rgba(61, 176, 129, 1)';
    var fillColor331 = 'rgba(211, 153, 155, 1)';
    var fillColor332 = 'rgba(222, 156, 151, 1)';
    var fillColor333 = 'rgba(251, 195, 196, 1)';
    var fillColor334 = 'rgba(154, 213, 186, 1)';
    var fillColor335 = 'rgba(112, 180, 147, 1)';
    var fillColor336 = 'rgba(108, 199, 162, 1)';
    var fillColor337 = 'rgba(251, 179, 174, 1)';
    var fillColor338 = 'rgba(214, 139, 128, 1)';
    var fillColor339 = 'rgba(251, 213, 200, 1)';
    var fillColor340 = 'rgba(202, 147, 143, 1)';
    var fillColor341 = 'rgba(51, 155, 112, 1)';
    var fillColor342 = 'rgba(252, 220, 209, 1)';
    var fillColor343 = 'rgba(249, 165, 159, 1)';
    var fillColor344 = 'rgba(202, 202, 203, 1)';
    var fillColor345 = 'rgba(251, 202, 205, 1)';
    var fillColor346 = 'rgba(250, 200, 202, 1)';
    var fillColor347 = 'rgba(66, 139, 108, 1)';
    var fillColor348 = 'rgba(135, 192, 169, 1)';
    var fillColor349 = 'rgba(212, 169, 157, 1)';
    var fillColor350 = 'rgba(235, 164, 160, 1)';
    var fillColor351 = 'rgba(116, 190, 159, 1)';
    var fillColor352 = 'rgba(198, 173, 155, 1)';
    var fillColor353 = 'rgba(203, 202, 201, 1)';
    var fillColor354 = 'rgba(2, 2, 2, 1)';
    var fillColor355 = 'rgba(220, 173, 176, 1)';
    var fillColor356 = 'rgba(254, 220, 224, 1)';
    var fillColor357 = 'rgba(126, 186, 157, 1)';
    var fillColor358 = 'rgba(203, 202, 203, 1)';
    var fillColor359 = 'rgba(253, 238, 212, 1)';
    var fillColor360 = 'rgba(158, 172, 146, 1)';
    var fillColor361 = 'rgba(108, 181, 149, 1)';
    var fillColor362 = 'rgba(104, 180, 156, 1)';
    var fillColor363 = 'rgba(137, 166, 141, 1)';
    var fillColor364 = 'rgba(139, 196, 168, 1)';
    var fillColor365 = 'rgba(223, 154, 147, 1)';
    var fillColor366 = 'rgba(221, 149, 149, 1)';
    var fillColor367 = 'rgba(224, 166, 159, 1)';
    var fillColor368 = 'rgba(76, 146, 117, 1)';
    var fillColor369 = 'rgba(182, 120, 116, 1)';
    var fillColor370 = 'rgba(252, 205, 187, 1)';
    var fillColor371 = 'rgba(227, 153, 146, 1)';
    var fillColor372 = 'rgba(43, 140, 101, 1)';
    var fillColor373 = 'rgba(249, 166, 159, 1)';
    var fillColor374 = 'rgba(85, 153, 123, 1)';
    var fillColor375 = 'rgba(149, 209, 185, 1)';
    var fillColor376 = 'rgba(71, 141, 111, 1)';
    var fillColor377 = 'rgba(82, 171, 134, 1)';
    var fillColor378 = 'rgba(228, 182, 173, 1)';
    var fillColor379 = 'rgba(251, 224, 214, 1)';
    var fillColor380 = 'rgba(251, 224, 208, 1)';
    var fillColor381 = 'rgba(202, 173, 168, 1)';
    var fillColor382 = 'rgba(130, 203, 170, 1)';
    var fillColor383 = 'rgba(252, 234, 217, 1)';
    var fillColor384 = 'rgba(107, 185, 151, 1)';
    var fillColor385 = 'rgba(252, 252, 252, 1)';
    var fillColor386 = 'rgba(134, 192, 164, 1)';
    var fillColor387 = 'rgba(143, 200, 177, 1)';
    var fillColor388 = 'rgba(45, 155, 109, 1)';
    var fillColor389 = 'rgba(154, 208, 191, 1)';
    var fillColor390 = 'rgba(84, 173, 136, 1)';
    var fillColor391 = 'rgba(38, 151, 105, 1)';
    var fillColor392 = 'rgba(134, 195, 169, 1)';
    var fillColor393 = 'rgba(120, 175, 153, 1)';
    var fillColor394 = 'rgba(172, 164, 151, 1)';
    var fillColor395 = 'rgba(254, 203, 198, 1)';
    var fillColor396 = 'rgba(136, 219, 184, 1)';
    var fillColor397 = 'rgba(93, 171, 141, 1)';
    var fillColor398 = 'rgba(48, 128, 96, 1)';
    var fillColor399 = 'rgba(119, 172, 148, 1)';
    var fillColor400 = 'rgba(112, 187, 155, 1)';
    var fillColor401 = 'rgba(36, 129, 92, 1)';
    var fillColor402 = 'rgba(82, 172, 136, 1)';
    var fillColor403 = 'rgba(105, 183, 150, 1)';
    var fillColor404 = 'rgba(248, 177, 167, 1)';
    var fillColor405 = 'rgba(50, 124, 93, 1)';
    var fillColor406 = 'rgba(132, 209, 177, 1)';
    var fillColor407 = 'rgba(251, 243, 209, 1)';
    var fillColor408 = 'rgba(116, 186, 156, 1)';
    var fillColor409 = 'rgba(179, 122, 121, 1)';
    var fillColor410 = 'rgba(129, 151, 122, 1)';
    var fillColor411 = 'rgba(57, 64, 63, 1)';
    var fillColor412 = 'rgba(201, 210, 209, 1)';
    var fillColor413 = 'rgba(199, 142, 135, 1)';
    var fillColor414 = 'rgba(141, 212, 181, 1)';
    var fillColor415 = 'rgba(217, 220, 201, 1)';
    var fillColor416 = 'rgba(242, 157, 153, 1)';
    var fillColor417 = 'rgba(20, 127, 84, 1)';
    var fillColor418 = 'rgba(215, 166, 174, 1)';
    var fillColor419 = 'rgba(185, 157, 166, 1)';
    var fillColor420 = 'rgba(20, 137, 92, 1)';
    var fillColor421 = 'rgba(176, 172, 180, 1)';
    var fillColor422 = 'rgba(68, 163, 121, 1)';
    var fillColor423 = 'rgba(251, 253, 254, 1)';
    var fillColor424 = 'rgba(80, 170, 130, 1)';
    var fillColor425 = 'rgba(173, 202, 225, 1)';
    var fillColor426 = 'rgba(37, 128, 96, 1)';
    var fillColor427 = 'rgba(149, 205, 171, 1)';
    var fillColor428 = 'rgba(160, 212, 182, 1)';
    var fillColor429 = 'rgba(54, 150, 113, 1)';
    var fillColor430 = 'rgba(105, 181, 149, 1)';
    var fillColor431 = 'rgba(196, 148, 150, 1)';
    var fillColor432 = 'rgba(225, 154, 162, 1)';
    var fillColor433 = 'rgba(164, 210, 234, 1)';
    var fillColor434 = 'rgba(241, 224, 203, 1)';
    var fillColor435 = 'rgba(51, 159, 115, 1)';
    var fillColor436 = 'rgba(29, 87, 142, 1)';
    var fillColor437 = 'rgba(148, 214, 196, 1)';
    var fillColor438 = 'rgba(92, 167, 136, 1)';
    var fillColor439 = 'rgba(193, 222, 237, 1)';
    var fillColor440 = 'rgba(102, 171, 141, 1)';
    var fillColor441 = 'rgba(110, 178, 148, 1)';
    var fillColor442 = 'rgba(18, 127, 84, 1)';
    var fillColor443 = 'rgba(245, 199, 169, 1)';
    var fillColor444 = 'rgba(20, 135, 91, 1)';
    var fillColor445 = 'rgba(142, 204, 226, 1)';
    var fillColor446 = 'rgba(67, 134, 104, 1)';
    var fillColor447 = 'rgba(26, 141, 97, 1)';
    var fillColor448 = 'rgba(89, 163, 133, 1)';
    var fillColor449 = 'rgba(20, 121, 81, 1)';
    var fillColor450 = 'rgba(59, 176, 129, 1)';
    var fillColor451 = 'rgba(147, 195, 185, 1)';
    var fillColor452 = 'rgba(1, 1, 1, 1)';
    var fillColor453 = 'rgba(50, 145, 105, 1)';
    var fillColor454 = 'rgba(101, 173, 143, 1)';
    var fillColor455 = 'rgba(54, 155, 111, 1)';
    var fillColor456 = 'rgba(104, 117, 111, 1)';
    var fillColor457 = 'rgba(30, 137, 95, 1)';
    var fillColor458 = 'rgba(3, 2, 3, 1)';
    var fillColor459 = 'rgba(54, 141, 102, 1)';
    var fillColor460 = 'rgba(86, 186, 144, 1)';
    var fillColor461 = 'rgba(179, 212, 245, 1)';
    var fillColor462 = 'rgba(253, 253, 253, 1)';
    var fillColor463 = 'rgba(71, 172, 136, 1)';
    var fillColor464 = 'rgba(60, 165, 121, 1)';
    var fillColor465 = 'rgba(52, 150, 109, 1)';
    var fillColor466 = 'rgba(166, 190, 200, 1)';
    var fillColor467 = 'rgba(224, 229, 204, 1)';
    var fillColor468 = 'rgba(164, 203, 158, 1)';
    var fillColor469 = 'rgba(102, 108, 109, 1)';
    var fillColor470 = 'rgba(159, 139, 177, 1)';
    var fillColor471 = 'rgba(99, 108, 106, 1)';
    var fillColor472 = 'rgba(215, 246, 237, 1)';
    var fillColor473 = 'rgba(134, 148, 146, 1)';
    var fillColor474 = 'rgba(226, 205, 201, 1)';
    var fillColor475 = 'rgba(176, 184, 159, 1)';
    var fillColor476 = 'rgba(115, 118, 121, 1)';
    var fillColor477 = 'rgba(106, 171, 138, 1)';
    var fillColor478 = 'rgba(127, 154, 149, 1)';
    var fillColor479 = 'rgba(32, 129, 89, 1)';
    var fillColor480 = 'rgba(111, 184, 151, 1)';
    var fillColor481 = 'rgba(80, 159, 122, 1)';
    var fillColor482 = 'rgba(104, 165, 135, 1)';
    var fillColor483 = 'rgba(252, 251, 250, 1)';
    var fillColor484 = 'rgba(72, 190, 140, 1)';
    var fillColor485 = 'rgba(128, 188, 156, 1)';
    var fillColor486 = 'rgba(95, 185, 145, 1)';
    var fillColor487 = 'rgba(105, 167, 134, 1)';
    var fillColor488 = 'rgba(163, 201, 177, 1)';
    var fillColor489 = 'rgba(132, 181, 153, 1)';
    var fillColor490 = 'rgba(157, 170, 190, 1)';
    var fillColor491 = 'rgba(80, 134, 108, 1)';
    var fillColor492 = 'rgba(4, 2, 2, 1)';
    var fillColor493 = 'rgba(133, 100, 102, 1)';
    var fillColor494 = 'rgba(29, 86, 142, 1)';
    var fillColor495 = 'rgba(182, 228, 229, 1)';
    var fillColor496 = 'rgba(225, 237, 199, 1)';
    var fillColor497 = 'rgba(245, 207, 210, 1)';
    var fillColor498 = 'rgba(165, 166, 192, 1)';
    var fillColor499 = 'rgba(201, 165, 178, 1)';
    var fillColor500 = 'rgba(191, 209, 230, 1)';
    var fillColor501 = 'rgba(249, 218, 203, 1)';
    var fillColor502 = 'rgba(200, 220, 172, 1)';
    var fillColor503 = 'rgba(43, 49, 51, 1)';
    var fillColor504 = 'rgba(190, 210, 234, 1)';
    var fillColor505 = 'rgba(163, 168, 138, 1)';
    var fillColor506 = 'rgba(247, 228, 232, 1)';
    var fillColor507 = 'rgba(1, 0, 1, 1)';
    var fillColor508 = 'rgba(56, 60, 63, 1)';
    var fillColor509 = 'rgba(109, 92, 57, 1)';
    var fillColor510 = 'rgba(157, 158, 187, 1)';
    var fillColor511 = 'rgba(209, 174, 182, 1)';
    var fillColor512 = 'rgba(52, 56, 61, 1)';
    var fillColor513 = 'rgba(67, 69, 71, 1)';
    var fillColor514 = 'rgba(44, 45, 47, 1)';
    var fillColor515 = 'rgba(48, 51, 56, 1)';
    var fillColor516 = 'rgba(45, 48, 50, 1)';
    var fillColor517 = 'rgba(80, 84, 86, 1)';
    var fillColor518 = 'rgba(220, 238, 253, 1)';
    var fillColor519 = 'rgba(30, 86, 141, 1)';
    var fillColor520 = 'rgba(30, 86, 142, 1)';
    var fillColor521 = 'rgba(181, 211, 243, 1)';
    var fillColor522 = 'rgba(221, 237, 253, 1)';
    var fillColor523 = 'rgba(221, 238, 253, 1)';
    var fillColor524 = 'rgba(29, 29, 29, 1)';
    var fillColor525 = 'rgba(38, 38, 38, 1)';

    //// IMG_0929.svg Group
    function drawPath1() {
        context.beginPath();
        context.moveTo(272.24, 7.99);
        context.bezierCurveTo(276.01, 5.19, 279.27, 1.43, 283.67, -0.37);
        context.bezierCurveTo(290.03, 0.04, 296.44, 0.49, 302.69, 1.77);
        context.bezierCurveTo(306.71, 6.19, 308.6, 12.23, 311.25, 17.55);
        context.bezierCurveTo(315.27, 28.88, 319.75, 40.05, 324.55, 51.09);
        context.bezierCurveTo(326.59, 55.68, 327.83, 60.6, 328.56, 65.56);
        context.bezierCurveTo(327.15, 63.72, 325.73, 61.85, 325.01, 59.63);
        context.bezierCurveTo(320.21, 46.83, 315.64, 33.88, 309.53, 21.64);
        context.bezierCurveTo(305.15, 18.04, 301.28, 13.89, 297.29, 9.84);
        context.bezierCurveTo(296.08, 8.75, 294.72, 7.84, 293.33, 6.97);
        context.bezierCurveTo(289.61, 5.44, 285.89, 3.91, 282.35, 2.01);
        context.bezierCurveTo(278.77, 5.13, 275.39, 8.56, 273.32, 12.89);
        context.bezierCurveTo(271.75, 11.8, 270.19, 10.72, 268.63, 9.64);
        context.bezierCurveTo(268.67, 9.16, 268.73, 8.19, 268.77, 7.69);
        context.bezierCurveTo(269.64, 7.76, 271.37, 7.91, 272.24, 7.99);
        context.closePath();
        context.fillStyle = 'rgba(254, 217, 222, 1)';
        context.fill();

    }

    function drawPath2() {
        context.beginPath();
        context.moveTo(273.32, 12.89);
        context.bezierCurveTo(275.39, 8.56, 278.77, 5.13, 282.35, 2.01);
        context.bezierCurveTo(285.89, 3.91, 289.61, 5.44, 293.33, 6.97);
        context.bezierCurveTo(291.8, 7.37, 290.27, 7.79, 288.75, 8.2);
        context.bezierCurveTo(288.57, 9.35, 288.4, 10.48, 288.23, 11.63);
        context.bezierCurveTo(290.21, 12.03, 292.36, 12.09, 294.17, 13.09);
        context.bezierCurveTo(297.49, 17.77, 298.92, 23.76, 303.59, 27.48);
        context.bezierCurveTo(303.77, 26.73, 304.15, 25.24, 304.33, 24.49);
        context.bezierCurveTo(313.27, 37.99, 318.95, 53.23, 323.55, 68.64);
        context.bezierCurveTo(324.63, 74.49, 325.4, 80.4, 326.52, 86.24);
        context.bezierCurveTo(325.95, 86.44, 324.79, 86.83, 324.2, 87.03);
        context.bezierCurveTo(325.05, 92.33, 325.29, 97.73, 324.76, 103.11);
        context.bezierCurveTo(324.05, 107.75, 328.65, 110.71, 329.96, 114.8);
        context.bezierCurveTo(332.24, 122.24, 329.63, 129.99, 326.64, 136.81);
        context.bezierCurveTo(323.88, 143.03, 324.21, 150.15, 321.03, 156.2);
        context.bezierCurveTo(318.27, 161.83, 316.97, 168.53, 311.97, 172.76);
        context.bezierCurveTo(308.15, 175.27, 303.72, 177.03, 299.13, 177.33);
        context.bezierCurveTo(299.27, 176.05, 299.41, 174.76, 299.57, 173.47);
        context.bezierCurveTo(302.19, 171.16, 303.67, 168.05, 304.12, 164.61);
        context.bezierCurveTo(304.56, 160.88, 307.59, 158.43, 309.23, 155.27);
        context.bezierCurveTo(310.77, 150.37, 310.99, 145.17, 312.68, 140.32);
        context.bezierCurveTo(312.96, 139.85, 313.53, 138.95, 313.81, 138.48);
        context.bezierCurveTo(313.97, 132.37, 315.89, 126.41, 315.44, 120.29);
        context.bezierCurveTo(314.47, 120.05, 313.51, 119.81, 312.55, 119.57);
        context.bezierCurveTo(311.91, 115.35, 311.27, 111.13, 310.81, 106.89);
        context.bezierCurveTo(310.27, 102.63, 310.64, 98.33, 310.72, 94.07);
        context.bezierCurveTo(310.93, 89.15, 307.37, 85.37, 304.75, 81.63);
        context.bezierCurveTo(305.21, 81.01, 306.15, 79.81, 306.63, 79.2);
        context.bezierCurveTo(307.24, 76.39, 307.36, 73.52, 307.47, 70.65);
        context.bezierCurveTo(309.63, 61.76, 303.68, 53.69, 303.55, 44.88);
        context.bezierCurveTo(305.16, 46.27, 306.77, 47.67, 308.39, 49.07);
        context.bezierCurveTo(305.24, 39.85, 302.76, 29.27, 294.65, 23.03);
        context.bezierCurveTo(294.92, 24.49, 295.24, 25.96, 295.6, 27.4);
        context.bezierCurveTo(292.85, 26.95, 290.13, 26.39, 287.41, 25.8);
        context.bezierCurveTo(287.49, 24.56, 287.57, 23.32, 287.67, 22.08);
        context.bezierCurveTo(286.44, 21.39, 285.21, 20.71, 283.99, 20.03);
        context.bezierCurveTo(281.51, 18.89, 278.99, 17.73, 276.27, 17.36);
        context.bezierCurveTo(272.93, 19.17, 270.2, 21.88, 267.04, 23.96);
        context.bezierCurveTo(264.13, 21.01, 261.03, 18.19, 257.25, 16.41);
        context.bezierCurveTo(259.51, 19.64, 262.23, 22.47, 265.04, 25.21);
        context.bezierCurveTo(265.81, 27, 266.49, 28.83, 267.17, 30.65);
        context.bezierCurveTo(265.84, 31.63, 264.48, 32.55, 263.25, 33.63);
        context.bezierCurveTo(265.27, 37.87, 267.8, 41.83, 269.83, 46.07);
        context.bezierCurveTo(267.09, 44.08, 263.99, 42.68, 260.63, 42.21);
        context.bezierCurveTo(260.52, 42.19, 260.31, 42.13, 260.2, 42.09);
        context.bezierCurveTo(260.84, 41.21, 261.48, 40.32, 262.11, 39.43);
        context.bezierCurveTo(261.12, 36.41, 260.71, 32.64, 257.6, 30.99);
        context.bezierCurveTo(255.15, 30.21, 252.53, 30.87, 250.04, 30.97);
        context.bezierCurveTo(247.93, 34.32, 244.67, 36.49, 240.96, 37.71);
        context.bezierCurveTo(240.24, 39.2, 239.51, 40.68, 238.84, 42.2);
        context.bezierCurveTo(237.71, 40.47, 236.57, 38.72, 235.44, 36.99);
        context.bezierCurveTo(230.92, 39.13, 226.97, 42.24, 223.09, 45.35);
        context.bezierCurveTo(224.67, 46.32, 226.24, 47.29, 227.81, 48.27);
        context.bezierCurveTo(225.76, 48.55, 223.71, 48.83, 221.67, 49.12);
        context.bezierCurveTo(222.6, 50.11, 223.55, 51.11, 224.49, 52.11);
        context.bezierCurveTo(223.6, 53.31, 222.72, 54.51, 221.84, 55.71);
        context.bezierCurveTo(222.04, 57.84, 222.24, 59.97, 222.44, 62.12);
        context.bezierCurveTo(219.39, 60.44, 216.47, 58.51, 213.43, 56.8);
        context.bezierCurveTo(213.99, 52.36, 215.81, 47.91, 214.73, 43.41);
        context.bezierCurveTo(213.85, 39.57, 213.63, 35.64, 214.11, 31.73);
        context.bezierCurveTo(211.67, 32.05, 209.24, 32.36, 206.83, 32.67);
        context.bezierCurveTo(207.25, 31.69, 207.68, 30.72, 208.12, 29.75);
        context.bezierCurveTo(211.23, 29.52, 214.48, 28.99, 214.53, 25.2);
        context.bezierCurveTo(215.99, 24.68, 217.45, 24.17, 218.92, 23.65);
        context.bezierCurveTo(220.49, 21.85, 221.64, 19.43, 223.87, 18.33);
        context.bezierCurveTo(226.81, 19.69, 229.69, 21.29, 232.97, 21.73);
        context.bezierCurveTo(232.92, 20.27, 232.88, 18.81, 232.84, 17.36);
        context.bezierCurveTo(234.53, 16.99, 236.23, 16.64, 237.93, 16.32);
        context.bezierCurveTo(237.43, 15.76, 236.44, 14.65, 235.95, 14.09);
        context.bezierCurveTo(239.35, 11.56, 242.4, 8.61, 245.57, 5.81);
        context.bezierCurveTo(252.68, 6.93, 259.85, 9.08, 265.2, 14.13);
        context.bezierCurveTo(267.16, 16.68, 270.19, 15.53, 272.52, 14.28);
        context.bezierCurveTo(272.72, 13.93, 273.12, 13.24, 273.32, 12.89);
        context.closePath();
        context.fillStyle = fillColor2;
        context.fill();


    }

    function drawPath3() {
        context.beginPath();
        context.moveTo(245.57, 5.81);
        context.bezierCurveTo(247.11, 4.81, 248.61, 3.24, 250.6, 3.41);
        context.bezierCurveTo(256.88, 3.65, 262.92, 5.53, 268.77, 7.69);
        context.bezierCurveTo(268.73, 8.19, 268.67, 9.16, 268.63, 9.64);
        context.bezierCurveTo(270.19, 10.72, 271.75, 11.8, 273.32, 12.89);
        context.bezierCurveTo(273.12, 13.24, 272.72, 13.93, 272.52, 14.28);
        context.bezierCurveTo(270.19, 15.53, 267.16, 16.68, 265.2, 14.13);
        context.bezierCurveTo(259.85, 9.08, 252.68, 6.93, 245.57, 5.81);
        context.closePath();
        context.fillStyle = fillColor3;
        context.fill();


    }

    function drawPath4() {
        context.beginPath();
        context.moveTo(210.79, 11.53);
        context.bezierCurveTo(213.59, 8.91, 217.52, 7.47, 221.33, 7.48);
        context.bezierCurveTo(226.36, 7.73, 229.49, 12.09, 233.33, 14.72);
        context.bezierCurveTo(233.99, 14.56, 235.29, 14.25, 235.95, 14.09);
        context.bezierCurveTo(236.44, 14.65, 237.43, 15.76, 237.93, 16.32);
        context.bezierCurveTo(236.23, 16.64, 234.53, 16.99, 232.84, 17.36);
        context.bezierCurveTo(232.88, 18.81, 232.92, 20.27, 232.97, 21.73);
        context.bezierCurveTo(229.69, 21.29, 226.81, 19.69, 223.87, 18.33);
        context.bezierCurveTo(221.64, 19.43, 220.49, 21.85, 218.92, 23.65);
        context.bezierCurveTo(217.45, 24.17, 215.99, 24.68, 214.53, 25.2);
        context.bezierCurveTo(214.48, 28.99, 211.23, 29.52, 208.12, 29.75);
        context.bezierCurveTo(207.68, 30.72, 207.25, 31.69, 206.83, 32.67);
        context.bezierCurveTo(209.24, 32.36, 211.67, 32.05, 214.11, 31.73);
        context.bezierCurveTo(213.63, 35.64, 213.85, 39.57, 214.73, 43.41);
        context.bezierCurveTo(215.81, 47.91, 213.99, 52.36, 213.43, 56.8);
        context.bezierCurveTo(210.53, 55.61, 207.63, 54.47, 204.8, 53.12);
        context.bezierCurveTo(204.6, 54.41, 204.45, 55.71, 204.16, 56.99);
        context.bezierCurveTo(202.44, 57.36, 200.67, 57.51, 198.92, 57.71);
        context.bezierCurveTo(199.39, 59.63, 199.12, 62.48, 201.43, 63.25);
        context.bezierCurveTo(203.69, 63.81, 206.07, 63.88, 208.35, 64.41);
        context.bezierCurveTo(211.07, 67.96, 211.33, 72.6, 212.16, 76.83);
        context.bezierCurveTo(210.03, 74.87, 207.72, 73.11, 205.37, 71.41);
        context.bezierCurveTo(205.83, 77.73, 210.69, 82.32, 212.51, 88.16);
        context.bezierCurveTo(214.12, 93.27, 215.53, 98.47, 218.08, 103.2);
        context.bezierCurveTo(218.6, 101.83, 219.09, 100.44, 219.57, 99.04);
        context.bezierCurveTo(220.24, 107.73, 222.53, 116.15, 223.65, 124.77);
        context.bezierCurveTo(224.48, 130.68, 228.85, 136.13, 226.73, 142.29);
        context.bezierCurveTo(225.45, 139.73, 224.27, 137.11, 223.65, 134.31);
        context.bezierCurveTo(221.84, 125.55, 219.51, 116.92, 217.6, 108.19);
        context.bezierCurveTo(214.76, 105.11, 210.95, 103.15, 207.61, 100.64);
        context.bezierCurveTo(207.39, 101.57, 207.16, 102.51, 206.96, 103.44);
        context.bezierCurveTo(204.75, 104.11, 201.72, 104.25, 200.95, 106.93);
        context.bezierCurveTo(200.37, 110.53, 200.31, 114.28, 198.47, 117.56);
        context.bezierCurveTo(203.09, 123.49, 204.45, 131, 206.68, 138);
        context.bezierCurveTo(207.47, 140.17, 207.01, 142.47, 206.77, 144.68);
        context.bezierCurveTo(207.96, 147.25, 209.24, 149.77, 210.57, 152.27);
        context.bezierCurveTo(210.24, 152.63, 209.59, 153.32, 209.25, 153.68);
        context.bezierCurveTo(207.19, 153.07, 205.17, 152.35, 203.17, 151.61);
        context.bezierCurveTo(200.6, 146.29, 197.88, 141.01, 194.23, 136.35);
        context.bezierCurveTo(192.49, 135.81, 190.48, 135.61, 189.27, 134.08);
        context.bezierCurveTo(180.68, 124.92, 178.59, 112.07, 174.72, 100.57);
        context.bezierCurveTo(171.49, 87.84, 166.25, 75.37, 166.28, 62.03);
        context.bezierCurveTo(165.93, 52.83, 170.03, 44.11, 169.25, 34.88);
        context.bezierCurveTo(170.59, 29.69, 172.68, 24.73, 173.67, 19.44);
        context.bezierCurveTo(176.61, 14.99, 180.87, 10.05, 186.49, 9.49);
        context.bezierCurveTo(191.44, 12.23, 196.31, 16.2, 197.76, 21.92);
        context.bezierCurveTo(199.33, 22.95, 200.91, 23.96, 202.49, 24.97);
        context.bezierCurveTo(205.68, 20.75, 207.41, 15.6, 210.79, 11.53);
        context.closePath();
        context.moveTo(174.95, 23.97);
        context.bezierCurveTo(175.87, 24.36, 176.79, 24.73, 177.71, 25.12);
        context.bezierCurveTo(178.27, 26.64, 178.81, 28.15, 179.37, 29.67);
        context.bezierCurveTo(178.17, 33.71, 176.81, 37.71, 175.55, 41.73);
        context.bezierCurveTo(174.71, 39.8, 173.83, 37.87, 172.2, 36.47);
        context.bezierCurveTo(171.6, 40.67, 173.83, 44.35, 175.48, 48.01);
        context.bezierCurveTo(172.99, 50.32, 172.03, 53.65, 170.05, 56.33);
        context.bezierCurveTo(170.39, 56.85, 171.05, 57.89, 171.37, 58.41);
        context.bezierCurveTo(167.85, 66.49, 171.69, 75.03, 172.19, 83.29);
        context.bezierCurveTo(172.51, 89.36, 175.92, 94.55, 178.09, 100.05);
        context.bezierCurveTo(180.64, 105.8, 181.52, 112.51, 186.24, 117.05);
        context.bezierCurveTo(189.36, 121.88, 191.95, 127.01, 195.75, 131.39);
        context.bezierCurveTo(196.95, 136.96, 201.36, 140.87, 205.19, 144.79);
        context.bezierCurveTo(204.33, 138.97, 199.52, 134.75, 198.44, 128.99);
        context.bezierCurveTo(197.49, 123.81, 196.05, 118.73, 193.76, 113.99);
        context.bezierCurveTo(194.31, 113.31, 194.84, 112.63, 195.39, 111.95);
        context.lineTo(194.93, 111.64);
        context.bezierCurveTo(190.89, 104.07, 188.76, 95.73, 185.04, 88.07);
        context.lineTo(185.32, 86.97);
        context.bezierCurveTo(184.08, 83.21, 183.15, 79.37, 183.39, 75.39);
        context.bezierCurveTo(183.6, 72.48, 180.61, 69.11, 183.25, 66.71);
        context.bezierCurveTo(182.6, 62.91, 183, 59.08, 184.87, 55.67);
        context.bezierCurveTo(182.91, 54.17, 180.56, 52.88, 179.85, 50.33);
        context.bezierCurveTo(181.76, 50.41, 183.68, 50.55, 185.59, 50.71);
        context.bezierCurveTo(186.85, 55.69, 189.83, 59.95, 193.45, 63.52);
        context.bezierCurveTo(193.41, 58.79, 189.87, 55.35, 188.19, 51.17);
        context.bezierCurveTo(185.15, 43.85, 184.81, 35.83, 183.2, 28.15);
        context.bezierCurveTo(182.73, 25.81, 183.07, 23.44, 183.27, 21.09);
        context.bezierCurveTo(180.51, 22.09, 177.72, 23.04, 174.95, 23.97);
        context.closePath();
        context.moveTo(186.81, 36.71);
        context.bezierCurveTo(186.31, 43.09, 191.43, 47.64, 195.39, 51.89);
        context.bezierCurveTo(196.32, 53.36, 198.01, 53.39, 199.56, 53.55);
        context.bezierCurveTo(200.56, 52.44, 201.57, 51.33, 202.59, 50.23);
        context.bezierCurveTo(204.17, 50.39, 205.76, 50.56, 207.36, 50.72);
        context.bezierCurveTo(207.55, 45.39, 207.19, 40.05, 207.24, 34.71);
        context.bezierCurveTo(206.51, 34.6, 205.05, 34.37, 204.32, 34.27);
        context.bezierCurveTo(203.13, 38.07, 203.09, 42.04, 203.47, 45.96);
        context.bezierCurveTo(199.39, 43.84, 200.56, 39.4, 202, 35.99);
        context.bezierCurveTo(201.28, 35.68, 199.84, 35.07, 199.12, 34.75);
        context.bezierCurveTo(196.52, 29.85, 193.87, 24.97, 190.69, 20.43);
        context.bezierCurveTo(185.21, 24.03, 186.91, 31.17, 186.81, 36.71);
        context.closePath();
        context.fillStyle = fillColor4;
        context.fill();


    }

    function drawPath5() {
        context.beginPath();
        context.moveTo(288.75, 8.2);
        context.bezierCurveTo(290.27, 7.79, 291.8, 7.37, 293.33, 6.97);
        context.bezierCurveTo(294.72, 7.84, 296.08, 8.75, 297.29, 9.84);
        context.bezierCurveTo(299.61, 14.75, 301.75, 19.73, 304.33, 24.49);
        context.bezierCurveTo(304.15, 25.24, 303.77, 26.73, 303.59, 27.48);
        context.bezierCurveTo(298.92, 23.76, 297.49, 17.77, 294.17, 13.09);
        context.bezierCurveTo(292.36, 12.09, 290.21, 12.03, 288.23, 11.63);
        context.bezierCurveTo(288.4, 10.48, 288.57, 9.35, 288.75, 8.2);
        context.closePath();
        context.fillStyle = fillColor5;
        context.fill();


    }

    function drawPath6() {
        context.beginPath();
        context.moveTo(297.29, 9.84);
        context.bezierCurveTo(301.28, 13.89, 305.15, 18.04, 309.53, 21.64);
        context.bezierCurveTo(315.64, 33.88, 320.21, 46.83, 325.01, 59.63);
        context.bezierCurveTo(325.73, 61.85, 327.15, 63.72, 328.56, 65.56);
        context.bezierCurveTo(328.57, 65.69, 328.63, 65.96, 328.65, 66.08);
        context.bezierCurveTo(326.59, 70.41, 329.16, 74.88, 329.53, 79.27);
        context.bezierCurveTo(330.65, 88.13, 333.21, 96.75, 334.19, 105.64);
        context.bezierCurveTo(334.81, 106.17, 336.07, 107.25, 336.69, 107.79);
        context.bezierCurveTo(336.79, 111.85, 336.75, 115.91, 336.73, 119.97);
        context.bezierCurveTo(332.07, 122.95, 331.55, 128.72, 330.17, 133.57);
        context.bezierCurveTo(326.77, 147.56, 322.33, 161.52, 314.88, 173.92);
        context.bezierCurveTo(315.52, 174.03, 316.8, 174.24, 317.44, 174.35);
        context.bezierCurveTo(317.25, 174.57, 316.85, 175.04, 316.65, 175.27);
        context.bezierCurveTo(312.65, 176.09, 308.25, 176.21, 304.81, 178.69);
        context.bezierCurveTo(299.65, 182.13, 296.65, 188.43, 290.43, 190.29);
        context.bezierCurveTo(290.32, 189.6, 290.11, 188.2, 290, 187.51);
        context.bezierCurveTo(293.23, 184.29, 296.23, 180.85, 299.13, 177.33);
        context.bezierCurveTo(303.72, 177.03, 308.15, 175.27, 311.97, 172.76);
        context.bezierCurveTo(316.97, 168.53, 318.27, 161.83, 321.03, 156.2);
        context.bezierCurveTo(324.21, 150.15, 323.88, 143.03, 326.64, 136.81);
        context.bezierCurveTo(329.63, 129.99, 332.24, 122.24, 329.96, 114.8);
        context.bezierCurveTo(328.65, 110.71, 324.05, 107.75, 324.76, 103.11);
        context.bezierCurveTo(325.29, 97.73, 325.05, 92.33, 324.2, 87.03);
        context.bezierCurveTo(324.79, 86.83, 325.95, 86.44, 326.52, 86.24);
        context.bezierCurveTo(325.4, 80.4, 324.63, 74.49, 323.55, 68.64);
        context.bezierCurveTo(318.95, 53.23, 313.27, 37.99, 304.33, 24.49);
        context.bezierCurveTo(301.75, 19.73, 299.61, 14.75, 297.29, 9.84);
        context.closePath();
        context.fillStyle = fillColor6;
        context.fill();


    }

    function drawPath7() {
        context.beginPath();
        context.moveTo(257.25, 16.41);
        context.bezierCurveTo(261.03, 18.19, 264.13, 21.01, 267.04, 23.96);
        context.bezierCurveTo(266.53, 24.28, 265.53, 24.91, 265.04, 25.21);
        context.bezierCurveTo(262.23, 22.47, 259.51, 19.64, 257.25, 16.41);
        context.closePath();
        context.fillStyle = fillColor7;
        context.fill();


    }

    function drawPath8() {
        context.beginPath();
        context.moveTo(276.27, 17.36);
        context.bezierCurveTo(278.99, 17.73, 281.51, 18.89, 283.99, 20.03);
        context.bezierCurveTo(282.09, 22.64, 279.13, 25.09, 279.39, 28.61);
        context.bezierCurveTo(279.41, 35.55, 280.75, 42.4, 280.69, 49.33);
        context.bezierCurveTo(277.93, 57, 282.13, 64.91, 287.39, 70.4);
        context.bezierCurveTo(287.52, 78.79, 293.31, 85.33, 295.56, 93.09);
        context.bezierCurveTo(297.96, 100.79, 301.55, 108.05, 303.65, 115.85);
        context.bezierCurveTo(303.52, 119.37, 303.45, 122.92, 303.95, 126.43);
        context.bezierCurveTo(300.92, 133.43, 297.92, 140.69, 292.24, 146.03);
        context.bezierCurveTo(291.51, 143.11, 290.84, 140.17, 290.2, 137.24);
        context.bezierCurveTo(289.09, 137.91, 288, 138.57, 286.92, 139.25);
        context.bezierCurveTo(292.12, 130.93, 283.51, 122.51, 285.65, 113.83);
        context.bezierCurveTo(284.96, 107.65, 283.01, 101.71, 281.21, 95.79);
        context.bezierCurveTo(282.57, 95.96, 283.93, 96.13, 285.31, 96.31);
        context.bezierCurveTo(285.27, 95.51, 285.2, 93.92, 285.16, 93.12);
        context.bezierCurveTo(283.41, 92.99, 281.68, 92.84, 279.95, 92.71);
        context.lineTo(279.99, 91.72);
        context.bezierCurveTo(280.01, 90.99, 280.07, 89.51, 280.09, 88.77);
        context.bezierCurveTo(281.43, 89.84, 282.84, 90.79, 284.23, 91.8);
        context.bezierCurveTo(284.05, 85.83, 281.01, 80.59, 279.08, 75.09);
        context.bezierCurveTo(278.28, 72.41, 276.41, 70.32, 274.55, 68.33);
        context.bezierCurveTo(274.29, 68.04, 273.8, 67.45, 273.56, 67.16);
        context.lineTo(273.67, 66.43);
        context.bezierCurveTo(276.61, 59.33, 273.76, 52.08, 269.83, 46.07);
        context.bezierCurveTo(267.8, 41.83, 265.27, 37.87, 263.25, 33.63);
        context.bezierCurveTo(264.48, 32.55, 265.84, 31.63, 267.17, 30.65);
        context.bezierCurveTo(266.49, 28.83, 265.81, 27, 265.04, 25.21);
        context.bezierCurveTo(265.53, 24.91, 266.53, 24.28, 267.04, 23.96);
        context.bezierCurveTo(270.2, 21.88, 272.93, 19.17, 276.27, 17.36);
        context.closePath();
        context.fillStyle = fillColor8;
        context.fill();


    }

    function drawPath9() {
        context.beginPath();
        context.moveTo(174.95, 23.97);
        context.bezierCurveTo(177.72, 23.04, 180.51, 22.09, 183.27, 21.09);
        context.bezierCurveTo(183.07, 23.44, 182.73, 25.81, 183.2, 28.15);
        context.bezierCurveTo(184.81, 35.83, 185.15, 43.85, 188.19, 51.17);
        context.bezierCurveTo(189.87, 55.35, 193.41, 58.79, 193.45, 63.52);
        context.bezierCurveTo(189.83, 59.95, 186.85, 55.69, 185.59, 50.71);
        context.bezierCurveTo(183.68, 50.55, 181.76, 50.41, 179.85, 50.33);
        context.bezierCurveTo(180.56, 52.88, 182.91, 54.17, 184.87, 55.67);
        context.bezierCurveTo(183, 59.08, 182.6, 62.91, 183.25, 66.71);
        context.bezierCurveTo(180.61, 69.11, 183.6, 72.48, 183.39, 75.39);
        context.bezierCurveTo(183.15, 79.37, 184.08, 83.21, 185.32, 86.97);
        context.lineTo(185.04, 88.07);
        context.bezierCurveTo(184.55, 89.73, 184.12, 91.51, 184.73, 93.21);
        context.bezierCurveTo(186.71, 100, 187.61, 108.4, 194.93, 111.64);
        context.lineTo(195.39, 111.95);
        context.bezierCurveTo(194.84, 112.63, 194.31, 113.31, 193.76, 113.99);
        context.bezierCurveTo(196.05, 118.73, 197.49, 123.81, 198.44, 128.99);
        context.bezierCurveTo(199.52, 134.75, 204.33, 138.97, 205.19, 144.79);
        context.bezierCurveTo(201.36, 140.87, 196.95, 136.96, 195.75, 131.39);
        context.bezierCurveTo(191.95, 127.01, 189.36, 121.88, 186.24, 117.05);
        context.bezierCurveTo(181.52, 112.51, 180.64, 105.8, 178.09, 100.05);
        context.bezierCurveTo(175.92, 94.55, 172.51, 89.36, 172.19, 83.29);
        context.bezierCurveTo(171.69, 75.03, 167.85, 66.49, 171.37, 58.41);
        context.bezierCurveTo(171.05, 57.89, 170.39, 56.85, 170.05, 56.33);
        context.bezierCurveTo(172.03, 53.65, 172.99, 50.32, 175.48, 48.01);
        context.bezierCurveTo(173.83, 44.35, 171.6, 40.67, 172.2, 36.47);
        context.bezierCurveTo(173.83, 37.87, 174.71, 39.8, 175.55, 41.73);
        context.bezierCurveTo(176.81, 37.71, 178.17, 33.71, 179.37, 29.67);
        context.bezierCurveTo(178.81, 28.15, 178.27, 26.64, 177.71, 25.12);
        context.bezierCurveTo(176.79, 24.73, 175.87, 24.36, 174.95, 23.97);
        context.closePath();
        context.fillStyle = fillColor9;
        context.fill();


    }

    function drawPath10() {
        context.beginPath();
        context.moveTo(186.81, 36.71);
        context.bezierCurveTo(186.91, 31.17, 185.21, 24.03, 190.69, 20.43);
        context.bezierCurveTo(193.87, 24.97, 196.52, 29.85, 199.12, 34.75);
        context.bezierCurveTo(199.84, 35.07, 201.28, 35.68, 202, 35.99);
        context.bezierCurveTo(200.56, 39.4, 199.39, 43.84, 203.47, 45.96);
        context.bezierCurveTo(203.09, 42.04, 203.13, 38.07, 204.32, 34.27);
        context.bezierCurveTo(205.05, 34.37, 206.51, 34.6, 207.24, 34.71);
        context.bezierCurveTo(207.19, 40.05, 207.55, 45.39, 207.36, 50.72);
        context.bezierCurveTo(205.76, 50.56, 204.17, 50.39, 202.59, 50.23);
        context.bezierCurveTo(201.57, 51.33, 200.56, 52.44, 199.56, 53.55);
        context.bezierCurveTo(198.01, 53.39, 196.32, 53.36, 195.39, 51.89);
        context.bezierCurveTo(191.43, 47.64, 186.31, 43.09, 186.81, 36.71);
        context.closePath();
        context.fillStyle = fillColor10;
        context.fill();


    }

    function drawPath11() {
        context.beginPath();
        context.moveTo(279.39, 28.61);
        context.bezierCurveTo(279.13, 25.09, 282.09, 22.64, 283.99, 20.03);
        context.bezierCurveTo(285.21, 20.71, 286.44, 21.39, 287.67, 22.08);
        context.bezierCurveTo(287.57, 23.32, 287.49, 24.56, 287.41, 25.8);
        context.bezierCurveTo(290.13, 26.39, 292.85, 26.95, 295.6, 27.4);
        context.bezierCurveTo(299.23, 31.99, 301.84, 37.2, 304.17, 42.52);
        context.bezierCurveTo(302.8, 42.55, 301.43, 42.57, 300.05, 42.6);
        context.bezierCurveTo(301.03, 47.96, 302.68, 53.15, 303.6, 58.52);
        context.bezierCurveTo(300.13, 52.83, 297.43, 46.73, 294.81, 40.63);
        context.bezierCurveTo(292.97, 36.33, 292.68, 31.01, 288.87, 27.85);
        context.bezierCurveTo(286.6, 27.43, 283.77, 27.84, 282.6, 30.08);
        context.bezierCurveTo(280.48, 32.47, 284.13, 34.73, 285.28, 36.69);
        context.bezierCurveTo(289.4, 40.69, 287.39, 47.12, 290.07, 51.87);
        context.bezierCurveTo(294.04, 59.49, 296.83, 67.63, 299.95, 75.63);
        context.bezierCurveTo(296.85, 76.28, 293.75, 76.87, 290.64, 77.43);
        context.bezierCurveTo(292.37, 78.52, 294.12, 79.6, 295.88, 80.67);
        context.bezierCurveTo(300.08, 90.76, 301.72, 101.64, 304.11, 112.24);
        context.bezierCurveTo(303.99, 113.15, 303.76, 114.96, 303.65, 115.85);
        context.bezierCurveTo(301.55, 108.05, 297.96, 100.79, 295.56, 93.09);
        context.bezierCurveTo(293.31, 85.33, 287.52, 78.79, 287.39, 70.4);
        context.bezierCurveTo(286.24, 63.05, 281.21, 56.91, 280.69, 49.33);
        context.bezierCurveTo(280.75, 42.4, 279.41, 35.55, 279.39, 28.61);
        context.closePath();
        context.fillStyle = fillColor11;
        context.fill();


    }

    function drawPath12() {
        context.beginPath();
        context.moveTo(294.65, 23.03);
        context.bezierCurveTo(302.76, 29.27, 305.24, 39.85, 308.39, 49.07);
        context.bezierCurveTo(306.77, 47.67, 305.16, 46.27, 303.55, 44.88);
        context.bezierCurveTo(303.68, 53.69, 309.63, 61.76, 307.47, 70.65);
        context.bezierCurveTo(305.73, 66.76, 304.43, 62.69, 303.6, 58.52);
        context.bezierCurveTo(302.68, 53.15, 301.03, 47.96, 300.05, 42.6);
        context.bezierCurveTo(301.43, 42.57, 302.8, 42.55, 304.17, 42.52);
        context.bezierCurveTo(301.84, 37.2, 299.23, 31.99, 295.6, 27.4);
        context.bezierCurveTo(295.24, 25.96, 294.92, 24.49, 294.65, 23.03);
        context.closePath();
        context.fillStyle = fillColor12;
        context.fill();


    }

    function drawPath13() {
        context.beginPath();
        context.moveTo(282.6, 30.08);
        context.bezierCurveTo(283.77, 27.84, 286.6, 27.43, 288.87, 27.85);
        context.bezierCurveTo(292.68, 31.01, 292.97, 36.33, 294.81, 40.63);
        context.bezierCurveTo(297.43, 46.73, 300.13, 52.83, 303.6, 58.52);
        context.bezierCurveTo(304.43, 62.69, 305.73, 66.76, 307.47, 70.65);
        context.bezierCurveTo(307.36, 73.52, 307.24, 76.39, 306.63, 79.2);
        context.bezierCurveTo(303.25, 78.96, 299.88, 78.64, 296.51, 78.63);
        context.bezierCurveTo(296.35, 79.13, 296.04, 80.16, 295.88, 80.67);
        context.bezierCurveTo(294.12, 79.6, 292.37, 78.52, 290.64, 77.43);
        context.bezierCurveTo(293.75, 76.87, 296.85, 76.28, 299.95, 75.63);
        context.bezierCurveTo(296.83, 67.63, 294.04, 59.49, 290.07, 51.87);
        context.bezierCurveTo(287.39, 47.12, 289.4, 40.69, 285.28, 36.69);
        context.bezierCurveTo(284.13, 34.73, 280.48, 32.47, 282.6, 30.08);
        context.closePath();
        context.fillStyle = fillColor13;
        context.fill();


    }

    function drawPath14() {
        context.beginPath();
        context.moveTo(250.04, 30.97);
        context.bezierCurveTo(252.53, 30.87, 255.15, 30.21, 257.6, 30.99);
        context.bezierCurveTo(260.71, 32.64, 261.12, 36.41, 262.11, 39.43);
        context.bezierCurveTo(261.48, 40.32, 260.84, 41.21, 260.2, 42.09);
        context.bezierCurveTo(260.31, 42.13, 260.52, 42.19, 260.63, 42.21);
        context.bezierCurveTo(264.51, 45.59, 269.39, 48.43, 271.33, 53.45);
        context.bezierCurveTo(273.01, 57.55, 273.2, 62.07, 273.67, 66.43);
        context.lineTo(273.56, 67.16);
        context.bezierCurveTo(271.85, 73.4, 275.24, 79.13, 277.39, 84.75);
        context.bezierCurveTo(275.67, 83.27, 273.87, 81.88, 272.08, 80.48);
        context.bezierCurveTo(269.29, 84.39, 265.73, 87.89, 260.79, 88.63);
        context.bezierCurveTo(259.83, 91.2, 258.89, 93.8, 257.97, 96.4);
        context.bezierCurveTo(257.08, 94.92, 256.2, 93.45, 255.31, 91.99);
        context.bezierCurveTo(254, 91.93, 252.68, 91.89, 251.37, 91.85);
        context.bezierCurveTo(250.41, 90.35, 249.45, 88.85, 248.52, 87.35);
        context.bezierCurveTo(247.87, 88.56, 247.48, 89.89, 246.83, 91.11);
        context.bezierCurveTo(244.85, 89.73, 242.87, 88.39, 240.88, 87.05);
        context.bezierCurveTo(240.53, 81.15, 239.6, 75.24, 239.97, 69.33);
        context.bezierCurveTo(240.83, 64.99, 241.04, 60.57, 240.57, 56.17);
        context.bezierCurveTo(239.36, 58.15, 238.16, 60.12, 237.05, 62.16);
        context.bezierCurveTo(236.93, 55.48, 235.99, 48.49, 238.84, 42.2);
        context.bezierCurveTo(239.51, 40.68, 240.24, 39.2, 240.96, 37.71);
        context.bezierCurveTo(244.67, 36.49, 247.93, 34.32, 250.04, 30.97);
        context.closePath();
        context.fillStyle = fillColor14;
        context.fill();


    }

    function drawPath15() {
        context.beginPath();
        context.moveTo(164.68, 63.37);
        context.bezierCurveTo(164.63, 53.68, 166.61, 44.16, 169.25, 34.88);
        context.bezierCurveTo(170.03, 44.11, 165.93, 52.83, 166.28, 62.03);
        context.bezierCurveTo(166.25, 75.37, 171.49, 87.84, 174.72, 100.57);
        context.bezierCurveTo(178.59, 112.07, 180.68, 124.92, 189.27, 134.08);
        context.bezierCurveTo(190.48, 135.61, 192.49, 135.81, 194.23, 136.35);
        context.bezierCurveTo(197.88, 141.01, 200.6, 146.29, 203.17, 151.61);
        context.bezierCurveTo(205.17, 152.35, 207.19, 153.07, 209.25, 153.68);
        context.bezierCurveTo(210.52, 156.76, 211.81, 159.84, 213.23, 162.87);
        context.bezierCurveTo(212.67, 163.41, 211.55, 164.52, 210.99, 165.08);
        context.bezierCurveTo(212.25, 172.25, 218.95, 176.07, 221.73, 182.4);
        context.bezierCurveTo(212.89, 176.07, 207.52, 166.47, 201.61, 157.63);
        context.bezierCurveTo(201.43, 162.04, 203.03, 166.23, 205.59, 169.76);
        context.bezierCurveTo(209.64, 175.4, 213.61, 181.27, 219.05, 185.69);
        context.bezierCurveTo(220.52, 186.56, 220.68, 188.25, 220.72, 189.81);
        context.bezierCurveTo(209.67, 184.13, 202.33, 173.65, 195.55, 163.65);
        context.bezierCurveTo(194.15, 156.04, 189.57, 149.59, 184.41, 144.03);
        context.bezierCurveTo(181.25, 135.64, 178.59, 127.13, 176.99, 118.31);
        context.bezierCurveTo(175.99, 116.88, 174.4, 115.69, 174.15, 113.87);
        context.bezierCurveTo(172.73, 106.31, 170.13, 99.04, 167.36, 91.91);
        context.bezierCurveTo(165.03, 84.95, 166.44, 77.15, 163.21, 70.45);
        context.bezierCurveTo(164.15, 68.2, 164.83, 65.84, 164.68, 63.37);
        context.closePath();
        context.fillStyle = fillColor15;
        context.fill();


    }

    function drawPath16() {
        context.beginPath();
        context.moveTo(223.09, 45.35);
        context.bezierCurveTo(226.97, 42.24, 230.92, 39.13, 235.44, 36.99);
        context.bezierCurveTo(236.57, 38.72, 237.71, 40.47, 238.84, 42.2);
        context.bezierCurveTo(235.99, 48.49, 236.93, 55.48, 237.05, 62.16);
        context.bezierCurveTo(235.11, 73.09, 234.67, 84.35, 236.32, 95.35);
        context.bezierCurveTo(237.52, 104.12, 238.12, 112.96, 239.24, 121.75);
        context.bezierCurveTo(239.01, 122.48, 238.59, 123.93, 238.36, 124.67);
        context.bezierCurveTo(237.27, 122.21, 236.16, 119.77, 234.87, 117.41);
        context.bezierCurveTo(235.49, 126.27, 237.96, 134.84, 240.21, 143.37);
        context.bezierCurveTo(238.84, 146.03, 239.25, 148.93, 241.13, 151.25);
        context.bezierCurveTo(243.92, 155.31, 245.76, 159.89, 246.41, 164.79);
        context.bezierCurveTo(244.91, 162.71, 243.47, 160.57, 242.05, 158.44);
        context.bezierCurveTo(241.15, 159.47, 240.25, 160.49, 239.36, 161.53);
        context.bezierCurveTo(237.28, 158.97, 235.16, 156.47, 233.21, 153.83);
        context.bezierCurveTo(232.32, 151.31, 231.25, 148.79, 229.04, 147.16);
        context.bezierCurveTo(228.27, 145.53, 227.51, 143.91, 226.73, 142.29);
        context.bezierCurveTo(228.85, 136.13, 224.48, 130.68, 223.65, 124.77);
        context.bezierCurveTo(222.53, 116.15, 220.24, 107.73, 219.57, 99.04);
        context.bezierCurveTo(218.71, 91.17, 214.59, 84.24, 212.16, 76.83);
        context.bezierCurveTo(211.33, 72.6, 211.07, 67.96, 208.35, 64.41);
        context.bezierCurveTo(206.07, 63.88, 203.69, 63.81, 201.43, 63.25);
        context.bezierCurveTo(199.12, 62.48, 199.39, 59.63, 198.92, 57.71);
        context.bezierCurveTo(200.67, 57.51, 202.44, 57.36, 204.16, 56.99);
        context.bezierCurveTo(204.45, 55.71, 204.6, 54.41, 204.8, 53.12);
        context.bezierCurveTo(207.63, 54.47, 210.53, 55.61, 213.43, 56.8);
        context.bezierCurveTo(216.47, 58.51, 219.39, 60.44, 222.44, 62.12);
        context.bezierCurveTo(222.24, 59.97, 222.04, 57.84, 221.84, 55.71);
        context.bezierCurveTo(222.72, 54.51, 223.6, 53.31, 224.49, 52.11);
        context.bezierCurveTo(223.55, 51.11, 222.6, 50.11, 221.67, 49.12);
        context.bezierCurveTo(223.71, 48.83, 225.76, 48.55, 227.81, 48.27);
        context.bezierCurveTo(226.24, 47.29, 224.67, 46.32, 223.09, 45.35);
        context.closePath();
        context.fillStyle = fillColor16;
        context.fill();


    }

    function drawPath17() {
        context.beginPath();
        context.moveTo(260.63, 42.21);
        context.bezierCurveTo(263.99, 42.68, 267.09, 44.08, 269.83, 46.07);
        context.bezierCurveTo(273.76, 52.08, 276.61, 59.33, 273.67, 66.43);
        context.bezierCurveTo(273.2, 62.07, 273.01, 57.55, 271.33, 53.45);
        context.bezierCurveTo(269.39, 48.43, 264.51, 45.59, 260.63, 42.21);
        context.closePath();
        context.fillStyle = fillColor17;
        context.fill();


    }

    function drawPath18() {
        context.beginPath();
        context.moveTo(287.39, 70.4);
        context.bezierCurveTo(282.13, 64.91, 277.93, 57, 280.69, 49.33);
        context.bezierCurveTo(281.21, 56.91, 286.24, 63.05, 287.39, 70.4);
        context.closePath();
        context.fillStyle = fillColor18;
        context.fill();


    }

    function drawPath19() {
        context.beginPath();
        context.moveTo(237.05, 62.16);
        context.bezierCurveTo(238.16, 60.12, 239.36, 58.15, 240.57, 56.17);
        context.bezierCurveTo(241.04, 60.57, 240.83, 64.99, 239.97, 69.33);
        context.bezierCurveTo(239.6, 75.24, 240.53, 81.15, 240.88, 87.05);
        context.bezierCurveTo(241.4, 92.75, 246.83, 96.03, 248.47, 101.32);
        context.bezierCurveTo(249.41, 104.57, 252.47, 106.23, 255.07, 108.01);
        context.bezierCurveTo(255.97, 118.35, 258.09, 128.72, 262.48, 138.16);
        context.bezierCurveTo(261.73, 128.59, 257.24, 118.67, 261.35, 109.21);
        context.bezierCurveTo(263.03, 113.93, 263.84, 118.87, 264.85, 123.76);
        context.bezierCurveTo(266.89, 120.33, 268.35, 116.61, 269.89, 112.96);
        context.bezierCurveTo(271.81, 117.41, 274.44, 121.52, 276.47, 125.92);
        context.bezierCurveTo(275.67, 129.68, 272.91, 132.73, 272.01, 136.51);
        context.bezierCurveTo(272.91, 138.25, 274.48, 139.52, 275.81, 140.93);
        context.bezierCurveTo(278.49, 137.8, 277.69, 133.6, 277.89, 129.83);
        context.bezierCurveTo(280.93, 138.17, 280.69, 147.15, 281.64, 155.85);
        context.bezierCurveTo(280.95, 161.29, 280.35, 166.76, 279.35, 172.15);
        context.bezierCurveTo(278.67, 176.03, 275.57, 178.72, 273.44, 181.83);
        context.bezierCurveTo(273.87, 182.35, 274.71, 183.37, 275.12, 183.89);
        context.bezierCurveTo(271.56, 186.64, 267.09, 187.4, 262.77, 188.13);
        context.bezierCurveTo(259.24, 184.13, 258.96, 177.99, 254.19, 175.08);
        context.bezierCurveTo(249.24, 167.83, 249.47, 158.36, 244.81, 150.87);
        context.bezierCurveTo(243.96, 148.67, 243.27, 146.41, 242.57, 144.16);
        context.bezierCurveTo(244.05, 144.31, 245.52, 144.45, 247, 144.6);
        context.bezierCurveTo(241.36, 138.31, 242.03, 129.31, 239.24, 121.75);
        context.bezierCurveTo(238.12, 112.96, 237.52, 104.12, 236.32, 95.35);
        context.bezierCurveTo(234.67, 84.35, 235.11, 73.09, 237.05, 62.16);
        context.closePath();
        context.fillStyle = fillColor19;
        context.fill();


    }

    function drawPath20() {
        context.beginPath();
        context.moveTo(273.56, 67.16);
        context.bezierCurveTo(273.8, 67.45, 274.29, 68.04, 274.55, 68.33);
        context.bezierCurveTo(276.35, 75.16, 279.41, 81.68, 280.09, 88.77);
        context.bezierCurveTo(280.07, 89.51, 280.01, 90.99, 279.99, 91.72);
        context.bezierCurveTo(279.23, 89.36, 278.35, 87.04, 277.39, 84.75);
        context.bezierCurveTo(275.24, 79.13, 271.85, 73.4, 273.56, 67.16);
        context.closePath();
        context.fillStyle = fillColor20;
        context.fill();


    }

    function drawPath21() {
        context.beginPath();
        context.moveTo(328.65, 66.08);
        context.bezierCurveTo(329.79, 71.39, 332.13, 76.41, 332.64, 81.84);
        context.bezierCurveTo(333.01, 90.67, 337.08, 98.87, 336.69, 107.79);
        context.bezierCurveTo(336.07, 107.25, 334.81, 106.17, 334.19, 105.64);
        context.bezierCurveTo(333.21, 96.75, 330.65, 88.13, 329.53, 79.27);
        context.bezierCurveTo(329.16, 74.88, 326.59, 70.41, 328.65, 66.08);
        context.closePath();
        context.fillStyle = fillColor21;
        context.fill();


    }

    function drawPath22() {
        context.beginPath();
        context.moveTo(274.55, 68.33);
        context.bezierCurveTo(276.41, 70.32, 278.28, 72.41, 279.08, 75.09);
        context.bezierCurveTo(281.01, 80.59, 284.05, 85.83, 284.23, 91.8);
        context.bezierCurveTo(282.84, 90.79, 281.43, 89.84, 280.09, 88.77);
        context.bezierCurveTo(279.41, 81.68, 276.35, 75.16, 274.55, 68.33);
        context.closePath();
        context.fillStyle = fillColor22;
        context.fill();


    }

    function drawPath23() {
        context.beginPath();
        context.moveTo(205.37, 71.41);
        context.bezierCurveTo(207.72, 73.11, 210.03, 74.87, 212.16, 76.83);
        context.bezierCurveTo(214.59, 84.24, 218.71, 91.17, 219.57, 99.04);
        context.bezierCurveTo(219.09, 100.44, 218.6, 101.83, 218.08, 103.2);
        context.bezierCurveTo(215.53, 98.47, 214.12, 93.27, 212.51, 88.16);
        context.bezierCurveTo(210.69, 82.32, 205.83, 77.73, 205.37, 71.41);
        context.closePath();
        context.fillStyle = fillColor23;
        context.fill();


    }

    function drawPath24() {
        context.beginPath();
        context.moveTo(296.51, 78.63);
        context.bezierCurveTo(299.88, 78.64, 303.25, 78.96, 306.63, 79.2);
        context.bezierCurveTo(306.15, 79.81, 305.21, 81.01, 304.75, 81.63);
        context.bezierCurveTo(307.37, 85.37, 310.93, 89.15, 310.72, 94.07);
        context.bezierCurveTo(310.64, 98.33, 310.27, 102.63, 310.81, 106.89);
        context.bezierCurveTo(309.61, 107.48, 308.43, 108.05, 307.25, 108.64);
        context.bezierCurveTo(307.49, 111.76, 307.71, 114.88, 307.89, 118);
        context.bezierCurveTo(306.6, 116.09, 305.29, 114.2, 304.11, 112.24);
        context.bezierCurveTo(301.72, 101.64, 300.08, 90.76, 295.88, 80.67);
        context.bezierCurveTo(296.04, 80.16, 296.35, 79.13, 296.51, 78.63);
        context.closePath();
        context.fillStyle = fillColor24;
        context.fill();


    }

    function drawPath25() {
        context.beginPath();
        context.moveTo(260.79, 88.63);
        context.bezierCurveTo(265.73, 87.89, 269.29, 84.39, 272.08, 80.48);
        context.bezierCurveTo(273.87, 81.88, 275.67, 83.27, 277.39, 84.75);
        context.bezierCurveTo(278.35, 87.04, 279.23, 89.36, 279.99, 91.72);
        context.lineTo(279.95, 92.71);
        context.bezierCurveTo(279.57, 98.13, 279.51, 103.65, 280.85, 108.96);
        context.bezierCurveTo(282.56, 115.87, 285.33, 122.67, 284.77, 129.92);
        context.bezierCurveTo(285.41, 136.87, 283.4, 143.56, 282.39, 150.36);
        context.bezierCurveTo(282.12, 152.19, 281.88, 154.03, 281.64, 155.85);
        context.bezierCurveTo(280.69, 147.15, 280.93, 138.17, 277.89, 129.83);
        context.bezierCurveTo(277.69, 133.6, 278.49, 137.8, 275.81, 140.93);
        context.bezierCurveTo(274.48, 139.52, 272.91, 138.25, 272.01, 136.51);
        context.bezierCurveTo(272.91, 132.73, 275.67, 129.68, 276.47, 125.92);
        context.bezierCurveTo(274.44, 121.52, 271.81, 117.41, 269.89, 112.96);
        context.bezierCurveTo(268.35, 116.61, 266.89, 120.33, 264.85, 123.76);
        context.bezierCurveTo(263.84, 118.87, 263.03, 113.93, 261.35, 109.21);
        context.bezierCurveTo(257.24, 118.67, 261.73, 128.59, 262.48, 138.16);
        context.bezierCurveTo(258.09, 128.72, 255.97, 118.35, 255.07, 108.01);
        context.bezierCurveTo(252.47, 106.23, 249.41, 104.57, 248.47, 101.32);
        context.bezierCurveTo(246.83, 96.03, 241.4, 92.75, 240.88, 87.05);
        context.bezierCurveTo(242.87, 88.39, 244.85, 89.73, 246.83, 91.11);
        context.bezierCurveTo(247.48, 89.89, 247.87, 88.56, 248.52, 87.35);
        context.bezierCurveTo(249.45, 88.85, 250.41, 90.35, 251.37, 91.85);
        context.bezierCurveTo(252.68, 91.89, 254, 91.93, 255.31, 91.99);
        context.bezierCurveTo(256.2, 93.45, 257.08, 94.92, 257.97, 96.4);
        context.bezierCurveTo(258.89, 93.8, 259.83, 91.2, 260.79, 88.63);
        context.closePath();
        context.fillStyle = fillColor25;
        context.fill();


    }

    function drawPath26() {
        context.beginPath();
        context.moveTo(184.73, 93.21);
        context.bezierCurveTo(184.12, 91.51, 184.55, 89.73, 185.04, 88.07);
        context.bezierCurveTo(188.76, 95.73, 190.89, 104.07, 194.93, 111.64);
        context.bezierCurveTo(187.61, 108.4, 186.71, 100, 184.73, 93.21);
        context.closePath();
        context.fillStyle = fillColor26;
        context.fill();


    }

    function drawPath27() {
        context.beginPath();
        context.moveTo(279.95, 92.71);
        context.bezierCurveTo(281.68, 92.84, 283.41, 92.99, 285.16, 93.12);
        context.bezierCurveTo(285.2, 93.92, 285.27, 95.51, 285.31, 96.31);
        context.bezierCurveTo(283.93, 96.13, 282.57, 95.96, 281.21, 95.79);
        context.bezierCurveTo(283.01, 101.71, 284.96, 107.65, 285.65, 113.83);
        context.bezierCurveTo(283.51, 122.51, 292.12, 130.93, 286.92, 139.25);
        context.bezierCurveTo(288, 138.57, 289.09, 137.91, 290.2, 137.24);
        context.bezierCurveTo(290.84, 140.17, 291.51, 143.11, 292.24, 146.03);
        context.bezierCurveTo(297.92, 140.69, 300.92, 133.43, 303.95, 126.43);
        context.bezierCurveTo(304.13, 128.01, 304.39, 129.61, 304.55, 131.21);
        context.bezierCurveTo(304.23, 135.32, 303.16, 139.32, 302.16, 143.31);
        context.bezierCurveTo(300.17, 145.53, 297.91, 147.55, 295.07, 148.6);
        context.bezierCurveTo(294.12, 155.47, 288.8, 160.41, 286.28, 166.65);
        context.bezierCurveTo(285.35, 161.31, 287.29, 156.12, 288.03, 150.88);
        context.bezierCurveTo(286.15, 150.71, 284.27, 150.53, 282.39, 150.36);
        context.bezierCurveTo(283.4, 143.56, 285.41, 136.87, 284.77, 129.92);
        context.bezierCurveTo(285.33, 122.67, 282.56, 115.87, 280.85, 108.96);
        context.bezierCurveTo(279.51, 103.65, 279.57, 98.13, 279.95, 92.71);
        context.closePath();
        context.fillStyle = fillColor27;
        context.fill();


    }

    function drawPath28() {
        context.beginPath();
        context.moveTo(381.43, 112.33);
        context.bezierCurveTo(385.95, 105.53, 390.83, 97.72, 398.69, 94.56);
        context.bezierCurveTo(403.32, 95.93, 407.2, 98.99, 411.56, 100.97);
        context.lineTo(412.28, 101.49);
        context.bezierCurveTo(411.79, 101.76, 410.79, 102.28, 410.28, 102.53);
        context.bezierCurveTo(410.24, 103.63, 410.21, 104.72, 410.21, 105.83);
        context.bezierCurveTo(408.89, 105.68, 407.57, 105.53, 406.27, 105.39);
        context.bezierCurveTo(405.65, 106.45, 405.04, 107.52, 404.45, 108.6);
        context.bezierCurveTo(404.01, 106.33, 403.57, 104.07, 403.09, 101.81);
        context.bezierCurveTo(401.95, 106.92, 405.32, 112.11, 402.92, 116.99);
        context.bezierCurveTo(402.23, 118.87, 402.88, 120.89, 402.96, 122.83);
        context.bezierCurveTo(400.52, 126.15, 399.67, 130.16, 399.43, 134.2);
        context.bezierCurveTo(398.97, 134.43, 398.05, 134.89, 397.59, 135.12);
        context.bezierCurveTo(396.29, 140.75, 394.88, 146.48, 395.91, 152.28);
        context.bezierCurveTo(394.39, 156.95, 394.09, 162.2, 391.05, 166.25);
        context.bezierCurveTo(389.17, 169.08, 387.67, 172.13, 386.52, 175.32);
        context.bezierCurveTo(388.05, 178.65, 384.69, 180.71, 382.79, 182.91);
        context.bezierCurveTo(385.91, 183.76, 389.12, 184.2, 392.36, 183.93);
        context.bezierCurveTo(390.63, 188.84, 387.99, 194.75, 391.88, 199.36);
        context.bezierCurveTo(390.93, 201.39, 390.01, 203.41, 389.08, 205.44);
        context.bezierCurveTo(388.52, 205.13, 387.41, 204.55, 386.85, 204.24);
        context.bezierCurveTo(386.56, 204.47, 385.99, 204.91, 385.69, 205.13);
        context.bezierCurveTo(384.56, 203.61, 383.47, 202.08, 382.24, 200.64);
        context.bezierCurveTo(380.71, 202.07, 379.35, 203.65, 377.95, 205.2);
        context.bezierCurveTo(378.01, 203.29, 378.09, 201.39, 378.17, 199.49);
        context.bezierCurveTo(376.19, 200.69, 374.21, 201.92, 372.19, 203.01);
        context.bezierCurveTo(371.97, 201.43, 370.77, 200.13, 369.19, 199.87);
        context.bezierCurveTo(369.83, 199.6, 371.08, 199.07, 371.72, 198.8);
        context.bezierCurveTo(373.15, 196.15, 374.28, 193.35, 375.83, 190.75);
        context.bezierCurveTo(377.51, 189.03, 379.17, 187.28, 380.75, 185.47);
        context.bezierCurveTo(379.51, 182.51, 378.08, 179.64, 376.49, 176.85);
        context.bezierCurveTo(380.85, 170.79, 377.8, 162.96, 381.2, 156.57);
        context.bezierCurveTo(382.88, 152.25, 385.59, 148.41, 387.35, 144.13);
        context.bezierCurveTo(388.43, 139.13, 388.59, 133.95, 390.28, 129.07);
        context.bezierCurveTo(389.4, 127.29, 388.51, 125.51, 387.63, 123.75);
        context.bezierCurveTo(389.12, 124.4, 390.63, 125.04, 392.13, 125.69);
        context.bezierCurveTo(392.08, 122.51, 392, 119.32, 391.89, 116.12);
        context.bezierCurveTo(389.48, 115.93, 386.37, 113.49, 384.37, 115.72);
        context.bezierCurveTo(383.37, 118.25, 383.49, 121.32, 381.45, 123.35);
        context.bezierCurveTo(379.71, 125.29, 377.43, 126.63, 375.24, 128.01);
        context.bezierCurveTo(376.32, 122.31, 381.88, 118.48, 381.43, 112.33);
        context.closePath();
        context.moveTo(384.55, 189.19);
        context.bezierCurveTo(383.65, 189.12, 382.76, 189.05, 381.87, 188.99);
        context.bezierCurveTo(382.01, 189.56, 382.29, 190.69, 382.44, 191.25);
        context.bezierCurveTo(380.39, 193.11, 378.12, 194.69, 375.67, 195.96);
        context.bezierCurveTo(376.07, 197.53, 378.04, 198.8, 379.45, 197.52);
        context.bezierCurveTo(382.75, 195.09, 385.41, 191.93, 388.57, 189.33);
        context.bezierCurveTo(388.65, 188.12, 388.72, 186.91, 388.79, 185.71);
        context.bezierCurveTo(387.07, 186.47, 385.68, 187.71, 384.55, 189.19);
        context.closePath();
        context.fillStyle = fillColor28;
        context.fill();


    }

    function drawPath29() {
        context.beginPath();
        context.moveTo(411.56, 100.97);
        context.bezierCurveTo(416.68, 102.44, 421.48, 98.48, 426.47, 99.6);
        context.bezierCurveTo(431.57, 102.61, 435.41, 107.29, 439.61, 111.41);
        context.bezierCurveTo(440.24, 111.48, 441.51, 111.64, 442.15, 111.71);
        context.bezierCurveTo(442, 112.05, 441.73, 112.72, 441.59, 113.07);
        context.bezierCurveTo(440.43, 113.08, 438.11, 113.11, 436.93, 113.12);
        context.bezierCurveTo(435.08, 112.29, 433.25, 111.43, 431.43, 110.55);
        context.bezierCurveTo(430.49, 107.52, 429.92, 103.37, 426.37, 102.35);
        context.bezierCurveTo(424.31, 101.59, 422.53, 103.47, 420.83, 104.31);
        context.bezierCurveTo(420.27, 104.68, 419.16, 105.44, 418.61, 105.83);
        context.bezierCurveTo(417.55, 107.11, 416.41, 111.04, 414.39, 108.81);
        context.bezierCurveTo(415.23, 106.04, 415.2, 103.07, 412.28, 101.49);
        context.lineTo(411.56, 100.97);
        context.closePath();
        context.fillStyle = fillColor29;
        context.fill();


    }

    function drawPath30() {
        context.beginPath();
        context.moveTo(207.61, 100.64);
        context.bezierCurveTo(210.95, 103.15, 214.76, 105.11, 217.6, 108.19);
        context.bezierCurveTo(219.51, 116.92, 221.84, 125.55, 223.65, 134.31);
        context.bezierCurveTo(224.27, 137.11, 225.45, 139.73, 226.73, 142.29);
        context.bezierCurveTo(227.51, 143.91, 228.27, 145.53, 229.04, 147.16);
        context.bezierCurveTo(231.25, 148.79, 232.32, 151.31, 233.21, 153.83);
        context.bezierCurveTo(234.36, 157.68, 236.05, 161.33, 238.03, 164.83);
        context.bezierCurveTo(236.11, 165.44, 234.2, 166.05, 232.28, 166.64);
        context.bezierCurveTo(230.83, 165.11, 229.52, 163.41, 227.97, 161.96);
        context.bezierCurveTo(225.29, 162.01, 222.65, 162.51, 220.03, 162.93);
        context.bezierCurveTo(218.43, 160.65, 218.03, 158.05, 219.13, 155.47);
        context.bezierCurveTo(217.44, 152.71, 215.64, 150.03, 213.8, 147.37);
        context.bezierCurveTo(213.11, 149.75, 212.43, 152.13, 211.75, 154.51);
        context.bezierCurveTo(211.45, 153.95, 210.87, 152.83, 210.57, 152.27);
        context.bezierCurveTo(209.24, 149.77, 207.96, 147.25, 206.77, 144.68);
        context.bezierCurveTo(207.01, 142.47, 207.47, 140.17, 206.68, 138);
        context.bezierCurveTo(204.45, 131, 203.09, 123.49, 198.47, 117.56);
        context.bezierCurveTo(200.31, 114.28, 200.37, 110.53, 200.95, 106.93);
        context.bezierCurveTo(201.72, 104.25, 204.75, 104.11, 206.96, 103.44);
        context.bezierCurveTo(207.16, 102.51, 207.39, 101.57, 207.61, 100.64);
        context.closePath();
        context.moveTo(228.85, 157.51);
        context.bezierCurveTo(229.85, 160.04, 231.19, 162.41, 232.75, 164.63);
        context.bezierCurveTo(235, 161.47, 232.15, 158.11, 228.85, 157.51);
        context.closePath();
        context.fillStyle = fillColor30;
        context.fill();


    }

    function drawPath31() {
        context.beginPath();
        context.moveTo(402.92, 116.99);
        context.bezierCurveTo(405.32, 112.11, 401.95, 106.92, 403.09, 101.81);
        context.bezierCurveTo(403.57, 104.07, 404.01, 106.33, 404.45, 108.6);
        context.bezierCurveTo(405.04, 107.52, 405.65, 106.45, 406.27, 105.39);
        context.bezierCurveTo(407.57, 105.53, 408.89, 105.68, 410.21, 105.83);
        context.bezierCurveTo(410.21, 104.72, 410.24, 103.63, 410.28, 102.53);
        context.bezierCurveTo(410.79, 102.28, 411.79, 101.76, 412.28, 101.49);
        context.bezierCurveTo(415.2, 103.07, 415.23, 106.04, 414.39, 108.81);
        context.bezierCurveTo(416.41, 111.04, 417.55, 107.11, 418.61, 105.83);
        context.bezierCurveTo(419.16, 105.44, 420.27, 104.68, 420.83, 104.31);
        context.bezierCurveTo(421.67, 104.72, 423.37, 105.56, 424.23, 105.97);
        context.bezierCurveTo(422.61, 107.56, 421, 109.15, 419.36, 110.71);
        context.bezierCurveTo(422.41, 109.72, 425.59, 109.17, 428.79, 108.92);
        context.bezierCurveTo(429.28, 109.69, 430.28, 111.25, 430.79, 112.03);
        context.bezierCurveTo(430.67, 112.28, 430.43, 112.8, 430.31, 113.07);
        context.bezierCurveTo(426.97, 114.2, 423.44, 114.4, 420.05, 113.41);
        context.bezierCurveTo(415.64, 117.71, 410.76, 122.44, 410.21, 128.95);
        context.bezierCurveTo(410.25, 129.69, 410.35, 131.19, 410.4, 131.93);
        context.bezierCurveTo(410.16, 130, 409.53, 128.15, 408.55, 126.49);
        context.bezierCurveTo(407.09, 129.13, 407.12, 132.84, 410.48, 133.88);
        context.bezierCurveTo(410.88, 134.21, 411.69, 134.87, 412.09, 135.2);
        context.bezierCurveTo(411.27, 135.43, 409.61, 135.88, 408.79, 136.11);
        context.bezierCurveTo(405.57, 144.69, 404.68, 154.11, 400.08, 162.12);
        context.bezierCurveTo(399.92, 165.07, 400.52, 167.99, 400.89, 170.91);
        context.bezierCurveTo(399.76, 170.92, 398.64, 170.93, 397.52, 170.95);
        context.bezierCurveTo(396.03, 175.36, 394.12, 179.61, 392.36, 183.93);
        context.bezierCurveTo(389.12, 184.2, 385.91, 183.76, 382.79, 182.91);
        context.bezierCurveTo(384.69, 180.71, 388.05, 178.65, 386.52, 175.32);
        context.bezierCurveTo(387.67, 172.13, 389.17, 169.08, 391.05, 166.25);
        context.bezierCurveTo(394.09, 162.2, 394.39, 156.95, 395.91, 152.28);
        context.bezierCurveTo(394.88, 146.48, 396.29, 140.75, 397.59, 135.12);
        context.bezierCurveTo(398.05, 134.89, 398.97, 134.43, 399.43, 134.2);
        context.bezierCurveTo(399.67, 130.16, 400.52, 126.15, 402.96, 122.83);
        context.bezierCurveTo(402.88, 120.89, 402.23, 118.87, 402.92, 116.99);
        context.closePath();
        context.moveTo(410.95, 111.45);
        context.bezierCurveTo(410.85, 113.27, 410.77, 115.08, 410.71, 116.89);
        context.bezierCurveTo(413.28, 116.63, 415.09, 114.6, 414.08, 112.05);
        context.bezierCurveTo(413.29, 111.91, 411.73, 111.6, 410.95, 111.45);
        context.closePath();
        context.fillStyle = fillColor31;
        context.fill();


    }

    function drawPath32() {
        context.beginPath();
        context.moveTo(420.83, 104.31);
        context.bezierCurveTo(422.53, 103.47, 424.31, 101.59, 426.37, 102.35);
        context.bezierCurveTo(429.92, 103.37, 430.49, 107.52, 431.43, 110.55);
        context.bezierCurveTo(431.27, 110.92, 430.95, 111.65, 430.79, 112.03);
        context.bezierCurveTo(430.28, 111.25, 429.28, 109.69, 428.79, 108.92);
        context.bezierCurveTo(425.59, 109.17, 422.41, 109.72, 419.36, 110.71);
        context.bezierCurveTo(421, 109.15, 422.61, 107.56, 424.23, 105.97);
        context.bezierCurveTo(423.37, 105.56, 421.67, 104.72, 420.83, 104.31);
        context.closePath();
        context.fillStyle = fillColor32;
        context.fill();


    }

    function drawPath33() {
        context.beginPath();
        context.moveTo(307.25, 108.64);
        context.bezierCurveTo(308.43, 108.05, 309.61, 107.48, 310.81, 106.89);
        context.bezierCurveTo(311.27, 111.13, 311.91, 115.35, 312.55, 119.57);
        context.bezierCurveTo(313.51, 119.81, 314.47, 120.05, 315.44, 120.29);
        context.bezierCurveTo(315.89, 126.41, 313.97, 132.37, 313.81, 138.48);
        context.bezierCurveTo(313.53, 138.95, 312.96, 139.85, 312.68, 140.32);
        context.bezierCurveTo(312.32, 137.89, 311.92, 135.48, 311.52, 133.07);
        context.bezierCurveTo(309.2, 132.45, 306.87, 131.83, 304.55, 131.21);
        context.bezierCurveTo(304.39, 129.61, 304.13, 128.01, 303.95, 126.43);
        context.bezierCurveTo(303.45, 122.92, 303.52, 119.37, 303.65, 115.85);
        context.bezierCurveTo(303.76, 114.96, 303.99, 113.15, 304.11, 112.24);
        context.bezierCurveTo(305.29, 114.2, 306.6, 116.09, 307.89, 118);
        context.bezierCurveTo(307.71, 114.88, 307.49, 111.76, 307.25, 108.64);
        context.closePath();
        context.fillStyle = fillColor33;
        context.fill();


    }

    function drawPath34() {
        context.beginPath();
        context.moveTo(431.43, 110.55);
        context.bezierCurveTo(433.25, 111.43, 435.08, 112.29, 436.93, 113.12);
        context.bezierCurveTo(432.96, 115.69, 427.49, 115.61, 424.57, 119.73);
        context.bezierCurveTo(423.41, 119.15, 422.25, 118.56, 421.11, 117.99);
        context.bezierCurveTo(421.79, 122.49, 419.32, 126.29, 416.76, 129.73);
        context.bezierCurveTo(415.79, 128.13, 414.83, 126.52, 413.88, 124.89);
        context.bezierCurveTo(413.91, 126.92, 413.93, 128.95, 413.79, 130.96);
        context.bezierCurveTo(412.63, 130.24, 411.4, 129.59, 410.21, 128.95);
        context.bezierCurveTo(410.76, 122.44, 415.64, 117.71, 420.05, 113.41);
        context.bezierCurveTo(423.44, 114.4, 426.97, 114.2, 430.31, 113.07);
        context.bezierCurveTo(430.43, 112.8, 430.67, 112.28, 430.79, 112.03);
        context.bezierCurveTo(430.95, 111.65, 431.27, 110.92, 431.43, 110.55);
        context.closePath();
        context.fillStyle = fillColor34;
        context.fill();


    }

    function drawPath35() {
        context.beginPath();
        context.moveTo(442.15, 111.71);
        context.bezierCurveTo(445.2, 111, 449.09, 108.2, 451.49, 111.6);
        context.bezierCurveTo(450.41, 112.51, 449.36, 113.43, 448.33, 114.39);
        context.bezierCurveTo(445.43, 114.71, 442.48, 115.16, 439.89, 116.61);
        context.bezierCurveTo(434.87, 123.04, 429.28, 129.17, 425.08, 136.2);
        context.bezierCurveTo(421.84, 144.79, 416.01, 152.12, 413.12, 160.87);
        context.bezierCurveTo(411.12, 166.81, 407.6, 172.12, 403.36, 176.69);
        context.bezierCurveTo(403.43, 179.2, 403.76, 181.75, 403.32, 184.24);
        context.bezierCurveTo(402.07, 186.61, 399.77, 188.17, 397.88, 189.99);
        context.bezierCurveTo(398.47, 190.87, 399.07, 191.75, 399.68, 192.64);
        context.bezierCurveTo(398.96, 192.81, 397.55, 193.15, 396.83, 193.31);
        context.bezierCurveTo(397.08, 194.36, 397.35, 195.41, 397.61, 196.47);
        context.bezierCurveTo(396.33, 198.31, 395.05, 200.13, 393.79, 201.97);
        context.bezierCurveTo(393.13, 201.11, 392.49, 200.24, 391.88, 199.36);
        context.bezierCurveTo(387.99, 194.75, 390.63, 188.84, 392.36, 183.93);
        context.bezierCurveTo(394.12, 179.61, 396.03, 175.36, 397.52, 170.95);
        context.bezierCurveTo(398.64, 170.93, 399.76, 170.92, 400.89, 170.91);
        context.bezierCurveTo(400.52, 167.99, 399.92, 165.07, 400.08, 162.12);
        context.bezierCurveTo(404.68, 154.11, 405.57, 144.69, 408.79, 136.11);
        context.bezierCurveTo(409.61, 135.88, 411.27, 135.43, 412.09, 135.2);
        context.bezierCurveTo(411.69, 134.87, 410.88, 134.21, 410.48, 133.88);
        context.bezierCurveTo(410.45, 133.4, 410.41, 132.41, 410.4, 131.93);
        context.bezierCurveTo(410.35, 131.19, 410.25, 129.69, 410.21, 128.95);
        context.bezierCurveTo(411.4, 129.59, 412.63, 130.24, 413.79, 130.96);
        context.bezierCurveTo(413.93, 128.95, 413.91, 126.92, 413.88, 124.89);
        context.bezierCurveTo(414.83, 126.52, 415.79, 128.13, 416.76, 129.73);
        context.bezierCurveTo(419.32, 126.29, 421.79, 122.49, 421.11, 117.99);
        context.bezierCurveTo(422.25, 118.56, 423.41, 119.15, 424.57, 119.73);
        context.bezierCurveTo(427.49, 115.61, 432.96, 115.69, 436.93, 113.12);
        context.bezierCurveTo(438.11, 113.11, 440.43, 113.08, 441.59, 113.07);
        context.bezierCurveTo(441.73, 112.72, 442, 112.05, 442.15, 111.71);
        context.closePath();
        context.fillStyle = fillColor35;
        context.fill();


    }

    function drawPath36() {
        context.beginPath();
        context.moveTo(410.95, 111.45);
        context.bezierCurveTo(411.73, 111.6, 413.29, 111.91, 414.08, 112.05);
        context.bezierCurveTo(415.09, 114.6, 413.28, 116.63, 410.71, 116.89);
        context.bezierCurveTo(410.77, 115.08, 410.85, 113.27, 410.95, 111.45);
        context.closePath();
        context.fillStyle = fillColor36;
        context.fill();


    }

    function drawPath37() {
        context.beginPath();
        context.moveTo(358.05, 139.68);
        context.bezierCurveTo(364.04, 129.13, 373.33, 121.16, 381.43, 112.33);
        context.bezierCurveTo(381.88, 118.48, 376.32, 122.31, 375.24, 128.01);
        context.bezierCurveTo(377.43, 126.63, 379.71, 125.29, 381.45, 123.35);
        context.bezierCurveTo(383.49, 121.32, 383.37, 118.25, 384.37, 115.72);
        context.bezierCurveTo(386.37, 113.49, 389.48, 115.93, 391.89, 116.12);
        context.bezierCurveTo(392, 119.32, 392.08, 122.51, 392.13, 125.69);
        context.bezierCurveTo(390.63, 125.04, 389.12, 124.4, 387.63, 123.75);
        context.bezierCurveTo(388.51, 125.51, 389.4, 127.29, 390.28, 129.07);
        context.bezierCurveTo(388.59, 133.95, 388.43, 139.13, 387.35, 144.13);
        context.bezierCurveTo(385.59, 148.41, 382.88, 152.25, 381.2, 156.57);
        context.bezierCurveTo(377.8, 162.96, 380.85, 170.79, 376.49, 176.85);
        context.bezierCurveTo(378.08, 179.64, 379.51, 182.51, 380.75, 185.47);
        context.bezierCurveTo(379.17, 187.28, 377.51, 189.03, 375.83, 190.75);
        context.bezierCurveTo(374.63, 182.68, 373.07, 174.03, 377.32, 166.55);
        context.bezierCurveTo(374.52, 168.53, 371.6, 170.33, 368.53, 171.88);
        context.bezierCurveTo(368.87, 168.68, 370.6, 166.05, 374.15, 166.73);
        context.bezierCurveTo(373.4, 165.19, 372.6, 163.65, 372.09, 162.01);
        context.bezierCurveTo(373.35, 158, 375.31, 154.23, 376.39, 150.13);
        context.bezierCurveTo(371.19, 150.97, 366.45, 153.31, 362.24, 156.39);
        context.bezierCurveTo(364.68, 151.77, 367.88, 147.47, 367.57, 141.95);
        context.bezierCurveTo(366.79, 142.08, 365.21, 142.33, 364.41, 142.45);
        context.bezierCurveTo(362.05, 146.72, 360.79, 152.15, 355.89, 154.29);
        context.bezierCurveTo(357.12, 150.97, 359.15, 148.04, 360.59, 144.81);
        context.bezierCurveTo(361.51, 142.72, 358.84, 141.28, 358.05, 139.68);
        context.closePath();
        context.fillStyle = fillColor37;
        context.fill();


    }

    function drawPath38() {
        context.beginPath();
        context.moveTo(448.33, 114.39);
        context.bezierCurveTo(449.36, 113.43, 450.41, 112.51, 451.49, 111.6);
        context.bezierCurveTo(451.6, 112.41, 451.8, 114.07, 451.89, 114.89);
        context.bezierCurveTo(450.33, 119.53, 449.77, 124.64, 446.89, 128.73);
        context.bezierCurveTo(438.28, 142.01, 433.37, 157.33, 424.47, 170.41);
        context.bezierCurveTo(422.99, 173.25, 422.85, 176.55, 422.29, 179.64);
        context.bezierCurveTo(417.61, 184.11, 413.75, 189.32, 409.16, 193.88);
        context.bezierCurveTo(406.95, 195.75, 407.48, 198.95, 406.2, 201.35);
        context.bezierCurveTo(405.05, 203.24, 403.52, 204.88, 402.12, 206.59);
        context.bezierCurveTo(398.93, 207.03, 395.15, 206.83, 392.87, 209.51);
        context.bezierCurveTo(390.43, 212.05, 387.65, 214.25, 384.35, 215.55);
        context.bezierCurveTo(384.53, 213.81, 384.73, 212.09, 384.95, 210.36);
        context.bezierCurveTo(383.93, 209.69, 382.93, 209.01, 381.95, 208.35);
        context.bezierCurveTo(383.19, 207.27, 384.41, 206.17, 385.69, 205.13);
        context.bezierCurveTo(385.99, 204.91, 386.56, 204.47, 386.85, 204.24);
        context.bezierCurveTo(387.41, 204.55, 388.52, 205.13, 389.08, 205.44);
        context.bezierCurveTo(390.01, 203.41, 390.93, 201.39, 391.88, 199.36);
        context.bezierCurveTo(392.49, 200.24, 393.13, 201.11, 393.79, 201.97);
        context.bezierCurveTo(395.05, 200.13, 396.33, 198.31, 397.61, 196.47);
        context.bezierCurveTo(397.35, 195.41, 397.08, 194.36, 396.83, 193.31);
        context.bezierCurveTo(397.55, 193.15, 398.96, 192.81, 399.68, 192.64);
        context.bezierCurveTo(399.07, 191.75, 398.47, 190.87, 397.88, 189.99);
        context.bezierCurveTo(399.77, 188.17, 402.07, 186.61, 403.32, 184.24);
        context.bezierCurveTo(403.76, 181.75, 403.43, 179.2, 403.36, 176.69);
        context.bezierCurveTo(407.6, 172.12, 411.12, 166.81, 413.12, 160.87);
        context.bezierCurveTo(416.01, 152.12, 421.84, 144.79, 425.08, 136.2);
        context.bezierCurveTo(429.28, 129.17, 434.87, 123.04, 439.89, 116.61);
        context.bezierCurveTo(442.2, 118.2, 445, 118.21, 447.68, 118.04);
        context.bezierCurveTo(447.84, 117.12, 448.17, 115.29, 448.33, 114.39);
        context.closePath();
        context.moveTo(395.2, 206.07);
        context.bezierCurveTo(399.35, 206.44, 403.36, 203.96, 404.61, 199.95);
        context.bezierCurveTo(400.76, 200.07, 395.75, 201.57, 395.2, 206.07);
        context.closePath();
        context.fillStyle = fillColor31;
        context.fill();


    }

    function drawPath39() {
        context.beginPath();
        context.moveTo(439.89, 116.61);
        context.bezierCurveTo(442.48, 115.16, 445.43, 114.71, 448.33, 114.39);
        context.bezierCurveTo(448.17, 115.29, 447.84, 117.12, 447.68, 118.04);
        context.bezierCurveTo(445, 118.21, 442.2, 118.2, 439.89, 116.61);
        context.closePath();
        context.fillStyle = fillColor38;
        context.fill();


    }

    function drawPath40() {
        context.beginPath();
        context.moveTo(446.89, 128.73);
        context.bezierCurveTo(449.77, 124.64, 450.33, 119.53, 451.89, 114.89);
        context.bezierCurveTo(453.12, 122.68, 451.04, 130.4, 449.32, 137.93);
        context.bezierCurveTo(445.52, 153.49, 441.56, 169.03, 437.72, 184.57);
        context.bezierCurveTo(436.6, 190.03, 435.08, 195.59, 431.37, 199.92);
        context.bezierCurveTo(423.31, 209.81, 414.2, 219.75, 402.11, 224.61);
        context.bezierCurveTo(402.73, 219.37, 409, 217.65, 412.17, 214.03);
        context.bezierCurveTo(418.19, 209.07, 424.99, 203.72, 425.83, 195.35);
        context.bezierCurveTo(426.17, 194.28, 426.55, 193.21, 426.95, 192.16);
        context.bezierCurveTo(426.36, 190.69, 425.77, 189.23, 425.19, 187.77);
        context.bezierCurveTo(425.79, 187.27, 427, 186.27, 427.6, 185.77);
        context.bezierCurveTo(429.08, 182.91, 431.25, 180.51, 432.96, 177.79);
        context.bezierCurveTo(434.07, 172.49, 434.31, 166.92, 433.33, 161.57);
        context.bezierCurveTo(427.6, 166.41, 428.09, 174.92, 422.29, 179.64);
        context.bezierCurveTo(422.85, 176.55, 422.99, 173.25, 424.47, 170.41);
        context.bezierCurveTo(433.37, 157.33, 438.28, 142.01, 446.89, 128.73);
        context.closePath();
        context.fillStyle = fillColor39;
        context.fill();


    }

    function drawPath41() {
        context.beginPath();
        context.moveTo(234.87, 117.41);
        context.bezierCurveTo(236.16, 119.77, 237.27, 122.21, 238.36, 124.67);
        context.bezierCurveTo(238.59, 123.93, 239.01, 122.48, 239.24, 121.75);
        context.bezierCurveTo(242.03, 129.31, 241.36, 138.31, 247, 144.6);
        context.bezierCurveTo(245.52, 144.45, 244.05, 144.31, 242.57, 144.16);
        context.bezierCurveTo(243.27, 146.41, 243.96, 148.67, 244.81, 150.87);
        context.bezierCurveTo(243.89, 150.96, 242.05, 151.16, 241.13, 151.25);
        context.bezierCurveTo(239.25, 148.93, 238.84, 146.03, 240.21, 143.37);
        context.bezierCurveTo(237.96, 134.84, 235.49, 126.27, 234.87, 117.41);
        context.closePath();
        context.fillStyle = fillColor40;
        context.fill();


    }

    function drawPath42() {
        context.beginPath();
        context.moveTo(330.17, 133.57);
        context.bezierCurveTo(331.55, 128.72, 332.07, 122.95, 336.73, 119.97);
        context.bezierCurveTo(336.63, 127.88, 337.63, 136.04, 334.77, 143.63);
        context.bezierCurveTo(331.96, 155.27, 324.87, 165.19, 317.44, 174.35);
        context.bezierCurveTo(316.8, 174.24, 315.52, 174.03, 314.88, 173.92);
        context.bezierCurveTo(322.33, 161.52, 326.77, 147.56, 330.17, 133.57);
        context.closePath();
        context.fillStyle = fillColor41;
        context.fill();


    }

    function drawPath43() {
        context.beginPath();
        context.moveTo(408.55, 126.49);
        context.bezierCurveTo(409.53, 128.15, 410.16, 130, 410.4, 131.93);
        context.bezierCurveTo(410.41, 132.41, 410.45, 133.4, 410.48, 133.88);
        context.bezierCurveTo(407.12, 132.84, 407.09, 129.13, 408.55, 126.49);
        context.closePath();
        context.fillStyle = fillColor42;
        context.fill();


    }

    function drawPath44() {
        context.beginPath();
        context.moveTo(304.55, 131.21);
        context.bezierCurveTo(306.87, 131.83, 309.2, 132.45, 311.52, 133.07);
        context.bezierCurveTo(311.92, 135.48, 312.32, 137.89, 312.68, 140.32);
        context.bezierCurveTo(310.99, 145.17, 310.77, 150.37, 309.23, 155.27);
        context.bezierCurveTo(307.59, 158.43, 304.56, 160.88, 304.12, 164.61);
        context.bezierCurveTo(301.12, 166.09, 298.01, 167.33, 294.85, 168.41);
        context.bezierCurveTo(291.87, 162.49, 294.65, 156.04, 298.6, 151.36);
        context.bezierCurveTo(300.69, 149.13, 301.73, 146.28, 302.16, 143.31);
        context.bezierCurveTo(303.16, 139.32, 304.23, 135.32, 304.55, 131.21);
        context.closePath();
        context.fillStyle = fillColor43;
        context.fill();


    }

    function drawPath45() {
        context.beginPath();
        context.moveTo(350.43, 155.09);
        context.bezierCurveTo(352.88, 149.92, 355.12, 144.61, 358.05, 139.68);
        context.bezierCurveTo(358.84, 141.28, 361.51, 142.72, 360.59, 144.81);
        context.bezierCurveTo(359.15, 148.04, 357.12, 150.97, 355.89, 154.29);
        context.bezierCurveTo(353.84, 161.08, 349.99, 167.29, 348.64, 174.25);
        context.bezierCurveTo(349.96, 177.89, 353.63, 180.32, 356.11, 183.27);
        context.bezierCurveTo(359.4, 181.75, 362.95, 181.04, 366.08, 183.41);
        context.bezierCurveTo(363.95, 184.85, 361.75, 186.23, 359.2, 186.73);
        context.bezierCurveTo(360.04, 188.27, 360.89, 189.79, 361.75, 191.32);
        context.bezierCurveTo(358.71, 189.57, 355.64, 187.87, 352.55, 186.21);
        context.bezierCurveTo(352.36, 187.07, 352.01, 188.77, 351.83, 189.63);
        context.bezierCurveTo(351.68, 190.41, 351.39, 191.99, 351.24, 192.77);
        context.bezierCurveTo(349.96, 188.01, 346.47, 184.11, 345.85, 179.13);
        context.bezierCurveTo(345.36, 176.25, 344.77, 173.39, 344.05, 170.55);
        context.bezierCurveTo(344.32, 167.75, 345.73, 165.25, 347.01, 162.81);
        context.bezierCurveTo(348.39, 160.36, 349.45, 157.75, 350.43, 155.09);
        context.closePath();
        context.fillStyle = fillColor44;
        context.fill();


    }

    function drawPath46() {
        context.beginPath();
        context.moveTo(101.71, 143.12);
        context.bezierCurveTo(104.61, 141.53, 108.23, 141.47, 111.32, 142.48);
        context.bezierCurveTo(115.4, 145.77, 117.4, 151.19, 122.28, 153.61);
        context.bezierCurveTo(120.77, 154.04, 119.28, 154.45, 117.77, 154.87);
        context.bezierCurveTo(118.07, 155.45, 118.65, 156.61, 118.95, 157.2);
        context.bezierCurveTo(115.6, 155.52, 113.05, 152.79, 110.84, 149.83);
        context.bezierCurveTo(110.01, 150.69, 109.2, 151.55, 108.39, 152.41);
        context.bezierCurveTo(106.87, 151.19, 105.36, 149.96, 103.84, 148.75);
        context.bezierCurveTo(104.63, 147.56, 105.43, 146.4, 106.21, 145.23);
        context.bezierCurveTo(104.71, 144.52, 103.2, 143.83, 101.71, 143.12);
        context.closePath();
        context.fillStyle = fillColor45;
        context.fill();


    }

    function drawPath47() {
        context.beginPath();
        context.moveTo(364.41, 142.45);
        context.bezierCurveTo(365.21, 142.33, 366.79, 142.08, 367.57, 141.95);
        context.bezierCurveTo(367.88, 147.47, 364.68, 151.77, 362.24, 156.39);
        context.bezierCurveTo(366.45, 153.31, 371.19, 150.97, 376.39, 150.13);
        context.bezierCurveTo(375.31, 154.23, 373.35, 158, 372.09, 162.01);
        context.bezierCurveTo(372.6, 163.65, 373.4, 165.19, 374.15, 166.73);
        context.bezierCurveTo(370.6, 166.05, 368.87, 168.68, 368.53, 171.88);
        context.bezierCurveTo(367.88, 174.12, 367.25, 176.36, 366.61, 178.61);
        context.bezierCurveTo(366.04, 178.69, 364.91, 178.85, 364.35, 178.95);
        context.bezierCurveTo(365.12, 180.31, 365.89, 181.68, 366.68, 183.05);
        context.lineTo(366.08, 183.41);
        context.bezierCurveTo(362.95, 181.04, 359.4, 181.75, 356.11, 183.27);
        context.bezierCurveTo(353.63, 180.32, 349.96, 177.89, 348.64, 174.25);
        context.bezierCurveTo(349.99, 167.29, 353.84, 161.08, 355.89, 154.29);
        context.bezierCurveTo(360.79, 152.15, 362.05, 146.72, 364.41, 142.45);
        context.closePath();
        context.fillStyle = fillColor46;
        context.fill();


    }

    function drawPath48() {
        context.beginPath();
        context.moveTo(97.56, 151.72);
        context.bezierCurveTo(98.12, 148.52, 99.75, 145.65, 101.71, 143.12);
        context.bezierCurveTo(103.2, 143.83, 104.71, 144.52, 106.21, 145.23);
        context.bezierCurveTo(105.43, 146.4, 104.63, 147.56, 103.84, 148.75);
        context.bezierCurveTo(105.36, 149.96, 106.87, 151.19, 108.39, 152.41);
        context.bezierCurveTo(108.63, 153.17, 109.12, 154.69, 109.37, 155.45);
        context.bezierCurveTo(107.19, 156.87, 104.97, 158.2, 102.69, 159.4);
        context.bezierCurveTo(105.93, 172.09, 105.29, 185.35, 108.36, 198.05);
        context.bezierCurveTo(108.77, 200.31, 110.47, 201.96, 111.67, 203.81);
        context.bezierCurveTo(110.08, 203.55, 108.48, 203.29, 106.89, 203.04);
        context.bezierCurveTo(103.48, 192.77, 103.35, 181.85, 101.11, 171.35);
        context.bezierCurveTo(99.73, 164.84, 98.61, 158.28, 97.56, 151.72);
        context.closePath();
        context.fillStyle = fillColor47;
        context.fill();


    }

    function drawPath49() {
        context.beginPath();
        context.moveTo(295.07, 148.6);
        context.bezierCurveTo(297.91, 147.55, 300.17, 145.53, 302.16, 143.31);
        context.bezierCurveTo(301.73, 146.28, 300.69, 149.13, 298.6, 151.36);
        context.bezierCurveTo(294.65, 156.04, 291.87, 162.49, 294.85, 168.41);
        context.bezierCurveTo(298.01, 167.33, 301.12, 166.09, 304.12, 164.61);
        context.bezierCurveTo(303.67, 168.05, 302.19, 171.16, 299.57, 173.47);
        context.bezierCurveTo(299.41, 174.76, 299.27, 176.05, 299.13, 177.33);
        context.bezierCurveTo(296.23, 180.85, 293.23, 184.29, 290, 187.51);
        context.bezierCurveTo(290.11, 188.2, 290.32, 189.6, 290.43, 190.29);
        context.bezierCurveTo(287.13, 190.64, 283.61, 190.8, 280.56, 189.32);
        context.bezierCurveTo(278.48, 187.79, 276.83, 185.79, 275.12, 183.89);
        context.bezierCurveTo(274.71, 183.37, 273.87, 182.35, 273.44, 181.83);
        context.bezierCurveTo(275.57, 178.72, 278.67, 176.03, 279.35, 172.15);
        context.bezierCurveTo(280.35, 166.76, 280.95, 161.29, 281.64, 155.85);
        context.bezierCurveTo(281.88, 154.03, 282.12, 152.19, 282.39, 150.36);
        context.bezierCurveTo(284.27, 150.53, 286.15, 150.71, 288.03, 150.88);
        context.bezierCurveTo(287.29, 156.12, 285.35, 161.31, 286.28, 166.65);
        context.bezierCurveTo(288.8, 160.41, 294.12, 155.47, 295.07, 148.6);
        context.closePath();
        context.fillStyle = fillColor48;
        context.fill();


    }

    function drawPath50() {
        context.beginPath();
        context.moveTo(213.8, 147.37);
        context.bezierCurveTo(215.64, 150.03, 217.44, 152.71, 219.13, 155.47);
        context.bezierCurveTo(218.03, 158.05, 218.43, 160.65, 220.03, 162.93);
        context.bezierCurveTo(222.65, 162.51, 225.29, 162.01, 227.97, 161.96);
        context.bezierCurveTo(229.52, 163.41, 230.83, 165.11, 232.28, 166.64);
        context.bezierCurveTo(238.24, 170.37, 242.24, 176.51, 246.25, 182.15);
        context.bezierCurveTo(243.77, 181.43, 241.32, 180.64, 238.87, 179.83);
        context.bezierCurveTo(239.33, 181, 239.8, 182.19, 240.28, 183.37);
        context.bezierCurveTo(238.43, 183.85, 236.56, 184.31, 234.64, 184.28);
        context.bezierCurveTo(235.29, 183.92, 236.61, 183.21, 237.27, 182.85);
        context.bezierCurveTo(234.61, 181.08, 231.71, 179.59, 228.41, 179.81);
        context.bezierCurveTo(227.57, 178.52, 226.84, 177.16, 226.08, 175.83);
        context.bezierCurveTo(225.03, 175.33, 223.99, 174.84, 222.97, 174.29);
        context.bezierCurveTo(220.35, 167.08, 214.79, 161.52, 211.75, 154.51);
        context.bezierCurveTo(212.43, 152.13, 213.11, 149.75, 213.8, 147.37);
        context.closePath();
        context.fillStyle = fillColor49;
        context.fill();


    }

    function drawPath51() {
        context.beginPath();
        context.moveTo(108.39, 152.41);
        context.bezierCurveTo(109.2, 151.55, 110.01, 150.69, 110.84, 149.83);
        context.bezierCurveTo(113.05, 152.79, 115.6, 155.52, 118.95, 157.2);
        context.bezierCurveTo(122.12, 163.21, 122.12, 170.25, 124.55, 176.53);
        context.bezierCurveTo(131.68, 190.21, 135.37, 205.36, 140.83, 219.76);
        context.bezierCurveTo(144.08, 227.71, 145.97, 236.13, 149.52, 243.97);
        context.bezierCurveTo(149.77, 247.51, 151.48, 250.4, 154.43, 252.36);
        context.bezierCurveTo(153.75, 252.75, 152.4, 253.52, 151.72, 253.91);
        context.bezierCurveTo(151.31, 256.96, 150.57, 260.03, 150.83, 263.12);
        context.bezierCurveTo(152.13, 267.69, 155.76, 271.72, 154.87, 276.76);
        context.bezierCurveTo(154.35, 280.35, 156.64, 283.32, 158.31, 286.24);
        context.bezierCurveTo(158.72, 286.96, 159.56, 288.43, 159.97, 289.15);
        context.bezierCurveTo(160.04, 289.73, 160.2, 290.88, 160.27, 291.47);
        context.bezierCurveTo(159.53, 292.69, 158.76, 293.89, 157.92, 295.05);
        context.bezierCurveTo(156.55, 293.8, 155.27, 292.45, 153.99, 291.12);
        context.bezierCurveTo(154.25, 295.04, 154.44, 298.97, 154.39, 302.91);
        context.bezierCurveTo(152.32, 299.45, 151.64, 295.45, 150.23, 291.73);
        context.bezierCurveTo(149.35, 289.17, 146.13, 289.15, 144.05, 288.13);
        context.bezierCurveTo(142.43, 282.83, 140.51, 277.44, 136.69, 273.29);
        context.bezierCurveTo(133.4, 269.75, 132.84, 264.75, 130.93, 260.47);
        context.lineTo(130.53, 258.05);
        context.bezierCurveTo(131.93, 258.89, 133.35, 259.76, 134.75, 260.61);
        context.bezierCurveTo(132.16, 254.07, 130.71, 246.81, 126, 241.35);
        context.bezierCurveTo(121.59, 236.91, 124.75, 228.65, 118.63, 225.36);
        context.bezierCurveTo(117.55, 224.6, 116.45, 223.85, 115.37, 223.11);
        context.bezierCurveTo(114.41, 221.68, 113.51, 220.21, 112.61, 218.76);
        context.bezierCurveTo(113.19, 217.8, 113.76, 216.84, 114.32, 215.88);
        context.bezierCurveTo(115.21, 211.67, 113.57, 207.49, 111.67, 203.81);
        context.bezierCurveTo(110.47, 201.96, 108.77, 200.31, 108.36, 198.05);
        context.bezierCurveTo(105.29, 185.35, 105.93, 172.09, 102.69, 159.4);
        context.bezierCurveTo(104.97, 158.2, 107.19, 156.87, 109.37, 155.45);
        context.bezierCurveTo(109.12, 154.69, 108.63, 153.17, 108.39, 152.41);
        context.closePath();
        context.fillStyle = fillColor50;
        context.fill();


    }

    function drawPath52() {
        context.beginPath();
        context.moveTo(241.13, 151.25);
        context.bezierCurveTo(242.05, 151.16, 243.89, 150.96, 244.81, 150.87);
        context.bezierCurveTo(249.47, 158.36, 249.24, 167.83, 254.19, 175.08);
        context.bezierCurveTo(253.96, 179.64, 254.89, 184.48, 252.84, 188.76);
        context.bezierCurveTo(251.16, 187.89, 249.53, 186.97, 247.85, 186.16);
        context.bezierCurveTo(245.41, 184.99, 242.87, 184.08, 240.28, 183.37);
        context.bezierCurveTo(239.8, 182.19, 239.33, 181, 238.87, 179.83);
        context.bezierCurveTo(241.32, 180.64, 243.77, 181.43, 246.25, 182.15);
        context.bezierCurveTo(242.24, 176.51, 238.24, 170.37, 232.28, 166.64);
        context.bezierCurveTo(234.2, 166.05, 236.11, 165.44, 238.03, 164.83);
        context.bezierCurveTo(236.05, 161.33, 234.36, 157.68, 233.21, 153.83);
        context.bezierCurveTo(235.16, 156.47, 237.28, 158.97, 239.36, 161.53);
        context.bezierCurveTo(240.25, 160.49, 241.15, 159.47, 242.05, 158.44);
        context.bezierCurveTo(243.47, 160.57, 244.91, 162.71, 246.41, 164.79);
        context.bezierCurveTo(245.76, 159.89, 243.92, 155.31, 241.13, 151.25);
        context.closePath();
        context.fillStyle = fillColor51;
        context.fill();


    }

    function drawPath53() {
        context.beginPath();
        context.moveTo(97.56, 151.72);
        context.bezierCurveTo(98.61, 158.28, 99.73, 164.84, 101.11, 171.35);
        context.bezierCurveTo(103.35, 181.85, 103.48, 192.77, 106.89, 203.04);
        context.bezierCurveTo(109, 207.49, 110.68, 212.37, 114.32, 215.88);
        context.bezierCurveTo(113.76, 216.84, 113.19, 217.8, 112.61, 218.76);
        context.bezierCurveTo(113.51, 220.21, 114.41, 221.68, 115.37, 223.11);
        context.bezierCurveTo(114.99, 228.08, 118.65, 231.89, 120.77, 236.04);
        context.bezierCurveTo(121.12, 240.56, 123.05, 244.67, 125.04, 248.65);
        context.bezierCurveTo(126.92, 252.64, 126.76, 257.93, 130.93, 260.47);
        context.bezierCurveTo(132.84, 264.75, 133.4, 269.75, 136.69, 273.29);
        context.bezierCurveTo(140.51, 277.44, 142.43, 282.83, 144.05, 288.13);
        context.bezierCurveTo(144.35, 289.44, 144.63, 290.76, 144.91, 292.09);
        context.bezierCurveTo(143.53, 292.65, 142.16, 293.21, 140.8, 293.77);
        context.bezierCurveTo(144.59, 298.51, 147.39, 303.89, 150.05, 309.32);
        context.bezierCurveTo(147.89, 308.68, 145.73, 308.07, 143.59, 307.39);
        context.bezierCurveTo(145.61, 310.57, 147.05, 314.07, 148.09, 317.69);
        context.bezierCurveTo(143.87, 314.17, 138.19, 311.95, 135.68, 306.72);
        context.bezierCurveTo(133.56, 302.61, 131.64, 298.39, 129.76, 294.16);
        context.bezierCurveTo(129, 291.36, 128.08, 288.6, 126.73, 286.03);
        context.bezierCurveTo(123.71, 280.25, 123.44, 273.36, 119.8, 267.87);
        context.bezierCurveTo(117.35, 264.28, 115.32, 260.44, 113.67, 256.44);
        context.bezierCurveTo(110.12, 247.99, 103.77, 241.11, 99.61, 232.96);
        context.bezierCurveTo(96.81, 226.76, 91.91, 221.29, 91.95, 214.15);
        context.bezierCurveTo(91.35, 214.16, 90.13, 214.19, 89.53, 214.2);
        context.bezierCurveTo(81.13, 210.99, 76.33, 202.67, 72.75, 194.91);
        context.bezierCurveTo(72.56, 194.2, 72.19, 192.77, 72, 192.05);
        context.bezierCurveTo(75.72, 197.75, 79.85, 203.32, 85.49, 207.23);
        context.bezierCurveTo(79.05, 198.28, 70.75, 189.24, 70.81, 177.49);
        context.bezierCurveTo(74.39, 180.97, 76.56, 185.49, 78.24, 190.13);
        context.bezierCurveTo(80.65, 197.27, 86.95, 201.89, 91.15, 207.91);
        context.bezierCurveTo(91.41, 205.4, 92.08, 202.72, 90.87, 200.36);
        context.bezierCurveTo(88.24, 194.59, 86.8, 188.23, 82.84, 183.15);
        context.bezierCurveTo(83.39, 182.8, 84.47, 182.09, 85.01, 181.75);
        context.bezierCurveTo(85.89, 182.01, 87.65, 182.55, 88.53, 182.81);
        context.bezierCurveTo(86.92, 181.16, 85.21, 179.59, 83.48, 178.08);
        context.bezierCurveTo(82.87, 175.24, 82.33, 172.39, 81.87, 169.52);
        context.bezierCurveTo(82.37, 168.99, 83.37, 167.92, 83.88, 167.4);
        context.bezierCurveTo(86.2, 169.25, 88.53, 171.09, 90.95, 172.84);
        context.bezierCurveTo(89.36, 170.08, 87.65, 167.36, 85.35, 165.15);
        context.bezierCurveTo(85.83, 164.43, 86.77, 163.01, 87.25, 162.31);
        context.bezierCurveTo(89.81, 162.4, 92.37, 162.48, 94.95, 162.56);
        context.bezierCurveTo(95.36, 160.65, 95.79, 158.76, 96.25, 156.87);
        context.bezierCurveTo(96.71, 155.15, 97.13, 153.44, 97.56, 151.72);
        context.closePath();
        context.moveTo(101.33, 199.15);
        context.bezierCurveTo(101.76, 195.44, 100.99, 191.77, 99.15, 188.53);
        context.bezierCurveTo(98.45, 192.15, 99.32, 196.08, 101.33, 199.15);
        context.closePath();
        context.moveTo(108.08, 233.01);
        context.bezierCurveTo(107.13, 234.77, 108.23, 238.36, 110.27, 238.67);
        context.bezierCurveTo(111.07, 236.89, 110.21, 233.23, 108.08, 233.01);
        context.closePath();
        context.moveTo(127.49, 262.44);
        context.bezierCurveTo(128.04, 265.52, 128.88, 268.53, 129.88, 271.51);
        context.bezierCurveTo(131.44, 271.33, 132.03, 270.59, 131.6, 269.25);
        context.bezierCurveTo(130.72, 266.79, 130.27, 263.52, 127.49, 262.44);
        context.closePath();
        context.moveTo(135.73, 282.83);
        context.bezierCurveTo(136.63, 285.64, 137.77, 288.37, 139, 291.07);
        context.bezierCurveTo(139.88, 291, 141.65, 290.87, 142.53, 290.81);
        context.bezierCurveTo(140.4, 288.04, 138.68, 284.83, 135.73, 282.83);
        context.closePath();
        context.fillStyle = fillColor52;
        context.fill();


    }

    function drawPath54() {
        context.beginPath();
        context.moveTo(209.25, 153.68);
        context.bezierCurveTo(209.59, 153.32, 210.24, 152.63, 210.57, 152.27);
        context.bezierCurveTo(210.87, 152.83, 211.45, 153.95, 211.75, 154.51);
        context.bezierCurveTo(214.79, 161.52, 220.35, 167.08, 222.97, 174.29);
        context.bezierCurveTo(219.11, 171.07, 215.95, 167.08, 213.23, 162.87);
        context.bezierCurveTo(211.81, 159.84, 210.52, 156.76, 209.25, 153.68);
        context.closePath();
        context.fillStyle = fillColor53;
        context.fill();


    }

    function drawPath55() {
        context.beginPath();
        context.moveTo(117.77, 154.87);
        context.bezierCurveTo(119.28, 154.45, 120.77, 154.04, 122.28, 153.61);
        context.bezierCurveTo(127.87, 156.23, 128.33, 163.03, 131.95, 167.37);
        context.bezierCurveTo(137.24, 173.99, 141.68, 181.19, 145.68, 188.63);
        context.bezierCurveTo(151.19, 196.36, 156.04, 204.55, 162.05, 211.92);
        context.bezierCurveTo(167.44, 218.83, 170.75, 227.09, 176.24, 233.92);
        context.bezierCurveTo(180.12, 238.73, 183.88, 243.81, 185.81, 249.76);
        context.bezierCurveTo(191.79, 268.83, 190.43, 289.03, 189.95, 308.72);
        context.bezierCurveTo(189.39, 314.36, 186.59, 319.45, 185.51, 324.99);
        context.bezierCurveTo(184.51, 317.28, 186.36, 309.68, 186.31, 302.01);
        context.bezierCurveTo(184.56, 298.63, 181.21, 296.04, 180.65, 291.96);
        context.bezierCurveTo(180.21, 292.08, 179.33, 292.32, 178.91, 292.45);
        context.bezierCurveTo(177.37, 283, 178.57, 273.09, 174.49, 264.13);
        context.bezierCurveTo(178.2, 254.84, 169.91, 247.39, 165.93, 239.88);
        context.bezierCurveTo(164.24, 236.21, 160.05, 235.24, 157.16, 232.84);
        context.bezierCurveTo(155.11, 230.71, 154.15, 227.69, 154.25, 224.76);
        context.bezierCurveTo(154.93, 222.8, 154.04, 217.95, 151.29, 220.49);
        context.bezierCurveTo(150.59, 219.6, 149.87, 218.72, 149.12, 217.88);
        context.bezierCurveTo(149.75, 222.35, 151, 226.69, 152.35, 230.99);
        context.bezierCurveTo(151.31, 230.29, 150.27, 229.6, 149.23, 228.92);
        context.bezierCurveTo(148.8, 229.55, 147.96, 230.83, 147.53, 231.47);
        context.bezierCurveTo(149.53, 234.04, 151.99, 236.17, 154.28, 238.47);
        context.bezierCurveTo(156.81, 242.11, 157.08, 246.75, 157.91, 250.97);
        context.bezierCurveTo(158.53, 250, 159.17, 249.01, 159.81, 248.04);
        context.bezierCurveTo(159.93, 248.61, 160.2, 249.76, 160.32, 250.33);
        context.bezierCurveTo(158.95, 263.21, 159.35, 276.24, 159.97, 289.15);
        context.bezierCurveTo(159.56, 288.43, 158.72, 286.96, 158.31, 286.24);
        context.bezierCurveTo(157.95, 281.04, 159.28, 275.57, 156.99, 270.65);
        context.bezierCurveTo(154.51, 264.87, 155.55, 258.43, 154.43, 252.36);
        context.bezierCurveTo(151.48, 250.4, 149.77, 247.51, 149.52, 243.97);
        context.bezierCurveTo(145.97, 236.13, 144.08, 227.71, 140.83, 219.76);
        context.bezierCurveTo(135.37, 205.36, 131.68, 190.21, 124.55, 176.53);
        context.bezierCurveTo(122.12, 170.25, 122.12, 163.21, 118.95, 157.2);
        context.bezierCurveTo(118.65, 156.61, 118.07, 155.45, 117.77, 154.87);
        context.closePath();
        context.fillStyle = fillColor54;
        context.fill();


    }

    function drawPath56() {
        context.beginPath();
        context.moveTo(66.05, 155.91);
        context.bezierCurveTo(76.03, 153.57, 86.21, 156.39, 96.25, 156.87);
        context.bezierCurveTo(95.79, 158.76, 95.36, 160.65, 94.95, 162.56);
        context.bezierCurveTo(92.37, 162.48, 89.81, 162.4, 87.25, 162.31);
        context.bezierCurveTo(86.77, 163.01, 85.83, 164.43, 85.35, 165.15);
        context.bezierCurveTo(83.2, 163.41, 81.03, 161.75, 78.83, 160.09);
        context.bezierCurveTo(72.53, 156.32, 65.01, 159.6, 60.17, 164.2);
        context.bezierCurveTo(61, 160.85, 62.12, 156.69, 66.05, 155.91);
        context.closePath();
        context.fillStyle = fillColor55;
        context.fill();


    }

    function drawPath57() {
        context.beginPath();
        context.moveTo(346.25, 157.95);
        context.bezierCurveTo(347.64, 156.99, 349.03, 156.04, 350.43, 155.09);
        context.bezierCurveTo(349.45, 157.75, 348.39, 160.36, 347.01, 162.81);
        context.bezierCurveTo(346.83, 161.6, 346.45, 159.16, 346.25, 157.95);
        context.closePath();
        context.fillStyle = fillColor56;
        context.fill();


    }

    function drawPath58() {
        context.beginPath();
        context.moveTo(201.61, 157.63);
        context.bezierCurveTo(207.52, 166.47, 212.89, 176.07, 221.73, 182.4);
        context.bezierCurveTo(222.93, 183.44, 224.17, 184.44, 225.44, 185.43);
        context.bezierCurveTo(230.41, 190.97, 237.89, 192.64, 245.08, 191.92);
        context.bezierCurveTo(242.89, 192.56, 240.71, 193.23, 238.53, 193.91);
        context.bezierCurveTo(238.85, 194.31, 239.49, 195.11, 239.8, 195.51);
        context.bezierCurveTo(232.89, 196.39, 226.53, 193.07, 220.72, 189.81);
        context.bezierCurveTo(220.68, 188.25, 220.52, 186.56, 219.05, 185.69);
        context.bezierCurveTo(213.61, 181.27, 209.64, 175.4, 205.59, 169.76);
        context.bezierCurveTo(203.03, 166.23, 201.43, 162.04, 201.61, 157.63);
        context.closePath();
        context.fillStyle = fillColor57;
        context.fill();


    }

    function drawPath59() {
        context.beginPath();
        context.moveTo(228.85, 157.51);
        context.bezierCurveTo(232.15, 158.11, 235, 161.47, 232.75, 164.63);
        context.bezierCurveTo(231.19, 162.41, 229.85, 160.04, 228.85, 157.51);
        context.closePath();
        context.fillStyle = fillColor58;
        context.fill();


    }

    function drawPath60() {
        context.beginPath();
        context.moveTo(334.92, 171.43);
        context.bezierCurveTo(338.57, 166.81, 341.08, 161.15, 346.25, 157.95);
        context.bezierCurveTo(346.45, 159.16, 346.83, 161.6, 347.01, 162.81);
        context.bezierCurveTo(345.73, 165.25, 344.32, 167.75, 344.05, 170.55);
        context.bezierCurveTo(343.39, 180.29, 344.37, 190.17, 346.6, 199.69);
        context.bezierCurveTo(343.53, 194.59, 342.97, 188.57, 342.69, 182.76);
        context.bezierCurveTo(342.77, 177.41, 342.77, 172.07, 342.77, 166.72);
        context.bezierCurveTo(340.11, 168.21, 337.44, 169.71, 334.92, 171.43);
        context.closePath();
        context.fillStyle = fillColor59;
        context.fill();


    }

    function drawPath61() {
        context.beginPath();
        context.moveTo(60.17, 164.2);
        context.bezierCurveTo(65.01, 159.6, 72.53, 156.32, 78.83, 160.09);
        context.bezierCurveTo(74.8, 160.24, 70.68, 160.65, 67.25, 162.99);
        context.bezierCurveTo(68.25, 164.49, 69.27, 166.01, 70.27, 167.52);
        context.bezierCurveTo(69.08, 175.73, 69.36, 184.13, 72, 192.05);
        context.bezierCurveTo(72.19, 192.77, 72.56, 194.2, 72.75, 194.91);
        context.bezierCurveTo(71.76, 195.19, 69.79, 195.72, 68.8, 195.99);
        context.bezierCurveTo(68.39, 195.52, 67.57, 194.59, 67.16, 194.12);
        context.bezierCurveTo(66.85, 191.15, 64.41, 189.68, 61.65, 189.43);
        context.bezierCurveTo(58.75, 185.69, 55.89, 181.69, 51.31, 179.91);
        context.bezierCurveTo(51.11, 179.11, 50.69, 177.49, 50.48, 176.69);
        context.bezierCurveTo(53.13, 175.67, 55.81, 174.71, 58.47, 173.69);
        context.bezierCurveTo(59.05, 170.53, 59.56, 167.36, 60.17, 164.2);
        context.closePath();
        context.fillStyle = fillColor60;
        context.fill();


    }

    function drawPath62() {
        context.beginPath();
        context.moveTo(67.25, 162.99);
        context.bezierCurveTo(70.68, 160.65, 74.8, 160.24, 78.83, 160.09);
        context.bezierCurveTo(81.03, 161.75, 83.2, 163.41, 85.35, 165.15);
        context.bezierCurveTo(87.65, 167.36, 89.36, 170.08, 90.95, 172.84);
        context.bezierCurveTo(88.53, 171.09, 86.2, 169.25, 83.88, 167.4);
        context.bezierCurveTo(83.37, 167.92, 82.37, 168.99, 81.87, 169.52);
        context.bezierCurveTo(82.33, 172.39, 82.87, 175.24, 83.48, 178.08);
        context.bezierCurveTo(85.21, 179.59, 86.92, 181.16, 88.53, 182.81);
        context.bezierCurveTo(87.65, 182.55, 85.89, 182.01, 85.01, 181.75);
        context.bezierCurveTo(82, 179.65, 79.48, 176.97, 76.92, 174.39);
        context.bezierCurveTo(76.73, 175.93, 76.53, 177.48, 76.33, 179.01);
        context.bezierCurveTo(75.73, 178.73, 75.13, 178.47, 74.53, 178.21);
        context.bezierCurveTo(73.37, 175.88, 72.21, 173.55, 71.04, 171.23);
        context.bezierCurveTo(70.95, 173.31, 70.83, 175.4, 70.81, 177.49);
        context.bezierCurveTo(70.75, 189.24, 79.05, 198.28, 85.49, 207.23);
        context.bezierCurveTo(79.85, 203.32, 75.72, 197.75, 72, 192.05);
        context.bezierCurveTo(69.36, 184.13, 69.08, 175.73, 70.27, 167.52);
        context.bezierCurveTo(69.27, 166.01, 68.25, 164.49, 67.25, 162.99);
        context.closePath();
        context.fillStyle = fillColor61;
        context.fill();


    }

    function drawPath63() {
        context.beginPath();
        context.moveTo(422.29, 179.64);
        context.bezierCurveTo(428.09, 174.92, 427.6, 166.41, 433.33, 161.57);
        context.bezierCurveTo(434.31, 166.92, 434.07, 172.49, 432.96, 177.79);
        context.bezierCurveTo(431.25, 180.51, 429.08, 182.91, 427.6, 185.77);
        context.bezierCurveTo(427, 186.27, 425.79, 187.27, 425.19, 187.77);
        context.bezierCurveTo(423.52, 190.81, 422.31, 194.08, 421.03, 197.29);
        context.bezierCurveTo(422.61, 196.64, 424.21, 195.99, 425.83, 195.35);
        context.bezierCurveTo(424.99, 203.72, 418.19, 209.07, 412.17, 214.03);
        context.bezierCurveTo(412.11, 213.04, 412, 211.05, 411.93, 210.07);
        context.bezierCurveTo(414.92, 207.21, 417.45, 203.88, 419.17, 200.11);
        context.bezierCurveTo(416.33, 202.17, 413.65, 204.48, 411.25, 207.05);
        context.bezierCurveTo(408.23, 206.69, 405.17, 206.44, 402.12, 206.59);
        context.bezierCurveTo(403.52, 204.88, 405.05, 203.24, 406.2, 201.35);
        context.bezierCurveTo(407.48, 198.95, 406.95, 195.75, 409.16, 193.88);
        context.bezierCurveTo(413.75, 189.32, 417.61, 184.11, 422.29, 179.64);
        context.closePath();
        context.moveTo(413.92, 192.93);
        context.bezierCurveTo(412.16, 193.81, 409.6, 195.57, 409.87, 197.76);
        context.bezierCurveTo(411.95, 198.71, 415.97, 194.24, 413.92, 192.93);
        context.closePath();
        context.fillStyle = fillColor62;
        context.fill();


    }

    function drawPath64() {
        context.beginPath();
        context.moveTo(210.99, 165.08);
        context.bezierCurveTo(211.55, 164.52, 212.67, 163.41, 213.23, 162.87);
        context.bezierCurveTo(215.95, 167.08, 219.11, 171.07, 222.97, 174.29);
        context.bezierCurveTo(223.99, 174.84, 225.03, 175.33, 226.08, 175.83);
        context.bezierCurveTo(226.84, 177.16, 227.57, 178.52, 228.41, 179.81);
        context.bezierCurveTo(230.28, 181.56, 232.33, 183.13, 234.64, 184.28);
        context.bezierCurveTo(236.56, 184.31, 238.43, 183.85, 240.28, 183.37);
        context.bezierCurveTo(242.87, 184.08, 245.41, 184.99, 247.85, 186.16);
        context.bezierCurveTo(241.28, 190.91, 232.41, 187.77, 225.44, 185.43);
        context.bezierCurveTo(224.17, 184.44, 222.93, 183.44, 221.73, 182.4);
        context.bezierCurveTo(218.95, 176.07, 212.25, 172.25, 210.99, 165.08);
        context.closePath();
        context.fillStyle = fillColor63;
        context.fill();


    }

    function drawPath65() {
        context.beginPath();
        context.moveTo(377.32, 166.55);
        context.bezierCurveTo(373.07, 174.03, 374.63, 182.68, 375.83, 190.75);
        context.bezierCurveTo(374.28, 193.35, 373.15, 196.15, 371.72, 198.8);
        context.bezierCurveTo(371.08, 199.07, 369.83, 199.6, 369.19, 199.87);
        context.bezierCurveTo(368.8, 200.07, 368.01, 200.44, 367.63, 200.63);
        context.bezierCurveTo(368.49, 202.08, 369.76, 202.99, 371.43, 203.35);
        context.bezierCurveTo(369.61, 203.64, 367.77, 203.87, 365.97, 204.13);
        context.bezierCurveTo(367.41, 210.45, 374.6, 208.92, 379.31, 207.81);
        context.bezierCurveTo(379.09, 208.57, 378.67, 210.09, 378.45, 210.85);
        context.bezierCurveTo(379.49, 210.95, 380.55, 211.03, 381.61, 211.13);
        context.bezierCurveTo(382, 212.75, 382.4, 214.36, 382.8, 215.99);
        context.lineTo(381.72, 215.67);
        context.bezierCurveTo(381.04, 215.35, 380.37, 215.04, 379.71, 214.75);
        context.bezierCurveTo(374.31, 211.31, 368.08, 209.61, 361.88, 208.32);
        context.bezierCurveTo(360.93, 207.25, 360.01, 206.17, 359.13, 205.05);
        context.bezierCurveTo(358.75, 204.51, 357.99, 203.4, 357.6, 202.85);
        context.lineTo(356.79, 201.77);
        context.bezierCurveTo(356.75, 200.07, 356.8, 198.37, 356.85, 196.68);
        context.bezierCurveTo(357.44, 195.73, 358.03, 194.77, 358.63, 193.81);
        context.bezierCurveTo(356.36, 192.41, 354.09, 191.01, 351.83, 189.63);
        context.bezierCurveTo(352.01, 188.77, 352.36, 187.07, 352.55, 186.21);
        context.bezierCurveTo(355.64, 187.87, 358.71, 189.57, 361.75, 191.32);
        context.bezierCurveTo(360.89, 189.79, 360.04, 188.27, 359.2, 186.73);
        context.bezierCurveTo(361.75, 186.23, 363.95, 184.85, 366.08, 183.41);
        context.lineTo(366.68, 183.05);
        context.bezierCurveTo(365.89, 181.68, 365.12, 180.31, 364.35, 178.95);
        context.bezierCurveTo(364.91, 178.85, 366.04, 178.69, 366.61, 178.61);
        context.bezierCurveTo(367.25, 176.36, 367.88, 174.12, 368.53, 171.88);
        context.bezierCurveTo(371.6, 170.33, 374.52, 168.53, 377.32, 166.55);
        context.closePath();
        context.moveTo(360.65, 199.64);
        context.bezierCurveTo(360.56, 201.29, 363.44, 202.71, 364.89, 202);
        context.bezierCurveTo(365.56, 199.87, 362.19, 198.44, 360.65, 199.64);
        context.closePath();
        context.fillStyle = fillColor64;
        context.fill();


    }

    function drawPath66() {
        context.beginPath();
        context.moveTo(334.92, 171.43);
        context.bezierCurveTo(337.44, 169.71, 340.11, 168.21, 342.77, 166.72);
        context.bezierCurveTo(342.77, 172.07, 342.77, 177.41, 342.69, 182.76);
        context.bezierCurveTo(342.07, 184.52, 341.39, 186.27, 340.72, 188.01);
        context.bezierCurveTo(339.57, 187.4, 338.44, 186.8, 337.32, 186.21);
        context.bezierCurveTo(335.92, 191.93, 336.83, 197.83, 336.48, 203.64);
        context.bezierCurveTo(334.72, 204.56, 332.97, 205.48, 331.23, 206.4);
        context.bezierCurveTo(332.63, 208.76, 334.73, 211, 334.61, 213.93);
        context.bezierCurveTo(334.76, 221, 333.72, 228.01, 333.4, 235.07);
        context.bezierCurveTo(332.68, 234.91, 331.25, 234.59, 330.53, 234.43);
        context.bezierCurveTo(331.55, 242.08, 331.77, 249.85, 331.09, 257.55);
        context.bezierCurveTo(329.29, 266.89, 332.99, 275.97, 334.04, 285.17);
        context.bezierCurveTo(336.49, 295.47, 335.08, 306.08, 336.39, 316.51);
        context.bezierCurveTo(337.24, 325.43, 337.63, 334.43, 336.79, 343.37);
        context.bezierCurveTo(335.15, 340.31, 334.37, 336.95, 334.05, 333.52);
        context.bezierCurveTo(333.45, 333.12, 332.24, 332.31, 331.64, 331.91);
        context.bezierCurveTo(330.77, 326.4, 330.37, 320.85, 329.72, 315.32);
        context.bezierCurveTo(329.41, 310.69, 326.23, 307.08, 323.89, 303.31);
        context.bezierCurveTo(323.44, 307.01, 323.32, 310.84, 325.47, 314.11);
        context.bezierCurveTo(324.19, 322.75, 328.23, 330.89, 329.03, 339.39);
        context.bezierCurveTo(323.96, 325.84, 324.97, 310.97, 320.31, 297.37);
        context.lineTo(320.28, 297.08);
        context.bezierCurveTo(321.01, 281.4, 320.09, 265.68, 318.92, 250.04);
        context.bezierCurveTo(318.55, 237.91, 319.44, 225.79, 319.64, 213.67);
        context.bezierCurveTo(320.33, 198.49, 324.71, 182.99, 334.92, 171.43);
        context.closePath();
        context.moveTo(322.65, 270.51);
        context.bezierCurveTo(323.21, 274.45, 323.83, 278.4, 324.16, 282.39);
        context.lineTo(325.64, 282.11);
        context.bezierCurveTo(324.85, 278.29, 326.77, 272.76, 322.65, 270.51);
        context.closePath();
        context.moveTo(324.16, 283.65);
        context.bezierCurveTo(323.55, 285.53, 324.16, 286.27, 326.01, 285.84);
        context.bezierCurveTo(326.61, 283.96, 326, 283.24, 324.16, 283.65);
        context.closePath();
        context.moveTo(324.15, 286.79);
        context.bezierCurveTo(325.13, 290.81, 324.35, 294.93, 324.49, 299);
        context.bezierCurveTo(325.4, 301.31, 326.57, 303.51, 326.96, 305.99);
        context.lineTo(328.47, 305.99);
        context.bezierCurveTo(327.83, 300.72, 327.71, 295.4, 327.01, 290.13);
        context.bezierCurveTo(327.03, 288.16, 326.07, 287.04, 324.15, 286.79);
        context.closePath();
        context.fillStyle = fillColor65;
        context.fill();


    }

    function drawPath67() {
        context.beginPath();
        context.moveTo(71.04, 171.23);
        context.bezierCurveTo(72.21, 173.55, 73.37, 175.88, 74.53, 178.21);
        context.bezierCurveTo(75.13, 178.47, 75.73, 178.73, 76.33, 179.01);
        context.bezierCurveTo(76.53, 177.48, 76.73, 175.93, 76.92, 174.39);
        context.bezierCurveTo(79.48, 176.97, 82, 179.65, 85.01, 181.75);
        context.bezierCurveTo(84.47, 182.09, 83.39, 182.8, 82.84, 183.15);
        context.bezierCurveTo(86.8, 188.23, 88.24, 194.59, 90.87, 200.36);
        context.bezierCurveTo(92.08, 202.72, 91.41, 205.4, 91.15, 207.91);
        context.bezierCurveTo(86.95, 201.89, 80.65, 197.27, 78.24, 190.13);
        context.bezierCurveTo(76.56, 185.49, 74.39, 180.97, 70.81, 177.49);
        context.bezierCurveTo(70.83, 175.4, 70.95, 173.31, 71.04, 171.23);
        context.closePath();
        context.fillStyle = fillColor66;
        context.fill();


    }

    function drawPath68() {
        context.beginPath();
        context.moveTo(344.05, 170.55);
        context.bezierCurveTo(344.77, 173.39, 345.36, 176.25, 345.85, 179.13);
        context.bezierCurveTo(346.47, 184.11, 349.96, 188.01, 351.24, 192.77);
        context.bezierCurveTo(351.08, 197.88, 351.64, 202.99, 351.55, 208.09);
        context.bezierCurveTo(350.49, 206.8, 349.48, 205.48, 348.51, 204.13);
        context.bezierCurveTo(347.87, 202.64, 347.24, 201.16, 346.6, 199.69);
        context.bezierCurveTo(344.37, 190.17, 343.39, 180.29, 344.05, 170.55);
        context.closePath();
        context.fillStyle = fillColor67;
        context.fill();


    }

    function drawPath69() {
        context.beginPath();
        context.moveTo(254.19, 175.08);
        context.bezierCurveTo(258.96, 177.99, 259.24, 184.13, 262.77, 188.13);
        context.bezierCurveTo(267.09, 187.4, 271.56, 186.64, 275.12, 183.89);
        context.bezierCurveTo(276.83, 185.79, 278.48, 187.79, 280.56, 189.32);
        context.bezierCurveTo(283.61, 190.8, 287.13, 190.64, 290.43, 190.29);
        context.bezierCurveTo(296.65, 188.43, 299.65, 182.13, 304.81, 178.69);
        context.bezierCurveTo(308.25, 176.21, 312.65, 176.09, 316.65, 175.27);
        context.bezierCurveTo(312.36, 180.47, 308.04, 185.96, 301.96, 189.16);
        context.bezierCurveTo(297.28, 192.07, 291.68, 192.96, 287.01, 195.85);
        context.lineTo(285.41, 196.96);
        context.bezierCurveTo(281.44, 196.31, 277.24, 195.08, 273.36, 196.81);
        context.bezierCurveTo(273.99, 196.03, 275.24, 194.44, 275.85, 193.65);
        context.bezierCurveTo(270.52, 191.29, 264.6, 190.89, 258.84, 191);
        context.bezierCurveTo(256.77, 190.44, 254.76, 189.68, 252.84, 188.76);
        context.bezierCurveTo(254.89, 184.48, 253.96, 179.64, 254.19, 175.08);
        context.closePath();
        context.fillStyle = fillColor68;
        context.fill();


    }

    function drawPath70() {
        context.beginPath();
        context.moveTo(46.17, 178.93);
        context.bezierCurveTo(47.59, 178.15, 49, 177.36, 50.48, 176.69);
        context.bezierCurveTo(50.69, 177.49, 51.11, 179.11, 51.31, 179.91);
        context.bezierCurveTo(55.89, 181.69, 58.75, 185.69, 61.65, 189.43);
        context.bezierCurveTo(64.41, 189.68, 66.85, 191.15, 67.16, 194.12);
        context.bezierCurveTo(67.57, 194.59, 68.39, 195.52, 68.8, 195.99);
        context.bezierCurveTo(69.13, 196.39, 69.83, 197.17, 70.16, 197.56);
        context.bezierCurveTo(69.57, 198.81, 69, 200.07, 68.41, 201.32);
        context.bezierCurveTo(65.93, 199.47, 63.49, 197.55, 61.19, 195.48);
        context.bezierCurveTo(59.39, 190.47, 57.16, 185.03, 51.72, 183.05);
        context.bezierCurveTo(51.15, 184.52, 50.59, 186, 50.01, 187.47);
        context.bezierCurveTo(52.99, 191.35, 55.08, 195.91, 58.69, 199.27);
        context.bezierCurveTo(60.41, 200.91, 61.85, 202.81, 63.13, 204.83);
        context.bezierCurveTo(60.95, 204.55, 58.76, 204.25, 56.57, 203.99);
        context.bezierCurveTo(58.69, 206.23, 61.6, 207.25, 64.27, 208.64);
        context.bezierCurveTo(66.93, 213.67, 68.81, 219.05, 71.28, 224.17);
        context.bezierCurveTo(73.12, 225.44, 75.51, 225.81, 77.19, 227.35);
        context.bezierCurveTo(79.31, 233.68, 82.48, 239.6, 86.28, 245.09);
        context.bezierCurveTo(88.41, 248.07, 88.37, 252.25, 91.29, 254.72);
        context.bezierCurveTo(104.71, 265.68, 106.75, 284.05, 111.55, 299.61);
        context.bezierCurveTo(111.8, 295.09, 110.39, 290.21, 112.69, 286.03);
        context.bezierCurveTo(113.45, 290.8, 113.67, 295.65, 113.93, 300.48);
        context.bezierCurveTo(114.71, 300.47, 116.27, 300.45, 117.04, 300.44);
        context.bezierCurveTo(116.92, 297.67, 116.83, 294.88, 116.89, 292.11);
        context.bezierCurveTo(121.72, 301.77, 122.64, 312.88, 121.08, 323.48);
        context.bezierCurveTo(122.43, 324.07, 123.77, 324.68, 125.12, 325.31);
        context.lineTo(125.2, 326.36);
        context.bezierCurveTo(123.59, 326.21, 121.99, 326.05, 120.39, 325.91);
        context.bezierCurveTo(119.19, 322.32, 117.93, 318.73, 116.33, 315.31);
        context.bezierCurveTo(114.85, 312.31, 113.56, 309.15, 111.33, 306.61);
        context.bezierCurveTo(107.88, 303.71, 102.88, 303.11, 99.81, 299.69);
        context.bezierCurveTo(97.95, 295.16, 97.01, 290.23, 94.33, 286.04);
        context.bezierCurveTo(94.13, 288.19, 94.01, 290.36, 93.93, 292.52);
        context.bezierCurveTo(91.84, 288.67, 88.95, 285.15, 87.84, 280.84);
        context.bezierCurveTo(86.84, 277.01, 86.16, 273.12, 85.23, 269.28);
        context.bezierCurveTo(84.23, 269.87, 83.23, 270.44, 82.24, 271.03);
        context.bezierCurveTo(78.6, 263.44, 74.08, 256.31, 71, 248.45);
        context.bezierCurveTo(69.28, 243.36, 63.61, 241.37, 61.37, 236.64);
        context.bezierCurveTo(58.96, 232.6, 59.33, 226.87, 54.89, 224.2);
        context.bezierCurveTo(49.57, 220.27, 46.61, 214.12, 41.59, 209.89);
        context.bezierCurveTo(42.77, 213.85, 43.67, 217.89, 44.01, 222.03);
        context.bezierCurveTo(42.28, 220.83, 40.57, 219.61, 38.87, 218.4);
        context.bezierCurveTo(38.65, 219.24, 38.23, 220.92, 38.01, 221.77);
        context.bezierCurveTo(35.97, 217.03, 34, 212.25, 32.13, 207.44);
        context.bezierCurveTo(29.33, 201.17, 31.73, 193.83, 28.13, 187.79);
        context.bezierCurveTo(30.79, 180.63, 39.97, 180.92, 46.17, 178.93);
        context.closePath();
        context.moveTo(37.45, 184.71);
        context.bezierCurveTo(37.48, 185.44, 37.53, 186.91, 37.56, 187.64);
        context.bezierCurveTo(43.36, 189.45, 47.75, 193.73, 52.55, 197.23);
        context.bezierCurveTo(49.87, 191.08, 43.89, 186.43, 37.45, 184.71);
        context.closePath();
        context.fillStyle = fillColor69;
        context.fill();


    }

    function drawPath71() {
        context.beginPath();
        context.moveTo(228.41, 179.81);
        context.bezierCurveTo(231.71, 179.59, 234.61, 181.08, 237.27, 182.85);
        context.bezierCurveTo(236.61, 183.21, 235.29, 183.92, 234.64, 184.28);
        context.bezierCurveTo(232.33, 183.13, 230.28, 181.56, 228.41, 179.81);
        context.closePath();
        context.fillStyle = fillColor70;
        context.fill();


    }

    function drawPath72() {
        context.beginPath();
        context.moveTo(51.72, 183.05);
        context.bezierCurveTo(57.16, 185.03, 59.39, 190.47, 61.19, 195.48);
        context.bezierCurveTo(60.52, 195.57, 59.2, 195.76, 58.53, 195.84);
        context.bezierCurveTo(61.76, 199.07, 65.24, 202.01, 68.77, 204.87);
        context.bezierCurveTo(68.65, 203.68, 68.53, 202.51, 68.41, 201.32);
        context.bezierCurveTo(69, 200.07, 69.57, 198.81, 70.16, 197.56);
        context.bezierCurveTo(69.83, 197.17, 69.13, 196.39, 68.8, 195.99);
        context.bezierCurveTo(69.79, 195.72, 71.76, 195.19, 72.75, 194.91);
        context.bezierCurveTo(76.33, 202.67, 81.13, 210.99, 89.53, 214.2);
        context.bezierCurveTo(88.71, 215.31, 87.92, 216.43, 87.12, 217.56);
        context.bezierCurveTo(88.33, 219.17, 89.53, 220.8, 90.75, 222.43);
        context.bezierCurveTo(90.07, 222.52, 88.72, 222.71, 88.05, 222.8);
        context.bezierCurveTo(89.89, 229.69, 95.97, 234.07, 98.99, 240.32);
        context.bezierCurveTo(100.28, 242.99, 102.19, 245.27, 104.61, 246.99);
        context.bezierCurveTo(102.81, 247.75, 101.01, 248.53, 99.23, 249.31);
        context.bezierCurveTo(105.85, 252.12, 105.41, 260.33, 109.53, 265.37);
        context.bezierCurveTo(110.68, 269.12, 110.92, 273.09, 112.07, 276.85);
        context.bezierCurveTo(112.68, 278.68, 115.09, 278.28, 116.57, 278.79);
        context.bezierCurveTo(119.57, 282.32, 120.84, 286.76, 121.75, 291.23);
        context.bezierCurveTo(120.03, 290.95, 118.32, 290.73, 116.59, 290.52);
        context.bezierCurveTo(115.67, 285.43, 114.35, 279.91, 109, 277.8);
        context.bezierCurveTo(110.27, 280.52, 112.16, 283.03, 112.69, 286.03);
        context.bezierCurveTo(110.39, 290.21, 111.8, 295.09, 111.55, 299.61);
        context.bezierCurveTo(106.75, 284.05, 104.71, 265.68, 91.29, 254.72);
        context.bezierCurveTo(88.37, 252.25, 88.41, 248.07, 86.28, 245.09);
        context.bezierCurveTo(82.48, 239.6, 79.31, 233.68, 77.19, 227.35);
        context.bezierCurveTo(75.51, 225.81, 73.12, 225.44, 71.28, 224.17);
        context.bezierCurveTo(68.81, 219.05, 66.93, 213.67, 64.27, 208.64);
        context.bezierCurveTo(61.6, 207.25, 58.69, 206.23, 56.57, 203.99);
        context.bezierCurveTo(58.76, 204.25, 60.95, 204.55, 63.13, 204.83);
        context.bezierCurveTo(61.85, 202.81, 60.41, 200.91, 58.69, 199.27);
        context.bezierCurveTo(55.08, 195.91, 52.99, 191.35, 50.01, 187.47);
        context.bezierCurveTo(50.59, 186, 51.15, 184.52, 51.72, 183.05);
        context.closePath();
        context.moveTo(95.65, 250.81);
        context.bezierCurveTo(97.29, 256.28, 100.2, 261.45, 104.35, 265.43);
        context.bezierCurveTo(105.16, 263.48, 104.85, 261.47, 103.45, 259.89);
        context.bezierCurveTo(100.97, 256.79, 99.59, 252.41, 95.65, 250.81);
        context.closePath();
        context.fillStyle = fillColor71;
        context.fill();


    }

    function drawPath73() {
        context.beginPath();
        context.moveTo(340.72, 188.01);
        context.bezierCurveTo(341.39, 186.27, 342.07, 184.52, 342.69, 182.76);
        context.bezierCurveTo(342.97, 188.57, 343.53, 194.59, 346.6, 199.69);
        context.bezierCurveTo(347.24, 201.16, 347.87, 202.64, 348.51, 204.13);
        context.bezierCurveTo(349, 207.15, 348.84, 210.4, 350.25, 213.19);
        context.bezierCurveTo(351.73, 215.11, 353.88, 216.35, 355.77, 217.81);
        context.lineTo(356.85, 218.63);
        context.bezierCurveTo(358.05, 228.39, 358.52, 238.31, 361.41, 247.76);
        context.bezierCurveTo(361.4, 248.39, 361.39, 249.63, 361.39, 250.25);
        context.bezierCurveTo(360.95, 250, 360.08, 249.49, 359.65, 249.23);
        context.bezierCurveTo(358.57, 248.49, 357.52, 247.75, 356.49, 246.99);
        context.bezierCurveTo(354.15, 246.51, 351.97, 245.49, 350, 244.16);
        context.bezierCurveTo(348.6, 246.11, 347.21, 248.04, 345.81, 249.97);
        context.bezierCurveTo(344.43, 250.51, 343.03, 251.01, 341.71, 251.71);
        context.bezierCurveTo(340.67, 254.15, 340.2, 256.77, 339.59, 259.35);
        context.bezierCurveTo(341.08, 260.41, 342.59, 261.48, 344.09, 262.56);
        context.bezierCurveTo(342.64, 262.56, 341.2, 262.57, 339.76, 262.57);
        context.bezierCurveTo(338.53, 267.31, 340.53, 271.95, 340.87, 276.65);
        context.bezierCurveTo(341.67, 286.43, 344.08, 296.08, 343.6, 305.96);
        context.bezierCurveTo(342.83, 317.16, 345, 328.28, 346.68, 339.31);
        context.bezierCurveTo(345.53, 338.63, 344.41, 337.95, 343.29, 337.27);
        context.bezierCurveTo(341.12, 339.96, 339.01, 342.71, 336.97, 345.52);
        context.bezierCurveTo(335.72, 345.23, 334.49, 344.93, 333.25, 344.65);
        context.bezierCurveTo(332.55, 340.43, 332.12, 336.16, 331.64, 331.91);
        context.bezierCurveTo(332.24, 332.31, 333.45, 333.12, 334.05, 333.52);
        context.bezierCurveTo(334.37, 336.95, 335.15, 340.31, 336.79, 343.37);
        context.bezierCurveTo(337.63, 334.43, 337.24, 325.43, 336.39, 316.51);
        context.bezierCurveTo(335.08, 306.08, 336.49, 295.47, 334.04, 285.17);
        context.bezierCurveTo(332.99, 275.97, 329.29, 266.89, 331.09, 257.55);
        context.bezierCurveTo(332.24, 258.67, 333.4, 259.79, 334.55, 260.91);
        context.bezierCurveTo(333.59, 252.33, 333.07, 243.69, 333.4, 235.07);
        context.bezierCurveTo(333.72, 228.01, 334.76, 221, 334.61, 213.93);
        context.bezierCurveTo(334.73, 211, 332.63, 208.76, 331.23, 206.4);
        context.bezierCurveTo(332.97, 205.48, 334.72, 204.56, 336.48, 203.64);
        context.bezierCurveTo(336.83, 197.83, 335.92, 191.93, 337.32, 186.21);
        context.bezierCurveTo(338.44, 186.8, 339.57, 187.4, 340.72, 188.01);
        context.closePath();
        context.fillStyle = fillColor72;
        context.fill();


    }

    function drawPath74() {
        context.beginPath();
        context.moveTo(37.45, 184.71);
        context.bezierCurveTo(43.89, 186.43, 49.87, 191.08, 52.55, 197.23);
        context.bezierCurveTo(47.75, 193.73, 43.36, 189.45, 37.56, 187.64);
        context.bezierCurveTo(37.53, 186.91, 37.48, 185.44, 37.45, 184.71);
        context.closePath();
        context.fillStyle = fillColor73;
        context.fill();


    }

    function drawPath75() {
        context.beginPath();
        context.moveTo(225.44, 185.43);
        context.bezierCurveTo(232.41, 187.77, 241.28, 190.91, 247.85, 186.16);
        context.bezierCurveTo(249.53, 186.97, 251.16, 187.89, 252.84, 188.76);
        context.bezierCurveTo(254.76, 189.68, 256.77, 190.44, 258.84, 191);
        context.bezierCurveTo(252.55, 192.77, 246.53, 195.81, 239.8, 195.51);
        context.bezierCurveTo(239.49, 195.11, 238.85, 194.31, 238.53, 193.91);
        context.bezierCurveTo(240.71, 193.23, 242.89, 192.56, 245.08, 191.92);
        context.bezierCurveTo(237.89, 192.64, 230.41, 190.97, 225.44, 185.43);
        context.closePath();
        context.fillStyle = fillColor74;
        context.fill();


    }

    function drawPath76() {
        context.beginPath();
        context.moveTo(384.55, 189.19);
        context.bezierCurveTo(385.68, 187.71, 387.07, 186.47, 388.79, 185.71);
        context.bezierCurveTo(388.72, 186.91, 388.65, 188.12, 388.57, 189.33);
        context.bezierCurveTo(385.41, 191.93, 382.75, 195.09, 379.45, 197.52);
        context.bezierCurveTo(378.04, 198.8, 376.07, 197.53, 375.67, 195.96);
        context.bezierCurveTo(378.12, 194.69, 380.39, 193.11, 382.44, 191.25);
        context.bezierCurveTo(382.29, 190.69, 382.01, 189.56, 381.87, 188.99);
        context.bezierCurveTo(382.76, 189.05, 383.65, 189.12, 384.55, 189.19);
        context.closePath();
        context.fillStyle = fillColor75;
        context.fill();


    }

    function drawPath77() {
        context.beginPath();
        context.moveTo(421.03, 197.29);
        context.bezierCurveTo(422.31, 194.08, 423.52, 190.81, 425.19, 187.77);
        context.bezierCurveTo(425.77, 189.23, 426.36, 190.69, 426.95, 192.16);
        context.bezierCurveTo(426.55, 193.21, 426.17, 194.28, 425.83, 195.35);
        context.bezierCurveTo(424.21, 195.99, 422.61, 196.64, 421.03, 197.29);
        context.closePath();
        context.fillStyle = fillColor76;
        context.fill();


    }

    function drawPath78() {
        context.beginPath();
        context.moveTo(28.13, 187.79);
        context.bezierCurveTo(31.73, 193.83, 29.33, 201.17, 32.13, 207.44);
        context.bezierCurveTo(34, 212.25, 35.97, 217.03, 38.01, 221.77);
        context.bezierCurveTo(38.23, 220.92, 38.65, 219.24, 38.87, 218.4);
        context.bezierCurveTo(40.57, 219.61, 42.28, 220.83, 44.01, 222.03);
        context.bezierCurveTo(43.67, 217.89, 42.77, 213.85, 41.59, 209.89);
        context.bezierCurveTo(46.61, 214.12, 49.57, 220.27, 54.89, 224.2);
        context.bezierCurveTo(59.33, 226.87, 58.96, 232.6, 61.37, 236.64);
        context.bezierCurveTo(63.61, 241.37, 69.28, 243.36, 71, 248.45);
        context.bezierCurveTo(74.08, 256.31, 78.6, 263.44, 82.24, 271.03);
        context.bezierCurveTo(83.23, 270.44, 84.23, 269.87, 85.23, 269.28);
        context.bezierCurveTo(86.16, 273.12, 86.84, 277.01, 87.84, 280.84);
        context.bezierCurveTo(88.95, 285.15, 91.84, 288.67, 93.93, 292.52);
        context.bezierCurveTo(94.01, 290.36, 94.13, 288.19, 94.33, 286.04);
        context.bezierCurveTo(97.01, 290.23, 97.95, 295.16, 99.81, 299.69);
        context.bezierCurveTo(102.88, 303.11, 107.88, 303.71, 111.33, 306.61);
        context.bezierCurveTo(113.56, 309.15, 114.85, 312.31, 116.33, 315.31);
        context.bezierCurveTo(109.89, 315.27, 105.57, 310.21, 100.92, 306.51);
        context.bezierCurveTo(98.48, 304.55, 96.68, 301.35, 93.37, 300.8);
        context.bezierCurveTo(91.75, 301.45, 90.21, 302.29, 88.68, 303.11);
        context.bezierCurveTo(90.45, 307.59, 92.68, 311.88, 95.4, 315.85);
        context.bezierCurveTo(97.63, 318.63, 97.04, 322.32, 97.37, 325.61);
        context.bezierCurveTo(98.88, 327.41, 100.33, 329.28, 101.67, 331.23);
        context.bezierCurveTo(99.24, 330.6, 96.83, 329.92, 94.45, 329.16);
        context.bezierCurveTo(93.43, 330.31, 92.41, 331.48, 91.48, 332.71);
        context.bezierCurveTo(92.15, 335.01, 94.36, 336.44, 95.83, 338.24);
        context.bezierCurveTo(92.72, 338.68, 89.56, 338.84, 86.45, 338.27);
        context.bezierCurveTo(83.88, 337, 78.64, 336.23, 81.92, 332.52);
        context.bezierCurveTo(80.63, 332.17, 79.29, 332.68, 78, 332.33);
        context.bezierCurveTo(74.04, 329.97, 70.13, 327.08, 65.37, 326.77);
        context.bezierCurveTo(60.63, 320.91, 59.53, 313.08, 55.89, 306.57);
        context.bezierCurveTo(58.83, 305.92, 61.84, 305.81, 64.75, 306.71);
        context.bezierCurveTo(62.99, 300.85, 59.91, 295.44, 55.85, 290.89);
        context.bezierCurveTo(59.47, 284.05, 54.03, 277.48, 49.04, 273.23);
        context.bezierCurveTo(48.52, 273.57, 47.47, 274.27, 46.93, 274.61);
        context.bezierCurveTo(46.71, 274.27, 46.25, 273.59, 46.03, 273.24);
        context.bezierCurveTo(44.53, 266, 45.57, 258.45, 43.57, 251.29);
        context.bezierCurveTo(43.24, 255.33, 43.03, 259.39, 42.76, 263.43);
        context.bezierCurveTo(41.24, 263.15, 39.72, 262.88, 38.2, 262.61);
        context.bezierCurveTo(36.69, 253.85, 38.19, 244.75, 35.33, 236.16);
        context.bezierCurveTo(34.47, 234.36, 32.64, 233.31, 31.29, 231.92);
        context.bezierCurveTo(31.23, 223.61, 29.53, 215.51, 27.65, 207.45);
        context.bezierCurveTo(26.03, 200.97, 26.89, 194.25, 28.13, 187.79);
        context.closePath();
        context.moveTo(38.27, 242.17);
        context.bezierCurveTo(39.39, 245.01, 39.35, 248.81, 42.15, 250.65);
        context.bezierCurveTo(41.63, 243.93, 39.23, 237.59, 38.2, 230.97);
        context.bezierCurveTo(35.79, 234.29, 37.44, 238.57, 38.27, 242.17);
        context.closePath();
        context.moveTo(56.01, 258.24);
        context.bezierCurveTo(60.8, 261.72, 64.85, 266.36, 67.87, 271.37);
        context.bezierCurveTo(67.96, 279.13, 71.13, 286.24, 73.81, 293.37);
        context.bezierCurveTo(74.6, 293.68, 76.19, 294.28, 76.97, 294.59);
        context.bezierCurveTo(77.83, 296.73, 78.59, 298.95, 79.71, 301);
        context.bezierCurveTo(80.91, 302.61, 83.17, 301.81, 84.87, 302.04);
        context.bezierCurveTo(84.21, 299.41, 83.55, 296.77, 82.88, 294.15);
        context.bezierCurveTo(84.65, 293.55, 87.49, 294.19, 88.03, 291.83);
        context.bezierCurveTo(86.2, 291.75, 84.37, 291.68, 82.55, 291.63);
        context.bezierCurveTo(81.13, 290.45, 79.72, 289.28, 78.31, 288.11);
        context.bezierCurveTo(77.2, 288.2, 76.09, 288.31, 75, 288.41);
        context.bezierCurveTo(75.36, 280, 69.63, 273.13, 67, 265.51);
        context.bezierCurveTo(65.55, 260.88, 60.68, 258.21, 56.01, 258.24);
        context.closePath();
        context.moveTo(65.39, 279.21);
        context.bezierCurveTo(66.13, 285.2, 68.68, 290.76, 69.75, 296.69);
        context.bezierCurveTo(70.2, 299.53, 72.03, 301.83, 73.69, 304.07);
        context.bezierCurveTo(73.57, 308.93, 75.25, 313.53, 77.49, 317.77);
        context.bezierCurveTo(79.96, 322.19, 79.59, 327.97, 83.59, 331.51);
        context.bezierCurveTo(86.93, 324.11, 82.4, 316.11, 81.92, 308.48);
        context.bezierCurveTo(84.08, 310, 85.85, 311.97, 87.43, 314.08);
        context.bezierCurveTo(87.43, 311.77, 87.95, 309.53, 88.77, 307.4);
        context.bezierCurveTo(85.99, 306.72, 83.12, 306.51, 80.25, 306.51);
        context.bezierCurveTo(79.89, 307.57, 79.52, 308.64, 79.16, 309.72);
        context.bezierCurveTo(76.13, 306.25, 77.24, 301.2, 75.23, 297.57);
        context.bezierCurveTo(68.33, 293.75, 70.89, 283.95, 65.39, 279.21);
        context.closePath();
        context.fillStyle = fillColor77;
        context.fill();


    }

    function drawPath79() {
        context.beginPath();
        context.moveTo(101.33, 199.15);
        context.bezierCurveTo(99.32, 196.08, 98.45, 192.15, 99.15, 188.53);
        context.bezierCurveTo(100.99, 191.77, 101.76, 195.44, 101.33, 199.15);
        context.closePath();
        context.fillStyle = fillColor78;
        context.fill();


    }

    function drawPath80() {
        context.beginPath();
        context.moveTo(351.83, 189.63);
        context.bezierCurveTo(354.09, 191.01, 356.36, 192.41, 358.63, 193.81);
        context.bezierCurveTo(358.03, 194.77, 357.44, 195.73, 356.85, 196.68);
        context.bezierCurveTo(356.8, 198.37, 356.75, 200.07, 356.79, 201.77);
        context.bezierCurveTo(353.04, 201.65, 356.77, 207.33, 359.13, 205.05);
        context.bezierCurveTo(360.01, 206.17, 360.93, 207.25, 361.88, 208.32);
        context.bezierCurveTo(364.19, 211.67, 368.47, 211.85, 371.92, 213.29);
        context.bezierCurveTo(374.45, 214.08, 376.97, 215.81, 379.71, 214.75);
        context.bezierCurveTo(380.37, 215.04, 381.04, 215.35, 381.72, 215.67);
        context.bezierCurveTo(380.81, 216.29, 379.01, 217.55, 378.11, 218.17);
        context.bezierCurveTo(381.29, 222.89, 387.16, 222, 392.05, 221.44);
        context.bezierCurveTo(389.39, 221.08, 386.73, 220.76, 384.08, 220.47);
        context.bezierCurveTo(386.07, 219.28, 388.07, 218.09, 390.07, 216.91);
        context.bezierCurveTo(387.63, 216.63, 385.2, 216.37, 382.8, 215.99);
        context.bezierCurveTo(382.4, 214.36, 382, 212.75, 381.61, 211.13);
        context.bezierCurveTo(380.55, 211.03, 379.49, 210.95, 378.45, 210.85);
        context.bezierCurveTo(378.67, 210.09, 379.09, 208.57, 379.31, 207.81);
        context.bezierCurveTo(374.6, 208.92, 367.41, 210.45, 365.97, 204.13);
        context.bezierCurveTo(367.77, 203.87, 369.61, 203.64, 371.43, 203.35);
        context.lineTo(372.19, 203.01);
        context.bezierCurveTo(374.21, 201.92, 376.19, 200.69, 378.17, 199.49);
        context.bezierCurveTo(378.09, 201.39, 378.01, 203.29, 377.95, 205.2);
        context.bezierCurveTo(379.35, 203.65, 380.71, 202.07, 382.24, 200.64);
        context.bezierCurveTo(383.47, 202.08, 384.56, 203.61, 385.69, 205.13);
        context.bezierCurveTo(384.41, 206.17, 383.19, 207.27, 381.95, 208.35);
        context.bezierCurveTo(382.93, 209.01, 383.93, 209.69, 384.95, 210.36);
        context.bezierCurveTo(384.73, 212.09, 384.53, 213.81, 384.35, 215.55);
        context.bezierCurveTo(387.65, 214.25, 390.43, 212.05, 392.87, 209.51);
        context.bezierCurveTo(395.15, 206.83, 398.93, 207.03, 402.12, 206.59);
        context.bezierCurveTo(405.17, 206.44, 408.23, 206.69, 411.25, 207.05);
        context.bezierCurveTo(409.84, 208.85, 408.57, 210.76, 407.37, 212.72);
        context.bezierCurveTo(408.91, 211.87, 410.45, 211.01, 411.93, 210.07);
        context.bezierCurveTo(412, 211.05, 412.11, 213.04, 412.17, 214.03);
        context.bezierCurveTo(409, 217.65, 402.73, 219.37, 402.11, 224.61);
        context.bezierCurveTo(401.93, 224.69, 401.6, 224.84, 401.43, 224.91);
        context.bezierCurveTo(395.15, 227.36, 388.4, 226.55, 381.87, 226.13);
        context.bezierCurveTo(379.99, 223, 378.03, 219.35, 373.88, 219.32);
        context.bezierCurveTo(373.08, 221.15, 372.29, 222.99, 371.51, 224.83);
        context.bezierCurveTo(370.15, 224.45, 368.8, 224.08, 367.47, 223.68);
        context.bezierCurveTo(368.05, 222.15, 371.48, 220.51, 369.96, 218.57);
        context.bezierCurveTo(366.13, 213.77, 360.01, 210.88, 353.88, 210.73);
        context.bezierCurveTo(353.08, 209.87, 352.29, 209, 351.55, 208.09);
        context.bezierCurveTo(351.64, 202.99, 351.08, 197.88, 351.24, 192.77);
        context.bezierCurveTo(351.39, 191.99, 351.68, 190.41, 351.83, 189.63);
        context.closePath();
        context.moveTo(393.39, 212.83);
        context.bezierCurveTo(389.63, 215.05, 395.57, 216.25, 397.05, 214.47);
        context.bezierCurveTo(397.52, 212.61, 394.57, 212.19, 393.39, 212.83);
        context.closePath();
        context.moveTo(399.32, 215.85);
        context.bezierCurveTo(399.72, 217.56, 400.72, 217.75, 402.33, 216.44);
        context.bezierCurveTo(401.92, 214.73, 400.92, 214.55, 399.32, 215.85);
        context.closePath();
        context.fillStyle = fillColor79;
        context.fill();


    }

    function drawPath81() {
        context.beginPath();
        context.moveTo(413.92, 192.93);
        context.bezierCurveTo(415.97, 194.24, 411.95, 198.71, 409.87, 197.76);
        context.bezierCurveTo(409.6, 195.57, 412.16, 193.81, 413.92, 192.93);
        context.closePath();
        context.fillStyle = fillColor80;
        context.fill();


    }

    function drawPath82() {
        context.beginPath();
        context.moveTo(58.53, 195.84);
        context.bezierCurveTo(59.2, 195.76, 60.52, 195.57, 61.19, 195.48);
        context.bezierCurveTo(63.49, 197.55, 65.93, 199.47, 68.41, 201.32);
        context.bezierCurveTo(68.53, 202.51, 68.65, 203.68, 68.77, 204.87);
        context.bezierCurveTo(65.24, 202.01, 61.76, 199.07, 58.53, 195.84);
        context.closePath();
        context.fillStyle = fillColor81;
        context.fill();


    }

    function drawPath83() {
        context.beginPath();
        context.moveTo(273.36, 196.81);
        context.bezierCurveTo(277.24, 195.08, 281.44, 196.31, 285.41, 196.96);
        context.bezierCurveTo(284.43, 202.05, 287.4, 206.73, 288.16, 211.65);
        context.bezierCurveTo(284.16, 207.79, 282.6, 202.35, 279.99, 197.6);
        context.bezierCurveTo(278.81, 199, 277.64, 200.37, 276.53, 201.83);
        context.bezierCurveTo(275.91, 201.47, 274.64, 200.75, 274.01, 200.4);
        context.bezierCurveTo(273.71, 199.81, 273.08, 198.67, 272.77, 198.09);
        context.lineTo(273.36, 196.81);
        context.closePath();
        context.fillStyle = fillColor82;
        context.fill();


    }

    function drawPath84() {
        context.beginPath();
        context.moveTo(285.41, 196.96);
        context.lineTo(287.01, 195.85);
        context.bezierCurveTo(287.76, 197.83, 288.52, 199.79, 289.27, 201.76);
        context.bezierCurveTo(288.99, 207.43, 292.01, 212.83, 290.96, 218.44);
        context.lineTo(288.88, 218.15);
        context.bezierCurveTo(290.72, 224.13, 291.61, 230.45, 294.39, 236.13);
        context.bezierCurveTo(296.41, 241.69, 295.85, 247.69, 296.13, 253.49);
        context.bezierCurveTo(297.77, 253.47, 299.44, 253.44, 301.09, 253.41);
        context.bezierCurveTo(301.31, 258.41, 301.44, 263.43, 301.48, 268.43);
        context.bezierCurveTo(302.63, 268.87, 303.77, 269.32, 304.92, 269.77);
        context.bezierCurveTo(304.99, 275.83, 304.51, 282.04, 306.48, 287.88);
        context.bezierCurveTo(306.52, 288.63, 306.57, 290.11, 306.6, 290.85);
        context.bezierCurveTo(306.04, 297.09, 304.87, 303.48, 306.53, 309.67);
        context.bezierCurveTo(307, 318.79, 310.11, 327.45, 311.95, 336.33);
        context.bezierCurveTo(311.95, 337, 311.93, 338.35, 311.92, 339.01);
        context.bezierCurveTo(310.55, 339.76, 309.17, 340.53, 307.83, 341.32);
        context.bezierCurveTo(305.35, 332.69, 304.35, 323.72, 301.87, 315.09);
        context.bezierCurveTo(299.41, 306, 297.03, 296.79, 296.76, 287.32);
        context.bezierCurveTo(296.28, 290.56, 295.69, 293.79, 295.09, 297.01);
        context.bezierCurveTo(294.97, 296.4, 294.72, 295.2, 294.59, 294.6);
        context.bezierCurveTo(294.23, 294.69, 293.49, 294.85, 293.13, 294.95);
        context.bezierCurveTo(292.44, 294.48, 291.75, 294.03, 291.08, 293.56);
        context.bezierCurveTo(292.2, 292.79, 293.35, 292.04, 294.49, 291.29);
        context.bezierCurveTo(294.05, 291.03, 293.16, 290.51, 292.72, 290.25);
        context.bezierCurveTo(292.71, 290.17, 292.67, 290.03, 292.65, 289.96);
        context.lineTo(293.43, 288.31);
        context.bezierCurveTo(296.31, 283.47, 293.67, 277.8, 293.32, 272.63);
        context.bezierCurveTo(292.21, 268, 293.27, 262.53, 290.15, 258.61);
        context.lineTo(290.15, 258.59);
        context.bezierCurveTo(292, 250.72, 289.47, 242.72, 288.51, 234.89);
        context.bezierCurveTo(288.09, 238.95, 288.17, 243.04, 288.45, 247.11);
        context.bezierCurveTo(288.12, 247.48, 287.44, 248.21, 287.11, 248.59);
        context.bezierCurveTo(286.57, 244.03, 286.31, 239.43, 285.81, 234.87);
        context.bezierCurveTo(286.09, 234.39, 286.67, 233.41, 286.95, 232.93);
        context.bezierCurveTo(287.2, 232.51, 287.68, 231.64, 287.93, 231.21);
        context.bezierCurveTo(287.88, 223.88, 284.68, 217.13, 280.59, 211.23);
        context.bezierCurveTo(280.31, 212.15, 279.75, 214, 279.47, 214.92);
        context.bezierCurveTo(278.15, 211.41, 276.89, 207.88, 275.77, 204.31);
        context.bezierCurveTo(275.97, 203.69, 276.35, 202.45, 276.53, 201.83);
        context.bezierCurveTo(277.64, 200.37, 278.81, 199, 279.99, 197.6);
        context.bezierCurveTo(282.6, 202.35, 284.16, 207.79, 288.16, 211.65);
        context.bezierCurveTo(287.4, 206.73, 284.43, 202.05, 285.41, 196.96);
        context.closePath();
        context.moveTo(296.48, 257.01);
        context.bezierCurveTo(297.27, 258.91, 297.05, 262.01, 299.83, 261.95);
        context.bezierCurveTo(299.76, 259.68, 300.17, 257.12, 298.37, 255.37);
        context.bezierCurveTo(297.91, 255.79, 296.96, 256.6, 296.48, 257.01);
        context.closePath();
        context.moveTo(297.6, 263.76);
        context.bezierCurveTo(296.99, 265.63, 297.6, 266.36, 299.44, 265.92);
        context.bezierCurveTo(300.04, 264.04, 299.43, 263.32, 297.6, 263.76);
        context.closePath();
        context.moveTo(301.83, 271.09);
        context.bezierCurveTo(301.68, 272.57, 301.48, 274.08, 301.47, 275.57);
        context.bezierCurveTo(297.59, 272.03, 299.67, 279.47, 300.36, 281.28);
        context.bezierCurveTo(301.91, 280.79, 301.55, 278.05, 301.73, 276.69);
        context.bezierCurveTo(302.33, 277.13, 303.53, 278.04, 304.13, 278.49);
        context.bezierCurveTo(303.43, 276.13, 305.16, 271.69, 301.83, 271.09);
        context.closePath();
        context.fillStyle = fillColor83;
        context.fill();


    }

    function drawPath85() {
        context.beginPath();
        context.moveTo(205.59, 222.67);
        context.bezierCurveTo(206.25, 213.32, 210.88, 204.49, 218.71, 199.2);
        context.bezierCurveTo(222.03, 199.21, 226.83, 199.55, 227.77, 203.51);
        context.bezierCurveTo(229.29, 209.24, 227.2, 215.03, 226.73, 220.75);
        context.bezierCurveTo(227.56, 224.91, 229.27, 228.83, 230.32, 232.92);
        context.bezierCurveTo(230.09, 234.68, 229.87, 236.44, 229.64, 238.2);
        context.bezierCurveTo(226.8, 243.97, 227.69, 250.52, 228.24, 256.68);
        context.bezierCurveTo(229.79, 269.75, 230.84, 282.99, 234.47, 295.68);
        context.bezierCurveTo(235.99, 301.2, 239.16, 306.59, 237.97, 312.49);
        context.bezierCurveTo(234.84, 306.01, 232.24, 299.24, 230.64, 292.23);
        context.bezierCurveTo(230.32, 290.57, 230.05, 288.93, 229.77, 287.28);
        context.lineTo(229.55, 286.11);
        context.bezierCurveTo(229.19, 284.23, 228.83, 282.37, 228.49, 280.49);
        context.bezierCurveTo(227.43, 273.32, 225.87, 266.19, 225.65, 258.91);
        context.bezierCurveTo(225.25, 251.45, 225.19, 243.99, 224.68, 236.53);
        context.bezierCurveTo(224.31, 230.81, 222.95, 225.09, 223.64, 219.36);
        context.bezierCurveTo(224.87, 215.45, 226.57, 211.71, 227.2, 207.64);
        context.bezierCurveTo(226.11, 205.91, 225.15, 204.12, 224.35, 202.24);
        context.bezierCurveTo(220.05, 199.64, 215.31, 203.39, 212.69, 206.72);
        context.bezierCurveTo(209.64, 211.69, 207.97, 217.36, 205.59, 222.67);
        context.closePath();
        context.fillStyle = fillColor84;
        context.fill();


    }

    function drawPath86() {
        context.beginPath();
        context.moveTo(360.65, 199.64);
        context.bezierCurveTo(362.19, 198.44, 365.56, 199.87, 364.89, 202);
        context.bezierCurveTo(363.44, 202.71, 360.56, 201.29, 360.65, 199.64);
        context.closePath();
        context.fillStyle = fillColor85;
        context.fill();


    }

    function drawPath87() {
        context.beginPath();
        context.moveTo(367.63, 200.63);
        context.bezierCurveTo(368.01, 200.44, 368.8, 200.07, 369.19, 199.87);
        context.bezierCurveTo(370.77, 200.13, 371.97, 201.43, 372.19, 203.01);
        context.lineTo(371.43, 203.35);
        context.bezierCurveTo(369.76, 202.99, 368.49, 202.08, 367.63, 200.63);
        context.closePath();
        context.fillStyle = fillColor86;
        context.fill();


    }

    function drawPath88() {
        context.beginPath();
        context.moveTo(212.69, 206.72);
        context.bezierCurveTo(215.31, 203.39, 220.05, 199.64, 224.35, 202.24);
        context.bezierCurveTo(225.15, 204.12, 226.11, 205.91, 227.2, 207.64);
        context.bezierCurveTo(226.57, 211.71, 224.87, 215.45, 223.64, 219.36);
        context.bezierCurveTo(222.95, 225.09, 224.31, 230.81, 224.68, 236.53);
        context.bezierCurveTo(225.19, 243.99, 225.25, 251.45, 225.65, 258.91);
        context.bezierCurveTo(224.93, 259.43, 223.47, 260.45, 222.75, 260.97);
        context.bezierCurveTo(224.08, 268.68, 223.56, 277.24, 227.81, 284.08);
        context.bezierCurveTo(227.99, 283.19, 228.33, 281.39, 228.49, 280.49);
        context.bezierCurveTo(228.83, 282.37, 229.19, 284.23, 229.55, 286.11);
        context.bezierCurveTo(228.69, 284.68, 225.89, 284.63, 226.91, 286.87);
        context.bezierCurveTo(227.05, 289.13, 229.72, 290.33, 229.77, 287.28);
        context.bezierCurveTo(230.05, 288.93, 230.32, 290.57, 230.64, 292.23);
        context.bezierCurveTo(229.96, 292.41, 228.59, 292.79, 227.91, 292.96);
        context.bezierCurveTo(229.83, 301.17, 232.73, 309.09, 236.44, 316.65);
        context.bezierCurveTo(236.92, 316.24, 237.85, 315.41, 238.32, 314.99);
        context.bezierCurveTo(239.64, 319.07, 241.28, 323.04, 243.05, 326.96);
        context.bezierCurveTo(241.45, 329.75, 240.35, 332.81, 240.69, 336.08);
        context.bezierCurveTo(239.47, 335.85, 238.25, 335.64, 237.04, 335.44);
        context.bezierCurveTo(240.07, 345.6, 247.35, 353.59, 253.29, 362.11);
        context.bezierCurveTo(255.71, 365.39, 254.41, 369.65, 255.19, 373.39);
        context.lineTo(255.2, 373.61);
        context.bezierCurveTo(255.2, 374.31, 255.17, 375.68, 255.16, 376.37);
        context.bezierCurveTo(254.49, 377.77, 253.75, 379.16, 253.03, 380.55);
        context.bezierCurveTo(243.16, 371.33, 238.31, 358.45, 229.87, 348.13);
        context.bezierCurveTo(225.31, 341.56, 222.17, 334.23, 218.87, 327);
        context.bezierCurveTo(218.31, 325.49, 217.8, 323.97, 217.29, 322.47);
        context.bezierCurveTo(220.93, 321.43, 219.15, 317.81, 218.64, 315.28);
        context.bezierCurveTo(215.01, 305.05, 211.81, 294.6, 210.17, 283.87);
        context.bezierCurveTo(209.15, 277.36, 209.73, 270.35, 206.76, 264.35);
        context.bezierCurveTo(206, 269.72, 205.93, 275.17, 206.33, 280.59);
        context.bezierCurveTo(205.89, 275.16, 205.69, 269.72, 205.51, 264.28);
        context.bezierCurveTo(206.88, 262.95, 208.35, 261.49, 208.07, 259.39);
        context.bezierCurveTo(208.45, 254.4, 207.83, 249.41, 206.97, 244.51);
        context.bezierCurveTo(207.61, 243.67, 208.25, 242.84, 208.91, 242.01);
        context.bezierCurveTo(207.92, 241.93, 205.95, 241.76, 204.97, 241.68);
        context.bezierCurveTo(204.91, 235.33, 204.75, 228.96, 205.59, 222.67);
        context.bezierCurveTo(207.97, 217.36, 209.64, 211.69, 212.69, 206.72);
        context.closePath();
        context.fillStyle = fillColor87;
        context.fill();


    }

    function drawPath89() {
        context.beginPath();
        context.moveTo(274.01, 200.4);
        context.bezierCurveTo(274.64, 200.75, 275.91, 201.47, 276.53, 201.83);
        context.bezierCurveTo(276.35, 202.45, 275.97, 203.69, 275.77, 204.31);
        context.bezierCurveTo(275.53, 204.76, 275.05, 205.68, 274.81, 206.13);
        context.bezierCurveTo(274.13, 205.81, 272.77, 205.17, 272.09, 204.85);
        context.bezierCurveTo(272.85, 203.81, 273.67, 202.83, 274.53, 201.85);
        context.bezierCurveTo(274.4, 201.49, 274.15, 200.76, 274.01, 200.4);
        context.closePath();
        context.fillStyle = fillColor56;
        context.fill();


    }

    function drawPath90() {
        context.beginPath();
        context.moveTo(395.2, 206.07);
        context.bezierCurveTo(395.75, 201.57, 400.76, 200.07, 404.61, 199.95);
        context.bezierCurveTo(403.36, 203.96, 399.35, 206.44, 395.2, 206.07);
        context.closePath();
        context.fillStyle = fillColor88;
        context.fill();


    }

    function drawPath91() {
        context.beginPath();
        context.moveTo(411.25, 207.05);
        context.bezierCurveTo(413.65, 204.48, 416.33, 202.17, 419.17, 200.11);
        context.bezierCurveTo(417.45, 203.88, 414.92, 207.21, 411.93, 210.07);
        context.bezierCurveTo(410.45, 211.01, 408.91, 211.87, 407.37, 212.72);
        context.bezierCurveTo(408.57, 210.76, 409.84, 208.85, 411.25, 207.05);
        context.closePath();
        context.fillStyle = fillColor89;
        context.fill();


    }

    function drawPath92() {
        context.beginPath();
        context.moveTo(289.27, 201.76);
        context.bezierCurveTo(291.31, 206.35, 293.76, 210.72, 296.07, 215.16);
        context.bezierCurveTo(293.03, 222.01, 295.51, 229.71, 296.2, 236.83);
        context.bezierCurveTo(296.63, 235.79, 297.47, 233.72, 297.89, 232.68);
        context.bezierCurveTo(299.05, 232.91, 300.21, 233.13, 301.39, 233.37);
        context.bezierCurveTo(301.39, 231.05, 301.41, 228.73, 301.44, 226.43);
        context.bezierCurveTo(303.93, 235.73, 304.65, 245.41, 305.95, 254.93);
        context.bezierCurveTo(305.64, 257.08, 305.36, 259.25, 305.57, 261.43);
        context.bezierCurveTo(306.48, 270.21, 306.08, 279.07, 306.48, 287.88);
        context.bezierCurveTo(304.51, 282.04, 304.99, 275.83, 304.92, 269.77);
        context.bezierCurveTo(303.77, 269.32, 302.63, 268.87, 301.48, 268.43);
        context.bezierCurveTo(301.44, 263.43, 301.31, 258.41, 301.09, 253.41);
        context.bezierCurveTo(299.44, 253.44, 297.77, 253.47, 296.13, 253.49);
        context.bezierCurveTo(295.85, 247.69, 296.41, 241.69, 294.39, 236.13);
        context.bezierCurveTo(293.73, 230.13, 292.15, 224.32, 290.96, 218.44);
        context.bezierCurveTo(292.01, 212.83, 288.99, 207.43, 289.27, 201.76);
        context.closePath();
        context.fillStyle = fillColor90;
        context.fill();


    }

    function drawPath93() {
        context.beginPath();
        context.moveTo(359.13, 205.05);
        context.bezierCurveTo(356.77, 207.33, 353.04, 201.65, 356.79, 201.77);
        context.lineTo(357.6, 202.85);
        context.bezierCurveTo(357.99, 203.4, 358.75, 204.51, 359.13, 205.05);
        context.closePath();
        context.fillStyle = fillColor91;
        context.fill();


    }

    function drawPath94() {
        context.beginPath();
        context.moveTo(106.89, 203.04);
        context.bezierCurveTo(108.48, 203.29, 110.08, 203.55, 111.67, 203.81);
        context.bezierCurveTo(113.57, 207.49, 115.21, 211.67, 114.32, 215.88);
        context.bezierCurveTo(110.68, 212.37, 109, 207.49, 106.89, 203.04);
        context.closePath();
        context.fillStyle = fillColor92;
        context.fill();


    }

    function drawPath95() {
        context.beginPath();
        context.moveTo(272.09, 204.85);
        context.bezierCurveTo(272.77, 205.17, 274.13, 205.81, 274.81, 206.13);
        context.bezierCurveTo(279.59, 222.17, 278.53, 239.12, 279.88, 255.63);
        context.bezierCurveTo(280.4, 260.04, 280.63, 264.49, 280.55, 268.95);
        context.bezierCurveTo(280.27, 280.67, 283.27, 292.43, 281.01, 304.09);
        context.bezierCurveTo(280.16, 304.4, 278.47, 305.01, 277.61, 305.32);
        context.lineTo(277.64, 304.57);
        context.bezierCurveTo(280.84, 299.71, 280.64, 293.44, 278.79, 288.12);
        context.bezierCurveTo(278.32, 286.76, 277.85, 285.4, 277.37, 284.05);
        context.bezierCurveTo(277.35, 282.11, 277.4, 280.16, 277.47, 278.23);
        context.bezierCurveTo(278.72, 267.81, 276.36, 257.47, 276.55, 247.07);
        context.bezierCurveTo(276.59, 241.31, 275.49, 235.64, 275.15, 229.92);
        context.bezierCurveTo(275.27, 228.25, 274.41, 226.88, 273.47, 225.61);
        context.lineTo(273.45, 225.55);
        context.bezierCurveTo(274.8, 218.84, 272.07, 212.31, 271.84, 205.63);
        context.lineTo(272.09, 204.85);
        context.closePath();
        context.fillStyle = fillColor93;
        context.fill();


    }

    function drawPath96() {
        context.beginPath();
        context.moveTo(274.81, 206.13);
        context.bezierCurveTo(275.05, 205.68, 275.53, 204.76, 275.77, 204.31);
        context.bezierCurveTo(276.89, 207.88, 278.15, 211.41, 279.47, 214.92);
        context.bezierCurveTo(281.84, 221.48, 285.08, 227.81, 285.81, 234.87);
        context.bezierCurveTo(286.31, 239.43, 286.57, 244.03, 287.11, 248.59);
        context.bezierCurveTo(287.44, 248.21, 288.12, 247.48, 288.45, 247.11);
        context.bezierCurveTo(288.49, 247.61, 288.57, 248.65, 288.6, 249.17);
        context.bezierCurveTo(287.84, 253.53, 287.67, 257.96, 288.19, 262.35);
        context.bezierCurveTo(288.63, 261.85, 289.51, 260.85, 289.95, 260.35);
        context.bezierCurveTo(289.92, 260.88, 289.84, 261.96, 289.81, 262.49);
        context.bezierCurveTo(288.19, 271.71, 291.2, 280.91, 292.65, 289.96);
        context.bezierCurveTo(292.67, 290.03, 292.71, 290.17, 292.72, 290.25);
        context.bezierCurveTo(293.16, 290.51, 294.05, 291.03, 294.49, 291.29);
        context.bezierCurveTo(293.35, 292.04, 292.2, 292.79, 291.08, 293.56);
        context.bezierCurveTo(291.75, 294.03, 292.44, 294.48, 293.13, 294.95);
        context.bezierCurveTo(292.89, 299.32, 292.89, 303.71, 292.6, 308.08);
        context.bezierCurveTo(293.91, 308.53, 295.21, 308.99, 296.52, 309.45);
        context.bezierCurveTo(297.21, 312.48, 297.93, 315.51, 298.59, 318.55);
        context.bezierCurveTo(298.04, 321.33, 297.08, 324.39, 299.01, 326.89);
        context.bezierCurveTo(298.37, 327.49, 297.75, 328.09, 297.13, 328.71);
        context.bezierCurveTo(297.95, 329.05, 298.77, 329.4, 299.6, 329.75);
        context.bezierCurveTo(299.69, 330.28, 299.91, 331.35, 300, 331.88);
        context.bezierCurveTo(299.32, 331.87, 297.96, 331.83, 297.28, 331.81);
        context.bezierCurveTo(297.32, 335.29, 297.28, 338.79, 297.33, 342.28);
        context.lineTo(297.4, 343.24);
        context.bezierCurveTo(293.68, 341.07, 290.17, 338.13, 285.88, 337.24);
        context.bezierCurveTo(280.56, 337.47, 276.29, 341.28, 271.81, 343.75);
        context.bezierCurveTo(270.37, 344.95, 269.04, 346.25, 267.69, 347.56);
        context.bezierCurveTo(267.2, 345.95, 266.71, 344.36, 266.21, 342.76);
        context.bezierCurveTo(266.92, 342.72, 268.32, 342.64, 269.03, 342.6);
        context.bezierCurveTo(266.45, 334.33, 264.13, 325.99, 261.68, 317.69);
        context.bezierCurveTo(259.87, 312.87, 257.67, 308.16, 256.55, 303.11);
        context.lineTo(257.05, 301.16);
        context.bezierCurveTo(255.99, 298.08, 253.69, 295.69, 251.19, 293.71);
        context.bezierCurveTo(248.72, 290.28, 246.93, 286.41, 245.95, 282.31);
        context.bezierCurveTo(245.55, 278.63, 245.21, 274.93, 244.8, 271.25);
        context.bezierCurveTo(247.81, 275.03, 250.01, 279.72, 254.4, 282.16);
        context.lineTo(254.96, 283.07);
        context.bezierCurveTo(257.37, 288.68, 261.87, 293.11, 264.04, 298.88);
        context.bezierCurveTo(264.47, 298.75, 265.33, 298.48, 265.77, 298.35);
        context.bezierCurveTo(267.97, 297.96, 270.96, 296.28, 272.71, 298.51);
        context.bezierCurveTo(274.57, 301.76, 274, 305.76, 273.57, 309.33);
        context.bezierCurveTo(271.25, 313.44, 273.73, 317.17, 276.17, 320.49);
        context.bezierCurveTo(276.53, 317.43, 276.89, 314.35, 277.19, 311.28);
        context.bezierCurveTo(277.79, 311.44, 279, 311.79, 279.61, 311.95);
        context.bezierCurveTo(279.08, 311.63, 278.03, 311, 277.49, 310.68);
        context.bezierCurveTo(277.52, 308.89, 277.56, 307.11, 277.61, 305.32);
        context.bezierCurveTo(278.47, 305.01, 280.16, 304.4, 281.01, 304.09);
        context.bezierCurveTo(283.27, 292.43, 280.27, 280.67, 280.55, 268.95);
        context.bezierCurveTo(280.63, 264.49, 280.4, 260.04, 279.88, 255.63);
        context.bezierCurveTo(278.53, 239.12, 279.59, 222.17, 274.81, 206.13);
        context.closePath();
        context.fillStyle = fillColor94;
        context.fill();


    }

    function drawPath97() {
        context.beginPath();
        context.moveTo(348.51, 204.13);
        context.bezierCurveTo(349.48, 205.48, 350.49, 206.8, 351.55, 208.09);
        context.bezierCurveTo(352.29, 209, 353.08, 209.87, 353.88, 210.73);
        context.bezierCurveTo(355.04, 211.99, 356.2, 213.23, 357.39, 214.47);
        context.bezierCurveTo(357.19, 214.91, 356.77, 215.77, 356.56, 216.21);
        context.lineTo(355.77, 217.81);
        context.bezierCurveTo(353.88, 216.35, 351.73, 215.11, 350.25, 213.19);
        context.bezierCurveTo(348.84, 210.4, 349, 207.15, 348.51, 204.13);
        context.closePath();
        context.fillStyle = fillColor95;
        context.fill();


    }

    function drawPath98() {
        context.save();
        context.globalAlpha = 0.77;
        context.beginPath();
        context.moveTo(273.45, 225.55);
        context.bezierCurveTo(271.51, 219.19, 269.92, 212.17, 271.84, 205.63);
        context.bezierCurveTo(272.07, 212.31, 274.8, 218.84, 273.45, 225.55);
        context.closePath();
        context.fillStyle = fillColor96;
        context.fill();
        context.restore();


    }

    function drawPath99() {
        context.beginPath();
        context.moveTo(361.88, 208.32);
        context.bezierCurveTo(368.08, 209.61, 374.31, 211.31, 379.71, 214.75);
        context.bezierCurveTo(376.97, 215.81, 374.45, 214.08, 371.92, 213.29);
        context.bezierCurveTo(368.47, 211.85, 364.19, 211.67, 361.88, 208.32);
        context.closePath();
        context.fillStyle = fillColor97;
        context.fill();


    }

    function drawPath100() {
        context.beginPath();
        context.moveTo(353.88, 210.73);
        context.bezierCurveTo(360.01, 210.88, 366.13, 213.77, 369.96, 218.57);
        context.bezierCurveTo(371.48, 220.51, 368.05, 222.15, 367.47, 223.68);
        context.bezierCurveTo(365.99, 222.4, 364.64, 220.97, 363.48, 219.41);
        context.bezierCurveTo(362.57, 217.59, 360.85, 216.24, 358.75, 216.41);
        context.bezierCurveTo(358.2, 216.36, 357.11, 216.25, 356.56, 216.21);
        context.bezierCurveTo(356.77, 215.77, 357.19, 214.91, 357.39, 214.47);
        context.bezierCurveTo(356.2, 213.23, 355.04, 211.99, 353.88, 210.73);
        context.closePath();
        context.fillStyle = fillColor98;
        context.fill();


    }

    function drawPath101() {
        context.beginPath();
        context.moveTo(280.59, 211.23);
        context.bezierCurveTo(284.68, 217.13, 287.88, 223.88, 287.93, 231.21);
        context.bezierCurveTo(287.68, 231.64, 287.2, 232.51, 286.95, 232.93);
        context.bezierCurveTo(285.84, 226.56, 284.69, 219.35, 279.47, 214.92);
        context.bezierCurveTo(279.75, 214, 280.31, 212.15, 280.59, 211.23);
        context.closePath();
        context.fillStyle = fillColor99;
        context.fill();


    }

    function drawPath102() {
        context.beginPath();
        context.moveTo(453.43, 216.31);
        context.bezierCurveTo(463.65, 213.79, 474.15, 212.44, 484.64, 211.63);
        context.bezierCurveTo(488.13, 215.32, 492.52, 218.95, 492.36, 224.53);
        context.bezierCurveTo(491, 226.49, 489.65, 228.43, 488.44, 230.47);
        context.bezierCurveTo(488.01, 226.05, 490.63, 220.2, 486.43, 216.95);
        context.bezierCurveTo(481.84, 212.29, 475, 214.67, 469.33, 215.01);
        context.bezierCurveTo(455.64, 216.52, 444.99, 225.95, 432.85, 231.43);
        context.bezierCurveTo(439.03, 225.64, 444.64, 218.09, 453.43, 216.31);
        context.closePath();
        context.fillStyle = fillColor100;
        context.fill();


    }

    function drawPath103() {
        context.beginPath();
        context.moveTo(393.39, 212.83);
        context.bezierCurveTo(394.57, 212.19, 397.52, 212.61, 397.05, 214.47);
        context.bezierCurveTo(395.57, 216.25, 389.63, 215.05, 393.39, 212.83);
        context.closePath();
        context.fillStyle = fillColor101;
        context.fill();


    }

    function drawPath104() {
        context.beginPath();
        context.moveTo(89.53, 214.2);
        context.bezierCurveTo(90.13, 214.19, 91.35, 214.16, 91.95, 214.15);
        context.bezierCurveTo(91.91, 221.29, 96.81, 226.76, 99.61, 232.96);
        context.bezierCurveTo(103.77, 241.11, 110.12, 247.99, 113.67, 256.44);
        context.bezierCurveTo(114.59, 260.77, 116.68, 264.72, 119.8, 267.87);
        context.bezierCurveTo(123.44, 273.36, 123.71, 280.25, 126.73, 286.03);
        context.bezierCurveTo(128.08, 288.6, 129, 291.36, 129.76, 294.16);
        context.bezierCurveTo(128.12, 292.55, 126.44, 290.99, 124.77, 289.43);
        context.bezierCurveTo(124.04, 290.48, 123.29, 291.55, 122.56, 292.63);
        context.bezierCurveTo(122.36, 292.27, 121.95, 291.57, 121.75, 291.23);
        context.bezierCurveTo(120.84, 286.76, 119.57, 282.32, 116.57, 278.79);
        context.bezierCurveTo(113.69, 274.59, 112.61, 269.45, 109.53, 265.37);
        context.bezierCurveTo(105.41, 260.33, 105.85, 252.12, 99.23, 249.31);
        context.bezierCurveTo(101.01, 248.53, 102.81, 247.75, 104.61, 246.99);
        context.bezierCurveTo(102.19, 245.27, 100.28, 242.99, 98.99, 240.32);
        context.bezierCurveTo(95.97, 234.07, 89.89, 229.69, 88.05, 222.8);
        context.bezierCurveTo(88.72, 222.71, 90.07, 222.52, 90.75, 222.43);
        context.bezierCurveTo(89.53, 220.8, 88.33, 219.17, 87.12, 217.56);
        context.bezierCurveTo(87.92, 216.43, 88.71, 215.31, 89.53, 214.2);
        context.closePath();
        context.fillStyle = fillColor102;
        context.fill();


    }

    function drawPath105() {
        context.beginPath();
        context.moveTo(320.28, 297.08);
        context.bezierCurveTo(319.2, 269.31, 317.85, 241.45, 319.64, 213.67);
        context.bezierCurveTo(319.44, 225.79, 318.55, 237.91, 318.92, 250.04);
        context.bezierCurveTo(320.09, 265.68, 321.01, 281.4, 320.28, 297.08);
        context.closePath();
        context.fillStyle = fillColor103;
        context.fill();


    }

    function drawPath106() {
        context.beginPath();
        context.moveTo(469.33, 215.01);
        context.bezierCurveTo(475, 214.67, 481.84, 212.29, 486.43, 216.95);
        context.bezierCurveTo(490.63, 220.2, 488.01, 226.05, 488.44, 230.47);
        context.bezierCurveTo(488.2, 231.99, 488.95, 232.89, 490.67, 233.2);
        context.bezierCurveTo(489.15, 233.55, 487.65, 233.88, 486.16, 234.21);
        context.bezierCurveTo(486.43, 237.51, 489.16, 238.25, 492.04, 238.33);
        context.bezierCurveTo(491.45, 238.53, 490.31, 238.92, 489.72, 239.12);
        context.bezierCurveTo(486.27, 239.49, 485.21, 242.64, 484.17, 245.45);
        context.bezierCurveTo(483.19, 245.39, 482.2, 245.32, 481.24, 245.28);
        context.bezierCurveTo(481.85, 242.88, 482.48, 240.48, 483.12, 238.09);
        context.bezierCurveTo(481.89, 236.96, 480.68, 235.83, 479.47, 234.69);
        context.bezierCurveTo(477.8, 235.05, 476.13, 235.41, 474.48, 235.79);
        context.bezierCurveTo(473.39, 242.95, 466.77, 247.49, 460.2, 249.21);
        context.bezierCurveTo(453.44, 251.01, 448.07, 255.61, 442.39, 259.44);
        context.bezierCurveTo(443.59, 260.19, 444.64, 261.72, 446.24, 261.16);
        context.bezierCurveTo(450.12, 260.47, 453.93, 259.37, 457.89, 259.11);
        context.bezierCurveTo(458.64, 259.57, 460.13, 260.49, 460.88, 260.95);
        context.bezierCurveTo(460.45, 260.97, 459.61, 261.03, 459.2, 261.05);
        context.bezierCurveTo(451.6, 261.09, 444.67, 264.89, 438.28, 268.64);
        context.bezierCurveTo(441.15, 268.55, 444.05, 268.31, 446.85, 267.57);
        context.bezierCurveTo(443.36, 270.27, 439.93, 273.04, 436.17, 275.32);
        context.bezierCurveTo(430.95, 278.49, 426.8, 283.08, 421.73, 286.48);
        context.bezierCurveTo(422.44, 287.12, 423.15, 287.77, 423.85, 288.43);
        context.bezierCurveTo(421.27, 289.75, 418.84, 291.35, 416.49, 293.04);
        context.bezierCurveTo(417.03, 293.41, 418.11, 294.16, 418.64, 294.53);
        context.bezierCurveTo(412.72, 300.27, 405.04, 305.67, 403.28, 314.19);
        context.bezierCurveTo(402.24, 318.27, 406.23, 320.69, 408.63, 323.24);
        context.bezierCurveTo(408.07, 325.85, 407.51, 328.45, 406.92, 331.07);
        context.bezierCurveTo(409.45, 332.33, 412.15, 333.71, 415.08, 333.16);
        context.bezierCurveTo(415.91, 333.07, 417.59, 332.89, 418.43, 332.8);
        context.bezierCurveTo(418.92, 333.6, 419.89, 335.2, 420.39, 336);
        context.bezierCurveTo(418.6, 335.69, 416.8, 335.41, 415.01, 335.15);
        context.bezierCurveTo(415.76, 348.83, 403.07, 356.95, 395.81, 366.85);
        context.bezierCurveTo(397.67, 360.87, 403.64, 357.91, 406.96, 352.91);
        context.bezierCurveTo(409.29, 349.37, 412.05, 346, 413.57, 342);
        context.bezierCurveTo(413.81, 339.87, 413.17, 337.81, 412.53, 335.81);
        context.bezierCurveTo(410.08, 334.61, 407.48, 333.68, 404.76, 333.35);
        context.bezierCurveTo(405.04, 332.36, 405.31, 331.39, 405.57, 330.4);
        context.bezierCurveTo(397.59, 326.13, 393.6, 317.51, 389.69, 309.8);
        context.bezierCurveTo(387.91, 302.4, 389.44, 294.73, 390.4, 287.32);
        context.bezierCurveTo(390.61, 289.11, 390.95, 290.89, 391.47, 292.64);
        context.bezierCurveTo(391.99, 294.29, 393.39, 295.95, 395.17, 296.28);
        context.bezierCurveTo(397.21, 295.85, 395.25, 293.33, 394.89, 292.25);
        context.bezierCurveTo(393.72, 289.17, 393.19, 285.91, 392.72, 282.67);
        context.bezierCurveTo(395.24, 283.4, 397.69, 284.33, 400.03, 285.55);
        context.bezierCurveTo(398.12, 282.96, 396.44, 280.23, 394.84, 277.47);
        context.bezierCurveTo(394.19, 277.27, 392.89, 276.85, 392.24, 276.65);
        context.bezierCurveTo(393.55, 273.77, 394.87, 270.89, 396.29, 268.07);
        context.bezierCurveTo(399.41, 267.24, 401.87, 265.07, 404.17, 262.91);
        context.bezierCurveTo(403.07, 264.99, 402.04, 267.12, 401.03, 269.24);
        context.bezierCurveTo(401.44, 272.96, 401.84, 276.71, 402.88, 280.32);
        context.bezierCurveTo(403.72, 282.96, 406.4, 283.32, 408.79, 283.76);
        context.bezierCurveTo(407.97, 284.88, 407.16, 286, 406.36, 287.13);
        context.bezierCurveTo(406.89, 287.92, 407.96, 289.49, 408.49, 290.28);
        context.bezierCurveTo(416.31, 285.6, 420.55, 276.63, 428.93, 272.68);
        context.bezierCurveTo(428.53, 271.83, 428.15, 270.99, 427.76, 270.13);
        context.bezierCurveTo(424.77, 271.99, 421.77, 273.83, 418.73, 275.59);
        context.bezierCurveTo(418.45, 274.28, 418.25, 272.97, 418.12, 271.65);
        context.bezierCurveTo(419.11, 270.49, 420.67, 270.01, 421.93, 269.19);
        context.bezierCurveTo(420.01, 267.01, 418.39, 264.61, 416.85, 262.17);
        context.bezierCurveTo(419.05, 262.39, 421.28, 262.64, 423.48, 262.92);
        context.bezierCurveTo(422.72, 261.67, 421.95, 260.43, 421.28, 259.13);
        context.bezierCurveTo(423.71, 256.57, 426.41, 254.27, 428.44, 251.36);
        context.bezierCurveTo(435.25, 244.8, 443.53, 240.12, 450.68, 233.99);
        context.bezierCurveTo(440.65, 235.88, 432.61, 242.52, 423.91, 247.32);
        context.bezierCurveTo(421.27, 249.16, 418.59, 246.85, 416.6, 245.21);
        context.bezierCurveTo(421.97, 240.57, 427.32, 235.89, 432.85, 231.43);
        context.bezierCurveTo(444.99, 225.95, 455.64, 216.52, 469.33, 215.01);
        context.closePath();
        context.moveTo(472.48, 222.61);
        context.bezierCurveTo(470.87, 227.76, 477.13, 229.87, 481.13, 229.93);
        context.bezierCurveTo(480.76, 227.85, 480.84, 225.55, 479.51, 223.79);
        context.bezierCurveTo(478.09, 221.24, 474.77, 222.81, 472.48, 222.61);
        context.closePath();
        context.fillStyle = fillColor104;
        context.fill();


    }

    function drawPath107() {
        context.beginPath();
        context.moveTo(279.47, 214.92);
        context.bezierCurveTo(284.69, 219.35, 285.84, 226.56, 286.95, 232.93);
        context.bezierCurveTo(286.67, 233.41, 286.09, 234.39, 285.81, 234.87);
        context.bezierCurveTo(285.08, 227.81, 281.84, 221.48, 279.47, 214.92);
        context.closePath();
        context.fillStyle = fillColor105;
        context.fill();


    }

    function drawPath108() {
        context.beginPath();
        context.moveTo(399.32, 215.85);
        context.bezierCurveTo(400.92, 214.55, 401.92, 214.73, 402.33, 216.44);
        context.bezierCurveTo(400.72, 217.75, 399.72, 217.56, 399.32, 215.85);
        context.closePath();
        context.fillStyle = fillColor106;
        context.fill();


    }

    function drawPath109() {
        context.beginPath();
        context.moveTo(296.2, 236.83);
        context.bezierCurveTo(295.51, 229.71, 293.03, 222.01, 296.07, 215.16);
        context.bezierCurveTo(298, 218.84, 300.36, 222.36, 301.44, 226.43);
        context.bezierCurveTo(301.41, 228.73, 301.39, 231.05, 301.39, 233.37);
        context.bezierCurveTo(300.21, 233.13, 299.05, 232.91, 297.89, 232.68);
        context.bezierCurveTo(297.47, 233.72, 296.63, 235.79, 296.2, 236.83);
        context.closePath();
        context.fillStyle = fillColor107;
        context.fill();


    }

    function drawPath110() {
        context.save();
        context.globalAlpha = 0.85;
        context.beginPath();
        context.moveTo(358.75, 216.41);
        context.bezierCurveTo(360.85, 216.24, 362.57, 217.59, 363.48, 219.41);
        context.bezierCurveTo(362.79, 219.71, 361.39, 220.29, 360.69, 220.59);
        context.bezierCurveTo(359.77, 219.33, 359.33, 217.81, 358.75, 216.41);
        context.closePath();
        context.fillStyle = fillColor108;
        context.fill();
        context.restore();


    }

    function drawPath111() {
        context.beginPath();
        context.moveTo(378.11, 218.17);
        context.bezierCurveTo(379.01, 217.55, 380.81, 216.29, 381.72, 215.67);
        context.lineTo(382.8, 215.99);
        context.bezierCurveTo(385.2, 216.37, 387.63, 216.63, 390.07, 216.91);
        context.bezierCurveTo(388.07, 218.09, 386.07, 219.28, 384.08, 220.47);
        context.bezierCurveTo(386.73, 220.76, 389.39, 221.08, 392.05, 221.44);
        context.bezierCurveTo(387.16, 222, 381.29, 222.89, 378.11, 218.17);
        context.closePath();
        context.fillStyle = fillColor109;
        context.fill();


    }

    function drawPath112() {
        context.beginPath();
        context.moveTo(149.12, 217.88);
        context.bezierCurveTo(149.87, 218.72, 150.59, 219.6, 151.29, 220.49);
        context.bezierCurveTo(151.99, 222.08, 152.83, 223.68, 154.25, 224.76);
        context.bezierCurveTo(154.15, 227.69, 155.11, 230.71, 157.16, 232.84);
        context.bezierCurveTo(160.05, 235.24, 164.24, 236.21, 165.93, 239.88);
        context.bezierCurveTo(169.91, 247.39, 178.2, 254.84, 174.49, 264.13);
        context.bezierCurveTo(173.65, 267, 172.96, 269.92, 172.73, 272.91);
        context.bezierCurveTo(172.07, 268.44, 172.29, 263.88, 171.51, 259.43);
        context.bezierCurveTo(170.07, 255.56, 167.01, 252.61, 164.17, 249.76);
        context.bezierCurveTo(164.97, 256.33, 171.56, 260.95, 170.44, 267.89);
        context.bezierCurveTo(169.52, 266.07, 168.65, 264.23, 167.81, 262.37);
        context.bezierCurveTo(168.29, 267.72, 171.09, 272.53, 171.37, 277.91);
        context.bezierCurveTo(171.63, 282.29, 171.43, 286.71, 172.13, 291.05);
        context.bezierCurveTo(172.23, 295.49, 172.88, 300.55, 169.88, 304.27);
        context.bezierCurveTo(169.75, 302.92, 169.49, 300.25, 169.37, 298.92);
        context.bezierCurveTo(169.79, 297.79, 170.17, 296.65, 170.53, 295.51);
        context.bezierCurveTo(169.59, 292.91, 166.55, 293.23, 164.35, 292.76);
        context.bezierCurveTo(164.39, 295.16, 164.47, 297.55, 164.4, 299.95);
        context.bezierCurveTo(163.03, 298.13, 162.05, 296.09, 161.64, 293.85);
        context.bezierCurveTo(161.67, 281.47, 161.61, 269.08, 161.39, 256.71);
        context.bezierCurveTo(161.31, 254.53, 160.81, 252.43, 160.32, 250.33);
        context.bezierCurveTo(160.2, 249.76, 159.93, 248.61, 159.81, 248.04);
        context.bezierCurveTo(159.17, 249.01, 158.53, 250, 157.91, 250.97);
        context.bezierCurveTo(157.08, 246.75, 156.81, 242.11, 154.28, 238.47);
        context.bezierCurveTo(151.99, 236.17, 149.53, 234.04, 147.53, 231.47);
        context.bezierCurveTo(147.96, 230.83, 148.8, 229.55, 149.23, 228.92);
        context.bezierCurveTo(150.27, 229.6, 151.31, 230.29, 152.35, 230.99);
        context.bezierCurveTo(151, 226.69, 149.75, 222.35, 149.12, 217.88);
        context.closePath();
        context.fillStyle = fillColor110;
        context.fill();


    }

    function drawPath113() {
        context.beginPath();
        context.moveTo(288.88, 218.15);
        context.lineTo(290.96, 218.44);
        context.bezierCurveTo(292.15, 224.32, 293.73, 230.13, 294.39, 236.13);
        context.bezierCurveTo(291.61, 230.45, 290.72, 224.13, 288.88, 218.15);
        context.closePath();
        context.fillStyle = fillColor111;
        context.fill();


    }

    function drawPath114() {
        context.beginPath();
        context.moveTo(151.29, 220.49);
        context.bezierCurveTo(154.04, 217.95, 154.93, 222.8, 154.25, 224.76);
        context.bezierCurveTo(152.83, 223.68, 151.99, 222.08, 151.29, 220.49);
        context.closePath();
        context.fillStyle = fillColor112;
        context.fill();


    }

    function drawPath115() {
        context.save();
        context.globalAlpha = 0.69;
        context.beginPath();
        context.moveTo(360.69, 220.59);
        context.bezierCurveTo(361.39, 220.29, 362.79, 219.71, 363.48, 219.41);
        context.bezierCurveTo(364.64, 220.97, 365.99, 222.4, 367.47, 223.68);
        context.bezierCurveTo(368.8, 224.08, 370.15, 224.45, 371.51, 224.83);
        context.bezierCurveTo(374.87, 225.85, 378.37, 226.07, 381.87, 226.13);
        context.bezierCurveTo(388.4, 226.55, 395.15, 227.36, 401.43, 224.91);
        context.bezierCurveTo(393.07, 230.69, 382.71, 223.69, 374.12, 227.55);
        context.bezierCurveTo(372.49, 228.44, 370.89, 229.43, 369.71, 230.88);
        context.bezierCurveTo(370.28, 229.85, 371.44, 227.79, 372.01, 226.76);
        context.bezierCurveTo(367.25, 226.79, 362.71, 225.19, 360.69, 220.59);
        context.closePath();
        context.fillStyle = fillColor113;
        context.fill();
        context.restore();


    }

    function drawPath116() {
        context.beginPath();
        context.moveTo(373.88, 219.32);
        context.bezierCurveTo(378.03, 219.35, 379.99, 223, 381.87, 226.13);
        context.bezierCurveTo(378.37, 226.07, 374.87, 225.85, 371.51, 224.83);
        context.bezierCurveTo(372.29, 222.99, 373.08, 221.15, 373.88, 219.32);
        context.closePath();
        context.fillStyle = fillColor114;
        context.fill();


    }

    function drawPath117() {
        context.beginPath();
        context.moveTo(472.48, 222.61);
        context.bezierCurveTo(474.77, 222.81, 478.09, 221.24, 479.51, 223.79);
        context.bezierCurveTo(480.84, 225.55, 480.76, 227.85, 481.13, 229.93);
        context.bezierCurveTo(477.13, 229.87, 470.87, 227.76, 472.48, 222.61);
        context.closePath();
        context.fillStyle = fillColor115;
        context.fill();


    }

    function drawPath118() {
        context.beginPath();
        context.moveTo(115.37, 223.11);
        context.bezierCurveTo(116.45, 223.85, 117.55, 224.6, 118.63, 225.36);
        context.bezierCurveTo(119.91, 228.79, 121.07, 232.32, 120.77, 236.04);
        context.bezierCurveTo(118.65, 231.89, 114.99, 228.08, 115.37, 223.11);
        context.closePath();
        context.fillStyle = fillColor116;
        context.fill();


    }

    function drawPath119() {
        context.beginPath();
        context.moveTo(488.44, 230.47);
        context.bezierCurveTo(489.65, 228.43, 491, 226.49, 492.36, 224.53);
        context.bezierCurveTo(492.47, 225.28, 492.71, 226.76, 492.83, 227.51);
        context.bezierCurveTo(500.13, 227.29, 509.57, 223.49, 514.99, 230.29);
        context.bezierCurveTo(514.24, 230.16, 512.73, 229.89, 511.99, 229.76);
        context.bezierCurveTo(504.57, 227.63, 497.72, 231.69, 490.67, 233.2);
        context.bezierCurveTo(488.95, 232.89, 488.2, 231.99, 488.44, 230.47);
        context.closePath();
        context.fillStyle = fillColor117;
        context.fill();


    }

    function drawPath120() {
        context.beginPath();
        context.moveTo(118.63, 225.36);
        context.bezierCurveTo(124.75, 228.65, 121.59, 236.91, 126, 241.35);
        context.bezierCurveTo(130.71, 246.81, 132.16, 254.07, 134.75, 260.61);
        context.bezierCurveTo(133.35, 259.76, 131.93, 258.89, 130.53, 258.05);
        context.bezierCurveTo(129.95, 253.67, 128.6, 249.44, 126.92, 245.37);
        context.bezierCurveTo(126.45, 246.19, 125.51, 247.84, 125.04, 248.65);
        context.bezierCurveTo(123.05, 244.67, 121.12, 240.56, 120.77, 236.04);
        context.bezierCurveTo(121.07, 232.32, 119.91, 228.79, 118.63, 225.36);
        context.closePath();
        context.fillStyle = fillColor118;
        context.fill();


    }

    function drawPath121() {
        context.save();
        context.globalAlpha = 0.72;
        context.beginPath();
        context.moveTo(273.47, 225.61);
        context.bezierCurveTo(274.41, 226.88, 275.27, 228.25, 275.15, 229.92);
        context.bezierCurveTo(275.49, 235.64, 276.59, 241.31, 276.55, 247.07);
        context.bezierCurveTo(276.36, 257.47, 278.72, 267.81, 277.47, 278.23);
        context.bezierCurveTo(277.19, 274.12, 276.4, 270.04, 276.32, 265.92);
        context.bezierCurveTo(276.36, 252.44, 275.15, 238.99, 273.47, 225.61);
        context.closePath();
        context.fillStyle = fillColor119;
        context.fill();
        context.restore();


    }

    function drawPath122() {
        context.beginPath();
        context.moveTo(369.71, 230.88);
        context.bezierCurveTo(370.89, 229.43, 372.49, 228.44, 374.12, 227.55);
        context.bezierCurveTo(375.01, 227.96, 376.83, 228.77, 377.73, 229.19);
        context.bezierCurveTo(373.75, 236.49, 374.48, 245.29, 370.45, 252.65);
        context.bezierCurveTo(371.25, 254.35, 372.08, 256.04, 372.89, 257.73);
        context.bezierCurveTo(371.04, 257.87, 369.19, 257.99, 367.35, 258.12);
        context.bezierCurveTo(368.04, 249.24, 373.69, 240.2, 369.64, 231.44);
        context.lineTo(369.71, 230.88);
        context.closePath();
        context.fillStyle = fillColor120;
        context.fill();


    }

    function drawPath123() {
        context.beginPath();
        context.moveTo(490.67, 233.2);
        context.bezierCurveTo(497.72, 231.69, 504.57, 227.63, 511.99, 229.76);
        context.bezierCurveTo(513.33, 233.93, 514.32, 238.31, 513.36, 242.69);
        context.bezierCurveTo(511.41, 239.99, 509.53, 237.15, 506.93, 235.03);
        context.bezierCurveTo(504.61, 234.51, 502.25, 235.56, 499.97, 235.92);
        context.bezierCurveTo(497.71, 236.45, 495.51, 237.19, 493.32, 237.92);
        context.lineTo(492.04, 238.33);
        context.bezierCurveTo(489.16, 238.25, 486.43, 237.51, 486.16, 234.21);
        context.bezierCurveTo(487.65, 233.88, 489.15, 233.55, 490.67, 233.2);
        context.closePath();
        context.fillStyle = fillColor121;
        context.fill();


    }

    function drawPath124() {
        context.beginPath();
        context.moveTo(377.73, 229.19);
        context.bezierCurveTo(379.4, 229.93, 381.08, 230.68, 382.77, 231.43);
        context.bezierCurveTo(382.91, 237.73, 382.51, 244.04, 381.41, 250.27);
        context.lineTo(380.69, 250.47);
        context.lineTo(380.67, 251.07);
        context.lineTo(381.31, 250.99);
        context.bezierCurveTo(378.89, 262.52, 375.16, 273.8, 370.88, 284.79);
        context.bezierCurveTo(368.56, 292.07, 369.28, 299.85, 369.92, 307.35);
        context.bezierCurveTo(370.41, 322.13, 370.13, 336.95, 368.35, 351.65);
        context.lineTo(368.16, 350.16);
        context.lineTo(367.91, 348.41);
        context.bezierCurveTo(369.01, 334.56, 366.75, 320.77, 366.99, 306.91);
        context.bezierCurveTo(367.91, 296.36, 367.81, 285.76, 366.37, 275.28);
        context.bezierCurveTo(366.01, 266.73, 364.68, 258.19, 361.39, 250.25);
        context.bezierCurveTo(362.99, 251.12, 364.16, 250.79, 364.92, 249.24);
        context.bezierCurveTo(367.28, 243.53, 369.6, 237.72, 369.64, 231.44);
        context.bezierCurveTo(373.69, 240.2, 368.04, 249.24, 367.35, 258.12);
        context.bezierCurveTo(369.19, 257.99, 371.04, 257.87, 372.89, 257.73);
        context.bezierCurveTo(372.08, 256.04, 371.25, 254.35, 370.45, 252.65);
        context.bezierCurveTo(374.48, 245.29, 373.75, 236.49, 377.73, 229.19);
        context.closePath();
        context.moveTo(368.28, 259.09);
        context.bezierCurveTo(368.67, 265.27, 365.77, 272.91, 370.55, 277.88);
        context.bezierCurveTo(370.09, 275.27, 369.32, 272.68, 369.33, 270.01);
        context.bezierCurveTo(369.59, 266.24, 372.52, 261.61, 368.28, 259.09);
        context.closePath();
        context.fillStyle = fillColor122;
        context.fill();


    }

    function drawPath125() {
        context.beginPath();
        context.moveTo(511.99, 229.76);
        context.bezierCurveTo(512.73, 229.89, 514.24, 230.16, 514.99, 230.29);
        context.bezierCurveTo(518.19, 235.64, 517.87, 242.12, 519.4, 247.97);
        context.bezierCurveTo(524.36, 248.63, 530.03, 249.68, 532.67, 254.52);
        context.bezierCurveTo(535.21, 257.93, 532.96, 261.91, 531.8, 265.36);
        context.bezierCurveTo(531.56, 262.83, 531.21, 260.29, 530.67, 257.8);
        context.bezierCurveTo(528.61, 255.69, 525.88, 254.57, 523.04, 254.08);
        context.bezierCurveTo(518.09, 251.87, 511.99, 255.13, 507.67, 251.68);
        context.bezierCurveTo(508.08, 251.13, 508.93, 250.05, 509.36, 249.51);
        context.bezierCurveTo(511.13, 249.72, 512.89, 249.95, 514.69, 250.04);
        context.bezierCurveTo(516.55, 247.77, 513.97, 245.01, 513.36, 242.69);
        context.bezierCurveTo(514.32, 238.31, 513.33, 233.93, 511.99, 229.76);
        context.closePath();
        context.fillStyle = fillColor123;
        context.fill();


    }

    function drawPath126() {
        context.beginPath();
        context.moveTo(38.27, 242.17);
        context.bezierCurveTo(37.44, 238.57, 35.79, 234.29, 38.2, 230.97);
        context.bezierCurveTo(39.23, 237.59, 41.63, 243.93, 42.15, 250.65);
        context.bezierCurveTo(39.35, 248.81, 39.39, 245.01, 38.27, 242.17);
        context.closePath();
        context.fillStyle = fillColor124;
        context.fill();


    }

    function drawPath127() {
        context.beginPath();
        context.moveTo(31.29, 231.92);
        context.bezierCurveTo(32.64, 233.31, 34.47, 234.36, 35.33, 236.16);
        context.bezierCurveTo(38.19, 244.75, 36.69, 253.85, 38.2, 262.61);
        context.bezierCurveTo(39.72, 262.88, 41.24, 263.15, 42.76, 263.43);
        context.bezierCurveTo(43.03, 259.39, 43.24, 255.33, 43.57, 251.29);
        context.bezierCurveTo(45.57, 258.45, 44.53, 266, 46.03, 273.24);
        context.bezierCurveTo(46.25, 273.59, 46.71, 274.27, 46.93, 274.61);
        context.bezierCurveTo(47.35, 278.91, 47.92, 283.21, 49.47, 287.27);
        context.bezierCurveTo(51.83, 293.63, 53.24, 300.31, 55.89, 306.57);
        context.bezierCurveTo(59.53, 313.08, 60.63, 320.91, 65.37, 326.77);
        context.bezierCurveTo(67.99, 331.25, 73.13, 332.65, 78, 332.33);
        context.bezierCurveTo(79.29, 332.68, 80.63, 332.17, 81.92, 332.52);
        context.bezierCurveTo(78.64, 336.23, 83.88, 337, 86.45, 338.27);
        context.bezierCurveTo(86.36, 338.8, 86.19, 339.88, 86.11, 340.43);
        context.bezierCurveTo(86.59, 341.19, 87.16, 341.88, 87.84, 342.51);
        context.bezierCurveTo(89.07, 341.84, 90.52, 342.2, 91.77, 341.61);
        context.bezierCurveTo(92.72, 344.63, 93.72, 347.67, 95.33, 350.43);
        context.bezierCurveTo(97.59, 353.65, 100, 356.8, 102.68, 359.69);
        context.bezierCurveTo(97.47, 358.36, 92.44, 355.05, 86.87, 356.15);
        context.bezierCurveTo(78.2, 351.43, 72.29, 343.33, 64.36, 337.67);
        context.bezierCurveTo(58.76, 333.48, 56.29, 326.73, 53.11, 320.79);
        context.bezierCurveTo(44.36, 305.15, 38.92, 287.95, 34.27, 270.72);
        context.bezierCurveTo(31.04, 258.07, 31.83, 244.85, 31.29, 231.92);
        context.closePath();
        context.moveTo(71.47, 332.68);
        context.bezierCurveTo(73.8, 336.57, 77.88, 340.92, 82.72, 340.83);
        context.bezierCurveTo(79.77, 337.15, 76.51, 333.21, 71.47, 332.68);
        context.closePath();
        context.fillStyle = fillColor21;
        context.fill();


    }

    function drawPath128() {
        context.beginPath();
        context.moveTo(108.08, 233.01);
        context.bezierCurveTo(110.21, 233.23, 111.07, 236.89, 110.27, 238.67);
        context.bezierCurveTo(108.23, 238.36, 107.13, 234.77, 108.08, 233.01);
        context.closePath();
        context.fillStyle = fillColor125;
        context.fill();


    }

    function drawPath129() {
        context.beginPath();
        context.moveTo(229.64, 238.2);
        context.bezierCurveTo(229.87, 236.44, 230.09, 234.68, 230.32, 232.92);
        context.bezierCurveTo(231.91, 241.48, 237.93, 248.89, 237.39, 257.83);
        context.bezierCurveTo(234.01, 251.61, 232.47, 244.65, 229.64, 238.2);
        context.closePath();
        context.fillStyle = fillColor103;
        context.fill();


    }

    function drawPath130() {
        context.beginPath();
        context.moveTo(330.53, 234.43);
        context.bezierCurveTo(331.25, 234.59, 332.68, 234.91, 333.4, 235.07);
        context.bezierCurveTo(333.07, 243.69, 333.59, 252.33, 334.55, 260.91);
        context.bezierCurveTo(333.4, 259.79, 332.24, 258.67, 331.09, 257.55);
        context.bezierCurveTo(331.77, 249.85, 331.55, 242.08, 330.53, 234.43);
        context.closePath();
        context.fillStyle = fillColor126;
        context.fill();


    }

    function drawPath131() {
        context.beginPath();
        context.moveTo(423.91, 247.32);
        context.bezierCurveTo(432.61, 242.52, 440.65, 235.88, 450.68, 233.99);
        context.bezierCurveTo(443.53, 240.12, 435.25, 244.8, 428.44, 251.36);
        context.bezierCurveTo(426.41, 254.27, 423.71, 256.57, 421.28, 259.13);
        context.bezierCurveTo(421.95, 260.43, 422.72, 261.67, 423.48, 262.92);
        context.bezierCurveTo(421.28, 262.64, 419.05, 262.39, 416.85, 262.17);
        context.bezierCurveTo(418.39, 264.61, 420.01, 267.01, 421.93, 269.19);
        context.bezierCurveTo(420.67, 270.01, 419.11, 270.49, 418.12, 271.65);
        context.bezierCurveTo(418.25, 272.97, 418.45, 274.28, 418.73, 275.59);
        context.bezierCurveTo(421.77, 273.83, 424.77, 271.99, 427.76, 270.13);
        context.bezierCurveTo(428.15, 270.99, 428.53, 271.83, 428.93, 272.68);
        context.bezierCurveTo(420.55, 276.63, 416.31, 285.6, 408.49, 290.28);
        context.bezierCurveTo(407.96, 289.49, 406.89, 287.92, 406.36, 287.13);
        context.bezierCurveTo(407.16, 286, 407.97, 284.88, 408.79, 283.76);
        context.bezierCurveTo(406.4, 283.32, 403.72, 282.96, 402.88, 280.32);
        context.bezierCurveTo(406.21, 277.32, 405.95, 272.83, 406.93, 268.87);
        context.bezierCurveTo(409.44, 263.49, 414.32, 259.53, 416.11, 253.76);
        context.bezierCurveTo(411.53, 255.95, 407.69, 259.32, 404.17, 262.91);
        context.bezierCurveTo(401.87, 265.07, 399.41, 267.24, 396.29, 268.07);
        context.bezierCurveTo(401.19, 259.03, 408.93, 251.89, 416.6, 245.21);
        context.bezierCurveTo(418.59, 246.85, 421.27, 249.16, 423.91, 247.32);
        context.closePath();
        context.fillStyle = fillColor127;
        context.fill();


    }

    function drawPath132() {
        context.beginPath();
        context.moveTo(474.48, 235.79);
        context.bezierCurveTo(476.13, 235.41, 477.8, 235.05, 479.47, 234.69);
        context.bezierCurveTo(480.68, 235.83, 481.89, 236.96, 483.12, 238.09);
        context.bezierCurveTo(482.48, 240.48, 481.85, 242.88, 481.24, 245.28);
        context.bezierCurveTo(480.17, 245.32, 478.07, 245.41, 477, 245.45);
        context.bezierCurveTo(479.56, 248.49, 483.6, 248.21, 487.21, 248.29);
        context.bezierCurveTo(489.77, 250.53, 492.77, 252.15, 496.09, 252.99);
        context.bezierCurveTo(494.71, 251.45, 493.31, 249.95, 491.91, 248.45);
        context.bezierCurveTo(496.79, 249.09, 503.19, 250.97, 506.51, 245.95);
        context.bezierCurveTo(506.96, 241.51, 505, 236.39, 499.97, 235.92);
        context.bezierCurveTo(502.25, 235.56, 504.61, 234.51, 506.93, 235.03);
        context.bezierCurveTo(509.53, 237.15, 511.41, 239.99, 513.36, 242.69);
        context.bezierCurveTo(513.97, 245.01, 516.55, 247.77, 514.69, 250.04);
        context.bezierCurveTo(512.89, 249.95, 511.13, 249.72, 509.36, 249.51);
        context.bezierCurveTo(508.93, 250.05, 508.08, 251.13, 507.67, 251.68);
        context.bezierCurveTo(511.99, 255.13, 518.09, 251.87, 523.04, 254.08);
        context.bezierCurveTo(519.77, 255.16, 516.59, 256.44, 513.39, 257.68);
        context.bezierCurveTo(513.37, 258.25, 513.37, 259.4, 513.37, 259.97);
        context.bezierCurveTo(519.15, 259.05, 525.99, 262.51, 530.67, 257.8);
        context.bezierCurveTo(531.21, 260.29, 531.56, 262.83, 531.8, 265.36);
        context.bezierCurveTo(531.35, 266.64, 530.87, 267.91, 530.47, 269.2);
        context.bezierCurveTo(529.47, 269.36, 527.48, 269.65, 526.48, 269.8);
        context.bezierCurveTo(522.6, 266.65, 519.32, 259.72, 513.39, 262.16);
        context.bezierCurveTo(508.71, 264.09, 505.05, 267.81, 501.37, 271.17);
        context.bezierCurveTo(497.48, 274.4, 497.84, 279.93, 495.49, 284.09);
        context.bezierCurveTo(495.96, 284.71, 496.89, 285.92, 497.36, 286.53);
        context.bezierCurveTo(495.28, 286.81, 493.04, 286.65, 491.16, 287.69);
        context.bezierCurveTo(488.97, 290.8, 488.79, 294.68, 489.01, 298.35);
        context.bezierCurveTo(483.93, 299.04, 481.11, 303.88, 476.29, 305.2);
        context.bezierCurveTo(472.77, 310.24, 468.96, 315.13, 464.03, 318.88);
        context.bezierCurveTo(460.83, 318.21, 457.33, 317.77, 454.71, 320.15);
        context.bezierCurveTo(454.08, 320.61, 452.85, 321.53, 452.23, 322);
        context.bezierCurveTo(446.13, 323.23, 440.15, 325.83, 433.84, 325.27);
        context.bezierCurveTo(437.08, 321, 441.05, 317.31, 445.6, 314.44);
        context.bezierCurveTo(448.03, 314.29, 450.45, 313.76, 452.19, 311.92);
        context.bezierCurveTo(451.39, 310.8, 450.6, 309.69, 449.81, 308.59);
        context.bezierCurveTo(450.36, 308.32, 451.45, 307.8, 452, 307.53);
        context.bezierCurveTo(453.84, 308.01, 455.69, 308.49, 457.55, 308.99);
        context.bezierCurveTo(458.79, 307.91, 460.03, 306.81, 461.28, 305.75);
        context.bezierCurveTo(460.01, 304.45, 458.76, 303.16, 457.52, 301.87);
        context.bezierCurveTo(459.41, 302.39, 461.33, 302.89, 463.25, 303.41);
        context.bezierCurveTo(463.19, 304.72, 463.13, 306.04, 463.08, 307.35);
        context.bezierCurveTo(466.76, 303.61, 471.73, 300.68, 473.6, 295.52);
        context.bezierCurveTo(474.84, 292.55, 475.12, 289.31, 475.29, 286.12);
        context.bezierCurveTo(478.16, 282, 480.43, 277.44, 481.25, 272.44);
        context.bezierCurveTo(482.15, 269.23, 481.84, 265.09, 485.04, 263.09);
        context.bezierCurveTo(487.69, 261, 492.41, 261.64, 493.65, 257.97);
        context.bezierCurveTo(490.6, 258.21, 487.65, 258.97, 484.8, 260.04);
        context.bezierCurveTo(484.4, 259.36, 483.63, 258.01, 483.23, 257.33);
        context.bezierCurveTo(481.08, 257.48, 478.92, 257.61, 476.77, 257.72);
        context.bezierCurveTo(479.53, 255.84, 482.48, 254.24, 485.48, 252.75);
        context.bezierCurveTo(478.75, 252.79, 471.43, 253.92, 465.99, 258.12);
        context.bezierCurveTo(463.28, 258.44, 460.59, 258.83, 457.89, 259.11);
        context.bezierCurveTo(453.93, 259.37, 450.12, 260.47, 446.24, 261.16);
        context.bezierCurveTo(444.64, 261.72, 443.59, 260.19, 442.39, 259.44);
        context.bezierCurveTo(448.07, 255.61, 453.44, 251.01, 460.2, 249.21);
        context.bezierCurveTo(466.77, 247.49, 473.39, 242.95, 474.48, 235.79);
        context.closePath();
        context.moveTo(503.63, 258.19);
        context.bezierCurveTo(504, 263.2, 509.09, 260.15, 511.09, 258.03);
        context.bezierCurveTo(508.64, 257.17, 506.08, 257.75, 503.63, 258.19);
        context.closePath();
        context.fillStyle = fillColor128;
        context.fill();


    }

    function drawPath133() {
        context.beginPath();
        context.moveTo(288.51, 234.89);
        context.bezierCurveTo(289.47, 242.72, 292, 250.72, 290.15, 258.59);
        context.bezierCurveTo(289.6, 255.45, 289.04, 252.32, 288.6, 249.17);
        context.bezierCurveTo(288.57, 248.65, 288.49, 247.61, 288.45, 247.11);
        context.bezierCurveTo(288.17, 243.04, 288.09, 238.95, 288.51, 234.89);
        context.closePath();
        context.fillStyle = fillColor129;
        context.fill();


    }

    function drawPath134() {
        context.beginPath();
        context.moveTo(493.32, 237.92);
        context.bezierCurveTo(495.51, 237.19, 497.71, 236.45, 499.97, 235.92);
        context.bezierCurveTo(505, 236.39, 506.96, 241.51, 506.51, 245.95);
        context.bezierCurveTo(503.19, 250.97, 496.79, 249.09, 491.91, 248.45);
        context.bezierCurveTo(493.31, 249.95, 494.71, 251.45, 496.09, 252.99);
        context.bezierCurveTo(492.77, 252.15, 489.77, 250.53, 487.21, 248.29);
        context.bezierCurveTo(483.6, 248.21, 479.56, 248.49, 477, 245.45);
        context.bezierCurveTo(478.07, 245.41, 480.17, 245.32, 481.24, 245.28);
        context.bezierCurveTo(482.2, 245.32, 483.19, 245.39, 484.17, 245.45);
        context.bezierCurveTo(485.21, 242.64, 486.27, 239.49, 489.72, 239.12);
        context.bezierCurveTo(492.63, 239.6, 495.55, 240.2, 498.28, 241.37);
        context.bezierCurveTo(497.41, 242.76, 496.27, 244.07, 496.04, 245.75);
        context.bezierCurveTo(497.71, 247.59, 500.25, 247.41, 502.51, 247.65);
        context.bezierCurveTo(502.73, 246.76, 503.19, 244.99, 503.4, 244.09);
        context.bezierCurveTo(503.68, 243.12, 504.21, 241.19, 504.48, 240.21);
        context.bezierCurveTo(501.39, 237.51, 497.16, 237.61, 493.32, 237.92);
        context.closePath();
        context.fillStyle = fillColor130;
        context.fill();


    }

    function drawPath135() {
        context.beginPath();
        context.moveTo(492.04, 238.33);
        context.lineTo(493.32, 237.92);
        context.bezierCurveTo(497.16, 237.61, 501.39, 237.51, 504.48, 240.21);
        context.bezierCurveTo(504.21, 241.19, 503.68, 243.12, 503.4, 244.09);
        context.bezierCurveTo(501.71, 243.17, 500, 242.27, 498.28, 241.37);
        context.bezierCurveTo(495.55, 240.2, 492.63, 239.6, 489.72, 239.12);
        context.bezierCurveTo(490.31, 238.92, 491.45, 238.53, 492.04, 238.33);
        context.closePath();
        context.fillStyle = fillColor131;
        context.fill();


    }

    function drawPath136() {
        context.beginPath();
        context.moveTo(228.24, 256.68);
        context.bezierCurveTo(227.69, 250.52, 226.8, 243.97, 229.64, 238.2);
        context.bezierCurveTo(232.47, 244.65, 234.01, 251.61, 237.39, 257.83);
        context.bezierCurveTo(237.67, 258.87, 237.93, 259.92, 238.24, 260.96);
        context.bezierCurveTo(235.39, 265.53, 238.89, 270.25, 240.36, 274.65);
        context.bezierCurveTo(245.39, 286.35, 248.04, 299.11, 254.95, 309.93);
        context.bezierCurveTo(256.87, 312.75, 257.32, 317.89, 261.68, 317.69);
        context.bezierCurveTo(264.13, 325.99, 266.45, 334.33, 269.03, 342.6);
        context.bezierCurveTo(268.32, 342.64, 266.92, 342.72, 266.21, 342.76);
        context.bezierCurveTo(266.71, 344.36, 267.2, 345.95, 267.69, 347.56);
        context.bezierCurveTo(269.04, 346.25, 270.37, 344.95, 271.81, 343.75);
        context.bezierCurveTo(272.2, 345.07, 272.61, 346.4, 273.01, 347.75);
        context.bezierCurveTo(271.93, 347.81, 270.85, 347.89, 269.79, 347.97);
        context.bezierCurveTo(268.61, 350.72, 267.43, 353.48, 265.95, 356.09);
        context.lineTo(264.83, 358.11);
        context.bezierCurveTo(264.37, 353.01, 261.52, 348.64, 259.64, 344.01);
        context.lineTo(258.56, 344.13);
        context.bezierCurveTo(258.28, 344.17, 257.71, 344.23, 257.41, 344.25);
        context.bezierCurveTo(256.49, 342.92, 255.57, 341.57, 254.73, 340.21);
        context.bezierCurveTo(255.23, 340.07, 256.23, 339.8, 256.72, 339.67);
        context.bezierCurveTo(259.97, 338.97, 257.51, 336.07, 255.56, 335.49);
        context.bezierCurveTo(255.4, 336.16, 255.09, 337.49, 254.95, 338.16);
        context.bezierCurveTo(253.57, 337.8, 252.21, 337.44, 250.84, 337.09);
        context.bezierCurveTo(250.15, 338.33, 249.45, 339.56, 248.76, 340.81);
        context.bezierCurveTo(246.44, 336.36, 245.28, 331.44, 243.05, 326.96);
        context.bezierCurveTo(241.28, 323.04, 239.64, 319.07, 238.32, 314.99);
        context.bezierCurveTo(238.23, 314.37, 238.05, 313.12, 237.97, 312.49);
        context.bezierCurveTo(239.16, 306.59, 235.99, 301.2, 234.47, 295.68);
        context.bezierCurveTo(230.84, 282.99, 229.79, 269.75, 228.24, 256.68);
        context.closePath();
        context.fillStyle = fillColor132;
        context.fill();


    }

    function drawPath137() {
        context.beginPath();
        context.moveTo(204.97, 241.68);
        context.bezierCurveTo(205.95, 241.76, 207.92, 241.93, 208.91, 242.01);
        context.bezierCurveTo(208.25, 242.84, 207.61, 243.67, 206.97, 244.51);
        context.bezierCurveTo(207.83, 249.41, 208.45, 254.4, 208.07, 259.39);
        context.bezierCurveTo(208.35, 261.49, 206.88, 262.95, 205.51, 264.28);
        context.bezierCurveTo(205.24, 256.75, 205.13, 249.21, 204.97, 241.68);
        context.closePath();
        context.fillStyle = fillColor133;
        context.fill();


    }

    function drawPath138() {
        context.beginPath();
        context.moveTo(496.04, 245.75);
        context.bezierCurveTo(496.27, 244.07, 497.41, 242.76, 498.28, 241.37);
        context.bezierCurveTo(500, 242.27, 501.71, 243.17, 503.4, 244.09);
        context.bezierCurveTo(503.19, 244.99, 502.73, 246.76, 502.51, 247.65);
        context.bezierCurveTo(500.25, 247.41, 497.71, 247.59, 496.04, 245.75);
        context.closePath();
        context.fillStyle = fillColor134;
        context.fill();


    }

    function drawPath139() {
        context.beginPath();
        context.moveTo(345.81, 249.97);
        context.bezierCurveTo(347.21, 248.04, 348.6, 246.11, 350, 244.16);
        context.bezierCurveTo(351.97, 245.49, 354.15, 246.51, 356.49, 246.99);
        context.bezierCurveTo(357.52, 247.75, 358.57, 248.49, 359.65, 249.23);
        context.bezierCurveTo(359.15, 250.71, 358.67, 252.2, 358.17, 253.68);
        context.bezierCurveTo(359.53, 257.24, 360.85, 260.87, 361.12, 264.69);
        context.bezierCurveTo(362.23, 276.51, 363.71, 288.32, 363.65, 300.21);
        context.bezierCurveTo(363.49, 302.92, 364.71, 305.4, 366.99, 306.91);
        context.bezierCurveTo(366.75, 320.77, 369.01, 334.56, 367.91, 348.41);
        context.bezierCurveTo(361.08, 346.11, 353.36, 346.53, 347.32, 342.11);
        context.bezierCurveTo(347.16, 341.41, 346.84, 340.01, 346.68, 339.31);
        context.bezierCurveTo(345, 328.28, 342.83, 317.16, 343.6, 305.96);
        context.bezierCurveTo(344.08, 296.08, 341.67, 286.43, 340.87, 276.65);
        context.bezierCurveTo(340.53, 271.95, 338.53, 267.31, 339.76, 262.57);
        context.bezierCurveTo(341.2, 262.57, 342.64, 262.56, 344.09, 262.56);
        context.bezierCurveTo(342.59, 261.48, 341.08, 260.41, 339.59, 259.35);
        context.bezierCurveTo(340.2, 256.77, 340.67, 254.15, 341.71, 251.71);
        context.bezierCurveTo(343.03, 251.01, 344.43, 250.51, 345.81, 249.97);
        context.closePath();
        context.fillStyle = fillColor135;
        context.fill();


    }

    function drawPath140() {
        context.beginPath();
        context.moveTo(126.92, 245.37);
        context.bezierCurveTo(128.6, 249.44, 129.95, 253.67, 130.53, 258.05);
        context.lineTo(130.93, 260.47);
        context.bezierCurveTo(126.76, 257.93, 126.92, 252.64, 125.04, 248.65);
        context.bezierCurveTo(125.51, 247.84, 126.45, 246.19, 126.92, 245.37);
        context.closePath();
        context.fillStyle = fillColor136;
        context.fill();


    }

    function drawPath141() {
        context.beginPath();
        context.moveTo(361.41, 247.76);
        context.bezierCurveTo(362.61, 248.15, 363.79, 248.64, 364.92, 249.24);
        context.bezierCurveTo(364.16, 250.79, 362.99, 251.12, 361.39, 250.25);
        context.bezierCurveTo(361.39, 249.63, 361.4, 248.39, 361.41, 247.76);
        context.closePath();
        context.fillStyle = fillColor56;
        context.fill();


    }

    function drawPath142() {
        context.beginPath();
        context.moveTo(288.19, 262.35);
        context.bezierCurveTo(287.67, 257.96, 287.84, 253.53, 288.6, 249.17);
        context.bezierCurveTo(289.04, 252.32, 289.6, 255.45, 290.15, 258.59);
        context.lineTo(290.15, 258.61);
        context.lineTo(289.95, 260.35);
        context.bezierCurveTo(289.51, 260.85, 288.63, 261.85, 288.19, 262.35);
        context.closePath();
        context.fillStyle = fillColor137;
        context.fill();


    }

    function drawPath143() {
        context.beginPath();
        context.moveTo(359.65, 249.23);
        context.bezierCurveTo(360.08, 249.49, 360.95, 250, 361.39, 250.25);
        context.bezierCurveTo(364.68, 258.19, 366.01, 266.73, 366.37, 275.28);
        context.bezierCurveTo(367.81, 285.76, 367.91, 296.36, 366.99, 306.91);
        context.bezierCurveTo(364.71, 305.4, 363.49, 302.92, 363.65, 300.21);
        context.bezierCurveTo(363.71, 288.32, 362.23, 276.51, 361.12, 264.69);
        context.bezierCurveTo(360.85, 260.87, 359.53, 257.24, 358.17, 253.68);
        context.bezierCurveTo(358.67, 252.2, 359.15, 250.71, 359.65, 249.23);
        context.closePath();
        context.fillStyle = fillColor138;
        context.fill();


    }

    function drawPath144() {
        context.beginPath();
        context.moveTo(380.69, 250.47);
        context.lineTo(381.41, 250.27);
        context.lineTo(381.31, 250.99);
        context.lineTo(380.67, 251.07);
        context.lineTo(380.69, 250.47);
        context.closePath();
        context.fillStyle = fillColor139;
        context.fill();


    }

    function drawPath145() {
        context.beginPath();
        context.moveTo(95.65, 250.81);
        context.bezierCurveTo(99.59, 252.41, 100.97, 256.79, 103.45, 259.89);
        context.bezierCurveTo(104.85, 261.47, 105.16, 263.48, 104.35, 265.43);
        context.bezierCurveTo(100.2, 261.45, 97.29, 256.28, 95.65, 250.81);
        context.closePath();
        context.fillStyle = fillColor140;
        context.fill();


    }

    function drawPath146() {
        context.beginPath();
        context.moveTo(160.32, 250.33);
        context.bezierCurveTo(160.81, 252.43, 161.31, 254.53, 161.39, 256.71);
        context.bezierCurveTo(161.61, 269.08, 161.67, 281.47, 161.64, 293.85);
        context.bezierCurveTo(161.55, 299.05, 160.97, 304.45, 163.12, 309.37);
        context.bezierCurveTo(161.52, 309.87, 159.95, 310.37, 158.36, 310.89);
        context.bezierCurveTo(158.05, 311.63, 157.43, 313.09, 157.11, 313.83);
        context.bezierCurveTo(155.83, 312.44, 154.52, 309.96, 152.31, 311.64);
        context.bezierCurveTo(151.57, 310.84, 150.84, 310.04, 150.05, 309.32);
        context.bezierCurveTo(147.39, 303.89, 144.59, 298.51, 140.8, 293.77);
        context.bezierCurveTo(142.16, 293.21, 143.53, 292.65, 144.91, 292.09);
        context.bezierCurveTo(144.63, 290.76, 144.35, 289.44, 144.05, 288.13);
        context.bezierCurveTo(146.13, 289.15, 149.35, 289.17, 150.23, 291.73);
        context.bezierCurveTo(151.64, 295.45, 152.32, 299.45, 154.39, 302.91);
        context.bezierCurveTo(154.44, 298.97, 154.25, 295.04, 153.99, 291.12);
        context.bezierCurveTo(155.27, 292.45, 156.55, 293.8, 157.92, 295.05);
        context.bezierCurveTo(158.76, 293.89, 159.53, 292.69, 160.27, 291.47);
        context.bezierCurveTo(160.2, 290.88, 160.04, 289.73, 159.97, 289.15);
        context.bezierCurveTo(159.35, 276.24, 158.95, 263.21, 160.32, 250.33);
        context.closePath();
        context.fillStyle = fillColor141;
        context.fill();


    }

    function drawPath147() {
        context.beginPath();
        context.moveTo(164.17, 249.76);
        context.bezierCurveTo(167.01, 252.61, 170.07, 255.56, 171.51, 259.43);
        context.bezierCurveTo(172.29, 263.88, 172.07, 268.44, 172.73, 272.91);
        context.bezierCurveTo(174.67, 281.87, 175.28, 291.04, 177.6, 299.92);
        context.bezierCurveTo(177.4, 300.55, 177.03, 301.81, 176.83, 302.44);
        context.bezierCurveTo(174.61, 298.95, 173.04, 295.09, 172.13, 291.05);
        context.bezierCurveTo(171.43, 286.71, 171.63, 282.29, 171.37, 277.91);
        context.bezierCurveTo(171.09, 272.53, 168.29, 267.72, 167.81, 262.37);
        context.bezierCurveTo(168.65, 264.23, 169.52, 266.07, 170.44, 267.89);
        context.bezierCurveTo(171.56, 260.95, 164.97, 256.33, 164.17, 249.76);
        context.closePath();
        context.fillStyle = fillColor142;
        context.fill();


    }

    function drawPath148() {
        context.beginPath();
        context.moveTo(151.72, 253.91);
        context.bezierCurveTo(152.4, 253.52, 153.75, 252.75, 154.43, 252.36);
        context.bezierCurveTo(155.55, 258.43, 154.51, 264.87, 156.99, 270.65);
        context.bezierCurveTo(159.28, 275.57, 157.95, 281.04, 158.31, 286.24);
        context.bezierCurveTo(156.64, 283.32, 154.35, 280.35, 154.87, 276.76);
        context.bezierCurveTo(155.76, 271.72, 152.13, 267.69, 150.83, 263.12);
        context.bezierCurveTo(150.57, 260.03, 151.31, 256.96, 151.72, 253.91);
        context.closePath();
        context.fillStyle = fillColor143;
        context.fill();


    }

    function drawPath149() {
        context.beginPath();
        context.moveTo(465.99, 258.12);
        context.bezierCurveTo(471.43, 253.92, 478.75, 252.79, 485.48, 252.75);
        context.bezierCurveTo(482.48, 254.24, 479.53, 255.84, 476.77, 257.72);
        context.bezierCurveTo(478.92, 257.61, 481.08, 257.48, 483.23, 257.33);
        context.bezierCurveTo(483.63, 258.01, 484.4, 259.36, 484.8, 260.04);
        context.bezierCurveTo(487.65, 258.97, 490.6, 258.21, 493.65, 257.97);
        context.bezierCurveTo(492.41, 261.64, 487.69, 261, 485.04, 263.09);
        context.bezierCurveTo(481.84, 265.09, 482.15, 269.23, 481.25, 272.44);
        context.bezierCurveTo(480.43, 277.44, 478.16, 282, 475.29, 286.12);
        context.bezierCurveTo(471.93, 283.65, 467.77, 279.95, 463.45, 282.75);
        context.bezierCurveTo(460.35, 285.65, 458.03, 289.28, 455.11, 292.36);
        context.bezierCurveTo(455.97, 292.59, 456.85, 292.81, 457.75, 293.05);
        context.bezierCurveTo(457.56, 293.51, 457.17, 294.4, 456.99, 294.85);
        context.lineTo(456.93, 295.63);
        context.bezierCurveTo(457.13, 296.4, 457.51, 297.93, 457.69, 298.71);
        context.bezierCurveTo(455.92, 297.75, 453.76, 296.24, 451.89, 297.93);
        context.bezierCurveTo(447.43, 301.8, 443.83, 306.76, 438.37, 309.43);
        context.bezierCurveTo(438.64, 307.01, 439.17, 304.63, 439.39, 302.21);
        context.bezierCurveTo(438.73, 300.19, 436.6, 299.05, 435.19, 297.56);
        context.bezierCurveTo(439.75, 296.35, 443.55, 293.44, 446.79, 290.12);
        context.bezierCurveTo(448.12, 289.08, 448.48, 287.75, 447.87, 286.11);
        context.bezierCurveTo(443.72, 285.99, 440.91, 289.73, 437.47, 291.52);
        context.bezierCurveTo(439.37, 288.91, 441.28, 286.28, 443.13, 283.61);
        context.bezierCurveTo(441.48, 283.79, 439.84, 283.97, 438.2, 284.16);
        context.bezierCurveTo(438.11, 283.53, 437.91, 282.27, 437.81, 281.64);
        context.bezierCurveTo(432.61, 282.67, 428.44, 286.03, 423.85, 288.43);
        context.bezierCurveTo(423.15, 287.77, 422.44, 287.12, 421.73, 286.48);
        context.bezierCurveTo(426.8, 283.08, 430.95, 278.49, 436.17, 275.32);
        context.bezierCurveTo(439.93, 273.04, 443.36, 270.27, 446.85, 267.57);
        context.bezierCurveTo(451.03, 265.51, 455.19, 263.43, 459.2, 261.05);
        context.bezierCurveTo(459.61, 261.03, 460.45, 260.97, 460.88, 260.95);
        context.bezierCurveTo(466.2, 261, 471.55, 260.32, 476.51, 258.29);
        context.bezierCurveTo(473, 257.99, 469.48, 257.87, 465.99, 258.12);
        context.closePath();
        context.fillStyle = fillColor144;
        context.fill();


    }

    function drawPath150() {
        context.beginPath();
        context.moveTo(404.17, 262.91);
        context.bezierCurveTo(407.69, 259.32, 411.53, 255.95, 416.11, 253.76);
        context.bezierCurveTo(414.32, 259.53, 409.44, 263.49, 406.93, 268.87);
        context.bezierCurveTo(405.95, 272.83, 406.21, 277.32, 402.88, 280.32);
        context.bezierCurveTo(401.84, 276.71, 401.44, 272.96, 401.03, 269.24);
        context.bezierCurveTo(402.04, 267.12, 403.07, 264.99, 404.17, 262.91);
        context.closePath();
        context.fillStyle = fillColor145;
        context.fill();


    }

    function drawPath151() {
        context.beginPath();
        context.moveTo(523.04, 254.08);
        context.bezierCurveTo(525.88, 254.57, 528.61, 255.69, 530.67, 257.8);
        context.bezierCurveTo(525.99, 262.51, 519.15, 259.05, 513.37, 259.97);
        context.bezierCurveTo(513.37, 259.4, 513.37, 258.25, 513.39, 257.68);
        context.bezierCurveTo(516.59, 256.44, 519.77, 255.16, 523.04, 254.08);
        context.closePath();
        context.fillStyle = fillColor146;
        context.fill();


    }

    function drawPath152() {
        context.beginPath();
        context.moveTo(296.48, 257.01);
        context.bezierCurveTo(296.96, 256.6, 297.91, 255.79, 298.37, 255.37);
        context.bezierCurveTo(300.17, 257.12, 299.76, 259.68, 299.83, 261.95);
        context.bezierCurveTo(297.05, 262.01, 297.27, 258.91, 296.48, 257.01);
        context.closePath();
        context.fillStyle = fillColor147;
        context.fill();


    }

    function drawPath153() {
        context.beginPath();
        context.moveTo(113.67, 256.44);
        context.bezierCurveTo(115.32, 260.44, 117.35, 264.28, 119.8, 267.87);
        context.bezierCurveTo(116.68, 264.72, 114.59, 260.77, 113.67, 256.44);
        context.closePath();
        context.fillStyle = fillColor148;
        context.fill();


    }

    function drawPath154() {
        context.beginPath();
        context.moveTo(503.63, 258.19);
        context.bezierCurveTo(506.08, 257.75, 508.64, 257.17, 511.09, 258.03);
        context.bezierCurveTo(509.09, 260.15, 504, 263.2, 503.63, 258.19);
        context.closePath();
        context.fillStyle = fillColor149;
        context.fill();


    }

    function drawPath155() {
        context.beginPath();
        context.moveTo(56.01, 258.24);
        context.bezierCurveTo(60.68, 258.21, 65.55, 260.88, 67, 265.51);
        context.bezierCurveTo(69.63, 273.13, 75.36, 280, 75, 288.41);
        context.bezierCurveTo(76.09, 288.31, 77.2, 288.2, 78.31, 288.11);
        context.bezierCurveTo(79.72, 289.28, 81.13, 290.45, 82.55, 291.63);
        context.bezierCurveTo(84.37, 291.68, 86.2, 291.75, 88.03, 291.83);
        context.bezierCurveTo(87.49, 294.19, 84.65, 293.55, 82.88, 294.15);
        context.bezierCurveTo(83.55, 296.77, 84.21, 299.41, 84.87, 302.04);
        context.bezierCurveTo(83.17, 301.81, 80.91, 302.61, 79.71, 301);
        context.bezierCurveTo(78.59, 298.95, 77.83, 296.73, 76.97, 294.59);
        context.bezierCurveTo(76.19, 294.28, 74.6, 293.68, 73.81, 293.37);
        context.bezierCurveTo(71.13, 286.24, 67.96, 279.13, 67.87, 271.37);
        context.bezierCurveTo(64.85, 266.36, 60.8, 261.72, 56.01, 258.24);
        context.closePath();
        context.fillStyle = fillColor150;
        context.fill();


    }

    function drawPath156() {
        context.beginPath();
        context.moveTo(457.89, 259.11);
        context.bezierCurveTo(460.59, 258.83, 463.28, 258.44, 465.99, 258.12);
        context.bezierCurveTo(469.48, 257.87, 473, 257.99, 476.51, 258.29);
        context.bezierCurveTo(471.55, 260.32, 466.2, 261, 460.88, 260.95);
        context.bezierCurveTo(460.13, 260.49, 458.64, 259.57, 457.89, 259.11);
        context.closePath();
        context.fillStyle = fillColor151;
        context.fill();


    }

    function drawPath157() {
        context.beginPath();
        context.moveTo(222.75, 260.97);
        context.bezierCurveTo(223.47, 260.45, 224.93, 259.43, 225.65, 258.91);
        context.bezierCurveTo(225.87, 266.19, 227.43, 273.32, 228.49, 280.49);
        context.bezierCurveTo(228.33, 281.39, 227.99, 283.19, 227.81, 284.08);
        context.bezierCurveTo(223.56, 277.24, 224.08, 268.68, 222.75, 260.97);
        context.closePath();
        context.fillStyle = fillColor152;
        context.fill();


    }

    function drawPath158() {
        context.beginPath();
        context.moveTo(290.15, 258.61);
        context.bezierCurveTo(293.27, 262.53, 292.21, 268, 293.32, 272.63);
        context.bezierCurveTo(293.67, 277.8, 296.31, 283.47, 293.43, 288.31);
        context.bezierCurveTo(292.89, 279.63, 291, 271.09, 289.81, 262.49);
        context.bezierCurveTo(289.84, 261.96, 289.92, 260.88, 289.95, 260.35);
        context.lineTo(290.15, 258.61);
        context.closePath();
        context.fillStyle = fillColor153;
        context.fill();


    }

    function drawPath159() {
        context.beginPath();
        context.moveTo(368.28, 259.09);
        context.bezierCurveTo(372.52, 261.61, 369.59, 266.24, 369.33, 270.01);
        context.bezierCurveTo(369.32, 272.68, 370.09, 275.27, 370.55, 277.88);
        context.bezierCurveTo(365.77, 272.91, 368.67, 265.27, 368.28, 259.09);
        context.closePath();
        context.fillStyle = fillColor154;
        context.fill();


    }

    function drawPath160() {
        context.beginPath();
        context.moveTo(438.28, 268.64);
        context.bezierCurveTo(444.67, 264.89, 451.6, 261.09, 459.2, 261.05);
        context.bezierCurveTo(455.19, 263.43, 451.03, 265.51, 446.85, 267.57);
        context.bezierCurveTo(444.05, 268.31, 441.15, 268.55, 438.28, 268.64);
        context.closePath();
        context.fillStyle = fillColor155;
        context.fill();


    }

    function drawPath161() {
        context.beginPath();
        context.moveTo(240.36, 274.65);
        context.bezierCurveTo(238.89, 270.25, 235.39, 265.53, 238.24, 260.96);
        context.bezierCurveTo(240.79, 268.09, 244.25, 274.88, 245.95, 282.31);
        context.bezierCurveTo(246.93, 286.41, 248.72, 290.28, 251.19, 293.71);
        context.bezierCurveTo(253, 296.83, 254.8, 299.95, 256.55, 303.11);
        context.bezierCurveTo(257.67, 308.16, 259.87, 312.87, 261.68, 317.69);
        context.bezierCurveTo(257.32, 317.89, 256.87, 312.75, 254.95, 309.93);
        context.bezierCurveTo(248.04, 299.11, 245.39, 286.35, 240.36, 274.65);
        context.closePath();
        context.fillStyle = fillColor156;
        context.fill();


    }

    function drawPath162() {
        context.beginPath();
        context.moveTo(238.24, 260.96);
        context.bezierCurveTo(240.03, 264.81, 243.76, 266.95, 246.61, 269.89);
        context.bezierCurveTo(249.31, 273.91, 251.88, 278.03, 254.4, 282.16);
        context.bezierCurveTo(250.01, 279.72, 247.81, 275.03, 244.8, 271.25);
        context.bezierCurveTo(245.21, 274.93, 245.55, 278.63, 245.95, 282.31);
        context.bezierCurveTo(244.25, 274.88, 240.79, 268.09, 238.24, 260.96);
        context.closePath();
        context.fillStyle = fillColor103;
        context.fill();


    }

    function drawPath163() {
        context.beginPath();
        context.moveTo(501.37, 271.17);
        context.bezierCurveTo(505.05, 267.81, 508.71, 264.09, 513.39, 262.16);
        context.bezierCurveTo(519.32, 259.72, 522.6, 266.65, 526.48, 269.8);
        context.bezierCurveTo(527.48, 269.65, 529.47, 269.36, 530.47, 269.2);
        context.bezierCurveTo(529.33, 278.68, 521.39, 284.71, 517.6, 292.99);
        context.bezierCurveTo(512.95, 300.16, 509.95, 308.51, 503.8, 314.63);
        context.bezierCurveTo(504.71, 309.68, 507.52, 305.47, 509.59, 300.99);
        context.bezierCurveTo(513.59, 292.4, 520.6, 285.59, 524.36, 276.88);
        context.bezierCurveTo(523.79, 276.43, 522.63, 275.52, 522.05, 275.07);
        context.bezierCurveTo(519.49, 282.36, 514.4, 288.33, 509, 293.71);
        context.bezierCurveTo(502.44, 300.19, 499.99, 309.67, 492.83, 315.65);
        context.bezierCurveTo(492.75, 314.96, 492.6, 313.59, 492.52, 312.89);
        context.bezierCurveTo(491.49, 313.04, 490.47, 313.2, 489.47, 313.37);
        context.lineTo(487.32, 313.73);
        context.bezierCurveTo(489.65, 312.31, 492.05, 310.99, 494.45, 309.69);
        context.bezierCurveTo(494.39, 308.27, 494.33, 306.85, 494.31, 305.44);
        context.bezierCurveTo(495, 303.37, 495.63, 301.28, 496.17, 299.17);
        context.bezierCurveTo(491.8, 300.13, 489.05, 303.84, 486.08, 306.85);
        context.bezierCurveTo(484.04, 306.55, 482, 306.24, 479.97, 305.93);
        context.bezierCurveTo(476.4, 309.11, 473.53, 312.92, 470.6, 316.65);
        context.bezierCurveTo(468.25, 319.73, 464.36, 320.8, 461.03, 322.41);
        context.bezierCurveTo(458.96, 321.53, 456.83, 320.84, 454.71, 320.15);
        context.bezierCurveTo(457.33, 317.77, 460.83, 318.21, 464.03, 318.88);
        context.bezierCurveTo(468.96, 315.13, 472.77, 310.24, 476.29, 305.2);
        context.bezierCurveTo(481.11, 303.88, 483.93, 299.04, 489.01, 298.35);
        context.bezierCurveTo(488.79, 294.68, 488.97, 290.8, 491.16, 287.69);
        context.bezierCurveTo(493.04, 286.65, 495.28, 286.81, 497.36, 286.53);
        context.bezierCurveTo(496.89, 285.92, 495.96, 284.71, 495.49, 284.09);
        context.bezierCurveTo(497.84, 279.93, 497.48, 274.4, 501.37, 271.17);
        context.closePath();
        context.fillStyle = fillColor157;
        context.fill();


    }

    function drawPath164() {
        context.beginPath();
        context.moveTo(127.49, 262.44);
        context.bezierCurveTo(130.27, 263.52, 130.72, 266.79, 131.6, 269.25);
        context.bezierCurveTo(132.03, 270.59, 131.44, 271.33, 129.88, 271.51);
        context.bezierCurveTo(128.88, 268.53, 128.04, 265.52, 127.49, 262.44);
        context.closePath();
        context.fillStyle = fillColor158;
        context.fill();


    }

    function drawPath165() {
        context.beginPath();
        context.moveTo(292.65, 289.96);
        context.bezierCurveTo(291.2, 280.91, 288.19, 271.71, 289.81, 262.49);
        context.bezierCurveTo(291, 271.09, 292.89, 279.63, 293.43, 288.31);
        context.lineTo(292.65, 289.96);
        context.closePath();
        context.fillStyle = fillColor159;
        context.fill();


    }

    function drawPath166() {
        context.beginPath();
        context.moveTo(297.6, 263.76);
        context.bezierCurveTo(299.43, 263.32, 300.04, 264.04, 299.44, 265.92);
        context.bezierCurveTo(297.6, 266.36, 296.99, 265.63, 297.6, 263.76);
        context.closePath();
        context.fillStyle = fillColor160;
        context.fill();


    }

    function drawPath167() {
        context.beginPath();
        context.moveTo(172.73, 272.91);
        context.bezierCurveTo(172.96, 269.92, 173.65, 267, 174.49, 264.13);
        context.bezierCurveTo(178.57, 273.09, 177.37, 283, 178.91, 292.45);
        context.bezierCurveTo(178.92, 295, 178.39, 297.51, 177.6, 299.92);
        context.bezierCurveTo(175.28, 291.04, 174.67, 281.87, 172.73, 272.91);
        context.closePath();
        context.fillStyle = fillColor161;
        context.fill();


    }

    function drawPath168() {
        context.beginPath();
        context.moveTo(206.76, 264.35);
        context.bezierCurveTo(209.73, 270.35, 209.15, 277.36, 210.17, 283.87);
        context.bezierCurveTo(211.81, 294.6, 215.01, 305.05, 218.64, 315.28);
        context.bezierCurveTo(218.03, 315.01, 216.81, 314.48, 216.2, 314.21);
        context.bezierCurveTo(215.91, 314.57, 215.33, 315.28, 215.04, 315.63);
        context.bezierCurveTo(213.96, 312.48, 212.83, 309.35, 211.83, 306.17);
        context.bezierCurveTo(211.55, 305.41, 210.96, 303.87, 210.68, 303.11);
        context.bezierCurveTo(208.83, 295.68, 206.95, 288.23, 206.33, 280.59);
        context.bezierCurveTo(205.93, 275.17, 206, 269.72, 206.76, 264.35);
        context.closePath();
        context.fillStyle = fillColor162;
        context.fill();


    }

    function drawPath169() {
        context.beginPath();
        context.moveTo(109.53, 265.37);
        context.bezierCurveTo(112.61, 269.45, 113.69, 274.59, 116.57, 278.79);
        context.bezierCurveTo(115.09, 278.28, 112.68, 278.68, 112.07, 276.85);
        context.bezierCurveTo(110.92, 273.09, 110.68, 269.12, 109.53, 265.37);
        context.closePath();
        context.fillStyle = fillColor163;
        context.fill();


    }

    function drawPath170() {
        context.beginPath();
        context.moveTo(301.83, 271.09);
        context.bezierCurveTo(305.16, 271.69, 303.43, 276.13, 304.13, 278.49);
        context.bezierCurveTo(303.53, 278.04, 302.33, 277.13, 301.73, 276.69);
        context.lineTo(301.47, 275.57);
        context.bezierCurveTo(301.48, 274.08, 301.68, 272.57, 301.83, 271.09);
        context.closePath();
        context.fillStyle = fillColor164;
        context.fill();


    }

    function drawPath171() {
        context.beginPath();
        context.moveTo(322.65, 270.51);
        context.bezierCurveTo(326.77, 272.76, 324.85, 278.29, 325.64, 282.11);
        context.lineTo(324.16, 282.39);
        context.bezierCurveTo(323.83, 278.4, 323.21, 274.45, 322.65, 270.51);
        context.closePath();
        context.fillStyle = fillColor165;
        context.fill();


    }

    function drawPath172() {
        context.beginPath();
        context.moveTo(46.93, 274.61);
        context.bezierCurveTo(47.47, 274.27, 48.52, 273.57, 49.04, 273.23);
        context.bezierCurveTo(54.03, 277.48, 59.47, 284.05, 55.85, 290.89);
        context.bezierCurveTo(59.91, 295.44, 62.99, 300.85, 64.75, 306.71);
        context.bezierCurveTo(61.84, 305.81, 58.83, 305.92, 55.89, 306.57);
        context.bezierCurveTo(53.24, 300.31, 51.83, 293.63, 49.47, 287.27);
        context.bezierCurveTo(47.92, 283.21, 47.35, 278.91, 46.93, 274.61);
        context.closePath();
        context.fillStyle = fillColor166;
        context.fill();


    }

    function drawPath173() {
        context.beginPath();
        context.moveTo(300.36, 281.28);
        context.bezierCurveTo(299.67, 279.47, 297.59, 272.03, 301.47, 275.57);
        context.lineTo(301.73, 276.69);
        context.bezierCurveTo(301.55, 278.05, 301.91, 280.79, 300.36, 281.28);
        context.closePath();
        context.fillStyle = fillColor167;
        context.fill();


    }

    function drawPath174() {
        context.beginPath();
        context.moveTo(522.05, 275.07);
        context.bezierCurveTo(522.63, 275.52, 523.79, 276.43, 524.36, 276.88);
        context.bezierCurveTo(520.6, 285.59, 513.59, 292.4, 509.59, 300.99);
        context.bezierCurveTo(507.52, 305.47, 504.71, 309.68, 503.8, 314.63);
        context.bezierCurveTo(500.83, 317.84, 497.72, 320.93, 494.57, 323.97);
        context.bezierCurveTo(488.77, 323.25, 483.52, 326.48, 477.83, 326.97);
        context.bezierCurveTo(477.31, 325.96, 476.8, 324.95, 476.29, 323.95);
        context.bezierCurveTo(482.99, 325.33, 489.48, 322.52, 494.65, 318.43);
        context.bezierCurveTo(491.56, 318.13, 488.47, 317.87, 485.39, 317.63);
        context.bezierCurveTo(486.73, 316.2, 488.07, 314.76, 489.47, 313.37);
        context.bezierCurveTo(490.47, 313.2, 491.49, 313.04, 492.52, 312.89);
        context.bezierCurveTo(492.6, 313.59, 492.75, 314.96, 492.83, 315.65);
        context.bezierCurveTo(499.99, 309.67, 502.44, 300.19, 509, 293.71);
        context.bezierCurveTo(514.4, 288.33, 519.49, 282.36, 522.05, 275.07);
        context.closePath();
        context.fillStyle = fillColor168;
        context.fill();


    }

    function drawPath175() {
        context.beginPath();
        context.moveTo(392.24, 276.65);
        context.bezierCurveTo(392.89, 276.85, 394.19, 277.27, 394.84, 277.47);
        context.bezierCurveTo(396.44, 280.23, 398.12, 282.96, 400.03, 285.55);
        context.bezierCurveTo(397.69, 284.33, 395.24, 283.4, 392.72, 282.67);
        context.bezierCurveTo(393.19, 285.91, 393.72, 289.17, 394.89, 292.25);
        context.bezierCurveTo(393.71, 291.97, 392.56, 292.11, 391.47, 292.64);
        context.bezierCurveTo(390.95, 290.89, 390.61, 289.11, 390.4, 287.32);
        context.bezierCurveTo(390.91, 283.75, 391.39, 280.16, 392.24, 276.65);
        context.closePath();
        context.fillStyle = fillColor169;
        context.fill();


    }

    function drawPath176() {
        context.beginPath();
        context.moveTo(109, 277.8);
        context.bezierCurveTo(114.35, 279.91, 115.67, 285.43, 116.59, 290.52);
        context.bezierCurveTo(118.32, 290.73, 120.03, 290.95, 121.75, 291.23);
        context.bezierCurveTo(121.95, 291.57, 122.36, 292.27, 122.56, 292.63);
        context.bezierCurveTo(121.99, 293.44, 121.41, 294.25, 120.85, 295.08);
        context.bezierCurveTo(122.35, 297.93, 123.44, 300.99, 124.12, 304.15);
        context.bezierCurveTo(125.49, 309.19, 126.24, 314.64, 123.23, 319.28);
        context.bezierCurveTo(123.85, 320.21, 124.47, 321.16, 125.05, 322.13);
        context.bezierCurveTo(125.08, 322.92, 125.11, 324.51, 125.12, 325.31);
        context.bezierCurveTo(123.77, 324.68, 122.43, 324.07, 121.08, 323.48);
        context.bezierCurveTo(122.64, 312.88, 121.72, 301.77, 116.89, 292.11);
        context.bezierCurveTo(116.83, 294.88, 116.92, 297.67, 117.04, 300.44);
        context.bezierCurveTo(116.27, 300.45, 114.71, 300.47, 113.93, 300.48);
        context.bezierCurveTo(113.67, 295.65, 113.45, 290.8, 112.69, 286.03);
        context.bezierCurveTo(112.16, 283.03, 110.27, 280.52, 109, 277.8);
        context.closePath();
        context.fillStyle = fillColor170;
        context.fill();


    }

    function drawPath177() {
        context.beginPath();
        context.moveTo(65.39, 279.21);
        context.bezierCurveTo(70.89, 283.95, 68.33, 293.75, 75.23, 297.57);
        context.bezierCurveTo(77.24, 301.2, 76.13, 306.25, 79.16, 309.72);
        context.bezierCurveTo(79.52, 308.64, 79.89, 307.57, 80.25, 306.51);
        context.bezierCurveTo(83.12, 306.51, 85.99, 306.72, 88.77, 307.4);
        context.bezierCurveTo(87.95, 309.53, 87.43, 311.77, 87.43, 314.08);
        context.bezierCurveTo(85.85, 311.97, 84.08, 310, 81.92, 308.48);
        context.bezierCurveTo(82.4, 316.11, 86.93, 324.11, 83.59, 331.51);
        context.bezierCurveTo(79.59, 327.97, 79.96, 322.19, 77.49, 317.77);
        context.bezierCurveTo(75.25, 313.53, 73.57, 308.93, 73.69, 304.07);
        context.bezierCurveTo(72.03, 301.83, 70.2, 299.53, 69.75, 296.69);
        context.bezierCurveTo(68.68, 290.76, 66.13, 285.2, 65.39, 279.21);
        context.closePath();
        context.fillStyle = fillColor171;
        context.fill();


    }

    function drawPath178() {
        context.beginPath();
        context.moveTo(423.85, 288.43);
        context.bezierCurveTo(428.44, 286.03, 432.61, 282.67, 437.81, 281.64);
        context.bezierCurveTo(437.91, 282.27, 438.11, 283.53, 438.2, 284.16);
        context.bezierCurveTo(439.84, 283.97, 441.48, 283.79, 443.13, 283.61);
        context.bezierCurveTo(441.28, 286.28, 439.37, 288.91, 437.47, 291.52);
        context.bezierCurveTo(440.91, 289.73, 443.72, 285.99, 447.87, 286.11);
        context.bezierCurveTo(448.48, 287.75, 448.12, 289.08, 446.79, 290.12);
        context.bezierCurveTo(443.55, 293.44, 439.75, 296.35, 435.19, 297.56);
        context.bezierCurveTo(436.6, 299.05, 438.73, 300.19, 439.39, 302.21);
        context.bezierCurveTo(439.17, 304.63, 438.64, 307.01, 438.37, 309.43);
        context.bezierCurveTo(437.21, 310.19, 436.05, 310.96, 434.91, 311.73);
        context.bezierCurveTo(431.52, 314.12, 426.89, 314.92, 424.29, 318.27);
        context.bezierCurveTo(424.95, 320.4, 427.63, 320.57, 429.27, 321.67);
        context.bezierCurveTo(427.25, 321.6, 425.23, 321.57, 423.23, 321.55);
        context.bezierCurveTo(423.16, 322.6, 423.11, 323.67, 423.05, 324.73);
        context.bezierCurveTo(419.77, 325.63, 416.68, 327.03, 413.72, 328.68);
        context.bezierCurveTo(414.17, 330.16, 414.63, 331.65, 415.08, 333.16);
        context.bezierCurveTo(412.15, 333.71, 409.45, 332.33, 406.92, 331.07);
        context.bezierCurveTo(407.51, 328.45, 408.07, 325.85, 408.63, 323.24);
        context.bezierCurveTo(406.23, 320.69, 402.24, 318.27, 403.28, 314.19);
        context.bezierCurveTo(405.04, 305.67, 412.72, 300.27, 418.64, 294.53);
        context.bezierCurveTo(418.11, 294.16, 417.03, 293.41, 416.49, 293.04);
        context.bezierCurveTo(418.84, 291.35, 421.27, 289.75, 423.85, 288.43);
        context.closePath();
        context.fillStyle = fillColor172;
        context.fill();


    }

    function drawPath179() {
        context.beginPath();
        context.moveTo(463.45, 282.75);
        context.bezierCurveTo(467.77, 279.95, 471.93, 283.65, 475.29, 286.12);
        context.bezierCurveTo(475.12, 289.31, 474.84, 292.55, 473.6, 295.52);
        context.bezierCurveTo(471.73, 300.68, 466.76, 303.61, 463.08, 307.35);
        context.bezierCurveTo(463.13, 306.04, 463.19, 304.72, 463.25, 303.41);
        context.bezierCurveTo(461.33, 302.89, 459.41, 302.39, 457.52, 301.87);
        context.bezierCurveTo(458.76, 303.16, 460.01, 304.45, 461.28, 305.75);
        context.bezierCurveTo(460.03, 306.81, 458.79, 307.91, 457.55, 308.99);
        context.bezierCurveTo(455.69, 308.49, 453.84, 308.01, 452, 307.53);
        context.bezierCurveTo(451.45, 307.8, 450.36, 308.32, 449.81, 308.59);
        context.bezierCurveTo(450.6, 309.69, 451.39, 310.8, 452.19, 311.92);
        context.bezierCurveTo(450.45, 313.76, 448.03, 314.29, 445.6, 314.44);
        context.bezierCurveTo(445.96, 312.43, 446.32, 310.43, 446.68, 308.43);
        context.bezierCurveTo(442.77, 309.57, 439, 311.35, 434.91, 311.73);
        context.bezierCurveTo(436.05, 310.96, 437.21, 310.19, 438.37, 309.43);
        context.bezierCurveTo(443.83, 306.76, 447.43, 301.8, 451.89, 297.93);
        context.bezierCurveTo(453.76, 296.24, 455.92, 297.75, 457.69, 298.71);
        context.bezierCurveTo(460.57, 301.09, 465.36, 302.05, 466.89, 297.71);
        context.bezierCurveTo(463.55, 297.15, 460.23, 296.47, 456.93, 295.63);
        context.lineTo(456.99, 294.85);
        context.bezierCurveTo(457.17, 294.4, 457.56, 293.51, 457.75, 293.05);
        context.bezierCurveTo(456.85, 292.81, 455.97, 292.59, 455.11, 292.36);
        context.bezierCurveTo(458.03, 289.28, 460.35, 285.65, 463.45, 282.75);
        context.closePath();
        context.fillStyle = fillColor173;
        context.fill();


    }

    function drawPath180() {
        context.beginPath();
        context.moveTo(135.73, 282.83);
        context.bezierCurveTo(138.68, 284.83, 140.4, 288.04, 142.53, 290.81);
        context.bezierCurveTo(141.65, 290.87, 139.88, 291, 139, 291.07);
        context.bezierCurveTo(137.77, 288.37, 136.63, 285.64, 135.73, 282.83);
        context.closePath();
        context.fillStyle = fillColor174;
        context.fill();


    }

    function drawPath181() {
        context.beginPath();
        context.moveTo(254.96, 283.07);
        context.bezierCurveTo(259.64, 287.35, 262.53, 293.01, 265.77, 298.35);
        context.bezierCurveTo(265.33, 298.48, 264.47, 298.75, 264.04, 298.88);
        context.bezierCurveTo(261.87, 293.11, 257.37, 288.68, 254.96, 283.07);
        context.closePath();
        context.fillStyle = fillColor175;
        context.fill();


    }

    function drawPath182() {
        context.beginPath();
        context.moveTo(324.16, 283.65);
        context.bezierCurveTo(326, 283.24, 326.61, 283.96, 326.01, 285.84);
        context.bezierCurveTo(324.16, 286.27, 323.55, 285.53, 324.16, 283.65);
        context.closePath();
        context.fillStyle = fillColor176;
        context.fill();


    }

    function drawPath183() {
        context.beginPath();
        context.moveTo(226.91, 286.87);
        context.bezierCurveTo(225.89, 284.63, 228.69, 284.68, 229.55, 286.11);
        context.lineTo(229.77, 287.28);
        context.bezierCurveTo(229.72, 290.33, 227.05, 289.13, 226.91, 286.87);
        context.closePath();
        context.fillStyle = fillColor177;
        context.fill();


    }

    function drawPath184() {
        context.beginPath();
        context.moveTo(277.37, 284.05);
        context.bezierCurveTo(277.85, 285.4, 278.32, 286.76, 278.79, 288.12);
        context.bezierCurveTo(279.04, 291.81, 278.56, 295.51, 277.45, 299.03);
        context.bezierCurveTo(277.24, 294.04, 277.33, 289.05, 277.37, 284.05);
        context.closePath();
        context.fillStyle = fillColor178;
        context.fill();


    }

    function drawPath185() {
        context.beginPath();
        context.moveTo(296.76, 287.32);
        context.bezierCurveTo(297.03, 296.79, 299.41, 306, 301.87, 315.09);
        context.bezierCurveTo(304.35, 323.72, 305.35, 332.69, 307.83, 341.32);
        context.bezierCurveTo(307.35, 341.61, 306.39, 342.2, 305.92, 342.49);
        context.bezierCurveTo(305.43, 340.23, 304.95, 337.97, 304.44, 335.72);
        context.bezierCurveTo(302.77, 324.28, 299.17, 313.24, 296.69, 301.96);
        context.bezierCurveTo(296.15, 303.8, 295.6, 305.64, 295.04, 307.48);
        context.bezierCurveTo(294.84, 303.99, 294.87, 300.49, 295.09, 297.01);
        context.bezierCurveTo(295.69, 293.79, 296.28, 290.56, 296.76, 287.32);
        context.closePath();
        context.fillStyle = fillColor179;
        context.fill();


    }

    function drawPath186() {
        context.beginPath();
        context.moveTo(324.15, 286.79);
        context.bezierCurveTo(326.07, 287.04, 327.03, 288.16, 327.01, 290.13);
        context.bezierCurveTo(327.71, 295.4, 327.83, 300.72, 328.47, 305.99);
        context.lineTo(326.96, 305.99);
        context.bezierCurveTo(326.57, 303.51, 325.4, 301.31, 324.49, 299);
        context.bezierCurveTo(324.35, 294.93, 325.13, 290.81, 324.15, 286.79);
        context.closePath();
        context.fillStyle = fillColor180;
        context.fill();


    }

    function drawPath187() {
        context.beginPath();
        context.moveTo(124.77, 289.43);
        context.bezierCurveTo(126.44, 290.99, 128.12, 292.55, 129.76, 294.16);
        context.bezierCurveTo(131.64, 298.39, 133.56, 302.61, 135.68, 306.72);
        context.bezierCurveTo(138.19, 311.95, 143.87, 314.17, 148.09, 317.69);
        context.bezierCurveTo(147.05, 314.07, 145.61, 310.57, 143.59, 307.39);
        context.bezierCurveTo(145.73, 308.07, 147.89, 308.68, 150.05, 309.32);
        context.bezierCurveTo(150.84, 310.04, 151.57, 310.84, 152.31, 311.64);
        context.bezierCurveTo(154.52, 309.96, 155.83, 312.44, 157.11, 313.83);
        context.bezierCurveTo(159, 316.6, 162.65, 318.99, 162.17, 322.76);
        context.bezierCurveTo(162.04, 326.99, 161.91, 331.21, 161.59, 335.44);
        context.bezierCurveTo(161.03, 335.76, 159.89, 336.4, 159.32, 336.72);
        context.lineTo(157.15, 337.21);
        context.bezierCurveTo(157.93, 335.85, 158.72, 334.51, 159.49, 333.15);
        context.bezierCurveTo(158.37, 333.24, 157.25, 333.31, 156.15, 333.4);
        context.bezierCurveTo(155.45, 330.6, 154.76, 327.8, 154.09, 325);
        context.bezierCurveTo(153.33, 327.07, 152.57, 329.13, 151.83, 331.2);
        context.bezierCurveTo(149.69, 329.37, 147.55, 327.55, 145.4, 325.75);
        context.lineTo(145.37, 324.24);
        context.bezierCurveTo(145.08, 320.91, 142.49, 318.35, 140.89, 315.56);
        context.bezierCurveTo(139.35, 316.17, 137.81, 316.8, 136.27, 317.43);
        context.bezierCurveTo(134.28, 315.73, 132.29, 314.01, 130.35, 312.28);
        context.bezierCurveTo(130.08, 306.59, 128.64, 301.07, 127.21, 295.59);
        context.bezierCurveTo(126.17, 298.44, 125.13, 301.28, 124.12, 304.15);
        context.bezierCurveTo(123.44, 300.99, 122.35, 297.93, 120.85, 295.08);
        context.bezierCurveTo(121.41, 294.25, 121.99, 293.44, 122.56, 292.63);
        context.bezierCurveTo(123.29, 291.55, 124.04, 290.48, 124.77, 289.43);
        context.closePath();
        context.moveTo(147.83, 311.25);
        context.bezierCurveTo(148.81, 314.53, 150.76, 317.39, 153.29, 319.68);
        context.bezierCurveTo(152.56, 316.31, 151.52, 312.43, 147.83, 311.25);
        context.closePath();
        context.fillStyle = fillColor181;
        context.fill();


    }

    function drawPath188() {
        context.beginPath();
        context.moveTo(278.79, 288.12);
        context.bezierCurveTo(280.64, 293.44, 280.84, 299.71, 277.64, 304.57);
        context.bezierCurveTo(277.55, 302.72, 277.45, 300.88, 277.45, 299.03);
        context.bezierCurveTo(278.56, 295.51, 279.04, 291.81, 278.79, 288.12);
        context.closePath();
        context.fillStyle = fillColor182;
        context.fill();


    }

    function drawPath189() {
        context.beginPath();
        context.moveTo(172.13, 291.05);
        context.bezierCurveTo(173.04, 295.09, 174.61, 298.95, 176.83, 302.44);
        context.bezierCurveTo(177.03, 301.81, 177.4, 300.55, 177.6, 299.92);
        context.bezierCurveTo(178.39, 297.51, 178.92, 295, 178.91, 292.45);
        context.bezierCurveTo(179.33, 292.32, 180.21, 292.08, 180.65, 291.96);
        context.bezierCurveTo(181.21, 296.04, 184.56, 298.63, 186.31, 302.01);
        context.bezierCurveTo(186.36, 309.68, 184.51, 317.28, 185.51, 324.99);
        context.bezierCurveTo(184.76, 328.09, 184.31, 331.33, 182.88, 334.23);
        context.bezierCurveTo(179.23, 338.27, 174.19, 340.65, 169.95, 344);
        context.bezierCurveTo(168.97, 342.59, 168.03, 341.19, 167.08, 339.77);
        context.bezierCurveTo(168.15, 337.55, 168.92, 335.17, 169.33, 332.73);
        context.bezierCurveTo(166.65, 334.37, 164.04, 336.15, 161.41, 337.88);
        context.bezierCurveTo(161.47, 337.27, 161.55, 336.04, 161.59, 335.44);
        context.bezierCurveTo(161.91, 331.21, 162.04, 326.99, 162.17, 322.76);
        context.bezierCurveTo(162.65, 318.99, 159, 316.6, 157.11, 313.83);
        context.bezierCurveTo(157.43, 313.09, 158.05, 311.63, 158.36, 310.89);
        context.bezierCurveTo(159.95, 310.37, 161.52, 309.87, 163.12, 309.37);
        context.bezierCurveTo(160.97, 304.45, 161.55, 299.05, 161.64, 293.85);
        context.bezierCurveTo(162.05, 296.09, 163.03, 298.13, 164.4, 299.95);
        context.bezierCurveTo(164.47, 297.55, 164.39, 295.16, 164.35, 292.76);
        context.bezierCurveTo(166.55, 293.23, 169.59, 292.91, 170.53, 295.51);
        context.bezierCurveTo(170.17, 296.65, 169.79, 297.79, 169.37, 298.92);
        context.bezierCurveTo(167.57, 302.52, 167.01, 307.08, 170.01, 310.21);
        context.bezierCurveTo(170, 308.23, 169.97, 306.24, 169.88, 304.27);
        context.bezierCurveTo(172.88, 300.55, 172.23, 295.49, 172.13, 291.05);
        context.closePath();
        context.moveTo(168.08, 311);
        context.bezierCurveTo(168.93, 312.87, 169.84, 314.72, 170.77, 316.56);
        context.bezierCurveTo(168.72, 316.72, 166.33, 316.03, 164.64, 317.57);
        context.bezierCurveTo(167.11, 318.09, 169.61, 318.55, 172.11, 318.96);
        context.bezierCurveTo(173.59, 315.83, 171.55, 311.52, 168.08, 311);
        context.closePath();
        context.fillStyle = fillColor183;
        context.fill();


    }

    function drawPath190() {
        context.beginPath();
        context.moveTo(306.53, 309.67);
        context.bezierCurveTo(304.87, 303.48, 306.04, 297.09, 306.6, 290.85);
        context.bezierCurveTo(306.72, 297.12, 306.76, 303.4, 306.53, 309.67);
        context.closePath();
        context.fillStyle = fillColor56;
        context.fill();


    }

    function drawPath191() {
        context.beginPath();
        context.moveTo(391.47, 292.64);
        context.bezierCurveTo(392.56, 292.11, 393.71, 291.97, 394.89, 292.25);
        context.bezierCurveTo(395.25, 293.33, 397.21, 295.85, 395.17, 296.28);
        context.bezierCurveTo(393.39, 295.95, 391.99, 294.29, 391.47, 292.64);
        context.closePath();
        context.fillStyle = fillColor184;
        context.fill();


    }

    function drawPath192() {
        context.beginPath();
        context.moveTo(227.91, 292.96);
        context.bezierCurveTo(228.59, 292.79, 229.96, 292.41, 230.64, 292.23);
        context.bezierCurveTo(232.24, 299.24, 234.84, 306.01, 237.97, 312.49);
        context.bezierCurveTo(238.05, 313.12, 238.23, 314.37, 238.32, 314.99);
        context.bezierCurveTo(237.85, 315.41, 236.92, 316.24, 236.44, 316.65);
        context.bezierCurveTo(232.73, 309.09, 229.83, 301.17, 227.91, 292.96);
        context.closePath();
        context.fillStyle = fillColor185;
        context.fill();


    }

    function drawPath193() {
        context.beginPath();
        context.moveTo(251.19, 293.71);
        context.bezierCurveTo(253.69, 295.69, 255.99, 298.08, 257.05, 301.16);
        context.lineTo(256.55, 303.11);
        context.bezierCurveTo(254.8, 299.95, 253, 296.83, 251.19, 293.71);
        context.closePath();
        context.fillStyle = fillColor186;
        context.fill();


    }

    function drawPath194() {
        context.beginPath();
        context.moveTo(293.13, 294.95);
        context.bezierCurveTo(293.49, 294.85, 294.23, 294.69, 294.59, 294.6);
        context.bezierCurveTo(294.72, 295.2, 294.97, 296.4, 295.09, 297.01);
        context.bezierCurveTo(294.87, 300.49, 294.84, 303.99, 295.04, 307.48);
        context.bezierCurveTo(295.6, 305.64, 296.15, 303.8, 296.69, 301.96);
        context.bezierCurveTo(299.17, 313.24, 302.77, 324.28, 304.44, 335.72);
        context.bezierCurveTo(300.55, 330.8, 300.64, 324.24, 298.59, 318.55);
        context.bezierCurveTo(297.93, 315.51, 297.21, 312.48, 296.52, 309.45);
        context.bezierCurveTo(295.21, 308.99, 293.91, 308.53, 292.6, 308.08);
        context.bezierCurveTo(292.89, 303.71, 292.89, 299.32, 293.13, 294.95);
        context.closePath();
        context.fillStyle = fillColor187;
        context.fill();


    }

    function drawPath195() {
        context.beginPath();
        context.moveTo(124.12, 304.15);
        context.bezierCurveTo(125.13, 301.28, 126.17, 298.44, 127.21, 295.59);
        context.bezierCurveTo(128.64, 301.07, 130.08, 306.59, 130.35, 312.28);
        context.bezierCurveTo(132.29, 314.01, 134.28, 315.73, 136.27, 317.43);
        context.bezierCurveTo(137.81, 316.8, 139.35, 316.17, 140.89, 315.56);
        context.bezierCurveTo(142.49, 318.35, 145.08, 320.91, 145.37, 324.24);
        context.bezierCurveTo(144.79, 326.24, 144.15, 328.23, 143.61, 330.25);
        context.bezierCurveTo(142.61, 328.88, 141.63, 327.52, 140.63, 326.16);
        context.bezierCurveTo(139.35, 327.04, 138.05, 327.92, 136.77, 328.81);
        context.bezierCurveTo(136.36, 329.39, 135.56, 330.53, 135.16, 331.11);
        context.bezierCurveTo(134.85, 330.59, 134.56, 330.07, 134.27, 329.56);
        context.bezierCurveTo(135.99, 324.89, 133.27, 320.44, 131.37, 316.32);
        context.bezierCurveTo(130.56, 318.11, 129.8, 319.92, 129.01, 321.72);
        context.bezierCurveTo(128.03, 321.83, 126.05, 322.03, 125.05, 322.13);
        context.bezierCurveTo(124.47, 321.16, 123.85, 320.21, 123.23, 319.28);
        context.bezierCurveTo(126.24, 314.64, 125.49, 309.19, 124.12, 304.15);
        context.closePath();
        context.fillStyle = fillColor188;
        context.fill();


    }

    function drawPath196() {
        context.beginPath();
        context.moveTo(456.93, 295.63);
        context.bezierCurveTo(460.23, 296.47, 463.55, 297.15, 466.89, 297.71);
        context.bezierCurveTo(465.36, 302.05, 460.57, 301.09, 457.69, 298.71);
        context.bezierCurveTo(457.51, 297.93, 457.13, 296.4, 456.93, 295.63);
        context.closePath();
        context.fillStyle = fillColor189;
        context.fill();


    }

    function drawPath197() {
        context.beginPath();
        context.moveTo(320.31, 297.37);
        context.bezierCurveTo(324.97, 310.97, 323.96, 325.84, 329.03, 339.39);
        context.bezierCurveTo(328.23, 330.89, 324.19, 322.75, 325.47, 314.11);
        context.bezierCurveTo(323.32, 310.84, 323.44, 307.01, 323.89, 303.31);
        context.bezierCurveTo(326.23, 307.08, 329.41, 310.69, 329.72, 315.32);
        context.bezierCurveTo(330.37, 320.85, 330.77, 326.4, 331.64, 331.91);
        context.bezierCurveTo(332.12, 336.16, 332.55, 340.43, 333.25, 344.65);
        context.bezierCurveTo(333.37, 345.28, 333.61, 346.52, 333.73, 347.13);
        context.bezierCurveTo(327.64, 341.79, 319.51, 340.63, 311.69, 341.52);
        context.bezierCurveTo(311.76, 340.89, 311.87, 339.64, 311.92, 339.01);
        context.bezierCurveTo(311.93, 338.35, 311.95, 337, 311.95, 336.33);
        context.bezierCurveTo(312.28, 337.95, 312.6, 339.59, 312.92, 341.21);
        context.bezierCurveTo(316.67, 341.21, 320.41, 341.2, 324.16, 341.17);
        context.bezierCurveTo(323.65, 334.75, 322.15, 328.47, 321.45, 322.08);
        context.bezierCurveTo(320.92, 313.85, 320.57, 305.61, 320.31, 297.37);
        context.closePath();
        context.fillStyle = fillColor190;
        context.fill();


    }

    function drawPath198() {
        context.beginPath();
        context.moveTo(170.01, 310.21);
        context.bezierCurveTo(167.01, 307.08, 167.57, 302.52, 169.37, 298.92);
        context.bezierCurveTo(169.49, 300.25, 169.75, 302.92, 169.88, 304.27);
        context.bezierCurveTo(169.97, 306.24, 170, 308.23, 170.01, 310.21);
        context.closePath();
        context.fillStyle = fillColor191;
        context.fill();


    }

    function drawPath199() {
        context.beginPath();
        context.moveTo(486.08, 306.85);
        context.bezierCurveTo(489.05, 303.84, 491.8, 300.13, 496.17, 299.17);
        context.bezierCurveTo(495.63, 301.28, 495, 303.37, 494.31, 305.44);
        context.bezierCurveTo(494.33, 306.85, 494.39, 308.27, 494.45, 309.69);
        context.bezierCurveTo(492.05, 310.99, 489.65, 312.31, 487.32, 313.73);
        context.bezierCurveTo(482.25, 317.47, 476.23, 319.93, 471.91, 324.6);
        context.bezierCurveTo(468.65, 327.83, 464.17, 329.32, 460.09, 331.21);
        context.bezierCurveTo(461.32, 328.89, 462.51, 326.56, 463.69, 324.23);
        context.bezierCurveTo(462.81, 323.6, 461.92, 323, 461.03, 322.41);
        context.bezierCurveTo(464.36, 320.8, 468.25, 319.73, 470.6, 316.65);
        context.bezierCurveTo(473.53, 312.92, 476.4, 309.11, 479.97, 305.93);
        context.bezierCurveTo(482, 306.24, 484.04, 306.55, 486.08, 306.85);
        context.closePath();
        context.fillStyle = fillColor192;
        context.fill();


    }

    function drawPath200() {
        context.beginPath();
        context.moveTo(88.68, 303.11);
        context.bezierCurveTo(90.21, 302.29, 91.75, 301.45, 93.37, 300.8);
        context.bezierCurveTo(96.68, 301.35, 98.48, 304.55, 100.92, 306.51);
        context.bezierCurveTo(105.57, 310.21, 109.89, 315.27, 116.33, 315.31);
        context.bezierCurveTo(117.93, 318.73, 119.19, 322.32, 120.39, 325.91);
        context.bezierCurveTo(120.91, 327.4, 121.43, 328.89, 121.96, 330.39);
        context.bezierCurveTo(120.13, 330.57, 118.32, 330.76, 116.51, 330.97);
        context.bezierCurveTo(113.32, 328.08, 110.17, 325.04, 108.25, 321.12);
        context.bezierCurveTo(107.59, 322.63, 106.91, 324.13, 106.24, 325.64);
        context.bezierCurveTo(105.65, 324.44, 105.07, 323.24, 104.48, 322.05);
        context.bezierCurveTo(103.6, 329.04, 103.2, 336.07, 103.15, 343.09);
        context.bezierCurveTo(99.64, 341.11, 95.67, 340.83, 91.77, 341.61);
        context.bezierCurveTo(90.52, 342.2, 89.07, 341.84, 87.84, 342.51);
        context.bezierCurveTo(87.16, 341.88, 86.59, 341.19, 86.11, 340.43);
        context.bezierCurveTo(86.19, 339.88, 86.36, 338.8, 86.45, 338.27);
        context.bezierCurveTo(89.56, 338.84, 92.72, 338.68, 95.83, 338.24);
        context.bezierCurveTo(94.36, 336.44, 92.15, 335.01, 91.48, 332.71);
        context.bezierCurveTo(92.41, 331.48, 93.43, 330.31, 94.45, 329.16);
        context.bezierCurveTo(96.83, 329.92, 99.24, 330.6, 101.67, 331.23);
        context.bezierCurveTo(100.33, 329.28, 98.88, 327.41, 97.37, 325.61);
        context.bezierCurveTo(97.04, 322.32, 97.63, 318.63, 95.4, 315.85);
        context.bezierCurveTo(92.68, 311.88, 90.45, 307.59, 88.68, 303.11);
        context.closePath();
        context.moveTo(93.09, 332.81);
        context.bezierCurveTo(95.56, 334.91, 98.63, 335.85, 101.85, 335.37);
        context.bezierCurveTo(100.29, 332, 96.12, 332.79, 93.09, 332.81);
        context.closePath();
        context.fillStyle = fillColor193;
        context.fill();


    }

    function drawPath201() {
        context.save();
        context.globalAlpha = 0.55;
        context.beginPath();
        context.moveTo(210.68, 303.11);
        context.bezierCurveTo(210.96, 303.87, 211.55, 305.41, 211.83, 306.17);
        context.bezierCurveTo(211.55, 305.41, 210.96, 303.87, 210.68, 303.11);
        context.closePath();
        context.fillStyle = fillColor194;
        context.fill();
        context.restore();


    }

    function drawPath202() {
        context.beginPath();
        context.moveTo(276.55, 302.61);
        context.bezierCurveTo(277, 305.48, 277.12, 308.37, 277.19, 311.28);
        context.bezierCurveTo(276.89, 314.35, 276.53, 317.43, 276.17, 320.49);
        context.bezierCurveTo(273.73, 317.17, 271.25, 313.44, 273.57, 309.33);
        context.bezierCurveTo(273.43, 312.08, 272.65, 315.28, 274.92, 317.48);
        context.bezierCurveTo(277.19, 312.8, 276.37, 307.61, 276.55, 302.61);
        context.closePath();
        context.fillStyle = fillColor175;
        context.fill();


    }

    function drawPath203() {
        context.beginPath();
        context.moveTo(434.91, 311.73);
        context.bezierCurveTo(439, 311.35, 442.77, 309.57, 446.68, 308.43);
        context.bezierCurveTo(446.32, 310.43, 445.96, 312.43, 445.6, 314.44);
        context.bezierCurveTo(441.05, 317.31, 437.08, 321, 433.84, 325.27);
        context.bezierCurveTo(440.15, 325.83, 446.13, 323.23, 452.23, 322);
        context.bezierCurveTo(448.69, 326.48, 445.36, 331.12, 442.59, 336.12);
        context.bezierCurveTo(443.65, 336.35, 445.8, 336.79, 446.87, 337.01);
        context.bezierCurveTo(441.29, 341.67, 435.08, 335.19, 429.09, 337.55);
        context.bezierCurveTo(428.21, 337.79, 426.47, 338.25, 425.59, 338.49);
        context.bezierCurveTo(425.35, 338.13, 424.88, 337.43, 424.64, 337.07);
        context.bezierCurveTo(423.23, 336.64, 421.81, 336.28, 420.39, 336);
        context.bezierCurveTo(419.89, 335.2, 418.92, 333.6, 418.43, 332.8);
        context.bezierCurveTo(417.59, 332.89, 415.91, 333.07, 415.08, 333.16);
        context.bezierCurveTo(414.63, 331.65, 414.17, 330.16, 413.72, 328.68);
        context.bezierCurveTo(416.68, 327.03, 419.77, 325.63, 423.05, 324.73);
        context.bezierCurveTo(423.11, 323.67, 423.16, 322.6, 423.23, 321.55);
        context.bezierCurveTo(425.23, 321.57, 427.25, 321.6, 429.27, 321.67);
        context.bezierCurveTo(427.63, 320.57, 424.95, 320.4, 424.29, 318.27);
        context.bezierCurveTo(426.89, 314.92, 431.52, 314.12, 434.91, 311.73);
        context.closePath();
        context.fillStyle = fillColor195;
        context.fill();


    }

    function drawPath204() {
        context.beginPath();
        context.moveTo(147.83, 311.25);
        context.bezierCurveTo(151.52, 312.43, 152.56, 316.31, 153.29, 319.68);
        context.bezierCurveTo(150.76, 317.39, 148.81, 314.53, 147.83, 311.25);
        context.closePath();
        context.fillStyle = fillColor196;
        context.fill();


    }

    function drawPath205() {
        context.beginPath();
        context.moveTo(168.08, 311);
        context.bezierCurveTo(171.55, 311.52, 173.59, 315.83, 172.11, 318.96);
        context.bezierCurveTo(169.61, 318.55, 167.11, 318.09, 164.64, 317.57);
        context.bezierCurveTo(166.33, 316.03, 168.72, 316.72, 170.77, 316.56);
        context.bezierCurveTo(169.84, 314.72, 168.93, 312.87, 168.08, 311);
        context.closePath();
        context.fillStyle = fillColor197;
        context.fill();


    }

    function drawPath206() {
        context.beginPath();
        context.moveTo(216.2, 314.21);
        context.bezierCurveTo(216.81, 314.48, 218.03, 315.01, 218.64, 315.28);
        context.bezierCurveTo(219.15, 317.81, 220.93, 321.43, 217.29, 322.47);
        context.bezierCurveTo(216.55, 320.19, 215.77, 317.91, 215.04, 315.63);
        context.bezierCurveTo(215.33, 315.28, 215.91, 314.57, 216.2, 314.21);
        context.closePath();
        context.fillStyle = fillColor83;
        context.fill();


    }

    function drawPath207() {
        context.beginPath();
        context.moveTo(471.91, 324.6);
        context.bezierCurveTo(476.23, 319.93, 482.25, 317.47, 487.32, 313.73);
        context.lineTo(489.47, 313.37);
        context.bezierCurveTo(488.07, 314.76, 486.73, 316.2, 485.39, 317.63);
        context.bezierCurveTo(488.47, 317.87, 491.56, 318.13, 494.65, 318.43);
        context.bezierCurveTo(489.48, 322.52, 482.99, 325.33, 476.29, 323.95);
        context.bezierCurveTo(476.8, 324.95, 477.31, 325.96, 477.83, 326.97);
        context.bezierCurveTo(483.52, 326.48, 488.77, 323.25, 494.57, 323.97);
        context.bezierCurveTo(486.77, 332.36, 477.25, 339.27, 466.44, 343.19);
        context.bezierCurveTo(460.93, 345.09, 455.03, 344.75, 449.29, 344.76);
        context.bezierCurveTo(442.83, 344.68, 436.25, 344.53, 429.97, 342.87);
        context.bezierCurveTo(427.64, 342.55, 426.8, 340.15, 425.59, 338.49);
        context.bezierCurveTo(426.47, 338.25, 428.21, 337.79, 429.09, 337.55);
        context.bezierCurveTo(435.08, 335.19, 441.29, 341.67, 446.87, 337.01);
        context.bezierCurveTo(451.05, 334.6, 455.57, 332.89, 460.09, 331.21);
        context.bezierCurveTo(464.17, 329.32, 468.65, 327.83, 471.91, 324.6);
        context.closePath();
        context.fillStyle = fillColor198;
        context.fill();


    }

    function drawPath208() {
        context.beginPath();
        context.moveTo(129.01, 321.72);
        context.bezierCurveTo(129.8, 319.92, 130.56, 318.11, 131.37, 316.32);
        context.bezierCurveTo(133.27, 320.44, 135.99, 324.89, 134.27, 329.56);
        context.bezierCurveTo(132.64, 326.85, 130.87, 324.27, 129.01, 321.72);
        context.closePath();
        context.fillStyle = fillColor199;
        context.fill();


    }

    function drawPath209() {
        context.beginPath();
        context.moveTo(298.59, 318.55);
        context.bezierCurveTo(300.64, 324.24, 300.55, 330.8, 304.44, 335.72);
        context.bezierCurveTo(304.95, 337.97, 305.43, 340.23, 305.92, 342.49);
        context.bezierCurveTo(304.47, 343.27, 303.13, 344.37, 301.49, 344.69);
        context.bezierCurveTo(300.04, 343.99, 298.69, 343.12, 297.33, 342.28);
        context.bezierCurveTo(297.28, 338.79, 297.32, 335.29, 297.28, 331.81);
        context.bezierCurveTo(297.96, 331.83, 299.32, 331.87, 300, 331.88);
        context.bezierCurveTo(299.91, 331.35, 299.69, 330.28, 299.6, 329.75);
        context.bezierCurveTo(298.77, 329.4, 297.95, 329.05, 297.13, 328.71);
        context.bezierCurveTo(297.75, 328.09, 298.37, 327.49, 299.01, 326.89);
        context.bezierCurveTo(297.08, 324.39, 298.04, 321.33, 298.59, 318.55);
        context.closePath();
        context.fillStyle = fillColor200;
        context.fill();


    }

    function drawPath210() {
        context.beginPath();
        context.moveTo(108.25, 321.12);
        context.bezierCurveTo(110.17, 325.04, 113.32, 328.08, 116.51, 330.97);
        context.bezierCurveTo(118.32, 330.76, 120.13, 330.57, 121.96, 330.39);
        context.bezierCurveTo(122.64, 332.87, 120.76, 334.85, 119.67, 336.88);
        context.bezierCurveTo(120, 337.15, 120.64, 337.68, 120.97, 337.95);
        context.bezierCurveTo(121.03, 339.52, 121.08, 341.09, 121.11, 342.69);
        context.bezierCurveTo(120.51, 342.68, 119.31, 342.65, 118.72, 342.64);
        context.bezierCurveTo(117.43, 341.63, 116, 340.97, 114.44, 340.65);
        context.bezierCurveTo(112.19, 341.23, 114.99, 343.32, 115.92, 343.79);
        context.bezierCurveTo(117.76, 345.24, 119.49, 346.85, 121.24, 348.43);
        context.bezierCurveTo(122.49, 347.28, 123.76, 346.13, 125.03, 345);
        context.bezierCurveTo(126.25, 345.51, 127.48, 346.04, 128.72, 346.56);
        context.bezierCurveTo(131.72, 344.29, 134.83, 342.13, 138.19, 340.44);
        context.bezierCurveTo(138.31, 341, 138.56, 342.13, 138.68, 342.71);
        context.bezierCurveTo(133.57, 345.95, 128.85, 350.17, 122.8, 351.56);
        context.bezierCurveTo(118.71, 352.79, 114.43, 352.16, 110.28, 351.57);
        context.bezierCurveTo(108.97, 347.45, 104.01, 347, 100.63, 345.35);
        context.bezierCurveTo(101.25, 344.79, 102.52, 343.65, 103.15, 343.09);
        context.bezierCurveTo(103.2, 336.07, 103.6, 329.04, 104.48, 322.05);
        context.bezierCurveTo(105.07, 323.24, 105.65, 324.44, 106.24, 325.64);
        context.bezierCurveTo(106.91, 324.13, 107.59, 322.63, 108.25, 321.12);
        context.closePath();
        context.fillStyle = fillColor201;
        context.fill();


    }

    function drawPath211() {
        context.beginPath();
        context.moveTo(452.23, 322);
        context.bezierCurveTo(452.85, 321.53, 454.08, 320.61, 454.71, 320.15);
        context.bezierCurveTo(456.83, 320.84, 458.96, 321.53, 461.03, 322.41);
        context.bezierCurveTo(461.92, 323, 462.81, 323.6, 463.69, 324.23);
        context.bezierCurveTo(462.51, 326.56, 461.32, 328.89, 460.09, 331.21);
        context.bezierCurveTo(455.57, 332.89, 451.05, 334.6, 446.87, 337.01);
        context.bezierCurveTo(445.8, 336.79, 443.65, 336.35, 442.59, 336.12);
        context.bezierCurveTo(445.36, 331.12, 448.69, 326.48, 452.23, 322);
        context.closePath();
        context.fillStyle = fillColor202;
        context.fill();


    }

    function drawPath212() {
        context.beginPath();
        context.moveTo(125.05, 322.13);
        context.bezierCurveTo(126.05, 322.03, 128.03, 321.83, 129.01, 321.72);
        context.bezierCurveTo(130.87, 324.27, 132.64, 326.85, 134.27, 329.56);
        context.bezierCurveTo(134.56, 330.07, 134.85, 330.59, 135.16, 331.11);
        context.bezierCurveTo(135.56, 330.53, 136.36, 329.39, 136.77, 328.81);
        context.bezierCurveTo(138.05, 327.92, 139.35, 327.04, 140.63, 326.16);
        context.bezierCurveTo(141.63, 327.52, 142.61, 328.88, 143.61, 330.25);
        context.bezierCurveTo(142.95, 333.63, 142.31, 337.01, 141.45, 340.36);
        context.bezierCurveTo(141.89, 339.89, 142.77, 338.95, 143.23, 338.48);
        context.bezierCurveTo(144.69, 339.37, 146.16, 340.27, 147.63, 341.17);
        context.bezierCurveTo(147.13, 342.11, 146.64, 343.04, 146.12, 343.97);
        context.lineTo(145.17, 344.31);
        context.bezierCurveTo(146.19, 340.08, 140.08, 342.4, 144.19, 344.57);
        context.bezierCurveTo(142.47, 344.59, 140.73, 344.59, 139.01, 344.57);
        context.lineTo(138.68, 342.71);
        context.bezierCurveTo(138.56, 342.13, 138.31, 341, 138.19, 340.44);
        context.bezierCurveTo(134.83, 342.13, 131.72, 344.29, 128.72, 346.56);
        context.bezierCurveTo(127.48, 346.04, 126.25, 345.51, 125.03, 345);
        context.bezierCurveTo(123.76, 346.13, 122.49, 347.28, 121.24, 348.43);
        context.bezierCurveTo(119.49, 346.85, 117.76, 345.24, 115.92, 343.79);
        context.bezierCurveTo(116.61, 343.49, 118.01, 342.93, 118.72, 342.64);
        context.bezierCurveTo(119.31, 342.65, 120.51, 342.68, 121.11, 342.69);
        context.bezierCurveTo(121.08, 341.09, 121.03, 339.52, 120.97, 337.95);
        context.bezierCurveTo(123.96, 337.49, 126.92, 336.8, 129.88, 336.16);
        context.bezierCurveTo(127.75, 333.2, 124.85, 330.33, 125.2, 326.36);
        context.lineTo(125.12, 325.31);
        context.bezierCurveTo(125.11, 324.51, 125.08, 322.92, 125.05, 322.13);
        context.closePath();
        context.fillStyle = fillColor203;
        context.fill();


    }

    function drawPath213() {
        context.beginPath();
        context.moveTo(13.55, 324.91);
        context.bezierCurveTo(15.81, 320.49, 20.95, 323.84, 22.37, 327.17);
        context.bezierCurveTo(23.28, 329.55, 24.47, 331.83, 26.12, 333.79);
        context.bezierCurveTo(27.15, 336.11, 28.01, 338.49, 28.88, 340.89);
        context.bezierCurveTo(27.21, 341.32, 25.56, 341.73, 23.92, 342.19);
        context.bezierCurveTo(23.44, 338.96, 20.99, 335.99, 17.41, 336.91);
        context.bezierCurveTo(9.71, 337.51, 9.27, 347.39, 9.17, 353.29);
        context.bezierCurveTo(8.61, 351.49, 8.04, 349.71, 7.48, 347.93);
        context.bezierCurveTo(10.93, 340.64, 11.03, 332.41, 13.55, 324.91);
        context.closePath();
        context.fillStyle = fillColor204;
        context.fill();


    }

    function drawPath214() {
        context.beginPath();
        context.moveTo(143.61, 330.25);
        context.bezierCurveTo(144.15, 328.23, 144.79, 326.24, 145.37, 324.24);
        context.lineTo(145.4, 325.75);
        context.bezierCurveTo(145.49, 328.43, 144.84, 331.72, 147.89, 333.01);
        context.bezierCurveTo(150.56, 334.21, 150.39, 337.19, 150.52, 339.67);
        context.bezierCurveTo(150.55, 340.32, 150.6, 341.6, 150.63, 342.24);
        context.bezierCurveTo(151.19, 342.16, 152.33, 341.97, 152.91, 341.88);
        context.bezierCurveTo(152.81, 342.48, 152.63, 343.67, 152.53, 344.27);
        context.bezierCurveTo(154.47, 344.45, 156.39, 344.64, 158.32, 344.85);
        context.bezierCurveTo(160.04, 346.01, 161.45, 348.43, 163.73, 348.27);
        context.bezierCurveTo(165.89, 347.27, 167.71, 345.68, 169.6, 344.27);
        context.bezierCurveTo(170.11, 350.41, 164.11, 353.25, 159.63, 355.8);
        context.bezierCurveTo(157, 356.23, 154.36, 356.71, 151.77, 357.35);
        context.bezierCurveTo(153.69, 357.2, 155.61, 357.03, 157.55, 356.85);
        context.bezierCurveTo(158.08, 358.17, 158.61, 359.48, 159.15, 360.8);
        context.bezierCurveTo(158.39, 361.19, 156.87, 361.97, 156.11, 362.36);
        context.bezierCurveTo(152.81, 361.37, 149.31, 359.77, 145.95, 361.52);
        context.bezierCurveTo(140.97, 363.89, 133.91, 359.97, 130.68, 365.77);
        context.bezierCurveTo(122.64, 365.63, 114.35, 367.27, 106.49, 364.92);
        context.bezierCurveTo(108.81, 364.68, 111.12, 364.35, 113.43, 364.01);
        context.bezierCurveTo(109.96, 362.29, 106.35, 360.92, 102.68, 359.69);
        context.bezierCurveTo(100, 356.8, 97.59, 353.65, 95.33, 350.43);
        context.bezierCurveTo(96.27, 350.43, 98.12, 350.44, 99.04, 350.44);
        context.bezierCurveTo(99.23, 350.84, 99.57, 351.64, 99.76, 352.03);
        context.bezierCurveTo(100.81, 352.16, 101.87, 352.29, 102.93, 352.44);
        context.bezierCurveTo(105.97, 355.68, 108.35, 360.64, 113.33, 360.95);
        context.bezierCurveTo(115.44, 361.32, 117.59, 361.56, 119.72, 361.41);
        context.bezierCurveTo(121.39, 359.47, 120.69, 356.57, 121.04, 354.19);
        context.bezierCurveTo(127.79, 352.76, 133.99, 349.27, 139.01, 344.57);
        context.bezierCurveTo(140.73, 344.59, 142.47, 344.59, 144.19, 344.57);
        context.lineTo(145.17, 344.31);
        context.lineTo(146.12, 343.97);
        context.bezierCurveTo(146.64, 343.04, 147.13, 342.11, 147.63, 341.17);
        context.bezierCurveTo(146.16, 340.27, 144.69, 339.37, 143.23, 338.48);
        context.bezierCurveTo(142.77, 338.95, 141.89, 339.89, 141.45, 340.36);
        context.bezierCurveTo(142.31, 337.01, 142.95, 333.63, 143.61, 330.25);
        context.closePath();
        context.moveTo(137.99, 350.48);
        context.bezierCurveTo(138.28, 352.39, 143.15, 352.37, 143.41, 350.43);
        context.bezierCurveTo(141.89, 349.32, 139.49, 349.4, 137.99, 350.48);
        context.closePath();
        context.fillStyle = fillColor205;
        context.fill();


    }

    function drawPath215() {
        context.beginPath();
        context.moveTo(154.09, 325);
        context.bezierCurveTo(154.76, 327.8, 155.45, 330.6, 156.15, 333.4);
        context.bezierCurveTo(157.25, 333.31, 158.37, 333.24, 159.49, 333.15);
        context.bezierCurveTo(158.72, 334.51, 157.93, 335.85, 157.15, 337.21);
        context.bezierCurveTo(154.96, 338.07, 152.75, 338.89, 150.52, 339.67);
        context.bezierCurveTo(150.39, 337.19, 150.56, 334.21, 147.89, 333.01);
        context.bezierCurveTo(144.84, 331.72, 145.49, 328.43, 145.4, 325.75);
        context.bezierCurveTo(147.55, 327.55, 149.69, 329.37, 151.83, 331.2);
        context.bezierCurveTo(152.57, 329.13, 153.33, 327.07, 154.09, 325);
        context.closePath();
        context.fillStyle = fillColor206;
        context.fill();


    }

    function drawPath216() {
        context.beginPath();
        context.moveTo(65.37, 326.77);
        context.bezierCurveTo(70.13, 327.08, 74.04, 329.97, 78, 332.33);
        context.bezierCurveTo(73.13, 332.65, 67.99, 331.25, 65.37, 326.77);
        context.closePath();
        context.fillStyle = fillColor207;
        context.fill();


    }

    function drawPath217() {
        context.beginPath();
        context.moveTo(120.39, 325.91);
        context.bezierCurveTo(121.99, 326.05, 123.59, 326.21, 125.2, 326.36);
        context.bezierCurveTo(124.85, 330.33, 127.75, 333.2, 129.88, 336.16);
        context.bezierCurveTo(126.92, 336.8, 123.96, 337.49, 120.97, 337.95);
        context.bezierCurveTo(120.64, 337.68, 120, 337.15, 119.67, 336.88);
        context.bezierCurveTo(120.76, 334.85, 122.64, 332.87, 121.96, 330.39);
        context.bezierCurveTo(121.43, 328.89, 120.91, 327.4, 120.39, 325.91);
        context.closePath();
        context.fillStyle = fillColor208;
        context.fill();


    }

    function drawPath218() {
        context.beginPath();
        context.moveTo(22.37, 327.17);
        context.bezierCurveTo(24.25, 329.63, 26.28, 331.96, 28.29, 334.31);
        context.lineTo(26.12, 333.79);
        context.bezierCurveTo(24.47, 331.83, 23.28, 329.55, 22.37, 327.17);
        context.closePath();
        context.fillStyle = fillColor56;
        context.fill();


    }

    function drawPath219() {
        context.beginPath();
        context.moveTo(218.87, 327);
        context.bezierCurveTo(222.17, 334.23, 225.31, 341.56, 229.87, 348.13);
        context.bezierCurveTo(228.57, 349.12, 227.29, 350.12, 226.04, 351.15);
        context.bezierCurveTo(226.4, 350.45, 227.09, 349.07, 227.44, 348.37);
        context.bezierCurveTo(225.56, 340.87, 220.87, 334.48, 218.87, 327);
        context.closePath();
        context.fillStyle = fillColor175;
        context.fill();


    }

    function drawPath220() {
        context.beginPath();
        context.moveTo(243.05, 326.96);
        context.bezierCurveTo(245.28, 331.44, 246.44, 336.36, 248.76, 340.81);
        context.bezierCurveTo(253.36, 347.24, 256.71, 354.44, 261.23, 360.92);
        context.bezierCurveTo(257.47, 363.97, 257.03, 369.2, 255.19, 373.39);
        context.bezierCurveTo(254.41, 369.65, 255.71, 365.39, 253.29, 362.11);
        context.bezierCurveTo(247.35, 353.59, 240.07, 345.6, 237.04, 335.44);
        context.bezierCurveTo(238.25, 335.64, 239.47, 335.85, 240.69, 336.08);
        context.bezierCurveTo(240.35, 332.81, 241.45, 329.75, 243.05, 326.96);
        context.closePath();
        context.fillStyle = fillColor209;
        context.fill();


    }

    function drawPath221() {
        context.beginPath();
        context.moveTo(71.47, 332.68);
        context.bezierCurveTo(76.51, 333.21, 79.77, 337.15, 82.72, 340.83);
        context.bezierCurveTo(77.88, 340.92, 73.8, 336.57, 71.47, 332.68);
        context.closePath();
        context.fillStyle = fillColor210;
        context.fill();


    }

    function drawPath222() {
        context.beginPath();
        context.moveTo(93.09, 332.81);
        context.bezierCurveTo(96.12, 332.79, 100.29, 332, 101.85, 335.37);
        context.bezierCurveTo(98.63, 335.85, 95.56, 334.91, 93.09, 332.81);
        context.closePath();
        context.fillStyle = fillColor211;
        context.fill();


    }

    function drawPath223() {
        context.beginPath();
        context.moveTo(161.41, 337.88);
        context.bezierCurveTo(164.04, 336.15, 166.65, 334.37, 169.33, 332.73);
        context.bezierCurveTo(168.92, 335.17, 168.15, 337.55, 167.08, 339.77);
        context.bezierCurveTo(168.03, 341.19, 168.97, 342.59, 169.95, 344);
        context.lineTo(169.6, 344.27);
        context.bezierCurveTo(167.71, 345.68, 165.89, 347.27, 163.73, 348.27);
        context.bezierCurveTo(161.45, 348.43, 160.04, 346.01, 158.32, 344.85);
        context.bezierCurveTo(156.39, 344.64, 154.47, 344.45, 152.53, 344.27);
        context.bezierCurveTo(152.63, 343.67, 152.81, 342.48, 152.91, 341.88);
        context.bezierCurveTo(155.16, 340.31, 157.21, 338.47, 159.32, 336.72);
        context.bezierCurveTo(159.89, 336.4, 161.03, 335.76, 161.59, 335.44);
        context.bezierCurveTo(161.55, 336.04, 161.47, 337.27, 161.41, 337.88);
        context.closePath();
        context.fillStyle = fillColor212;
        context.fill();


    }

    function drawPath224() {
        context.beginPath();
        context.moveTo(26.12, 333.79);
        context.lineTo(28.29, 334.31);
        context.bezierCurveTo(32.43, 340.13, 36.61, 346.07, 42.69, 350.08);
        context.bezierCurveTo(40.6, 349.44, 38.49, 348.81, 36.39, 348.19);
        context.bezierCurveTo(33.61, 347.27, 30.65, 347.07, 27.87, 346.21);
        context.bezierCurveTo(26.4, 345.03, 25.2, 343.55, 23.92, 342.19);
        context.bezierCurveTo(25.56, 341.73, 27.21, 341.32, 28.88, 340.89);
        context.bezierCurveTo(28.01, 338.49, 27.15, 336.11, 26.12, 333.79);
        context.closePath();
        context.fillStyle = fillColor213;
        context.fill();


    }

    function drawPath225() {
        context.beginPath();
        context.moveTo(388.19, 346.16);
        context.bezierCurveTo(392.56, 340.57, 398.4, 336.41, 404.76, 333.35);
        context.bezierCurveTo(407.48, 333.68, 410.08, 334.61, 412.53, 335.81);
        context.bezierCurveTo(409.63, 336.07, 406.13, 335.31, 403.97, 337.8);
        context.bezierCurveTo(397.68, 343.53, 391.25, 349.31, 386.44, 356.4);
        context.bezierCurveTo(381.6, 363.13, 375.93, 369.21, 370.04, 375.01);
        context.bezierCurveTo(369.64, 373.23, 369.17, 371.45, 368.87, 369.65);
        context.bezierCurveTo(375.17, 361.72, 381.63, 353.89, 388.19, 346.16);
        context.closePath();
        context.fillStyle = fillColor214;
        context.fill();


    }

    function drawPath226() {
        context.beginPath();
        context.moveTo(254.95, 338.16);
        context.bezierCurveTo(255.09, 337.49, 255.4, 336.16, 255.56, 335.49);
        context.bezierCurveTo(257.51, 336.07, 259.97, 338.97, 256.72, 339.67);
        context.bezierCurveTo(256.28, 339.29, 255.39, 338.55, 254.95, 338.16);
        context.closePath();
        context.fillStyle = fillColor215;
        context.fill();


    }

    function drawPath227() {
        context.beginPath();
        context.moveTo(403.97, 337.8);
        context.bezierCurveTo(406.13, 335.31, 409.63, 336.07, 412.53, 335.81);
        context.bezierCurveTo(413.17, 337.81, 413.81, 339.87, 413.57, 342);
        context.bezierCurveTo(412.05, 346, 409.29, 349.37, 406.96, 352.91);
        context.bezierCurveTo(403.64, 357.91, 397.67, 360.87, 395.81, 366.85);
        context.bezierCurveTo(392.67, 371.13, 389.6, 375.52, 385.72, 379.19);
        context.bezierCurveTo(383.56, 379.03, 382.51, 380.05, 382.56, 382.24);
        context.bezierCurveTo(382.31, 382.47, 381.81, 382.91, 381.56, 383.13);
        context.bezierCurveTo(379.4, 383.23, 378.44, 384.35, 378.69, 386.51);
        context.bezierCurveTo(378.25, 387.04, 377.36, 388.09, 376.91, 388.61);
        context.bezierCurveTo(375.21, 389.88, 373.41, 391.03, 371.65, 392.2);
        context.bezierCurveTo(371.43, 386.75, 371.52, 381.21, 370.23, 375.88);
        context.lineTo(370.04, 375.01);
        context.bezierCurveTo(375.93, 369.21, 381.6, 363.13, 386.44, 356.4);
        context.bezierCurveTo(391.25, 349.31, 397.68, 343.53, 403.97, 337.8);
        context.closePath();
        context.fillStyle = fillColor216;
        context.fill();


    }

    function drawPath228() {
        context.beginPath();
        context.moveTo(9.17, 353.29);
        context.bezierCurveTo(9.27, 347.39, 9.71, 337.51, 17.41, 336.91);
        context.bezierCurveTo(20.99, 335.99, 23.44, 338.96, 23.92, 342.19);
        context.bezierCurveTo(23.08, 342.16, 21.43, 342.09, 20.6, 342.07);
        context.bezierCurveTo(22.56, 348.96, 26.55, 355.12, 28.07, 362.19);
        context.bezierCurveTo(26.47, 362.31, 24.87, 362.45, 23.28, 362.63);
        context.bezierCurveTo(22.27, 365.36, 21.33, 368.11, 20.29, 370.84);
        context.bezierCurveTo(20.24, 369.83, 20.12, 367.79, 20.05, 366.76);
        context.bezierCurveTo(18.32, 364.59, 16.51, 362.47, 14.72, 360.35);
        context.bezierCurveTo(14.53, 358.09, 13.92, 355.93, 13.09, 353.84);
        context.bezierCurveTo(13.37, 352.72, 13.67, 351.61, 13.96, 350.51);
        context.bezierCurveTo(13.76, 350.52, 13.33, 350.55, 13.12, 350.56);
        context.bezierCurveTo(12.79, 353.45, 12.2, 356.32, 10.89, 358.95);
        context.bezierCurveTo(10.32, 357.05, 9.72, 355.19, 9.17, 353.29);
        context.closePath();
        context.fillStyle = fillColor217;
        context.fill();


    }

    function drawPath229() {
        context.beginPath();
        context.moveTo(150.52, 339.67);
        context.bezierCurveTo(152.75, 338.89, 154.96, 338.07, 157.15, 337.21);
        context.lineTo(159.32, 336.72);
        context.bezierCurveTo(157.21, 338.47, 155.16, 340.31, 152.91, 341.88);
        context.bezierCurveTo(152.33, 341.97, 151.19, 342.16, 150.63, 342.24);
        context.bezierCurveTo(150.6, 341.6, 150.55, 340.32, 150.52, 339.67);
        context.closePath();
        context.fillStyle = fillColor218;
        context.fill();


    }

    function drawPath230() {
        context.beginPath();
        context.moveTo(250.84, 337.09);
        context.bezierCurveTo(252.21, 337.44, 253.57, 337.8, 254.95, 338.16);
        context.bezierCurveTo(254.89, 338.68, 254.79, 339.69, 254.73, 340.21);
        context.bezierCurveTo(255.57, 341.57, 256.49, 342.92, 257.41, 344.25);
        context.bezierCurveTo(261, 348.99, 262.44, 354.83, 264.76, 360.2);
        context.lineTo(263.08, 360.61);
        context.lineTo(261.23, 360.92);
        context.bezierCurveTo(256.71, 354.44, 253.36, 347.24, 248.76, 340.81);
        context.bezierCurveTo(249.45, 339.56, 250.15, 338.33, 250.84, 337.09);
        context.closePath();
        context.fillStyle = fillColor219;
        context.fill();


    }

    function drawPath231() {
        context.beginPath();
        context.moveTo(285.88, 337.24);
        context.bezierCurveTo(290.17, 338.13, 293.68, 341.07, 297.4, 343.24);
        context.bezierCurveTo(298.32, 345.4, 299.47, 347.45, 300.61, 349.52);
        context.bezierCurveTo(301.28, 349.49, 302.63, 349.45, 303.29, 349.43);
        context.bezierCurveTo(303.63, 348.84, 304.31, 347.65, 304.64, 347.05);
        context.bezierCurveTo(304.96, 349.09, 305.8, 349.63, 307.16, 348.65);
        context.bezierCurveTo(307.35, 349.4, 307.71, 350.91, 307.89, 351.65);
        context.bezierCurveTo(305.89, 352.35, 305.87, 353.12, 307.83, 353.96);
        context.bezierCurveTo(307.69, 354.32, 307.44, 355.03, 307.31, 355.37);
        context.bezierCurveTo(306.87, 355.72, 306.01, 356.39, 305.57, 356.72);
        context.bezierCurveTo(306.35, 358.11, 307.15, 359.51, 307.89, 360.93);
        context.bezierCurveTo(307.85, 365.13, 307.8, 369.36, 307.01, 373.51);
        context.bezierCurveTo(305.15, 382.4, 305.77, 391.65, 307.68, 400.48);
        context.bezierCurveTo(305.84, 411.95, 307.71, 423.48, 306.25, 434.96);
        context.bezierCurveTo(305.56, 433.67, 304.84, 432.4, 304.09, 431.15);
        context.bezierCurveTo(301.71, 427.77, 298.77, 424.65, 297.45, 420.65);
        context.bezierCurveTo(298.45, 413.72, 290.99, 408.49, 293.61, 401.59);
        context.bezierCurveTo(294.12, 400.95, 295.13, 399.68, 295.64, 399.04);
        context.bezierCurveTo(295.67, 398.37, 295.71, 397.03, 295.72, 396.35);
        context.bezierCurveTo(295.81, 395.15, 295.92, 393.95, 296.04, 392.76);
        context.lineTo(296.16, 391.33);
        context.bezierCurveTo(296.75, 391.53, 297.92, 391.95, 298.51, 392.15);
        context.bezierCurveTo(295.99, 385.93, 295.61, 379.12, 293.07, 372.93);
        context.bezierCurveTo(291.95, 369.91, 292.31, 366.61, 292.2, 363.45);
        context.bezierCurveTo(293.41, 365.31, 294.63, 367.17, 295.87, 369.03);
        context.bezierCurveTo(295.64, 365.27, 295.61, 361.24, 293.21, 358.09);
        context.bezierCurveTo(289.96, 353.64, 289.85, 345.77, 282.92, 345.36);
        context.bezierCurveTo(279.09, 347.55, 276.27, 351.03, 272.76, 353.64);
        context.bezierCurveTo(272.4, 358.76, 271.88, 363.89, 270.48, 368.84);
        context.bezierCurveTo(270.27, 368.45, 269.84, 367.68, 269.63, 367.29);
        context.bezierCurveTo(270.76, 363.08, 267.83, 359.56, 265.95, 356.09);
        context.bezierCurveTo(267.43, 353.48, 268.61, 350.72, 269.79, 347.97);
        context.bezierCurveTo(270.85, 347.89, 271.93, 347.81, 273.01, 347.75);
        context.bezierCurveTo(272.61, 346.4, 272.2, 345.07, 271.81, 343.75);
        context.bezierCurveTo(276.29, 341.28, 280.56, 337.47, 285.88, 337.24);
        context.closePath();
        context.moveTo(291.44, 349.35);
        context.bezierCurveTo(291.36, 354.04, 294.79, 357.4, 298.71, 359.33);
        context.bezierCurveTo(297.24, 355.52, 297.35, 348.16, 291.44, 349.35);
        context.closePath();
        context.moveTo(296.44, 371.12);
        context.bezierCurveTo(296.8, 373.28, 297.23, 375.43, 297.65, 377.59);
        context.bezierCurveTo(298.4, 377.85, 299.91, 378.4, 300.67, 378.67);
        context.bezierCurveTo(300.65, 379.13, 300.64, 380.08, 300.63, 380.55);
        context.bezierCurveTo(301.17, 380.55, 302.27, 380.56, 302.81, 380.56);
        context.bezierCurveTo(302.68, 378.11, 301.17, 376.37, 299.35, 374.95);
        context.bezierCurveTo(298.61, 373.45, 298.49, 371.25, 296.44, 371.12);
        context.closePath();
        context.fillStyle = fillColor220;
        context.fill();


    }

    function drawPath232() {
        context.beginPath();
        context.moveTo(343.29, 337.27);
        context.bezierCurveTo(344.41, 337.95, 345.53, 338.63, 346.68, 339.31);
        context.bezierCurveTo(346.84, 340.01, 347.16, 341.41, 347.32, 342.11);
        context.bezierCurveTo(353.36, 346.53, 361.08, 346.11, 367.91, 348.41);
        context.lineTo(368.16, 350.16);
        context.bezierCurveTo(367.51, 350.48, 366.19, 351.15, 365.53, 351.47);
        context.bezierCurveTo(360.17, 347.4, 353.15, 348.59, 347.29, 350.81);
        context.bezierCurveTo(346.35, 348.76, 345.4, 346.72, 344.45, 344.67);
        context.bezierCurveTo(343.63, 346.25, 342.8, 347.84, 341.97, 349.44);
        context.bezierCurveTo(340.12, 349.92, 338.25, 350.41, 336.41, 350.92);
        context.bezierCurveTo(336.09, 351.8, 335.79, 352.69, 335.48, 353.59);
        context.bezierCurveTo(334.89, 351.43, 334.31, 349.28, 333.73, 347.13);
        context.bezierCurveTo(333.61, 346.52, 333.37, 345.28, 333.25, 344.65);
        context.bezierCurveTo(334.49, 344.93, 335.72, 345.23, 336.97, 345.52);
        context.bezierCurveTo(339.01, 342.71, 341.12, 339.96, 343.29, 337.27);
        context.closePath();
        context.fillStyle = fillColor221;
        context.fill();


    }

    function drawPath233() {
        context.beginPath();
        context.moveTo(254.95, 338.16);
        context.bezierCurveTo(255.39, 338.55, 256.28, 339.29, 256.72, 339.67);
        context.bezierCurveTo(256.23, 339.8, 255.23, 340.07, 254.73, 340.21);
        context.bezierCurveTo(254.79, 339.69, 254.89, 338.68, 254.95, 338.16);
        context.closePath();
        context.fillStyle = fillColor222;
        context.fill();


    }

    function drawPath234() {
        context.beginPath();
        context.moveTo(307.83, 341.32);
        context.bezierCurveTo(309.17, 340.53, 310.55, 339.76, 311.92, 339.01);
        context.bezierCurveTo(311.87, 339.64, 311.76, 340.89, 311.69, 341.52);
        context.bezierCurveTo(309.87, 342.53, 308.05, 343.59, 306.31, 344.77);
        context.bezierCurveTo(305.89, 345.35, 305.05, 346.48, 304.64, 347.05);
        context.bezierCurveTo(304.31, 347.65, 303.63, 348.84, 303.29, 349.43);
        context.bezierCurveTo(302.63, 349.45, 301.28, 349.49, 300.61, 349.52);
        context.bezierCurveTo(299.47, 347.45, 298.32, 345.4, 297.4, 343.24);
        context.lineTo(297.33, 342.28);
        context.bezierCurveTo(298.69, 343.12, 300.04, 343.99, 301.49, 344.69);
        context.bezierCurveTo(303.13, 344.37, 304.47, 343.27, 305.92, 342.49);
        context.bezierCurveTo(306.39, 342.2, 307.35, 341.61, 307.83, 341.32);
        context.closePath();
        context.fillStyle = fillColor223;
        context.fill();


    }

    function drawPath235() {
        context.beginPath();
        context.moveTo(91.77, 341.61);
        context.bezierCurveTo(95.67, 340.83, 99.64, 341.11, 103.15, 343.09);
        context.bezierCurveTo(102.52, 343.65, 101.25, 344.79, 100.63, 345.35);
        context.bezierCurveTo(104.01, 347, 108.97, 347.45, 110.28, 351.57);
        context.bezierCurveTo(110.53, 352.15, 111.04, 353.29, 111.31, 353.87);
        context.bezierCurveTo(114.53, 354.19, 117.79, 354.27, 121.04, 354.19);
        context.bezierCurveTo(120.69, 356.57, 121.39, 359.47, 119.72, 361.41);
        context.bezierCurveTo(117.59, 361.56, 115.44, 361.32, 113.33, 360.95);
        context.bezierCurveTo(108.35, 360.64, 105.97, 355.68, 102.93, 352.44);
        context.bezierCurveTo(101.87, 352.29, 100.81, 352.16, 99.76, 352.03);
        context.bezierCurveTo(99.57, 351.64, 99.23, 350.84, 99.04, 350.44);
        context.bezierCurveTo(98.12, 350.44, 96.27, 350.43, 95.33, 350.43);
        context.bezierCurveTo(93.72, 347.67, 92.72, 344.63, 91.77, 341.61);
        context.closePath();
        context.fillStyle = fillColor224;
        context.fill();


    }

    function drawPath236() {
        context.beginPath();
        context.moveTo(115.92, 343.79);
        context.bezierCurveTo(114.99, 343.32, 112.19, 341.23, 114.44, 340.65);
        context.bezierCurveTo(116, 340.97, 117.43, 341.63, 118.72, 342.64);
        context.bezierCurveTo(118.01, 342.93, 116.61, 343.49, 115.92, 343.79);
        context.closePath();
        context.fillStyle = fillColor225;
        context.fill();


    }

    function drawPath237() {
        context.beginPath();
        context.moveTo(20.6, 342.07);
        context.bezierCurveTo(21.43, 342.09, 23.08, 342.16, 23.92, 342.19);
        context.bezierCurveTo(25.2, 343.55, 26.4, 345.03, 27.87, 346.21);
        context.bezierCurveTo(30.65, 347.07, 33.61, 347.27, 36.39, 348.19);
        context.bezierCurveTo(34.12, 355.25, 38.11, 361.99, 38.25, 369.04);
        context.bezierCurveTo(36.47, 364.96, 32.63, 362.05, 28.07, 362.19);
        context.bezierCurveTo(26.55, 355.12, 22.56, 348.96, 20.6, 342.07);
        context.closePath();
        context.fillStyle = fillColor226;
        context.fill();


    }

    function drawPath238() {
        context.beginPath();
        context.moveTo(144.19, 344.57);
        context.bezierCurveTo(140.08, 342.4, 146.19, 340.08, 145.17, 344.31);
        context.lineTo(144.19, 344.57);
        context.closePath();
        context.fillStyle = fillColor227;
        context.fill();


    }

    function drawPath239() {
        context.beginPath();
        context.moveTo(306.31, 344.77);
        context.bezierCurveTo(308.05, 343.59, 309.87, 342.53, 311.69, 341.52);
        context.bezierCurveTo(319.51, 340.63, 327.64, 341.79, 333.73, 347.13);
        context.bezierCurveTo(334.31, 349.28, 334.89, 351.43, 335.48, 353.59);
        context.bezierCurveTo(335.79, 352.69, 336.09, 351.8, 336.41, 350.92);
        context.bezierCurveTo(337.75, 353.75, 339.57, 356.41, 343, 356.71);
        context.bezierCurveTo(343.55, 355.07, 344.11, 353.44, 344.67, 351.81);
        context.bezierCurveTo(344.99, 352.33, 345.64, 353.35, 345.96, 353.87);
        context.bezierCurveTo(349.41, 353.8, 352.64, 352.52, 355.95, 351.71);
        context.bezierCurveTo(359.28, 350.77, 362.49, 352.37, 365.4, 353.81);
        context.bezierCurveTo(366.12, 353.55, 367.56, 353.01, 368.28, 352.75);
        context.bezierCurveTo(368.24, 358.39, 367.83, 364.08, 368.87, 369.65);
        context.bezierCurveTo(369.17, 371.45, 369.64, 373.23, 370.04, 375.01);
        context.lineTo(370.23, 375.88);
        context.bezierCurveTo(369.2, 376.75, 368.16, 377.61, 367.15, 378.49);
        context.lineTo(368.79, 379.31);
        context.bezierCurveTo(368.25, 379.92, 367.2, 381.15, 366.67, 381.76);
        context.bezierCurveTo(365.17, 381.56, 363.61, 381.35, 362.15, 381.79);
        context.bezierCurveTo(362.25, 381.35, 362.47, 380.45, 362.57, 380.01);
        context.bezierCurveTo(366.09, 374.35, 364.95, 367.45, 365.09, 361.15);
        context.bezierCurveTo(361.59, 361.45, 357.19, 360.43, 354.55, 363.36);
        context.bezierCurveTo(353.21, 364.47, 354.71, 366.04, 355.09, 367.21);
        context.bezierCurveTo(353.59, 369.83, 351.99, 372.39, 350.39, 374.95);
        context.bezierCurveTo(349.56, 372.92, 348.73, 370.88, 347.92, 368.85);
        context.bezierCurveTo(345.88, 370.24, 342.84, 371.15, 342.48, 373.97);
        context.bezierCurveTo(342.32, 376.72, 343.63, 379.27, 344.53, 381.81);
        context.bezierCurveTo(344.01, 381.96, 343, 382.28, 342.48, 382.44);
        context.bezierCurveTo(338.6, 393.11, 338.93, 404.51, 337.6, 415.63);
        context.bezierCurveTo(336.52, 419.03, 334.77, 422.17, 332.33, 424.8);
        context.bezierCurveTo(333.13, 426.13, 333.95, 427.47, 334.77, 428.8);
        context.bezierCurveTo(333.25, 430.16, 331.75, 431.52, 330.25, 432.91);
        context.bezierCurveTo(330.77, 433.17, 331.8, 433.71, 332.31, 433.97);
        context.bezierCurveTo(331.65, 434.37, 330.35, 435.17, 329.69, 435.57);
        context.bezierCurveTo(328.63, 438.6, 326.99, 441.39, 324.88, 443.81);
        context.bezierCurveTo(325.97, 445.44, 327.05, 447.09, 328.27, 448.65);
        context.lineTo(329.52, 449.8);
        context.bezierCurveTo(322.36, 450.25, 315.37, 452.6, 308.2, 452.35);
        context.bezierCurveTo(307.24, 451.85, 306.29, 451.37, 305.33, 450.88);
        context.bezierCurveTo(305.77, 450.32, 306.65, 449.2, 307.09, 448.64);
        context.bezierCurveTo(305.91, 447.17, 304.68, 445.76, 303.45, 444.35);
        context.bezierCurveTo(304.09, 443.57, 304.75, 442.81, 305.4, 442.05);
        context.bezierCurveTo(304.2, 440.17, 302.69, 438.45, 301.93, 436.35);
        context.bezierCurveTo(302.03, 434.43, 303.36, 432.85, 304.09, 431.15);
        context.bezierCurveTo(304.84, 432.4, 305.56, 433.67, 306.25, 434.96);
        context.bezierCurveTo(307.71, 423.48, 305.84, 411.95, 307.68, 400.48);
        context.lineTo(309.19, 401.13);
        context.bezierCurveTo(310.29, 406.44, 310.09, 411.89, 310.99, 417.24);
        context.bezierCurveTo(312.33, 425.28, 310.55, 433.44, 311.64, 441.52);
        context.bezierCurveTo(313.44, 442.04, 315.25, 442.56, 317.07, 443.08);
        context.bezierCurveTo(318.29, 440.89, 319.99, 439.03, 321.85, 437.36);
        context.bezierCurveTo(320.13, 436.95, 318.43, 436.53, 316.72, 436.13);
        context.bezierCurveTo(319.36, 433.48, 322.2, 430.4, 322, 426.36);
        context.bezierCurveTo(321.84, 418.05, 321.72, 409.75, 321.67, 401.43);
        context.bezierCurveTo(322.48, 395.04, 324.41, 388.88, 326.45, 382.8);
        context.bezierCurveTo(328.72, 376.99, 325.95, 371, 325.72, 365.09);
        context.bezierCurveTo(325.56, 360.11, 323.33, 355.24, 319.57, 351.95);
        context.bezierCurveTo(317.19, 350.92, 314.65, 351.8, 312.27, 352.32);
        context.bezierCurveTo(313.17, 354.76, 314.07, 357.21, 314.91, 359.69);
        context.bezierCurveTo(312.09, 360.12, 310.89, 357.77, 309.67, 355.77);
        context.bezierCurveTo(309.05, 357.49, 308.44, 359.19, 307.89, 360.93);
        context.bezierCurveTo(307.15, 359.51, 306.35, 358.11, 305.57, 356.72);
        context.bezierCurveTo(306.01, 356.39, 306.87, 355.72, 307.31, 355.37);
        context.bezierCurveTo(307.44, 355.03, 307.69, 354.32, 307.83, 353.96);
        context.bezierCurveTo(307.84, 353.39, 307.88, 352.23, 307.89, 351.65);
        context.bezierCurveTo(307.71, 350.91, 307.35, 349.4, 307.16, 348.65);
        context.bezierCurveTo(306.95, 347.68, 306.52, 345.75, 306.31, 344.77);
        context.closePath();
        context.moveTo(330.33, 360.55);
        context.bezierCurveTo(330.95, 366, 331.99, 371.4, 333.49, 376.68);
        context.bezierCurveTo(335.37, 375.92, 337.36, 375.17, 338.55, 373.43);
        context.bezierCurveTo(337.72, 373.15, 336.07, 372.56, 335.24, 372.27);
        context.bezierCurveTo(335.56, 371.91, 336.2, 371.19, 336.52, 370.83);
        context.bezierCurveTo(335.12, 365.88, 334.39, 360.71, 331.36, 356.39);
        context.bezierCurveTo(330.45, 357.65, 330.12, 359.04, 330.33, 360.55);
        context.closePath();
        context.moveTo(353.09, 359.09);
        context.bezierCurveTo(355.53, 359.15, 357.99, 359.12, 360.44, 359.03);
        context.bezierCurveTo(358.51, 356.01, 354.73, 355.56, 353.09, 359.09);
        context.closePath();
        context.fillStyle = fillColor228;
        context.fill();


    }

    function drawPath240() {
        context.beginPath();
        context.moveTo(122.8, 351.56);
        context.bezierCurveTo(128.85, 350.17, 133.57, 345.95, 138.68, 342.71);
        context.lineTo(139.01, 344.57);
        context.bezierCurveTo(133.99, 349.27, 127.79, 352.76, 121.04, 354.19);
        context.bezierCurveTo(117.79, 354.27, 114.53, 354.19, 111.31, 353.87);
        context.bezierCurveTo(111.04, 353.29, 110.53, 352.15, 110.28, 351.57);
        context.bezierCurveTo(114.43, 352.16, 118.71, 352.79, 122.8, 351.56);
        context.closePath();
        context.fillStyle = fillColor229;
        context.fill();


    }

    function drawPath241() {
        context.beginPath();
        context.moveTo(257.41, 344.25);
        context.bezierCurveTo(257.71, 344.23, 258.28, 344.17, 258.56, 344.13);
        context.bezierCurveTo(261.13, 348.84, 262.79, 353.95, 264.92, 358.85);
        context.bezierCurveTo(266.15, 361.84, 267.87, 364.59, 269.63, 367.29);
        context.bezierCurveTo(269.84, 367.68, 270.27, 368.45, 270.48, 368.84);
        context.lineTo(270.92, 369.65);
        context.bezierCurveTo(268.67, 366.64, 266.39, 363.6, 264.76, 360.2);
        context.bezierCurveTo(262.44, 354.83, 261, 348.99, 257.41, 344.25);
        context.closePath();
        context.fillStyle = fillColor148;
        context.fill();


    }

    function drawPath242() {
        context.beginPath();
        context.moveTo(258.56, 344.13);
        context.lineTo(259.64, 344.01);
        context.bezierCurveTo(261.52, 348.64, 264.37, 353.01, 264.83, 358.11);
        context.lineTo(264.92, 358.85);
        context.bezierCurveTo(262.79, 353.95, 261.13, 348.84, 258.56, 344.13);
        context.closePath();
        context.fillStyle = fillColor56;
        context.fill();


    }

    function drawPath243() {
        context.beginPath();
        context.moveTo(304.64, 347.05);
        context.bezierCurveTo(305.05, 346.48, 305.89, 345.35, 306.31, 344.77);
        context.bezierCurveTo(306.52, 345.75, 306.95, 347.68, 307.16, 348.65);
        context.bezierCurveTo(305.8, 349.63, 304.96, 349.09, 304.64, 347.05);
        context.closePath();
        context.fillStyle = fillColor230;
        context.fill();


    }

    function drawPath244() {
        context.beginPath();
        context.moveTo(341.97, 349.44);
        context.bezierCurveTo(342.8, 347.84, 343.63, 346.25, 344.45, 344.67);
        context.bezierCurveTo(345.4, 346.72, 346.35, 348.76, 347.29, 350.81);
        context.bezierCurveTo(353.15, 348.59, 360.17, 347.4, 365.53, 351.47);
        context.bezierCurveTo(366.19, 351.15, 367.51, 350.48, 368.16, 350.16);
        context.lineTo(368.35, 351.65);
        context.lineTo(368.28, 352.75);
        context.bezierCurveTo(367.56, 353.01, 366.12, 353.55, 365.4, 353.81);
        context.bezierCurveTo(362.49, 352.37, 359.28, 350.77, 355.95, 351.71);
        context.bezierCurveTo(352.64, 352.52, 349.41, 353.8, 345.96, 353.87);
        context.bezierCurveTo(345.64, 353.35, 344.99, 352.33, 344.67, 351.81);
        context.bezierCurveTo(344.11, 353.44, 343.55, 355.07, 343, 356.71);
        context.bezierCurveTo(339.57, 356.41, 337.75, 353.75, 336.41, 350.92);
        context.bezierCurveTo(338.25, 350.41, 340.12, 349.92, 341.97, 349.44);
        context.closePath();
        context.fillStyle = fillColor231;
        context.fill();


    }

    function drawPath245() {
        context.beginPath();
        context.moveTo(272.76, 353.64);
        context.bezierCurveTo(276.27, 351.03, 279.09, 347.55, 282.92, 345.36);
        context.bezierCurveTo(282.05, 347.12, 281.17, 348.89, 280.27, 350.64);
        context.bezierCurveTo(281.49, 350.53, 282.73, 350.44, 283.97, 350.35);
        context.bezierCurveTo(283.99, 351.73, 284.01, 353.13, 284.03, 354.53);
        context.bezierCurveTo(281.91, 355.25, 279.43, 355.48, 277.67, 356.93);
        context.bezierCurveTo(275.43, 361.04, 275.51, 366.13, 277.45, 370.35);
        context.bezierCurveTo(277.12, 374.04, 275.67, 378.09, 277.63, 381.59);
        context.bezierCurveTo(279.56, 381.99, 281.55, 381.72, 283.51, 381.64);
        context.bezierCurveTo(286.84, 383.11, 290.28, 384.35, 293.72, 385.53);
        context.bezierCurveTo(292.91, 385.53, 291.25, 385.52, 290.44, 385.51);
        context.bezierCurveTo(287.8, 385.52, 285.17, 385.33, 282.55, 385.39);
        context.bezierCurveTo(281.69, 385.63, 279.97, 386.11, 279.12, 386.35);
        context.bezierCurveTo(279.69, 387.63, 280.27, 388.92, 280.84, 390.23);
        context.bezierCurveTo(275.13, 387.01, 270.15, 382.65, 264.13, 379.99);
        context.bezierCurveTo(263.79, 379.6, 263.11, 378.84, 262.77, 378.45);
        context.bezierCurveTo(260.28, 377.59, 257.71, 376.99, 255.16, 376.37);
        context.bezierCurveTo(255.17, 375.68, 255.2, 374.31, 255.2, 373.61);
        context.bezierCurveTo(259.99, 374.56, 264.73, 375.79, 269.29, 377.53);
        context.bezierCurveTo(268.81, 375.61, 268.35, 373.71, 267.87, 371.8);
        context.bezierCurveTo(269.64, 373.19, 271.48, 374.51, 273.39, 375.72);
        context.bezierCurveTo(272.73, 373.63, 272.01, 371.56, 270.92, 369.65);
        context.lineTo(270.48, 368.84);
        context.bezierCurveTo(271.88, 363.89, 272.4, 358.76, 272.76, 353.64);
        context.closePath();
        context.fillStyle = fillColor232;
        context.fill();


    }

    function drawPath246() {
        context.beginPath();
        context.moveTo(282.92, 345.36);
        context.bezierCurveTo(289.85, 345.77, 289.96, 353.64, 293.21, 358.09);
        context.bezierCurveTo(295.61, 361.24, 295.64, 365.27, 295.87, 369.03);
        context.bezierCurveTo(294.63, 367.17, 293.41, 365.31, 292.2, 363.45);
        context.bezierCurveTo(292.31, 366.61, 291.95, 369.91, 293.07, 372.93);
        context.bezierCurveTo(295.61, 379.12, 295.99, 385.93, 298.51, 392.15);
        context.bezierCurveTo(297.92, 391.95, 296.75, 391.53, 296.16, 391.33);
        context.bezierCurveTo(295.49, 389.33, 294.68, 387.4, 293.72, 385.53);
        context.bezierCurveTo(290.28, 384.35, 286.84, 383.11, 283.51, 381.64);
        context.bezierCurveTo(285.81, 381.47, 288.12, 381.35, 290.44, 381.25);
        context.bezierCurveTo(290.81, 380.96, 291.57, 380.39, 291.95, 380.09);
        context.bezierCurveTo(288.53, 378.93, 284.99, 378.29, 281.39, 378.47);
        context.bezierCurveTo(280.33, 373.73, 280.01, 368.85, 278.64, 364.2);
        context.bezierCurveTo(278.17, 366.23, 277.83, 368.28, 277.45, 370.35);
        context.bezierCurveTo(275.51, 366.13, 275.43, 361.04, 277.67, 356.93);
        context.bezierCurveTo(279.43, 355.48, 281.91, 355.25, 284.03, 354.53);
        context.bezierCurveTo(284.01, 353.13, 283.99, 351.73, 283.97, 350.35);
        context.bezierCurveTo(282.73, 350.44, 281.49, 350.53, 280.27, 350.64);
        context.bezierCurveTo(281.17, 348.89, 282.05, 347.12, 282.92, 345.36);
        context.closePath();
        context.fillStyle = fillColor233;
        context.fill();


    }

    function drawPath247() {
        context.beginPath();
        context.moveTo(38.25, 369.04);
        context.bezierCurveTo(38.11, 361.99, 34.12, 355.25, 36.39, 348.19);
        context.bezierCurveTo(38.49, 348.81, 40.6, 349.44, 42.69, 350.08);
        context.bezierCurveTo(44.24, 351.16, 45.75, 352.29, 47.2, 353.49);
        context.bezierCurveTo(49.73, 358.24, 53.33, 362.27, 56.13, 366.83);
        context.bezierCurveTo(57.73, 369.48, 59.33, 372.35, 62.04, 374.01);
        context.lineTo(63.31, 374.6);
        context.bezierCurveTo(63.92, 374.99, 64.52, 375.37, 65.13, 375.8);
        context.bezierCurveTo(65.31, 377.09, 65.36, 378.57, 66.44, 379.52);
        context.bezierCurveTo(70.87, 384.61, 74.8, 390.09, 78.89, 395.45);
        context.bezierCurveTo(79.15, 396.28, 79.67, 397.96, 79.92, 398.79);
        context.bezierCurveTo(74.01, 396.77, 68.23, 393.29, 61.73, 394.59);
        context.bezierCurveTo(62.61, 394.4, 64.37, 394.03, 65.25, 393.84);
        context.bezierCurveTo(63.56, 390.33, 62.25, 386.57, 59.95, 383.4);
        context.bezierCurveTo(55.35, 380.08, 49.87, 377.95, 46.03, 373.6);
        context.bezierCurveTo(48.2, 370.07, 44.92, 367.89, 42.07, 366.52);
        context.bezierCurveTo(42.67, 368.03, 43.27, 369.52, 43.88, 371.03);
        context.bezierCurveTo(42.28, 371.12, 40.67, 371.2, 39.07, 371.24);
        context.lineTo(38.88, 371.24);
        context.bezierCurveTo(38.72, 370.69, 38.41, 369.6, 38.25, 369.04);
        context.closePath();
        context.fillStyle = fillColor234;
        context.fill();


    }

    function drawPath248() {
        context.beginPath();
        context.moveTo(229.87, 348.13);
        context.bezierCurveTo(238.31, 358.45, 243.16, 371.33, 253.03, 380.55);
        context.bezierCurveTo(250.28, 385.01, 248.69, 390.15, 249.8, 395.41);
        context.bezierCurveTo(248.25, 394.6, 246.71, 393.81, 245.17, 393.03);
        context.bezierCurveTo(240.39, 398.85, 235.97, 406.96, 239.51, 414.49);
        context.bezierCurveTo(238.91, 414.55, 237.69, 414.64, 237.09, 414.69);
        context.bezierCurveTo(234.91, 424.39, 233.92, 434.28, 232.16, 444.05);
        context.bezierCurveTo(230.83, 444.49, 229.45, 444.75, 228.13, 445.2);
        context.bezierCurveTo(227.43, 443.71, 226.72, 442.24, 226.01, 440.77);
        context.bezierCurveTo(225.32, 441.19, 223.96, 442, 223.27, 442.41);
        context.bezierCurveTo(222.69, 445.85, 223.19, 449.31, 224.68, 452.47);
        context.bezierCurveTo(222.56, 453.03, 219.2, 454.73, 217.77, 452.2);
        context.bezierCurveTo(216.6, 445.29, 217.15, 438.23, 217, 431.25);
        context.bezierCurveTo(215.44, 431.49, 213.89, 431.75, 212.35, 431.99);
        context.bezierCurveTo(211.55, 432.09, 209.96, 432.32, 209.17, 432.43);
        context.bezierCurveTo(207.09, 430.63, 204.52, 428.51, 204.83, 425.45);
        context.bezierCurveTo(205.23, 419.77, 205.97, 414.12, 205.73, 408.43);
        context.bezierCurveTo(206.25, 408.17, 207.31, 407.68, 207.84, 407.44);
        context.bezierCurveTo(207.44, 404.69, 206, 401.77, 207.29, 399.08);
        context.bezierCurveTo(208.84, 395.03, 213.23, 390.88, 209.65, 386.6);
        context.bezierCurveTo(213.47, 374.08, 219.87, 362.63, 226.04, 351.15);
        context.bezierCurveTo(227.29, 350.12, 228.57, 349.12, 229.87, 348.13);
        context.closePath();
        context.fillStyle = fillColor235;
        context.fill();


    }

    function drawPath249() {
        context.beginPath();
        context.moveTo(13.12, 350.56);
        context.bezierCurveTo(13.33, 350.55, 13.76, 350.52, 13.96, 350.51);
        context.bezierCurveTo(13.67, 351.61, 13.37, 352.72, 13.09, 353.84);
        context.bezierCurveTo(13.92, 355.93, 14.53, 358.09, 14.72, 360.35);
        context.bezierCurveTo(16.51, 362.47, 18.32, 364.59, 20.05, 366.76);
        context.bezierCurveTo(20.12, 367.79, 20.24, 369.83, 20.29, 370.84);
        context.bezierCurveTo(22.27, 376.11, 24.96, 381.03, 27.69, 385.92);
        context.lineTo(28.11, 386.8);
        context.bezierCurveTo(29.31, 391.25, 29.43, 395.95, 30.83, 400.35);
        context.bezierCurveTo(32.36, 403.91, 34.48, 407.17, 35.89, 410.79);
        context.lineTo(34.33, 412.37);
        context.bezierCurveTo(33.13, 411.12, 31.96, 409.84, 30.79, 408.56);
        context.bezierCurveTo(29.36, 406.11, 28.12, 403.55, 26.85, 401.01);
        context.bezierCurveTo(22.96, 392.89, 19.05, 384.75, 16.69, 376.03);
        context.bezierCurveTo(18.23, 376.99, 19.88, 377.77, 21.36, 378.83);
        context.bezierCurveTo(20.95, 378.29, 20.11, 377.23, 19.68, 376.69);
        context.bezierCurveTo(20.32, 371.88, 18.77, 367.2, 15.87, 363.39);
        context.bezierCurveTo(15.41, 366.31, 14.45, 369.48, 16.08, 372.25);
        context.bezierCurveTo(16.08, 372.92, 16.08, 374.27, 16.09, 374.95);
        context.lineTo(16.07, 375.44);
        context.bezierCurveTo(12.52, 370.72, 12.97, 364.32, 10.89, 358.95);
        context.bezierCurveTo(12.2, 356.32, 12.79, 353.45, 13.12, 350.56);
        context.closePath();
        context.moveTo(22.04, 381.04);
        context.bezierCurveTo(24.27, 385.21, 27.37, 389.57, 26.16, 394.59);
        context.bezierCurveTo(30.51, 395.61, 27.72, 389.2, 25.73, 387.92);
        context.lineTo(27.75, 386.6);
        context.bezierCurveTo(25.89, 384.96, 25.32, 380.04, 22.04, 381.04);
        context.closePath();
        context.fillStyle = fillColor236;
        context.fill();


    }

    function drawPath250() {
        context.beginPath();
        context.moveTo(137.99, 350.48);
        context.bezierCurveTo(139.49, 349.4, 141.89, 349.32, 143.41, 350.43);
        context.bezierCurveTo(143.15, 352.37, 138.28, 352.39, 137.99, 350.48);
        context.closePath();
        context.fillStyle = fillColor237;
        context.fill();


    }

    function drawPath251() {
        context.beginPath();
        context.moveTo(291.44, 349.35);
        context.bezierCurveTo(297.35, 348.16, 297.24, 355.52, 298.71, 359.33);
        context.bezierCurveTo(294.79, 357.4, 291.36, 354.04, 291.44, 349.35);
        context.closePath();
        context.fillStyle = fillColor238;
        context.fill();


    }

    function drawPath252() {
        context.beginPath();
        context.moveTo(532.51, 355.99);
        context.bezierCurveTo(538.8, 352.69, 545.59, 350.4, 552.56, 349.03);
        context.bezierCurveTo(553.67, 351, 554.95, 352.96, 555.29, 355.27);
        context.bezierCurveTo(554.51, 359.25, 550.77, 361.25, 547.61, 363.15);
        context.bezierCurveTo(543.55, 365.47, 540.52, 369.09, 537.33, 372.41);
        context.bezierCurveTo(537.65, 369.96, 538.01, 367.52, 538.36, 365.07);
        context.bezierCurveTo(535.67, 365.59, 532.96, 366.09, 530.32, 366.79);
        context.bezierCurveTo(530.2, 365.17, 530.08, 363.55, 529.97, 361.95);
        context.bezierCurveTo(522.89, 361.97, 515.88, 363.51, 508.79, 363.07);
        context.bezierCurveTo(516.81, 361.21, 525.17, 359.99, 532.51, 355.99);
        context.closePath();
        context.fillStyle = fillColor239;
        context.fill();


    }

    function drawPath253() {
        context.beginPath();
        context.moveTo(307.83, 353.96);
        context.bezierCurveTo(305.87, 353.12, 305.89, 352.35, 307.89, 351.65);
        context.bezierCurveTo(307.88, 352.23, 307.84, 353.39, 307.83, 353.96);
        context.closePath();
        context.fillStyle = fillColor240;
        context.fill();


    }

    function drawPath254() {
        context.beginPath();
        context.moveTo(312.27, 352.32);
        context.bezierCurveTo(314.65, 351.8, 317.19, 350.92, 319.57, 351.95);
        context.bezierCurveTo(323.33, 355.24, 325.56, 360.11, 325.72, 365.09);
        context.bezierCurveTo(325.95, 371, 328.72, 376.99, 326.45, 382.8);
        context.bezierCurveTo(324.41, 388.88, 322.48, 395.04, 321.67, 401.43);
        context.bezierCurveTo(320.72, 398.25, 319, 395.33, 318.28, 392.09);
        context.bezierCurveTo(318.27, 389.57, 318.95, 387.13, 319.4, 384.67);
        context.bezierCurveTo(318.07, 383.88, 316.73, 383.11, 315.61, 382.05);
        context.bezierCurveTo(316.84, 380.15, 318.69, 378.75, 319.85, 376.8);
        context.bezierCurveTo(318.04, 372.13, 315.81, 367.63, 313.92, 363);
        context.bezierCurveTo(312.29, 367.79, 311.05, 372.71, 309.32, 377.48);
        context.bezierCurveTo(307.96, 380.27, 308.69, 383.35, 309.01, 386.27);
        context.bezierCurveTo(307.69, 391.12, 308.79, 396.21, 309.19, 401.13);
        context.lineTo(307.68, 400.48);
        context.bezierCurveTo(305.77, 391.65, 305.15, 382.4, 307.01, 373.51);
        context.bezierCurveTo(307.8, 369.36, 307.85, 365.13, 307.89, 360.93);
        context.bezierCurveTo(308.44, 359.19, 309.05, 357.49, 309.67, 355.77);
        context.bezierCurveTo(310.89, 357.77, 312.09, 360.12, 314.91, 359.69);
        context.bezierCurveTo(314.07, 357.21, 313.17, 354.76, 312.27, 352.32);
        context.closePath();
        context.fillStyle = fillColor241;
        context.fill();


    }

    function drawPath255() {
        context.beginPath();
        context.moveTo(47.2, 353.49);
        context.bezierCurveTo(48.25, 353.8, 50.35, 354.39, 51.4, 354.69);
        context.bezierCurveTo(53.51, 358.4, 57.35, 360.45, 60.88, 362.59);
        context.bezierCurveTo(69.2, 367.39, 77.69, 371.92, 86.49, 375.76);
        context.bezierCurveTo(91, 381.49, 98.11, 383.76, 104.33, 387.08);
        context.bezierCurveTo(111.27, 390.28, 118.52, 392.91, 124.93, 397.16);
        context.bezierCurveTo(138.33, 406.64, 150.08, 418.15, 162.16, 429.2);
        context.bezierCurveTo(168.57, 435.45, 172.03, 443.89, 177.49, 450.89);
        context.bezierCurveTo(177.49, 451.49, 177.51, 452.69, 177.52, 453.28);
        context.lineTo(178.48, 453.85);
        context.bezierCurveTo(181.24, 455.48, 183.87, 457.75, 184.85, 460.91);
        context.bezierCurveTo(186.83, 467.05, 190.48, 472.43, 193, 478.33);
        context.bezierCurveTo(194.36, 481.68, 196.52, 484.63, 199.11, 487.15);
        context.bezierCurveTo(198.57, 487.79, 197.52, 489.04, 196.99, 489.67);
        context.bezierCurveTo(192.17, 483.85, 188.92, 476.97, 184.41, 470.95);
        context.bezierCurveTo(180.53, 465.05, 175.68, 459.89, 171.65, 454.12);
        context.bezierCurveTo(170.4, 452.25, 168.76, 450.72, 166.99, 449.39);
        context.bezierCurveTo(165.61, 448.31, 164.24, 447.25, 162.88, 446.17);
        context.bezierCurveTo(161.24, 444.63, 159.73, 442.95, 158.09, 441.4);
        context.bezierCurveTo(155.91, 436.57, 150.8, 433.39, 146.23, 431.01);
        context.lineTo(145.64, 430.76);
        context.bezierCurveTo(142.81, 428.92, 140.33, 426.6, 137.91, 424.27);
        context.bezierCurveTo(137.03, 423.4, 136.11, 422.57, 135.16, 421.8);
        context.bezierCurveTo(130.43, 417.93, 125.53, 414.24, 121.24, 409.87);
        context.bezierCurveTo(116.11, 404.28, 109.52, 400.29, 104.4, 394.68);
        context.bezierCurveTo(102.41, 392.47, 100.15, 390.51, 97.75, 388.75);
        context.bezierCurveTo(95.23, 386.56, 92.4, 384.79, 89.37, 383.37);
        context.bezierCurveTo(83.79, 380.73, 79.35, 376.27, 73.81, 373.55);
        context.bezierCurveTo(69.33, 371.25, 64.92, 368.85, 60.72, 366.09);
        context.bezierCurveTo(61.55, 367.85, 62.36, 369.63, 63.17, 371.41);
        context.lineTo(62.93, 374.25);
        context.bezierCurveTo(60.48, 371.95, 58.16, 369.51, 56.13, 366.83);
        context.bezierCurveTo(53.33, 362.27, 49.73, 358.24, 47.2, 353.49);
        context.closePath();
        context.fillStyle = fillColor242;
        context.fill();


    }

    function drawPath256() {
        context.beginPath();
        context.moveTo(86.87, 356.15);
        context.bezierCurveTo(92.44, 355.05, 97.47, 358.36, 102.68, 359.69);
        context.bezierCurveTo(106.35, 360.92, 109.96, 362.29, 113.43, 364.01);
        context.bezierCurveTo(111.12, 364.35, 108.81, 364.68, 106.49, 364.92);
        context.bezierCurveTo(99.69, 362.64, 93, 359.89, 86.87, 356.15);
        context.closePath();
        context.fillStyle = fillColor243;
        context.fill();


    }

    function drawPath257() {
        context.save();
        context.globalAlpha = 0.95;
        context.beginPath();
        context.moveTo(151.77, 357.35);
        context.bezierCurveTo(154.36, 356.71, 157, 356.23, 159.63, 355.8);
        context.lineTo(158.35, 357.2);
        context.bezierCurveTo(160.19, 357.56, 162.03, 357.92, 163.88, 358.27);
        context.bezierCurveTo(163.15, 361.6, 162.51, 364.95, 161.89, 368.31);
        context.bezierCurveTo(161.11, 365.76, 160.13, 363.27, 159.15, 360.8);
        context.bezierCurveTo(158.61, 359.48, 158.08, 358.17, 157.55, 356.85);
        context.bezierCurveTo(155.61, 357.03, 153.69, 357.2, 151.77, 357.35);
        context.closePath();
        context.fillStyle = fillColor244;
        context.fill();
        context.restore();


    }

    function drawPath258() {
        context.beginPath();
        context.moveTo(264.83, 358.11);
        context.lineTo(265.95, 356.09);
        context.bezierCurveTo(267.83, 359.56, 270.76, 363.08, 269.63, 367.29);
        context.bezierCurveTo(267.87, 364.59, 266.15, 361.84, 264.92, 358.85);
        context.lineTo(264.83, 358.11);
        context.closePath();
        context.fillStyle = fillColor245;
        context.fill();


    }

    function drawPath259() {
        context.beginPath();
        context.moveTo(330.33, 360.55);
        context.bezierCurveTo(330.12, 359.04, 330.45, 357.65, 331.36, 356.39);
        context.bezierCurveTo(334.39, 360.71, 335.12, 365.88, 336.52, 370.83);
        context.bezierCurveTo(336.2, 371.19, 335.56, 371.91, 335.24, 372.27);
        context.bezierCurveTo(336.07, 372.56, 337.72, 373.15, 338.55, 373.43);
        context.bezierCurveTo(337.36, 375.17, 335.37, 375.92, 333.49, 376.68);
        context.bezierCurveTo(331.99, 371.4, 330.95, 366, 330.33, 360.55);
        context.closePath();
        context.fillStyle = fillColor246;
        context.fill();


    }

    function drawPath260() {
        context.beginPath();
        context.moveTo(353.09, 359.09);
        context.bezierCurveTo(354.73, 355.56, 358.51, 356.01, 360.44, 359.03);
        context.bezierCurveTo(357.99, 359.12, 355.53, 359.15, 353.09, 359.09);
        context.closePath();
        context.fillStyle = fillColor247;
        context.fill();


    }

    function drawPath261() {
        context.beginPath();
        context.moveTo(163.88, 358.27);
        context.bezierCurveTo(165.67, 358.61, 167.45, 359, 169.2, 359.55);
        context.bezierCurveTo(172.28, 361.81, 175.57, 364.16, 177.45, 367.6);
        context.bezierCurveTo(179.69, 373.52, 180.47, 379.93, 182.97, 385.77);
        context.bezierCurveTo(183.25, 386.11, 183.8, 386.76, 184.07, 387.08);
        context.bezierCurveTo(188.75, 397.73, 193.03, 408.56, 197.73, 419.2);
        context.bezierCurveTo(195.01, 424.95, 196.91, 431.17, 197.01, 437.19);
        context.bezierCurveTo(195.21, 442.89, 197.43, 448.76, 200.15, 453.77);
        context.bezierCurveTo(205.33, 463.17, 207.19, 473.91, 208.41, 484.44);
        context.bezierCurveTo(208, 484.84, 207.16, 485.63, 206.75, 486.01);
        context.bezierCurveTo(204.75, 485.65, 202.73, 485.33, 200.72, 485.03);
        context.bezierCurveTo(196.87, 476.56, 193.89, 467.67, 189.17, 459.6);
        context.bezierCurveTo(189.67, 459.91, 190.63, 460.52, 191.12, 460.83);
        context.bezierCurveTo(193.01, 463.68, 194.93, 466.55, 197.23, 469.12);
        context.bezierCurveTo(196.68, 466.39, 195.53, 463.85, 194.15, 461.47);
        context.bezierCurveTo(193.76, 456.4, 190.95, 452.01, 189.99, 447.09);
        context.bezierCurveTo(188.57, 440.12, 187.64, 433.07, 186.89, 425.99);
        context.bezierCurveTo(186.17, 418.21, 181.12, 411.97, 178.21, 404.96);
        context.bezierCurveTo(175.09, 398.47, 172.25, 391.84, 170.07, 384.97);
        context.bezierCurveTo(169, 381.73, 169.24, 377.52, 165.68, 375.81);
        context.bezierCurveTo(165.48, 376.84, 165.07, 378.88, 164.85, 379.89);
        context.lineTo(163.67, 378.88);
        context.bezierCurveTo(163.85, 377.51, 164.05, 376.13, 164.25, 374.76);
        context.bezierCurveTo(165.47, 374.76, 166.67, 374.77, 167.88, 374.77);
        context.bezierCurveTo(166.56, 372.03, 165.15, 369.12, 161.89, 368.31);
        context.bezierCurveTo(162.51, 364.95, 163.15, 361.6, 163.88, 358.27);
        context.closePath();
        context.fillStyle = fillColor248;
        context.fill();


    }

    function drawPath262() {
        context.beginPath();
        context.moveTo(145.95, 361.52);
        context.bezierCurveTo(149.31, 359.77, 152.81, 361.37, 156.11, 362.36);
        context.bezierCurveTo(155.21, 362.79, 153.43, 363.67, 152.53, 364.11);
        context.bezierCurveTo(145.8, 367.53, 137.92, 366.28, 130.68, 365.77);
        context.bezierCurveTo(133.91, 359.97, 140.97, 363.89, 145.95, 361.52);
        context.closePath();
        context.fillStyle = fillColor249;
        context.fill();


    }

    function drawPath263() {
        context.beginPath();
        context.moveTo(169.2, 359.55);
        context.bezierCurveTo(170.73, 360, 172.27, 360.51, 173.8, 361.01);
        context.bezierCurveTo(175.77, 363.87, 178.89, 366.2, 179.4, 369.84);
        context.bezierCurveTo(180.47, 375.71, 182.11, 381.45, 184.07, 387.08);
        context.bezierCurveTo(183.8, 386.76, 183.25, 386.11, 182.97, 385.77);
        context.bezierCurveTo(180.47, 379.93, 179.69, 373.52, 177.45, 367.6);
        context.bezierCurveTo(175.57, 364.16, 172.28, 361.81, 169.2, 359.55);
        context.closePath();
        context.fillStyle = fillColor103;
        context.fill();


    }

    function drawPath264() {
        context.beginPath();
        context.moveTo(159.15, 360.8);
        context.bezierCurveTo(160.13, 363.27, 161.11, 365.76, 161.89, 368.31);
        context.bezierCurveTo(161.99, 369.09, 162.19, 370.67, 162.28, 371.45);
        context.bezierCurveTo(159.27, 368.83, 156.65, 365.53, 152.68, 364.33);
        context.lineTo(152.53, 364.11);
        context.bezierCurveTo(153.43, 363.67, 155.21, 362.79, 156.11, 362.36);
        context.bezierCurveTo(156.87, 361.97, 158.39, 361.19, 159.15, 360.8);
        context.closePath();
        context.fillStyle = fillColor250;
        context.fill();


    }

    function drawPath265() {
        context.beginPath();
        context.moveTo(261.23, 360.92);
        context.lineTo(263.08, 360.61);
        context.bezierCurveTo(262.61, 364.05, 262.51, 367.56, 261.87, 371);
        context.bezierCurveTo(260.11, 372.6, 257.32, 372.51, 255.19, 373.39);
        context.bezierCurveTo(257.03, 369.2, 257.47, 363.97, 261.23, 360.92);
        context.closePath();
        context.fillStyle = fillColor251;
        context.fill();


    }

    function drawPath266() {
        context.beginPath();
        context.moveTo(263.08, 360.61);
        context.lineTo(264.76, 360.2);
        context.bezierCurveTo(266.39, 363.6, 268.67, 366.64, 270.92, 369.65);
        context.bezierCurveTo(272.01, 371.56, 272.73, 373.63, 273.39, 375.72);
        context.bezierCurveTo(271.48, 374.51, 269.64, 373.19, 267.87, 371.8);
        context.bezierCurveTo(268.35, 373.71, 268.81, 375.61, 269.29, 377.53);
        context.bezierCurveTo(264.73, 375.79, 259.99, 374.56, 255.2, 373.61);
        context.lineTo(255.19, 373.39);
        context.bezierCurveTo(257.32, 372.51, 260.11, 372.6, 261.87, 371);
        context.bezierCurveTo(262.51, 367.56, 262.61, 364.05, 263.08, 360.61);
        context.closePath();
        context.fillStyle = fillColor252;
        context.fill();


    }

    function drawPath267() {
        context.beginPath();
        context.moveTo(354.55, 363.36);
        context.bezierCurveTo(357.19, 360.43, 361.59, 361.45, 365.09, 361.15);
        context.bezierCurveTo(364.95, 367.45, 366.09, 374.35, 362.57, 380.01);
        context.bezierCurveTo(362.47, 380.45, 362.25, 381.35, 362.15, 381.79);
        context.bezierCurveTo(361.68, 383.13, 361.92, 384.35, 362.84, 385.45);
        context.bezierCurveTo(362.2, 386.23, 361.59, 387.01, 361, 387.81);
        context.bezierCurveTo(361.16, 390.07, 361.41, 392.31, 361.57, 394.56);
        context.bezierCurveTo(360.64, 393.23, 359.72, 391.88, 358.81, 390.53);
        context.bezierCurveTo(357.63, 390.53, 356.45, 390.56, 355.29, 390.6);
        context.bezierCurveTo(354.89, 391.24, 354.09, 392.55, 353.69, 393.2);
        context.bezierCurveTo(356.09, 394.33, 359.41, 395.65, 358.41, 399.03);
        context.bezierCurveTo(356.92, 405.63, 355.81, 412.69, 352.08, 418.48);
        context.bezierCurveTo(350.76, 420.24, 349.36, 421.95, 348.07, 423.73);
        context.bezierCurveTo(348.84, 419.67, 350.03, 415.71, 351.67, 411.91);
        context.bezierCurveTo(349.95, 411.32, 348.25, 410.72, 346.56, 410.15);
        context.bezierCurveTo(345.45, 411.23, 344.36, 412.31, 343.28, 413.4);
        context.bezierCurveTo(341.84, 413.4, 340.4, 413.41, 338.97, 413.43);
        context.bezierCurveTo(338.63, 413.97, 337.95, 415.08, 337.6, 415.63);
        context.bezierCurveTo(338.93, 404.51, 338.6, 393.11, 342.48, 382.44);
        context.bezierCurveTo(343, 382.28, 344.01, 381.96, 344.53, 381.81);
        context.bezierCurveTo(343.63, 379.27, 342.32, 376.72, 342.48, 373.97);
        context.bezierCurveTo(342.84, 371.15, 345.88, 370.24, 347.92, 368.85);
        context.bezierCurveTo(348.73, 370.88, 349.56, 372.92, 350.39, 374.95);
        context.bezierCurveTo(351.99, 372.39, 353.59, 369.83, 355.09, 367.21);
        context.bezierCurveTo(354.71, 366.04, 353.21, 364.47, 354.55, 363.36);
        context.closePath();
        context.fillStyle = fillColor253;
        context.fill();


    }

    function drawPath268() {
        context.beginPath();
        context.moveTo(23.28, 362.63);
        context.bezierCurveTo(24.87, 362.45, 26.47, 362.31, 28.07, 362.19);
        context.bezierCurveTo(32.63, 362.05, 36.47, 364.96, 38.25, 369.04);
        context.bezierCurveTo(38.41, 369.6, 38.72, 370.69, 38.88, 371.24);
        context.bezierCurveTo(45.8, 377.96, 52.16, 385.25, 57.24, 393.48);
        context.bezierCurveTo(53.75, 393.63, 50.03, 393.36, 46.88, 395.19);
        context.bezierCurveTo(45.43, 395.89, 43.99, 396.6, 42.55, 397.33);
        context.bezierCurveTo(41.32, 395.73, 40.11, 394.13, 38.84, 392.59);
        context.lineTo(38.59, 393.99);
        context.bezierCurveTo(38.32, 393.55, 37.77, 392.65, 37.49, 392.2);
        context.bezierCurveTo(36.79, 388.64, 34.81, 385.56, 32.01, 383.29);
        context.bezierCurveTo(31.16, 383.32, 29.44, 383.35, 28.59, 383.37);
        context.lineTo(27.93, 383.39);
        context.bezierCurveTo(27.88, 384.01, 27.75, 385.29, 27.69, 385.92);
        context.bezierCurveTo(24.96, 381.03, 22.27, 376.11, 20.29, 370.84);
        context.bezierCurveTo(21.33, 368.11, 22.27, 365.36, 23.28, 362.63);
        context.closePath();
        context.fillStyle = fillColor254;
        context.fill();


    }

    function drawPath269() {
        context.beginPath();
        context.moveTo(508.79, 363.07);
        context.bezierCurveTo(515.88, 363.51, 522.89, 361.97, 529.97, 361.95);
        context.bezierCurveTo(530.08, 363.55, 530.2, 365.17, 530.32, 366.79);
        context.bezierCurveTo(526.37, 369.21, 522.52, 371.76, 518.39, 373.85);
        context.bezierCurveTo(517.99, 375.48, 517.6, 377.11, 517.19, 378.73);
        context.bezierCurveTo(510.45, 380.93, 505.87, 387.51, 498.59, 388.48);
        context.bezierCurveTo(496.84, 388.49, 495.51, 387.21, 494.03, 386.53);
        context.bezierCurveTo(495.39, 385.32, 496.71, 384.08, 498.01, 382.81);
        context.bezierCurveTo(490.85, 382.43, 485.28, 387.55, 478.91, 389.92);
        context.bezierCurveTo(471.08, 392.85, 464.13, 397.53, 456.68, 401.21);
        context.bezierCurveTo(450.28, 404.49, 444.76, 409.28, 438.09, 412.05);
        context.bezierCurveTo(432.79, 414.21, 428.52, 419.01, 422.45, 418.89);
        context.bezierCurveTo(422.21, 418.29, 421.73, 417.09, 421.49, 416.49);
        context.bezierCurveTo(421, 415.15, 420.51, 413.79, 420.04, 412.44);
        context.bezierCurveTo(426.01, 408.57, 432.32, 405.17, 437.81, 400.6);
        context.bezierCurveTo(435.16, 399.8, 432.67, 398.56, 430.49, 396.84);
        context.bezierCurveTo(441.64, 389.59, 454.07, 384.47, 464.89, 376.73);
        context.bezierCurveTo(479.09, 370.99, 493.71, 365.95, 508.79, 363.07);
        context.closePath();
        context.fillStyle = fillColor255;
        context.fill();


    }

    function drawPath270() {
        context.beginPath();
        context.moveTo(15.87, 363.39);
        context.bezierCurveTo(18.77, 367.2, 20.32, 371.88, 19.68, 376.69);
        context.bezierCurveTo(20.11, 377.23, 20.95, 378.29, 21.36, 378.83);
        context.bezierCurveTo(19.88, 377.77, 18.23, 376.99, 16.69, 376.03);
        context.bezierCurveTo(19.05, 384.75, 22.96, 392.89, 26.85, 401.01);
        context.bezierCurveTo(22.36, 392.75, 18.37, 384.09, 16.09, 374.95);
        context.bezierCurveTo(16.08, 374.27, 16.08, 372.92, 16.08, 372.25);
        context.bezierCurveTo(14.45, 369.48, 15.41, 366.31, 15.87, 363.39);
        context.closePath();
        context.moveTo(16.21, 368.97);
        context.lineTo(15.77, 369.87);
        context.bezierCurveTo(16.44, 373.35, 19.08, 368.49, 16.21, 368.97);
        context.closePath();
        context.moveTo(17.53, 372.96);
        context.lineTo(17.09, 373.87);
        context.bezierCurveTo(17.69, 377.36, 20.33, 372.53, 17.53, 372.96);
        context.closePath();
        context.fillStyle = fillColor175;
        context.fill();


    }

    function drawPath271() {
        context.beginPath();
        context.moveTo(313.92, 363);
        context.bezierCurveTo(315.81, 367.63, 318.04, 372.13, 319.85, 376.8);
        context.bezierCurveTo(318.69, 378.75, 316.84, 380.15, 315.61, 382.05);
        context.bezierCurveTo(316.73, 383.11, 318.07, 383.88, 319.4, 384.67);
        context.bezierCurveTo(318.95, 387.13, 318.27, 389.57, 318.28, 392.09);
        context.bezierCurveTo(319, 395.33, 320.72, 398.25, 321.67, 401.43);
        context.bezierCurveTo(321.72, 409.75, 321.84, 418.05, 322, 426.36);
        context.bezierCurveTo(322.2, 430.4, 319.36, 433.48, 316.72, 436.13);
        context.bezierCurveTo(318.43, 436.53, 320.13, 436.95, 321.85, 437.36);
        context.bezierCurveTo(319.99, 439.03, 318.29, 440.89, 317.07, 443.08);
        context.bezierCurveTo(315.25, 442.56, 313.44, 442.04, 311.64, 441.52);
        context.bezierCurveTo(310.55, 433.44, 312.33, 425.28, 310.99, 417.24);
        context.bezierCurveTo(310.09, 411.89, 310.29, 406.44, 309.19, 401.13);
        context.bezierCurveTo(308.79, 396.21, 307.69, 391.12, 309.01, 386.27);
        context.lineTo(310.88, 384.83);
        context.bezierCurveTo(311.03, 382.27, 310.17, 379.84, 309.32, 377.48);
        context.bezierCurveTo(311.05, 372.71, 312.29, 367.79, 313.92, 363);
        context.closePath();
        context.fillStyle = fillColor245;
        context.fill();


    }

    function drawPath272() {
        context.beginPath();
        context.moveTo(152.68, 364.33);
        context.bezierCurveTo(156.65, 365.53, 159.27, 368.83, 162.28, 371.45);
        context.bezierCurveTo(162.19, 370.67, 161.99, 369.09, 161.89, 368.31);
        context.bezierCurveTo(165.15, 369.12, 166.56, 372.03, 167.88, 374.77);
        context.bezierCurveTo(166.67, 374.77, 165.47, 374.76, 164.25, 374.76);
        context.bezierCurveTo(164.05, 376.13, 163.85, 377.51, 163.67, 378.88);
        context.lineTo(163.39, 381);
        context.bezierCurveTo(162.85, 378.48, 162.35, 375.95, 161.84, 373.43);
        context.bezierCurveTo(159.99, 373.2, 158.12, 372.99, 156.27, 372.77);
        context.bezierCurveTo(155.09, 369.95, 153.85, 367.15, 152.68, 364.33);
        context.closePath();
        context.fillStyle = fillColor256;
        context.fill();


    }

    function drawPath273() {
        context.beginPath();
        context.moveTo(278.64, 364.2);
        context.bezierCurveTo(280.01, 368.85, 280.33, 373.73, 281.39, 378.47);
        context.bezierCurveTo(284.99, 378.29, 288.53, 378.93, 291.95, 380.09);
        context.bezierCurveTo(291.57, 380.39, 290.81, 380.96, 290.44, 381.25);
        context.bezierCurveTo(288.12, 381.35, 285.81, 381.47, 283.51, 381.64);
        context.bezierCurveTo(281.55, 381.72, 279.56, 381.99, 277.63, 381.59);
        context.bezierCurveTo(275.67, 378.09, 277.12, 374.04, 277.45, 370.35);
        context.bezierCurveTo(277.83, 368.28, 278.17, 366.23, 278.64, 364.2);
        context.closePath();
        context.fillStyle = fillColor257;
        context.fill();


    }

    function drawPath274() {
        context.beginPath();
        context.moveTo(530.32, 366.79);
        context.bezierCurveTo(532.96, 366.09, 535.67, 365.59, 538.36, 365.07);
        context.bezierCurveTo(538.01, 367.52, 537.65, 369.96, 537.33, 372.41);
        context.bezierCurveTo(537.08, 372.69, 536.56, 373.23, 536.31, 373.51);
        context.bezierCurveTo(528.89, 377.61, 522.52, 383.68, 517.56, 390.49);
        context.bezierCurveTo(516.73, 391.04, 515.92, 391.57, 515.12, 392.12);
        context.bezierCurveTo(515.67, 392.4, 516.79, 392.93, 517.33, 393.21);
        context.bezierCurveTo(515.04, 395.33, 512.64, 397.32, 510.16, 399.2);
        context.bezierCurveTo(508.13, 398.83, 506.12, 398.47, 504.11, 398.11);
        context.bezierCurveTo(506, 394.4, 507.41, 390.12, 510.88, 387.53);
        context.bezierCurveTo(513.33, 385.59, 516.43, 384.83, 519.35, 383.85);
        context.bezierCurveTo(518.61, 382.15, 517.88, 380.43, 517.19, 378.73);
        context.bezierCurveTo(517.6, 377.11, 517.99, 375.48, 518.39, 373.85);
        context.bezierCurveTo(522.52, 371.76, 526.37, 369.21, 530.32, 366.79);
        context.closePath();
        context.fillStyle = fillColor258;
        context.fill();


    }

    function drawPath275() {
        context.beginPath();
        context.moveTo(60.72, 366.09);
        context.bezierCurveTo(64.92, 368.85, 69.33, 371.25, 73.81, 373.55);
        context.bezierCurveTo(79.35, 376.27, 83.79, 380.73, 89.37, 383.37);
        context.bezierCurveTo(92.4, 384.79, 95.23, 386.56, 97.75, 388.75);
        context.bezierCurveTo(94.53, 387.68, 91.36, 386.49, 88.27, 385.09);
        context.bezierCurveTo(88.28, 385.93, 88.29, 387.61, 88.31, 388.45);
        context.bezierCurveTo(83.97, 384.25, 79.05, 380.72, 74.04, 377.4);
        context.bezierCurveTo(72.11, 375.89, 69.63, 375.79, 67.31, 375.52);
        context.bezierCurveTo(65.95, 374.12, 64.52, 372.8, 63.17, 371.41);
        context.bezierCurveTo(62.36, 369.63, 61.55, 367.85, 60.72, 366.09);
        context.closePath();
        context.fillStyle = fillColor259;
        context.fill();


    }

    function drawPath276() {
        context.beginPath();
        context.moveTo(42.07, 366.52);
        context.bezierCurveTo(44.92, 367.89, 48.2, 370.07, 46.03, 373.6);
        context.bezierCurveTo(49.87, 377.95, 55.35, 380.08, 59.95, 383.4);
        context.bezierCurveTo(62.25, 386.57, 63.56, 390.33, 65.25, 393.84);
        context.bezierCurveTo(64.37, 394.03, 62.61, 394.4, 61.73, 394.59);
        context.bezierCurveTo(61.31, 394.97, 60.45, 395.77, 60.03, 396.16);
        context.lineTo(59.96, 396.07);
        context.bezierCurveTo(53.64, 387.31, 47.63, 378.03, 39.07, 371.24);
        context.bezierCurveTo(40.67, 371.2, 42.28, 371.12, 43.88, 371.03);
        context.bezierCurveTo(43.27, 369.52, 42.67, 368.03, 42.07, 366.52);
        context.closePath();
        context.fillStyle = fillColor260;
        context.fill();


    }

    function drawPath277() {
        context.beginPath();
        context.moveTo(56.13, 366.83);
        context.bezierCurveTo(58.16, 369.51, 60.48, 371.95, 62.93, 374.25);
        context.lineTo(63.31, 374.6);
        context.lineTo(62.04, 374.01);
        context.bezierCurveTo(59.33, 372.35, 57.73, 369.48, 56.13, 366.83);
        context.closePath();
        context.fillStyle = fillColor261;
        context.fill();


    }

    function drawPath278() {
        context.beginPath();
        context.moveTo(16.21, 368.97);
        context.bezierCurveTo(19.08, 368.49, 16.44, 373.35, 15.77, 369.87);
        context.lineTo(16.21, 368.97);
        context.closePath();
        context.fillStyle = fillColor262;
        context.fill();


    }

    function drawPath279() {
        context.beginPath();
        context.moveTo(38.88, 371.24);
        context.lineTo(39.07, 371.24);
        context.bezierCurveTo(47.63, 378.03, 53.64, 387.31, 59.96, 396.07);
        context.lineTo(59.55, 395.68);
        context.bezierCurveTo(58.97, 395.13, 57.81, 394.03, 57.24, 393.48);
        context.bezierCurveTo(52.16, 385.25, 45.8, 377.96, 38.88, 371.24);
        context.closePath();
        context.fillStyle = fillColor261;
        context.fill();


    }

    function drawPath280() {
        context.beginPath();
        context.moveTo(63.17, 371.41);
        context.bezierCurveTo(64.52, 372.8, 65.95, 374.12, 67.31, 375.52);
        context.bezierCurveTo(74.76, 384.91, 81.79, 394.64, 89.84, 403.53);
        context.lineTo(87.61, 403.95);
        context.bezierCurveTo(87.32, 403.32, 86.72, 402.07, 86.41, 401.44);
        context.bezierCurveTo(78.25, 393.81, 73.01, 383.65, 65.13, 375.8);
        context.bezierCurveTo(64.52, 375.37, 63.92, 374.99, 63.31, 374.6);
        context.lineTo(62.93, 374.25);
        context.lineTo(63.17, 371.41);
        context.closePath();
        context.fillStyle = fillColor175;
        context.fill();


    }

    function drawPath281() {
        context.beginPath();
        context.moveTo(296.44, 371.12);
        context.bezierCurveTo(298.49, 371.25, 298.61, 373.45, 299.35, 374.95);
        context.bezierCurveTo(301.17, 376.37, 302.68, 378.11, 302.81, 380.56);
        context.bezierCurveTo(302.27, 380.56, 301.17, 380.55, 300.63, 380.55);
        context.bezierCurveTo(300.64, 380.08, 300.65, 379.13, 300.67, 378.67);
        context.bezierCurveTo(299.91, 378.4, 298.4, 377.85, 297.65, 377.59);
        context.bezierCurveTo(297.23, 375.43, 296.8, 373.28, 296.44, 371.12);
        context.closePath();
        context.fillStyle = fillColor263;
        context.fill();


    }

    function drawPath282() {
        context.beginPath();
        context.moveTo(17.53, 372.96);
        context.bezierCurveTo(20.33, 372.53, 17.69, 377.36, 17.09, 373.87);
        context.lineTo(17.53, 372.96);
        context.closePath();
        context.fillStyle = fillColor264;
        context.fill();


    }

    function drawPath283() {
        context.beginPath();
        context.moveTo(156.27, 372.77);
        context.bezierCurveTo(158.12, 372.99, 159.99, 373.2, 161.84, 373.43);
        context.bezierCurveTo(162.35, 375.95, 162.85, 378.48, 163.39, 381);
        context.bezierCurveTo(164.69, 388.75, 169.43, 395.32, 171.15, 402.96);
        context.bezierCurveTo(172.75, 410.92, 179.29, 416.45, 181.88, 424.01);
        context.bezierCurveTo(184.12, 428.29, 182.79, 433.2, 183.27, 437.79);
        context.bezierCurveTo(183.84, 443.07, 185.77, 448.07, 187.13, 453.19);
        context.bezierCurveTo(187.07, 454.04, 186.93, 455.75, 186.87, 456.6);
        context.bezierCurveTo(180.99, 446.87, 179.59, 435.17, 173.71, 425.44);
        context.bezierCurveTo(172.93, 419.08, 169.27, 413.68, 167.56, 407.63);
        context.bezierCurveTo(164.55, 395.75, 157.93, 385.03, 156.27, 372.77);
        context.closePath();
        context.fillStyle = fillColor265;
        context.fill();


    }

    function drawPath284() {
        context.beginPath();
        context.moveTo(779.25, 383.84);
        context.bezierCurveTo(794.81, 375.04, 813.03, 372.41, 830.67, 372.25);
        context.bezierCurveTo(845.12, 372.29, 859.76, 373.33, 873.61, 377.71);
        context.bezierCurveTo(889.76, 382.73, 904.05, 392.96, 914.72, 406);
        context.bezierCurveTo(927.69, 421.77, 939.28, 439.28, 944.73, 459.16);
        context.bezierCurveTo(948.57, 476.52, 948.28, 494.53, 946.31, 512.12);
        context.bezierCurveTo(945.85, 519.44, 945.36, 526.8, 946.08, 534.11);
        context.bezierCurveTo(946.69, 540.12, 950.03, 545.29, 952.69, 550.57);
        context.bezierCurveTo(963.39, 572.75, 968.68, 597.33, 969.05, 621.91);
        context.bezierCurveTo(969.65, 647.31, 969.44, 672.75, 967.81, 698.09);
        context.bezierCurveTo(965.93, 715.12, 965.61, 732.28, 966.17, 749.39);
        context.bezierCurveTo(966.65, 763.24, 973.68, 775.6, 980.03, 787.53);
        context.bezierCurveTo(987.68, 799.69, 993.21, 813.04, 1000.72, 825.29);
        context.bezierCurveTo(1009.15, 839.89, 1018.32, 854.05, 1026.69, 868.68);
        context.bezierCurveTo(1036.29, 885.45, 1042.84, 903.83, 1047.07, 922.65);
        context.bezierCurveTo(1051.96, 944.8, 1056.47, 967.23, 1056.68, 990);
        context.bezierCurveTo(1056.67, 1007.76, 1057.28, 1025.64, 1054.68, 1043.28);
        context.bezierCurveTo(1052.69, 1056.99, 1048, 1070.07, 1044.07, 1083.29);
        context.bezierCurveTo(1037.04, 1105, 1025.08, 1124.67, 1011.87, 1143.12);
        context.bezierCurveTo(996.68, 1163.32, 978.32, 1181.17, 957.35, 1195.31);
        context.bezierCurveTo(952.16, 1198.95, 945.92, 1200.56, 940.65, 1204.01);
        context.bezierCurveTo(935.69, 1206.77, 930.12, 1208.2, 925.21, 1211.08);
        context.bezierCurveTo(913.87, 1217.24, 902.28, 1222.96, 890.79, 1228.79);
        context.bezierCurveTo(882.56, 1231.45, 875.23, 1236.12, 867.39, 1239.67);
        context.bezierCurveTo(844.72, 1250.4, 820.56, 1258.08, 795.79, 1262);
        context.lineTo(737.79, 1262);
        context.bezierCurveTo(722.96, 1258.88, 708.13, 1255.35, 694.08, 1249.59);
        context.bezierCurveTo(662.05, 1237.04, 633.73, 1216.57, 608.76, 1193.17);
        context.bezierCurveTo(601.87, 1186.49, 594.67, 1179.52, 585.53, 1176.09);
        context.bezierCurveTo(577.51, 1173.4, 569.64, 1177.73, 562.07, 1179.91);
        context.bezierCurveTo(541.07, 1186.87, 518.87, 1188.23, 497.21, 1191.95);
        context.bezierCurveTo(473.71, 1195.68, 449.95, 1197.59, 426.44, 1201.36);
        context.bezierCurveTo(414.17, 1203.44, 401.69, 1202.57, 389.32, 1202.79);
        context.bezierCurveTo(377.65, 1202.59, 365.92, 1203.35, 354.35, 1201.56);
        context.bezierCurveTo(342.13, 1199.77, 329.85, 1198.57, 317.6, 1197.09);
        context.bezierCurveTo(289.27, 1193.59, 261.03, 1188.77, 233.48, 1181.17);
        context.bezierCurveTo(212.12, 1175.28, 190.87, 1167.57, 172.85, 1154.33);
        context.bezierCurveTo(153.39, 1141.55, 137.73, 1123.57, 126.41, 1103.32);
        context.bezierCurveTo(119.36, 1090.15, 111.12, 1077.63, 104.92, 1064.01);
        context.bezierCurveTo(96.99, 1047.88, 90.75, 1030.59, 89.59, 1012.51);
        context.bezierCurveTo(87.33, 980.59, 87.23, 948.53, 88.36, 916.56);
        context.bezierCurveTo(88.6, 901.61, 93.83, 887.39, 99.84, 873.91);
        context.bezierCurveTo(110.93, 847.93, 130.87, 826.08, 154.91, 811.44);
        context.bezierCurveTo(173.56, 799.61, 193.15, 788.61, 214.56, 782.76);
        context.bezierCurveTo(219.84, 781.25, 223.07, 775.17, 222.08, 769.91);
        context.bezierCurveTo(221.36, 763.43, 219.68, 757.11, 218.09, 750.81);
        context.bezierCurveTo(215.37, 741.91, 216.96, 732.51, 216.6, 723.37);
        context.bezierCurveTo(216.27, 711.31, 219.83, 699.6, 224.13, 688.47);
        context.bezierCurveTo(225.09, 685.88, 226.71, 683.21, 229.72, 682.67);
        context.bezierCurveTo(228.84, 682.13, 227.99, 681.59, 227.13, 681.05);
        context.bezierCurveTo(227.69, 681.09, 228.81, 681.19, 229.37, 681.24);
        context.bezierCurveTo(234.39, 684, 239.99, 685.47, 245.35, 687.41);
        context.bezierCurveTo(248.63, 688.03, 251.97, 688.27, 255.32, 688.28);
        context.bezierCurveTo(259.31, 688.13, 262.52, 684.81, 266.59, 685.17);
        context.bezierCurveTo(271.37, 685.07, 275.2, 688.39, 279.28, 690.41);
        context.bezierCurveTo(275.31, 702.59, 270.64, 714.59, 268.84, 727.36);
        context.bezierCurveTo(263.53, 747.27, 261.12, 768.31, 265.15, 788.69);
        context.bezierCurveTo(266.31, 795.45, 269.25, 801.71, 271.48, 808.16);
        context.bezierCurveTo(263.99, 807.59, 256.92, 804.64, 249.4, 804.33);
        context.bezierCurveTo(237.68, 803.67, 225.53, 803.19, 214.24, 806.92);
        context.bezierCurveTo(209.68, 808.44, 204.75, 807.91, 200.15, 809.27);
        context.bezierCurveTo(187.61, 813.84, 175.83, 820.39, 165.24, 828.51);
        context.bezierCurveTo(156.77, 835.57, 147.93, 842.35, 140.77, 850.83);
        context.bezierCurveTo(134.52, 858.41, 128.33, 866.17, 123.71, 874.88);
        context.bezierCurveTo(119.85, 883.23, 114.76, 890.92, 110.43, 899.03);
        context.bezierCurveTo(105.76, 905.83, 105.68, 914.37, 102.4, 921.77);
        context.bezierCurveTo(94.2, 942.01, 93.8, 965.03, 100.21, 985.81);
        context.bezierCurveTo(101.45, 990.13, 103.33, 994.24, 104.68, 998.55);
        context.bezierCurveTo(106.43, 1003.93, 105.24, 1009.77, 106.92, 1015.19);
        context.bezierCurveTo(109.96, 1024.69, 113.28, 1034.13, 117.59, 1043.16);
        context.bezierCurveTo(124.05, 1059.23, 132.2, 1074.73, 142.97, 1088.33);
        context.bezierCurveTo(154.24, 1102.32, 167.63, 1114.49, 181.75, 1125.53);
        context.bezierCurveTo(190.95, 1131.59, 199.64, 1138.59, 209.96, 1142.75);
        context.bezierCurveTo(223.13, 1149.31, 237.88, 1151.17, 251.83, 1155.48);
        context.bezierCurveTo(269.53, 1159.59, 287.28, 1164, 305.44, 1165.41);
        context.bezierCurveTo(323.53, 1167.85, 341.87, 1166.87, 360.05, 1166.52);
        context.bezierCurveTo(372.56, 1164.63, 385.39, 1165.75, 397.72, 1162.51);
        context.bezierCurveTo(403.21, 1160.87, 408.99, 1160.99, 414.64, 1160.31);
        context.bezierCurveTo(435.13, 1157.04, 455.88, 1155.05, 476.09, 1150.09);
        context.bezierCurveTo(488.47, 1147.69, 500.89, 1145.47, 513.21, 1142.79);
        context.bezierCurveTo(519.81, 1140.75, 526.87, 1141.6, 533.49, 1139.63);
        context.bezierCurveTo(542.16, 1137.25, 551.48, 1139.91, 560, 1136.8);
        context.bezierCurveTo(562.88, 1136.04, 563.12, 1132.73, 563.67, 1130.33);
        context.bezierCurveTo(563.97, 1128.71, 564.29, 1127.11, 564.63, 1125.52);
        context.bezierCurveTo(573.19, 1123.89, 580.08, 1118.45, 587.79, 1114.81);
        context.bezierCurveTo(589.25, 1128.87, 596.64, 1141.67, 606.39, 1151.65);
        context.bezierCurveTo(614.37, 1159.69, 621.75, 1168.73, 631.87, 1174.23);
        context.bezierCurveTo(638.49, 1178.61, 645.65, 1182.03, 653.11, 1184.79);
        context.bezierCurveTo(672.29, 1193.79, 693.68, 1196.52, 714.65, 1197.23);
        context.bezierCurveTo(731.8, 1197.85, 748.27, 1191.89, 765.25, 1190.93);
        context.bezierCurveTo(776.81, 1192.07, 788.43, 1192.08, 800, 1192.99);
        context.bezierCurveTo(807.09, 1193.19, 814.19, 1192.12, 821.27, 1192.96);
        context.bezierCurveTo(830.31, 1193.97, 839.16, 1191.37, 848.09, 1190.45);
        context.bezierCurveTo(855.72, 1189.83, 862, 1185.01, 869.29, 1183.16);
        context.bezierCurveTo(876, 1181.33, 882.31, 1178.32, 888.96, 1176.31);
        context.bezierCurveTo(902.03, 1172.48, 913.15, 1164.31, 924.88, 1157.72);
        context.bezierCurveTo(941.37, 1151.25, 953.77, 1138, 969.23, 1129.71);
        context.bezierCurveTo(985.36, 1119.25, 1000.03, 1106.29, 1011.6, 1090.89);
        context.bezierCurveTo(1015.45, 1082.57, 1019.53, 1074.29, 1022.31, 1065.53);
        context.bezierCurveTo(1029.19, 1048.96, 1038.08, 1032.64, 1039.67, 1014.45);
        context.bezierCurveTo(1041.51, 1005, 1041.44, 995.27, 1039.16, 985.92);
        context.bezierCurveTo(1039.97, 975.67, 1036.67, 965.83, 1035.23, 955.79);
        context.bezierCurveTo(1034.52, 950.51, 1031.35, 945.95, 1030.63, 940.69);
        context.bezierCurveTo(1029.71, 932.93, 1027.57, 925.39, 1025.17, 917.99);
        context.bezierCurveTo(1022.35, 911.47, 1021.91, 904.2, 1018.71, 897.84);
        context.bezierCurveTo(1016.2, 891.71, 1012.56, 885.93, 1011.27, 879.39);
        context.bezierCurveTo(1010.33, 871.12, 1005.28, 864.13, 1000.37, 857.72);
        context.bezierCurveTo(994.31, 848.39, 986.64, 840.27, 979.91, 831.44);
        context.bezierCurveTo(972.55, 820.64, 968.49, 807.88, 960.55, 797.44);
        context.bezierCurveTo(956.51, 792.57, 953.45, 786.96, 948.95, 782.49);
        context.bezierCurveTo(945.36, 774, 938.61, 767.09, 936.33, 758.04);
        context.bezierCurveTo(935.21, 753.13, 932.6, 748.48, 932.88, 743.35);
        context.bezierCurveTo(933.12, 737.73, 932.29, 732.12, 932.8, 726.53);
        context.bezierCurveTo(933.97, 719.2, 935.15, 711.83, 937.51, 704.76);
        context.bezierCurveTo(940.73, 687.85, 945.28, 671, 945.21, 653.65);
        context.bezierCurveTo(947.07, 640.47, 944.71, 627.23, 942.39, 614.29);
        context.bezierCurveTo(939.79, 608.32, 939.37, 601.83, 938.36, 595.48);
        context.bezierCurveTo(935.97, 588.23, 933.81, 580.89, 931.12, 573.76);
        context.bezierCurveTo(929.07, 567.03, 929.45, 559.61, 925.83, 553.37);
        context.bezierCurveTo(920.52, 544.37, 922.49, 532.99, 916.56, 524.2);
        context.bezierCurveTo(913.84, 516.35, 912.37, 508.01, 908.19, 500.68);
        context.bezierCurveTo(914.79, 486.17, 906.45, 471.29, 904.95, 456.71);
        context.bezierCurveTo(903.93, 449.13, 898.97, 443.01, 896.79, 435.84);
        context.bezierCurveTo(895.47, 431.29, 891.39, 428.32, 889.97, 423.83);
        context.bezierCurveTo(886.85, 414.4, 878.04, 408.61, 869.57, 404.44);
        context.bezierCurveTo(855.45, 397, 838.72, 395.35, 823.2, 398.47);
        context.bezierCurveTo(816.24, 399.65, 808.91, 399.83, 802.55, 403.24);
        context.bezierCurveTo(789.87, 409.47, 777.91, 418.39, 770.17, 430.37);
        context.bezierCurveTo(769.51, 431.52, 768.87, 432.69, 768.24, 433.87);
        context.bezierCurveTo(764.63, 431.67, 760.76, 429.79, 756.51, 429.37);
        context.bezierCurveTo(746.65, 428.19, 736.99, 425.13, 727.03, 425.13);
        context.bezierCurveTo(726.24, 425.69, 724.65, 426.81, 723.85, 427.36);
        context.bezierCurveTo(729.57, 433.59, 738.96, 431.77, 746.03, 435.51);
        context.bezierCurveTo(738.23, 435.87, 730.4, 435.61, 722.61, 436.35);
        context.bezierCurveTo(712.29, 437.23, 701.93, 436.32, 691.69, 434.97);
        context.bezierCurveTo(696.63, 433.91, 701.73, 433.92, 706.64, 432.72);
        context.bezierCurveTo(710.15, 431.89, 711.84, 426.47, 707.59, 425.29);
        context.bezierCurveTo(700.77, 424.28, 694.17, 426.96, 687.51, 427.95);
        context.bezierCurveTo(666.55, 430.81, 646.05, 437.53, 627.91, 448.53);
        context.bezierCurveTo(622.33, 451.35, 618.2, 456.08, 614.19, 460.72);
        context.bezierCurveTo(614.32, 461.83, 614.59, 464.04, 614.72, 465.13);
        context.bezierCurveTo(612.16, 467.32, 608.89, 468.44, 605.77, 466.65);
        context.bezierCurveTo(607.19, 466.31, 608.6, 465.92, 610, 465.49);
        context.bezierCurveTo(610.75, 463.67, 611.24, 461.76, 611.79, 459.88);
        context.bezierCurveTo(604.68, 453.04, 596.2, 447.41, 586.55, 444.96);
        context.bezierCurveTo(581.15, 443.84, 575.52, 444.39, 570.17, 445.53);
        context.bezierCurveTo(567.87, 445.72, 567.8, 448.4, 566.93, 449.97);
        context.bezierCurveTo(562.36, 450.12, 557.71, 451.01, 553.95, 453.75);
        context.bezierCurveTo(552.09, 450.33, 549.11, 448.19, 545.08, 448.76);
        context.bezierCurveTo(545.92, 451.37, 546.84, 453.99, 547.83, 456.57);
        context.bezierCurveTo(546.33, 457.01, 544.85, 457.43, 543.41, 457.97);
        context.bezierCurveTo(541.13, 455.51, 538.49, 453.43, 535.68, 451.63);
        context.bezierCurveTo(535.2, 454.17, 535.13, 456.77, 535.39, 459.36);
        context.bezierCurveTo(533.64, 459.96, 531.91, 460.57, 530.19, 461.2);
        context.bezierCurveTo(529.59, 462.81, 529.04, 464.43, 528.41, 466.03);
        context.bezierCurveTo(528.76, 463.45, 528.23, 460.25, 525.21, 459.71);
        context.bezierCurveTo(519.43, 458.03, 514.61, 462.52, 511.45, 466.77);
        context.bezierCurveTo(499.01, 481.12, 495.4, 500.84, 495.31, 519.31);
        context.bezierCurveTo(494.96, 528.29, 495.56, 537.41, 498.64, 545.95);
        context.bezierCurveTo(495.41, 552.85, 490.87, 559.13, 488.37, 566.39);
        context.bezierCurveTo(484.88, 576.65, 482.45, 587.31, 481.67, 598.16);
        context.bezierCurveTo(464.6, 591.63, 446.05, 590.69, 427.97, 590.89);
        context.bezierCurveTo(421.25, 590.75, 414.72, 592.49, 408.07, 593.11);
        context.bezierCurveTo(397.73, 593.59, 387.92, 597.19, 378.21, 600.47);
        context.bezierCurveTo(369.47, 604.33, 360.49, 607.88, 352.4, 613.05);
        context.bezierCurveTo(349.64, 614.88, 346.47, 616, 343.16, 616.21);
        context.bezierCurveTo(345.36, 609.55, 345.67, 602.52, 346.44, 595.61);
        context.bezierCurveTo(346.81, 595.03, 347.57, 593.84, 347.95, 593.24);
        context.bezierCurveTo(348.45, 592.93, 349.47, 592.29, 349.96, 591.97);
        context.bezierCurveTo(354.44, 587.99, 360.09, 585.87, 366.08, 585.75);
        context.bezierCurveTo(388.95, 584.28, 411.99, 584.36, 434.8, 586.59);
        context.bezierCurveTo(437.84, 585.99, 440.16, 583.51, 442.75, 581.89);
        context.bezierCurveTo(444.53, 555.47, 442.93, 527.63, 454.33, 502.97);
        context.bezierCurveTo(465.56, 478.08, 481.91, 454.07, 506.08, 440.27);
        context.bezierCurveTo(531.01, 426.07, 559.55, 418.97, 588.05, 417.24);
        context.bezierCurveTo(599.63, 416.44, 611.31, 415.15, 622.31, 411.21);
        context.bezierCurveTo(636.13, 406.27, 648.97, 398.93, 662.79, 393.93);
        context.bezierCurveTo(682.25, 386.57, 703.36, 383.56, 724.12, 385.19);
        context.bezierCurveTo(735.95, 385.92, 746.63, 392.76, 758.65, 392.08);
        context.bezierCurveTo(766.4, 392.32, 772.73, 387.25, 779.25, 383.84);
        context.closePath();
        context.fillStyle = fillColor266;
        context.fill();


    }

    function drawPath285() {
        context.beginPath();
        context.moveTo(517.56, 390.49);
        context.bezierCurveTo(522.52, 383.68, 528.89, 377.61, 536.31, 373.51);
        context.bezierCurveTo(528.51, 382.65, 521.97, 392.76, 514.95, 402.49);
        context.bezierCurveTo(507.31, 416.07, 496.31, 427.19, 486.11, 438.79);
        context.bezierCurveTo(479.77, 443.79, 473.16, 448.43, 466.65, 453.2);
        context.bezierCurveTo(467.17, 450.41, 467.51, 447.6, 467.83, 444.79);
        context.bezierCurveTo(466.47, 444.16, 465.09, 443.56, 463.73, 442.99);
        context.bezierCurveTo(464.75, 442.93, 466.8, 442.83, 467.81, 442.77);
        context.bezierCurveTo(468.17, 442.64, 468.87, 442.37, 469.21, 442.24);
        context.bezierCurveTo(477.44, 437.51, 484.95, 431.36, 491.61, 424.6);
        context.bezierCurveTo(485.39, 430.48, 478.6, 435.69, 471.65, 440.69);
        context.bezierCurveTo(471.16, 439.85, 470.16, 438.16, 469.65, 437.32);
        context.bezierCurveTo(479.43, 432.76, 485.65, 423.57, 493.85, 416.96);
        context.bezierCurveTo(496.4, 414.59, 498.11, 411.53, 500.17, 408.77);
        context.bezierCurveTo(502.85, 404.97, 506.57, 402.11, 510.16, 399.2);
        context.bezierCurveTo(512.64, 397.32, 515.04, 395.33, 517.33, 393.21);
        context.bezierCurveTo(516.79, 392.93, 515.67, 392.4, 515.12, 392.12);
        context.bezierCurveTo(515.92, 391.57, 516.73, 391.04, 517.56, 390.49);
        context.closePath();
        context.fillStyle = fillColor267;
        context.fill();


    }

    function drawPath286() {
        context.beginPath();
        context.moveTo(67.31, 375.52);
        context.bezierCurveTo(69.63, 375.79, 72.11, 375.89, 74.04, 377.4);
        context.bezierCurveTo(79.05, 380.72, 83.97, 384.25, 88.31, 388.45);
        context.bezierCurveTo(88.55, 392.65, 87.57, 398.03, 91.6, 400.81);
        context.bezierCurveTo(96.12, 403.88, 100.53, 407.13, 104.4, 411.01);
        context.lineTo(101.35, 411.92);
        context.bezierCurveTo(100.21, 411.4, 99.08, 410.87, 97.96, 410.33);
        context.bezierCurveTo(96.97, 409.4, 96, 408.47, 95.04, 407.52);
        context.bezierCurveTo(95.15, 406.96, 95.35, 405.85, 95.44, 405.29);
        context.bezierCurveTo(94.93, 405.47, 93.93, 405.8, 93.43, 405.97);
        context.bezierCurveTo(92.23, 405.16, 91.03, 404.35, 89.84, 403.53);
        context.bezierCurveTo(81.79, 394.64, 74.76, 384.91, 67.31, 375.52);
        context.closePath();
        context.fillStyle = fillColor94;
        context.fill();


    }

    function drawPath287() {
        context.beginPath();
        context.moveTo(66.44, 379.52);
        context.bezierCurveTo(65.36, 378.57, 65.31, 377.09, 65.13, 375.8);
        context.bezierCurveTo(73.01, 383.65, 78.25, 393.81, 86.41, 401.44);
        context.bezierCurveTo(86.32, 402.13, 86.11, 403.53, 86.01, 404.23);
        context.bezierCurveTo(77.31, 404.65, 70.51, 398.05, 62.64, 395.29);
        context.lineTo(61.73, 394.59);
        context.bezierCurveTo(68.23, 393.29, 74.01, 396.77, 79.92, 398.79);
        context.bezierCurveTo(79.67, 397.96, 79.15, 396.28, 78.89, 395.45);
        context.bezierCurveTo(74.8, 390.09, 70.87, 384.61, 66.44, 379.52);
        context.closePath();
        context.fillStyle = fillColor268;
        context.fill();


    }

    function drawPath288() {
        context.beginPath();
        context.moveTo(165.68, 375.81);
        context.bezierCurveTo(169.24, 377.52, 169, 381.73, 170.07, 384.97);
        context.bezierCurveTo(172.25, 391.84, 175.09, 398.47, 178.21, 404.96);
        context.bezierCurveTo(181.12, 411.97, 186.17, 418.21, 186.89, 425.99);
        context.bezierCurveTo(187.64, 433.07, 188.57, 440.12, 189.99, 447.09);
        context.bezierCurveTo(190.95, 452.01, 193.76, 456.4, 194.15, 461.47);
        context.lineTo(191.12, 460.83);
        context.bezierCurveTo(190.63, 460.52, 189.67, 459.91, 189.17, 459.6);
        context.bezierCurveTo(188.37, 458.61, 187.61, 457.61, 186.87, 456.6);
        context.bezierCurveTo(186.93, 455.75, 187.07, 454.04, 187.13, 453.19);
        context.bezierCurveTo(187.83, 447.11, 185.24, 441.32, 185.11, 435.29);
        context.bezierCurveTo(184.93, 431.81, 185.47, 428.32, 184.99, 424.87);
        context.bezierCurveTo(183.01, 418.63, 179.29, 413.13, 175.71, 407.73);
        context.bezierCurveTo(172.09, 402.57, 172.04, 395.93, 168.96, 390.53);
        context.bezierCurveTo(167.07, 387.2, 165.59, 383.67, 164.85, 379.89);
        context.bezierCurveTo(165.07, 378.88, 165.48, 376.84, 165.68, 375.81);
        context.closePath();
        context.fillStyle = fillColor269;
        context.fill();


    }

    function drawPath289() {
        context.beginPath();
        context.moveTo(253.03, 380.55);
        context.bezierCurveTo(253.75, 379.16, 254.49, 377.77, 255.16, 376.37);
        context.bezierCurveTo(257.71, 376.99, 260.28, 377.59, 262.77, 378.45);
        context.bezierCurveTo(263.11, 378.84, 263.79, 379.6, 264.13, 379.99);
        context.bezierCurveTo(262.43, 380.39, 260.75, 380.8, 259.07, 381.2);
        context.bezierCurveTo(259.63, 381.76, 260.77, 382.88, 261.35, 383.44);
        context.bezierCurveTo(260.35, 383.8, 259.35, 384.15, 258.35, 384.52);
        context.bezierCurveTo(257.88, 388.63, 257.37, 392.76, 257.31, 396.91);
        context.bezierCurveTo(256.84, 396.28, 255.91, 395.04, 255.44, 394.43);
        context.bezierCurveTo(254.21, 396.23, 254.85, 401.76, 257.81, 399.45);
        context.bezierCurveTo(258.75, 400.72, 259.75, 401.96, 260.73, 403.2);
        context.bezierCurveTo(260.53, 401.27, 260.35, 399.32, 260.2, 397.4);
        context.bezierCurveTo(263.2, 400.61, 264.52, 404.88, 266.44, 408.75);
        context.bezierCurveTo(265.96, 409.21, 265.01, 410.13, 264.55, 410.6);
        context.bezierCurveTo(266.08, 413.55, 268.03, 416.24, 269.8, 419.04);
        context.bezierCurveTo(268.79, 418.77, 266.76, 418.24, 265.75, 417.97);
        context.bezierCurveTo(268.11, 421.33, 271.53, 423.65, 274.95, 425.84);
        context.bezierCurveTo(275.4, 425.68, 276.32, 425.37, 276.79, 425.23);
        context.bezierCurveTo(277.19, 425.04, 277.97, 424.67, 278.37, 424.48);
        context.bezierCurveTo(278.25, 422.83, 278.08, 421.17, 277.92, 419.53);
        context.bezierCurveTo(279.11, 419.76, 280.29, 419.99, 281.48, 420.21);
        context.bezierCurveTo(283.79, 426.03, 287.92, 430.91, 290.11, 436.8);
        context.bezierCurveTo(289.69, 437.97, 289.15, 439.09, 288.68, 440.27);
        context.bezierCurveTo(288.89, 440.59, 289.31, 441.21, 289.52, 441.53);
        context.bezierCurveTo(287.55, 442.43, 285.57, 443.28, 283.6, 444.16);
        context.bezierCurveTo(275.31, 437.15, 269.85, 427.43, 261.13, 420.85);
        context.bezierCurveTo(260.83, 421.56, 260.23, 422.97, 259.92, 423.68);
        context.bezierCurveTo(258.71, 416.92, 254.29, 411.43, 251.43, 405.33);
        context.bezierCurveTo(250.64, 402.07, 250.03, 398.76, 249.8, 395.41);
        context.bezierCurveTo(248.69, 390.15, 250.28, 385.01, 253.03, 380.55);
        context.closePath();
        context.fillStyle = fillColor270;
        context.fill();


    }

    function drawPath290() {
        context.save();
        context.globalAlpha = 0.86;
        context.beginPath();
        context.moveTo(367.15, 378.49);
        context.bezierCurveTo(368.16, 377.61, 369.2, 376.75, 370.23, 375.88);
        context.bezierCurveTo(371.52, 381.21, 371.43, 386.75, 371.65, 392.2);
        context.bezierCurveTo(373.41, 391.03, 375.21, 389.88, 376.91, 388.61);
        context.bezierCurveTo(373.65, 392.55, 370.53, 396.6, 367.88, 400.97);
        context.bezierCurveTo(369.25, 395.64, 370.49, 390.2, 370.28, 384.67);
        context.bezierCurveTo(370.07, 382.84, 370.43, 380.59, 368.79, 379.31);
        context.lineTo(367.15, 378.49);
        context.closePath();
        context.fillStyle = fillColor271;
        context.fill();
        context.restore();


    }

    function drawPath291() {
        context.beginPath();
        context.moveTo(414.91, 404.96);
        context.bezierCurveTo(430.16, 393.31, 447.8, 385.31, 464.89, 376.73);
        context.bezierCurveTo(454.07, 384.47, 441.64, 389.59, 430.49, 396.84);
        context.bezierCurveTo(421.79, 401.29, 414.16, 407.67, 405, 411.24);
        context.bezierCurveTo(407.84, 408.44, 411.47, 406.84, 414.91, 404.96);
        context.closePath();
        context.fillStyle = fillColor103;
        context.fill();


    }

    function drawPath292() {
        context.beginPath();
        context.moveTo(309.01, 386.27);
        context.bezierCurveTo(308.69, 383.35, 307.96, 380.27, 309.32, 377.48);
        context.bezierCurveTo(310.17, 379.84, 311.03, 382.27, 310.88, 384.83);
        context.lineTo(309.01, 386.27);
        context.closePath();
        context.fillStyle = fillColor272;
        context.fill();


    }

    function drawPath293() {
        context.beginPath();
        context.moveTo(163.67, 378.88);
        context.lineTo(164.85, 379.89);
        context.bezierCurveTo(165.59, 383.67, 167.07, 387.2, 168.96, 390.53);
        context.bezierCurveTo(172.04, 395.93, 172.09, 402.57, 175.71, 407.73);
        context.bezierCurveTo(179.29, 413.13, 183.01, 418.63, 184.99, 424.87);
        context.bezierCurveTo(185.47, 428.32, 184.93, 431.81, 185.11, 435.29);
        context.bezierCurveTo(185.24, 441.32, 187.83, 447.11, 187.13, 453.19);
        context.bezierCurveTo(185.77, 448.07, 183.84, 443.07, 183.27, 437.79);
        context.bezierCurveTo(182.79, 433.2, 184.12, 428.29, 181.88, 424.01);
        context.bezierCurveTo(179.29, 416.45, 172.75, 410.92, 171.15, 402.96);
        context.bezierCurveTo(169.43, 395.32, 164.69, 388.75, 163.39, 381);
        context.lineTo(163.67, 378.88);
        context.closePath();
        context.fillStyle = fillColor273;
        context.fill();


    }

    function drawPath294() {
        context.beginPath();
        context.moveTo(368.79, 379.31);
        context.bezierCurveTo(370.43, 380.59, 370.07, 382.84, 370.28, 384.67);
        context.bezierCurveTo(370.49, 390.2, 369.25, 395.64, 367.88, 400.97);
        context.bezierCurveTo(366.6, 405.44, 366.2, 410.15, 364.33, 414.44);
        context.bezierCurveTo(361.79, 421.59, 356.64, 427.29, 352.33, 433.39);
        context.bezierCurveTo(348.37, 435.64, 344.75, 438.4, 340.91, 440.81);
        context.bezierCurveTo(343.83, 433.99, 349.16, 428.56, 353.01, 422.28);
        context.bezierCurveTo(352.71, 421, 352.39, 419.73, 352.08, 418.48);
        context.bezierCurveTo(355.81, 412.69, 356.92, 405.63, 358.41, 399.03);
        context.bezierCurveTo(359.41, 395.65, 356.09, 394.33, 353.69, 393.2);
        context.bezierCurveTo(354.09, 392.55, 354.89, 391.24, 355.29, 390.6);
        context.bezierCurveTo(356.45, 390.56, 357.63, 390.53, 358.81, 390.53);
        context.bezierCurveTo(359.72, 391.88, 360.64, 393.23, 361.57, 394.56);
        context.bezierCurveTo(361.41, 392.31, 361.16, 390.07, 361, 387.81);
        context.bezierCurveTo(361.59, 387.01, 362.2, 386.23, 362.84, 385.45);
        context.bezierCurveTo(364.19, 384.31, 365.53, 383.13, 366.67, 381.76);
        context.bezierCurveTo(367.2, 381.15, 368.25, 379.92, 368.79, 379.31);
        context.closePath();
        context.moveTo(361.72, 406.21);
        context.bezierCurveTo(361.03, 408.11, 361.63, 408.71, 363.52, 407.99);
        context.bezierCurveTo(364.2, 406.08, 363.6, 405.49, 361.72, 406.21);
        context.closePath();
        context.moveTo(359.2, 410.4);
        context.bezierCurveTo(357.84, 410.81, 356.12, 412.4, 356.72, 413.95);
        context.bezierCurveTo(358.57, 415.23, 361.88, 411, 359.2, 410.4);
        context.closePath();
        context.fillStyle = fillColor274;
        context.fill();


    }

    function drawPath295() {
        context.save();
        context.globalAlpha = 0.82;
        context.beginPath();
        context.moveTo(382.56, 382.24);
        context.bezierCurveTo(382.51, 380.05, 383.56, 379.03, 385.72, 379.19);
        context.bezierCurveTo(385.2, 380.75, 384.15, 381.76, 382.56, 382.24);
        context.closePath();
        context.fillStyle = fillColor275;
        context.fill();
        context.restore();


    }

    function drawPath296() {
        context.beginPath();
        context.moveTo(498.59, 388.48);
        context.bezierCurveTo(505.87, 387.51, 510.45, 380.93, 517.19, 378.73);
        context.bezierCurveTo(517.88, 380.43, 518.61, 382.15, 519.35, 383.85);
        context.bezierCurveTo(516.43, 384.83, 513.33, 385.59, 510.88, 387.53);
        context.bezierCurveTo(507.41, 390.12, 506, 394.4, 504.11, 398.11);
        context.bezierCurveTo(503.41, 399.59, 502.75, 401.05, 502.08, 402.55);
        context.bezierCurveTo(501.6, 402.17, 501.15, 401.81, 500.71, 401.45);
        context.bezierCurveTo(499.89, 402.79, 499.12, 404.15, 498.2, 405.41);
        context.bezierCurveTo(494.8, 406.25, 491.27, 405.85, 487.81, 406);
        context.bezierCurveTo(491.77, 403.07, 493.56, 398.33, 495.28, 393.92);
        context.bezierCurveTo(492.28, 393.85, 489.09, 393.44, 486.4, 395.09);
        context.bezierCurveTo(480.63, 398.21, 473.31, 399.28, 469.39, 405.08);
        context.bezierCurveTo(461.44, 404.71, 455.36, 410.61, 448.28, 413.24);
        context.bezierCurveTo(448.77, 413.64, 449.77, 414.43, 450.27, 414.81);
        context.bezierCurveTo(445.69, 415.85, 440.33, 416.15, 437.4, 420.36);
        context.bezierCurveTo(436, 419.84, 434.57, 419.4, 433.17, 418.95);
        context.bezierCurveTo(444.87, 412.48, 456.15, 405.25, 468.19, 399.39);
        context.bezierCurveTo(476.92, 395.35, 485.12, 390.23, 494.03, 386.53);
        context.bezierCurveTo(495.51, 387.21, 496.84, 388.49, 498.59, 388.48);
        context.closePath();
        context.fillStyle = fillColor276;
        context.fill();


    }

    function drawPath297() {
        context.beginPath();
        context.moveTo(22.04, 381.04);
        context.bezierCurveTo(25.32, 380.04, 25.89, 384.96, 27.75, 386.6);
        context.lineTo(25.73, 387.92);
        context.bezierCurveTo(27.72, 389.2, 30.51, 395.61, 26.16, 394.59);
        context.bezierCurveTo(27.37, 389.57, 24.27, 385.21, 22.04, 381.04);
        context.closePath();
        context.fillStyle = fillColor242;
        context.fill();


    }

    function drawPath298() {
        context.beginPath();
        context.moveTo(259.07, 381.2);
        context.bezierCurveTo(260.75, 380.8, 262.43, 380.39, 264.13, 379.99);
        context.bezierCurveTo(267.77, 385.43, 274.33, 387.84, 279.35, 391.81);
        context.bezierCurveTo(278.49, 393.55, 277.93, 395.39, 277.55, 397.29);
        context.bezierCurveTo(276.84, 397.29, 275.44, 397.29, 274.73, 397.29);
        context.bezierCurveTo(273.88, 403.87, 277.44, 409.49, 279.95, 415.24);
        context.bezierCurveTo(280.48, 416.88, 280.95, 418.56, 281.48, 420.21);
        context.bezierCurveTo(280.29, 419.99, 279.11, 419.76, 277.92, 419.53);
        context.bezierCurveTo(278.08, 421.17, 278.25, 422.83, 278.37, 424.48);
        context.bezierCurveTo(277.97, 424.67, 277.19, 425.04, 276.79, 425.23);
        context.bezierCurveTo(272.93, 420, 269.59, 414.41, 266.44, 408.75);
        context.bezierCurveTo(264.52, 404.88, 263.2, 400.61, 260.2, 397.4);
        context.bezierCurveTo(260.35, 399.32, 260.53, 401.27, 260.73, 403.2);
        context.bezierCurveTo(259.75, 401.96, 258.75, 400.72, 257.81, 399.45);
        context.bezierCurveTo(257.68, 398.81, 257.44, 397.55, 257.31, 396.91);
        context.bezierCurveTo(257.37, 392.76, 257.88, 388.63, 258.35, 384.52);
        context.bezierCurveTo(259.35, 384.15, 260.35, 383.8, 261.35, 383.44);
        context.bezierCurveTo(260.77, 382.88, 259.63, 381.76, 259.07, 381.2);
        context.closePath();
        context.moveTo(259.21, 392.85);
        context.bezierCurveTo(258.27, 395.16, 262.05, 396.49, 263.8, 395.93);
        context.bezierCurveTo(264.32, 393.85, 261.03, 391.24, 259.21, 392.85);
        context.closePath();
        context.fillStyle = fillColor68;
        context.fill();


    }

    function drawPath299() {
        context.beginPath();
        context.moveTo(264.13, 379.99);
        context.bezierCurveTo(270.15, 382.65, 275.13, 387.01, 280.84, 390.23);
        context.bezierCurveTo(280.27, 388.92, 279.69, 387.63, 279.12, 386.35);
        context.bezierCurveTo(279.97, 386.11, 281.69, 385.63, 282.55, 385.39);
        context.bezierCurveTo(285.69, 389.69, 287.87, 394.64, 288.88, 399.88);
        context.bezierCurveTo(285.44, 396.95, 284.56, 392.36, 283.05, 388.32);
        context.bezierCurveTo(283.27, 392.28, 283.35, 396.33, 284.68, 400.13);
        context.bezierCurveTo(286.25, 403.91, 289.21, 407.03, 290.19, 411.08);
        context.bezierCurveTo(281.89, 407.76, 284.04, 397.69, 279.35, 391.81);
        context.bezierCurveTo(274.33, 387.84, 267.77, 385.43, 264.13, 379.99);
        context.closePath();
        context.fillStyle = fillColor277;
        context.fill();


    }

    function drawPath300() {
        context.beginPath();
        context.moveTo(362.15, 381.79);
        context.bezierCurveTo(363.61, 381.35, 365.17, 381.56, 366.67, 381.76);
        context.bezierCurveTo(365.53, 383.13, 364.19, 384.31, 362.84, 385.45);
        context.bezierCurveTo(361.92, 384.35, 361.68, 383.13, 362.15, 381.79);
        context.closePath();
        context.fillStyle = fillColor278;
        context.fill();


    }

    function drawPath301() {
        context.beginPath();
        context.moveTo(27.93, 383.39);
        context.lineTo(28.59, 383.37);
        context.bezierCurveTo(31.08, 386.76, 34.03, 389.8, 37.49, 392.2);
        context.bezierCurveTo(37.77, 392.65, 38.32, 393.55, 38.59, 393.99);
        context.bezierCurveTo(39.65, 395.81, 40.73, 397.6, 41.8, 399.43);
        context.lineTo(41.21, 400.56);
        context.bezierCurveTo(36.72, 396.09, 32.56, 391.31, 28.11, 386.8);
        context.lineTo(27.69, 385.92);
        context.bezierCurveTo(27.75, 385.29, 27.88, 384.01, 27.93, 383.39);
        context.closePath();
        context.fillStyle = fillColor279;
        context.fill();


    }

    function drawPath302() {
        context.beginPath();
        context.moveTo(28.59, 383.37);
        context.bezierCurveTo(29.44, 383.35, 31.16, 383.32, 32.01, 383.29);
        context.bezierCurveTo(34.81, 385.56, 36.79, 388.64, 37.49, 392.2);
        context.bezierCurveTo(34.03, 389.8, 31.08, 386.76, 28.59, 383.37);
        context.closePath();
        context.fillStyle = fillColor280;
        context.fill();


    }

    function drawPath303() {
        context.save();
        context.globalAlpha = 0.85;
        context.beginPath();
        context.moveTo(378.69, 386.51);
        context.bezierCurveTo(378.44, 384.35, 379.4, 383.23, 381.56, 383.13);
        context.bezierCurveTo(381.2, 384.75, 380.24, 385.88, 378.69, 386.51);
        context.closePath();
        context.fillStyle = fillColor281;
        context.fill();
        context.restore();


    }

    function drawPath304() {
        context.beginPath();
        context.moveTo(478.91, 389.92);
        context.bezierCurveTo(485.28, 387.55, 490.85, 382.43, 498.01, 382.81);
        context.bezierCurveTo(496.71, 384.08, 495.39, 385.32, 494.03, 386.53);
        context.bezierCurveTo(485.12, 390.23, 476.92, 395.35, 468.19, 399.39);
        context.bezierCurveTo(456.15, 405.25, 444.87, 412.48, 433.17, 418.95);
        context.bezierCurveTo(430.31, 420.56, 427.2, 421.69, 424.09, 422.72);
        context.bezierCurveTo(423.51, 421.45, 422.97, 420.17, 422.45, 418.89);
        context.bezierCurveTo(428.52, 419.01, 432.79, 414.21, 438.09, 412.05);
        context.bezierCurveTo(444.76, 409.28, 450.28, 404.49, 456.68, 401.21);
        context.bezierCurveTo(464.13, 397.53, 471.08, 392.85, 478.91, 389.92);
        context.closePath();
        context.fillStyle = fillColor282;
        context.fill();


    }

    function drawPath305() {
        context.beginPath();
        context.moveTo(88.27, 385.09);
        context.bezierCurveTo(91.36, 386.49, 94.53, 387.68, 97.75, 388.75);
        context.bezierCurveTo(100.15, 390.51, 102.41, 392.47, 104.4, 394.68);
        context.bezierCurveTo(109.52, 400.29, 116.11, 404.28, 121.24, 409.87);
        context.bezierCurveTo(125.07, 414.64, 129.77, 418.85, 135.16, 421.8);
        context.bezierCurveTo(136.11, 422.57, 137.03, 423.4, 137.91, 424.27);
        context.bezierCurveTo(139.93, 427.03, 142.11, 429.95, 145.64, 430.76);
        context.lineTo(146.23, 431.01);
        context.bezierCurveTo(146.95, 431.75, 147.67, 432.49, 148.41, 433.24);
        context.bezierCurveTo(149.08, 435.23, 150.87, 436.36, 152.41, 437.61);
        context.bezierCurveTo(156.01, 440.33, 159.27, 443.47, 162.88, 446.17);
        context.bezierCurveTo(164.24, 447.25, 165.61, 448.31, 166.99, 449.39);
        context.bezierCurveTo(166.84, 455.12, 170.95, 459.43, 174.48, 463.44);
        context.bezierCurveTo(185.01, 475.19, 191.6, 489.95, 202.59, 501.32);
        context.bezierCurveTo(204.69, 504.15, 206.31, 507.29, 207.92, 510.41);
        context.bezierCurveTo(211.91, 517.28, 213.36, 525.44, 218.23, 531.81);
        context.bezierCurveTo(219.6, 533.83, 222.04, 534.53, 224.19, 535.41);
        context.bezierCurveTo(224.08, 538.93, 225.72, 542.12, 226.23, 545.52);
        context.bezierCurveTo(226.28, 548.55, 223.69, 550.15, 221.28, 551.27);
        context.bezierCurveTo(218.31, 549.92, 215.17, 548.79, 211.91, 548.57);
        context.bezierCurveTo(210.33, 549.76, 209.03, 551.24, 207.65, 552.64);
        context.bezierCurveTo(206.67, 552.77, 204.69, 553.04, 203.72, 553.17);
        context.bezierCurveTo(200.51, 551.69, 197.65, 549.59, 195.04, 547.24);
        context.bezierCurveTo(198.61, 546.77, 201.96, 548.19, 205.25, 549.35);
        context.bezierCurveTo(206.25, 546.41, 207.43, 543.53, 208.72, 540.71);
        context.bezierCurveTo(201.47, 535.39, 194.96, 529.17, 189.41, 522.09);
        context.bezierCurveTo(183.04, 515.12, 173.69, 512.04, 166.48, 506.07);
        context.bezierCurveTo(157.53, 499.8, 151.71, 489.81, 141.72, 484.92);
        context.bezierCurveTo(143.07, 483.75, 144.39, 482.55, 145.73, 481.39);
        context.bezierCurveTo(152.77, 486.07, 157.8, 493.27, 165.24, 497.37);
        context.bezierCurveTo(163.88, 494.27, 162.09, 491.35, 160.88, 488.17);
        context.bezierCurveTo(161.23, 487.65, 161.92, 486.63, 162.27, 486.11);
        context.bezierCurveTo(160.52, 484.16, 158.75, 482.24, 156.88, 480.43);
        context.bezierCurveTo(154.44, 478.01, 151.83, 475.75, 149.01, 473.79);
        context.bezierCurveTo(144.85, 468.6, 144.89, 461.45, 144.23, 455.13);
        context.bezierCurveTo(151.4, 460.79, 158.17, 467.08, 163.45, 474.57);
        context.bezierCurveTo(165.28, 477.4, 164.04, 482.07, 167.93, 483.29);
        context.bezierCurveTo(172.41, 485.57, 176.29, 488.8, 180.61, 491.35);
        context.bezierCurveTo(182.21, 492.89, 183.67, 494.6, 185.11, 496.32);
        context.bezierCurveTo(182.52, 498.81, 185.97, 501.12, 188.16, 502.09);
        context.bezierCurveTo(187.92, 503.69, 187.71, 505.29, 187.49, 506.91);
        context.bezierCurveTo(185.79, 507.67, 184.08, 508.44, 182.37, 509.23);
        context.bezierCurveTo(185.37, 514.88, 191.71, 517.48, 195.65, 522.39);
        context.bezierCurveTo(198.37, 525.87, 202.84, 526.63, 206.93, 527.31);
        context.bezierCurveTo(203.68, 516.07, 194.79, 507.88, 189.35, 497.79);
        context.bezierCurveTo(187.92, 495.04, 185.49, 493.07, 183.01, 491.33);
        context.bezierCurveTo(174.68, 480.17, 167.64, 467.36, 155.79, 459.45);
        context.bezierCurveTo(156.19, 458.73, 157, 457.31, 157.4, 456.59);
        context.bezierCurveTo(153.47, 451.55, 147.72, 448.36, 142.4, 444.99);
        context.bezierCurveTo(137.77, 441.63, 135.01, 436.43, 131.05, 432.4);
        context.bezierCurveTo(123.72, 423.45, 113, 418.49, 104.4, 411.01);
        context.bezierCurveTo(100.53, 407.13, 96.12, 403.88, 91.6, 400.81);
        context.bezierCurveTo(87.57, 398.03, 88.55, 392.65, 88.31, 388.45);
        context.bezierCurveTo(88.29, 387.61, 88.28, 385.93, 88.27, 385.09);
        context.closePath();
        context.moveTo(171.79, 500.29);
        context.bezierCurveTo(173.41, 504.49, 175.37, 510.11, 180.59, 510.69);
        context.lineTo(180.05, 509.51);
        context.bezierCurveTo(180.71, 505.47, 177.15, 502.27, 174.09, 500.28);
        context.lineTo(174.32, 502.53);
        context.bezierCurveTo(173.68, 501.97, 172.41, 500.85, 171.79, 500.29);
        context.closePath();
        context.fillStyle = fillColor283;
        context.fill();


    }

    function drawPath306() {
        context.beginPath();
        context.moveTo(282.55, 385.39);
        context.bezierCurveTo(285.17, 385.33, 287.8, 385.52, 290.44, 385.51);
        context.bezierCurveTo(290.61, 387.45, 290.79, 389.4, 290.97, 391.36);
        context.bezierCurveTo(292.67, 391.83, 294.35, 392.29, 296.04, 392.76);
        context.bezierCurveTo(295.92, 393.95, 295.81, 395.15, 295.72, 396.35);
        context.bezierCurveTo(294.04, 395.4, 292.33, 394.48, 290.61, 393.64);
        context.bezierCurveTo(290.92, 396.51, 292.04, 399.17, 293.61, 401.59);
        context.bezierCurveTo(290.99, 408.49, 298.45, 413.72, 297.45, 420.65);
        context.bezierCurveTo(296.77, 420.69, 295.41, 420.76, 294.73, 420.79);
        context.bezierCurveTo(294.88, 420.2, 295.19, 419, 295.33, 418.4);
        context.bezierCurveTo(296.29, 414.67, 292.68, 412.95, 290.19, 411.08);
        context.bezierCurveTo(289.21, 407.03, 286.25, 403.91, 284.68, 400.13);
        context.bezierCurveTo(283.35, 396.33, 283.27, 392.28, 283.05, 388.32);
        context.bezierCurveTo(284.56, 392.36, 285.44, 396.95, 288.88, 399.88);
        context.bezierCurveTo(287.87, 394.64, 285.69, 389.69, 282.55, 385.39);
        context.closePath();
        context.fillStyle = fillColor284;
        context.fill();


    }

    function drawPath307() {
        context.beginPath();
        context.moveTo(290.44, 385.51);
        context.bezierCurveTo(291.25, 385.52, 292.91, 385.53, 293.72, 385.53);
        context.bezierCurveTo(294.68, 387.4, 295.49, 389.33, 296.16, 391.33);
        context.lineTo(296.04, 392.76);
        context.bezierCurveTo(294.35, 392.29, 292.67, 391.83, 290.97, 391.36);
        context.bezierCurveTo(290.79, 389.4, 290.61, 387.45, 290.44, 385.51);
        context.closePath();
        context.fillStyle = fillColor285;
        context.fill();


    }

    function drawPath308() {
        context.beginPath();
        context.moveTo(28.11, 386.8);
        context.bezierCurveTo(32.56, 391.31, 36.72, 396.09, 41.21, 400.56);
        context.lineTo(41.27, 401.92);
        context.bezierCurveTo(41.37, 404.17, 41.52, 406.44, 41.67, 408.71);
        context.bezierCurveTo(39.73, 409.39, 37.81, 410.08, 35.89, 410.79);
        context.bezierCurveTo(34.48, 407.17, 32.36, 403.91, 30.83, 400.35);
        context.bezierCurveTo(29.43, 395.95, 29.31, 391.25, 28.11, 386.8);
        context.closePath();
        context.fillStyle = fillColor286;
        context.fill();


    }

    function drawPath309() {
        context.beginPath();
        context.moveTo(209.65, 386.6);
        context.bezierCurveTo(213.23, 390.88, 208.84, 395.03, 207.29, 399.08);
        context.bezierCurveTo(206, 401.77, 207.44, 404.69, 207.84, 407.44);
        context.bezierCurveTo(207.31, 407.68, 206.25, 408.17, 205.73, 408.43);
        context.bezierCurveTo(205.97, 414.12, 205.23, 419.77, 204.83, 425.45);
        context.bezierCurveTo(204.52, 428.51, 207.09, 430.63, 209.17, 432.43);
        context.bezierCurveTo(209.96, 432.32, 211.55, 432.09, 212.35, 431.99);
        context.bezierCurveTo(215.91, 443.33, 213.84, 455.48, 210.52, 466.61);
        context.bezierCurveTo(207.64, 461.83, 205.05, 456.68, 204.47, 451.04);
        context.bezierCurveTo(206.17, 444.2, 203.73, 437.28, 201.92, 430.72);
        context.bezierCurveTo(201.03, 434.01, 200.72, 437.44, 201.17, 440.84);
        context.bezierCurveTo(200.23, 435.8, 198.47, 430.81, 198.93, 425.6);
        context.lineTo(199.2, 425.96);
        context.bezierCurveTo(199.71, 426.65, 200.23, 427.33, 200.76, 428.03);
        context.bezierCurveTo(200.76, 419.64, 202.88, 411.45, 204.12, 403.2);
        context.bezierCurveTo(204.95, 397.37, 207.12, 391.88, 209.65, 386.6);
        context.closePath();
        context.fillStyle = fillColor287;
        context.fill();


    }

    function drawPath310() {
        context.beginPath();
        context.moveTo(38.84, 392.59);
        context.bezierCurveTo(40.11, 394.13, 41.32, 395.73, 42.55, 397.33);
        context.bezierCurveTo(43.99, 396.6, 45.43, 395.89, 46.88, 395.19);
        context.bezierCurveTo(46.6, 395.81, 46.03, 397.08, 45.73, 397.71);
        context.bezierCurveTo(45.24, 398.92, 44.79, 400.15, 44.36, 401.4);
        context.lineTo(43.97, 402.64);
        context.bezierCurveTo(43.75, 401.23, 43.03, 400.16, 41.8, 399.43);
        context.bezierCurveTo(40.73, 397.6, 39.65, 395.81, 38.59, 393.99);
        context.lineTo(38.84, 392.59);
        context.closePath();
        context.fillStyle = fillColor288;
        context.fill();


    }

    function drawPath311() {
        context.beginPath();
        context.moveTo(239.51, 414.49);
        context.bezierCurveTo(235.97, 406.96, 240.39, 398.85, 245.17, 393.03);
        context.bezierCurveTo(246.71, 393.81, 248.25, 394.6, 249.8, 395.41);
        context.bezierCurveTo(250.03, 398.76, 250.64, 402.07, 251.43, 405.33);
        context.bezierCurveTo(250.13, 411.32, 249.48, 417.44, 248.2, 423.43);
        context.bezierCurveTo(247.64, 426.8, 243.85, 428.51, 243.57, 431.96);
        context.bezierCurveTo(243.07, 437.05, 243.2, 442.29, 241.28, 447.15);
        context.bezierCurveTo(238.84, 452.88, 239.47, 459.24, 238.12, 465.23);
        context.bezierCurveTo(237.15, 469.45, 236.47, 473.75, 235.93, 478.05);
        context.bezierCurveTo(234.64, 487.97, 231.35, 497.49, 227.77, 506.8);
        context.bezierCurveTo(227.19, 506.89, 226.04, 507.08, 225.47, 507.17);
        context.lineTo(223.57, 507.39);
        context.bezierCurveTo(225.27, 511.17, 227.03, 514.96, 228.08, 519);
        context.bezierCurveTo(228.01, 522.37, 228.17, 525.73, 228.6, 529.09);
        context.bezierCurveTo(220.87, 521.44, 212.24, 513.03, 211.59, 501.44);
        context.bezierCurveTo(214.61, 502.33, 217.63, 503.31, 220.63, 504.32);
        context.bezierCurveTo(223.2, 499.93, 225.49, 495.21, 225.15, 489.97);
        context.bezierCurveTo(225.08, 479.07, 228.92, 468.68, 229.6, 457.87);
        context.bezierCurveTo(230.01, 453.19, 231.29, 448.65, 232.16, 444.05);
        context.bezierCurveTo(233.92, 434.28, 234.91, 424.39, 237.09, 414.69);
        context.bezierCurveTo(237.69, 414.64, 238.91, 414.55, 239.51, 414.49);
        context.closePath();
        context.fillStyle = fillColor289;
        context.fill();


    }

    function drawPath312() {
        context.beginPath();
        context.moveTo(259.21, 392.85);
        context.bezierCurveTo(261.03, 391.24, 264.32, 393.85, 263.8, 395.93);
        context.bezierCurveTo(262.05, 396.49, 258.27, 395.16, 259.21, 392.85);
        context.closePath();
        context.fillStyle = fillColor290;
        context.fill();


    }

    function drawPath313() {
        context.beginPath();
        context.moveTo(277.55, 397.29);
        context.bezierCurveTo(277.93, 395.39, 278.49, 393.55, 279.35, 391.81);
        context.bezierCurveTo(284.04, 397.69, 281.89, 407.76, 290.19, 411.08);
        context.bezierCurveTo(292.68, 412.95, 296.29, 414.67, 295.33, 418.4);
        context.bezierCurveTo(292, 417.27, 288.64, 416.16, 285.43, 414.71);
        context.bezierCurveTo(283.57, 412.72, 281.72, 410.65, 280.51, 408.21);
        context.bezierCurveTo(279.33, 404.61, 279.41, 400.67, 277.55, 397.29);
        context.closePath();
        context.fillStyle = fillColor291;
        context.fill();


    }

    function drawPath314() {
        context.beginPath();
        context.moveTo(46.88, 395.19);
        context.bezierCurveTo(50.03, 393.36, 53.75, 393.63, 57.24, 393.48);
        context.bezierCurveTo(57.81, 394.03, 58.97, 395.13, 59.55, 395.68);
        context.bezierCurveTo(55.41, 398.31, 50.4, 397.75, 45.73, 397.71);
        context.bezierCurveTo(46.03, 397.08, 46.6, 395.81, 46.88, 395.19);
        context.closePath();
        context.fillStyle = fillColor292;
        context.fill();


    }

    function drawPath315() {
        context.beginPath();
        context.moveTo(257.81, 399.45);
        context.bezierCurveTo(254.85, 401.76, 254.21, 396.23, 255.44, 394.43);
        context.bezierCurveTo(255.91, 395.04, 256.84, 396.28, 257.31, 396.91);
        context.bezierCurveTo(257.44, 397.55, 257.68, 398.81, 257.81, 399.45);
        context.closePath();
        context.fillStyle = fillColor293;
        context.fill();


    }

    function drawPath316() {
        context.beginPath();
        context.moveTo(290.61, 393.64);
        context.bezierCurveTo(292.33, 394.48, 294.04, 395.4, 295.72, 396.35);
        context.bezierCurveTo(295.71, 397.03, 295.67, 398.37, 295.64, 399.04);
        context.bezierCurveTo(295.13, 399.68, 294.12, 400.95, 293.61, 401.59);
        context.bezierCurveTo(292.04, 399.17, 290.92, 396.51, 290.61, 393.64);
        context.closePath();
        context.fillStyle = fillColor294;
        context.fill();


    }

    function drawPath317() {
        context.beginPath();
        context.moveTo(486.4, 395.09);
        context.bezierCurveTo(489.09, 393.44, 492.28, 393.85, 495.28, 393.92);
        context.bezierCurveTo(493.56, 398.33, 491.77, 403.07, 487.81, 406);
        context.bezierCurveTo(474.33, 409.88, 464.69, 420.84, 452.35, 426.95);
        context.bezierCurveTo(451.51, 427.55, 449.85, 428.76, 449.03, 429.37);
        context.bezierCurveTo(445.17, 426.33, 441.45, 423.12, 437.4, 420.36);
        context.bezierCurveTo(440.33, 416.15, 445.69, 415.85, 450.27, 414.81);
        context.bezierCurveTo(449.77, 414.43, 448.77, 413.64, 448.28, 413.24);
        context.bezierCurveTo(455.36, 410.61, 461.44, 404.71, 469.39, 405.08);
        context.bezierCurveTo(473.31, 399.28, 480.63, 398.21, 486.4, 395.09);
        context.closePath();
        context.fillStyle = fillColor295;
        context.fill();


    }

    function drawPath318() {
        context.beginPath();
        context.moveTo(59.55, 395.68);
        context.lineTo(59.96, 396.07);
        context.lineTo(60.03, 396.16);
        context.bezierCurveTo(60.81, 397.32, 61.64, 398.43, 62.53, 399.51);
        context.bezierCurveTo(63.31, 399.83, 64.11, 400.07, 64.93, 400.23);
        context.bezierCurveTo(65.88, 400.59, 66.85, 400.91, 67.84, 401.17);
        context.bezierCurveTo(66.2, 401.63, 64.55, 402.07, 62.88, 402.49);
        context.bezierCurveTo(63.33, 402.73, 64.24, 403.2, 64.69, 403.43);
        context.bezierCurveTo(71.41, 407.87, 79.28, 410.12, 85.93, 414.69);
        context.bezierCurveTo(88.31, 416.49, 91.27, 416.4, 94.09, 416.36);
        context.bezierCurveTo(95.48, 416.84, 96.59, 417.8, 97.75, 418.68);
        context.bezierCurveTo(84.15, 420.28, 73.41, 409.79, 60.93, 406.47);
        context.bezierCurveTo(58.45, 405.59, 57.35, 408.59, 55.75, 409.87);
        context.bezierCurveTo(56.85, 411.57, 57.95, 413.29, 59.13, 414.96);
        context.bezierCurveTo(59.72, 415.32, 60.91, 416.03, 61.49, 416.39);
        context.lineTo(59.35, 416.41);
        context.bezierCurveTo(63.81, 420.77, 68.55, 425.12, 74.47, 427.39);
        context.bezierCurveTo(74.99, 427.08, 76.01, 426.48, 76.52, 426.17);
        context.lineTo(77.31, 425.71);
        context.bezierCurveTo(78.43, 427.89, 81.72, 429.51, 82.72, 426.29);
        context.bezierCurveTo(84.11, 426.95, 85.51, 427.59, 86.92, 428.19);
        context.lineTo(85.03, 428.83);
        context.bezierCurveTo(88.28, 430.88, 91.4, 433.15, 94.32, 435.67);
        context.bezierCurveTo(95.44, 436.75, 96.88, 437.43, 98.48, 437.25);
        context.bezierCurveTo(104.56, 440.57, 109.81, 445.13, 114.79, 449.91);
        context.bezierCurveTo(117.35, 452.4, 117.88, 456.16, 119.37, 459.31);
        context.bezierCurveTo(119.79, 460.04, 120.63, 461.53, 121.04, 462.28);
        context.bezierCurveTo(124.19, 467.47, 128.19, 472.15, 130.77, 477.68);
        context.bezierCurveTo(127.77, 476.91, 124.51, 476.53, 121.97, 474.63);
        context.bezierCurveTo(116.12, 469.8, 112.59, 462.72, 106.64, 458.01);
        context.bezierCurveTo(104.87, 456.36, 102.89, 457.36, 101.28, 458.59);
        context.bezierCurveTo(104.97, 461.16, 108.59, 463.87, 112.07, 466.73);
        context.bezierCurveTo(110.4, 466.85, 108.75, 466.95, 107.12, 467.24);
        context.bezierCurveTo(104.01, 464.85, 100.77, 462.61, 98.04, 459.8);
        context.bezierCurveTo(97.77, 459.16, 97.24, 457.89, 96.97, 457.25);
        context.bezierCurveTo(98.01, 457, 100.11, 456.52, 101.15, 456.27);
        context.bezierCurveTo(100.04, 453.41, 99.41, 449.64, 95.99, 448.69);
        context.bezierCurveTo(90.43, 446.67, 84.72, 444.97, 79.43, 442.29);
        context.bezierCurveTo(75.84, 438.67, 72.49, 433.87, 66.83, 433.84);
        context.bezierCurveTo(69.92, 436.48, 72.91, 439.24, 75.99, 441.89);
        context.bezierCurveTo(68.55, 442.33, 64.12, 435.89, 58.39, 432.49);
        context.bezierCurveTo(59.85, 435.44, 61.83, 438.07, 63.88, 440.63);
        context.bezierCurveTo(60.52, 440.6, 57.19, 440.12, 54.03, 438.97);
        context.bezierCurveTo(53.23, 440.32, 52.43, 441.69, 51.64, 443.05);
        context.bezierCurveTo(48.61, 439.73, 50.09, 435.13, 49.76, 431.11);
        context.bezierCurveTo(51.79, 430.53, 53.81, 429.96, 55.85, 429.4);
        context.bezierCurveTo(55.05, 425.07, 51.16, 423.08, 47.04, 423.2);
        context.bezierCurveTo(47.11, 423.91, 47.25, 425.33, 47.33, 426.05);
        context.bezierCurveTo(45.53, 424.83, 43.75, 423.6, 41.96, 422.36);
        context.bezierCurveTo(41.49, 423.04, 40.55, 424.4, 40.07, 425.08);
        context.bezierCurveTo(35.17, 425.6, 30.21, 424.89, 25.33, 425.8);
        context.bezierCurveTo(24.83, 422.24, 25.43, 418.47, 28.11, 415.88);
        context.bezierCurveTo(28.84, 415.92, 30.29, 416, 31.03, 416.04);
        context.bezierCurveTo(30.63, 421.29, 36.17, 423, 40.37, 423.52);
        context.bezierCurveTo(39.59, 421.8, 38.77, 420.09, 37.97, 418.39);
        context.bezierCurveTo(39.65, 417.97, 41.33, 417.56, 43.01, 417.16);
        context.bezierCurveTo(39.67, 416.59, 36.31, 416.2, 32.93, 416.09);
        context.bezierCurveTo(36.49, 415.84, 40.01, 415.25, 43.53, 414.76);
        context.bezierCurveTo(43.51, 413.61, 43.48, 412.47, 43.45, 411.33);
        context.bezierCurveTo(43.45, 410.75, 43.47, 409.59, 43.47, 409);
        context.bezierCurveTo(43.77, 408.11, 44.39, 406.33, 44.69, 405.45);
        context.bezierCurveTo(45.73, 408.39, 46.49, 411.4, 47.57, 414.33);
        context.bezierCurveTo(49.99, 414.84, 52.47, 414.76, 54.91, 414.84);
        context.bezierCurveTo(53.03, 413.68, 51.13, 412.52, 49.25, 411.37);
        context.bezierCurveTo(48.08, 407.84, 46.37, 404.52, 44.36, 401.4);
        context.bezierCurveTo(44.79, 400.15, 45.24, 398.92, 45.73, 397.71);
        context.bezierCurveTo(50.4, 397.75, 55.41, 398.31, 59.55, 395.68);
        context.closePath();
        context.moveTo(46.85, 417.55);
        context.bezierCurveTo(47.24, 418.2, 48.01, 419.49, 48.41, 420.15);
        context.bezierCurveTo(53.87, 422.8, 58.96, 427.08, 65.28, 427.25);
        context.bezierCurveTo(62.83, 424.39, 60.36, 421.52, 58.08, 418.51);
        context.bezierCurveTo(57.61, 419.05, 56.67, 420.13, 56.2, 420.68);
        context.bezierCurveTo(53.47, 418.68, 50.47, 416.12, 46.85, 417.55);
        context.closePath();
        context.fillStyle = fillColor296;
        context.fill();


    }

    function drawPath319() {
        context.beginPath();
        context.moveTo(60.03, 396.16);
        context.bezierCurveTo(60.45, 395.77, 61.31, 394.97, 61.73, 394.59);
        context.lineTo(62.64, 395.29);
        context.bezierCurveTo(63.32, 396.97, 64.08, 398.61, 64.93, 400.23);
        context.bezierCurveTo(64.11, 400.07, 63.31, 399.83, 62.53, 399.51);
        context.bezierCurveTo(61.64, 398.43, 60.81, 397.32, 60.03, 396.16);
        context.closePath();
        context.fillStyle = fillColor148;
        context.fill();


    }

    function drawPath320() {
        context.beginPath();
        context.moveTo(62.64, 395.29);
        context.bezierCurveTo(70.51, 398.05, 77.31, 404.65, 86.01, 404.23);
        context.bezierCurveTo(89.89, 406.95, 93.44, 410.11, 97.15, 413.07);
        context.bezierCurveTo(97.63, 413.04, 98.56, 412.99, 99.04, 412.96);
        context.lineTo(100.68, 412.84);
        context.bezierCurveTo(105.33, 416.49, 109.96, 420.17, 114.68, 423.73);
        context.bezierCurveTo(115.25, 423.81, 116.39, 423.97, 116.95, 424.04);
        context.bezierCurveTo(122.17, 426.19, 126.56, 430.16, 129.52, 434.95);
        context.bezierCurveTo(132.21, 440.53, 137.43, 444.24, 141.68, 448.56);
        context.bezierCurveTo(141.43, 460.08, 148.61, 473.53, 139.92, 483.52);
        context.bezierCurveTo(137.21, 477.01, 140.29, 468.96, 135.51, 463.36);
        context.bezierCurveTo(132.33, 459.27, 129.61, 454.87, 127.13, 450.33);
        context.bezierCurveTo(124.07, 444.6, 119.11, 439.67, 112.44, 438.63);
        context.bezierCurveTo(115.39, 438.25, 117.99, 437.16, 118.55, 433.97);
        context.bezierCurveTo(114.75, 432.2, 112.31, 428.79, 109.33, 426.03);
        context.bezierCurveTo(104.81, 424.23, 99.97, 423.39, 95.41, 421.65);
        context.bezierCurveTo(94.31, 422.73, 93.21, 423.84, 91.99, 424.8);
        context.bezierCurveTo(82.04, 420.68, 72.39, 415.8, 62.51, 411.53);
        context.bezierCurveTo(60.2, 410.19, 59.89, 413.65, 59.13, 414.96);
        context.bezierCurveTo(57.95, 413.29, 56.85, 411.57, 55.75, 409.87);
        context.bezierCurveTo(57.35, 408.59, 58.45, 405.59, 60.93, 406.47);
        context.bezierCurveTo(73.41, 409.79, 84.15, 420.28, 97.75, 418.68);
        context.bezierCurveTo(96.59, 417.8, 95.48, 416.84, 94.09, 416.36);
        context.bezierCurveTo(84.32, 412.07, 75.72, 404.51, 64.69, 403.43);
        context.bezierCurveTo(64.24, 403.2, 63.33, 402.73, 62.88, 402.49);
        context.bezierCurveTo(64.55, 402.07, 66.2, 401.63, 67.84, 401.17);
        context.bezierCurveTo(66.85, 400.91, 65.88, 400.59, 64.93, 400.23);
        context.bezierCurveTo(64.08, 398.61, 63.32, 396.97, 62.64, 395.29);
        context.closePath();
        context.fillStyle = fillColor297;
        context.fill();


    }

    function drawPath321() {
        context.beginPath();
        context.moveTo(274.73, 397.29);
        context.bezierCurveTo(275.44, 397.29, 276.84, 397.29, 277.55, 397.29);
        context.bezierCurveTo(279.41, 400.67, 279.33, 404.61, 280.51, 408.21);
        context.bezierCurveTo(281.72, 410.65, 283.57, 412.72, 285.43, 414.71);
        context.bezierCurveTo(284.57, 415.15, 282.88, 416.04, 282.03, 416.48);
        context.bezierCurveTo(281.51, 416.17, 280.47, 415.55, 279.95, 415.24);
        context.bezierCurveTo(277.44, 409.49, 273.88, 403.87, 274.73, 397.29);
        context.closePath();
        context.fillStyle = fillColor298;
        context.fill();


    }

    function drawPath322() {
        context.beginPath();
        context.moveTo(823.2, 398.47);
        context.bezierCurveTo(838.72, 395.35, 855.45, 397, 869.57, 404.44);
        context.bezierCurveTo(878.04, 408.61, 886.85, 414.4, 889.97, 423.83);
        context.bezierCurveTo(891.39, 428.32, 895.47, 431.29, 896.79, 435.84);
        context.bezierCurveTo(898.97, 443.01, 903.93, 449.13, 904.95, 456.71);
        context.bezierCurveTo(906.45, 471.29, 914.79, 486.17, 908.19, 500.68);
        context.bezierCurveTo(912.37, 508.01, 913.84, 516.35, 916.56, 524.2);
        context.bezierCurveTo(922.49, 532.99, 920.52, 544.37, 925.83, 553.37);
        context.bezierCurveTo(929.45, 559.61, 929.07, 567.03, 931.12, 573.76);
        context.bezierCurveTo(933.81, 580.89, 935.97, 588.23, 938.36, 595.48);
        context.bezierCurveTo(939.37, 601.83, 939.79, 608.32, 942.39, 614.29);
        context.bezierCurveTo(944.71, 627.23, 947.07, 640.47, 945.21, 653.65);
        context.bezierCurveTo(945.28, 671, 940.73, 687.85, 937.51, 704.76);
        context.bezierCurveTo(935.15, 711.83, 933.97, 719.2, 932.8, 726.53);
        context.bezierCurveTo(932.29, 732.12, 933.12, 737.73, 932.88, 743.35);
        context.bezierCurveTo(932.6, 748.48, 935.21, 753.13, 936.33, 758.04);
        context.bezierCurveTo(938.61, 767.09, 945.36, 774, 948.95, 782.49);
        context.bezierCurveTo(953.45, 786.96, 956.51, 792.57, 960.55, 797.44);
        context.bezierCurveTo(968.49, 807.88, 972.55, 820.64, 979.91, 831.44);
        context.bezierCurveTo(986.64, 840.27, 994.31, 848.39, 1000.37, 857.72);
        context.bezierCurveTo(1005.28, 864.13, 1010.33, 871.12, 1011.27, 879.39);
        context.bezierCurveTo(1012.56, 885.93, 1016.2, 891.71, 1018.71, 897.84);
        context.bezierCurveTo(1021.91, 904.2, 1022.35, 911.47, 1025.17, 917.99);
        context.bezierCurveTo(1027.57, 925.39, 1029.71, 932.93, 1030.63, 940.69);
        context.bezierCurveTo(1031.35, 945.95, 1034.52, 950.51, 1035.23, 955.79);
        context.bezierCurveTo(1036.67, 965.83, 1039.97, 975.67, 1039.16, 985.92);
        context.bezierCurveTo(1041.44, 995.27, 1041.51, 1005, 1039.67, 1014.45);
        context.bezierCurveTo(1038.08, 1032.64, 1029.19, 1048.96, 1022.31, 1065.53);
        context.bezierCurveTo(1019.53, 1074.29, 1015.45, 1082.57, 1011.6, 1090.89);
        context.bezierCurveTo(1000.03, 1106.29, 985.36, 1119.25, 969.23, 1129.71);
        context.bezierCurveTo(953.77, 1138, 941.37, 1151.25, 924.88, 1157.72);
        context.bezierCurveTo(913.15, 1164.31, 902.03, 1172.48, 888.96, 1176.31);
        context.bezierCurveTo(882.31, 1178.32, 876, 1181.33, 869.29, 1183.16);
        context.bezierCurveTo(862, 1185.01, 855.72, 1189.83, 848.09, 1190.45);
        context.bezierCurveTo(839.16, 1191.37, 830.31, 1193.97, 821.27, 1192.96);
        context.bezierCurveTo(814.19, 1192.12, 807.09, 1193.19, 800, 1192.99);
        context.bezierCurveTo(788.43, 1192.08, 776.81, 1192.07, 765.25, 1190.93);
        context.bezierCurveTo(748.27, 1191.89, 731.8, 1197.85, 714.65, 1197.23);
        context.bezierCurveTo(693.68, 1196.52, 672.29, 1193.79, 653.11, 1184.79);
        context.bezierCurveTo(645.65, 1182.03, 638.49, 1178.61, 631.87, 1174.23);
        context.bezierCurveTo(621.75, 1168.73, 614.37, 1159.69, 606.39, 1151.65);
        context.bezierCurveTo(596.64, 1141.67, 589.25, 1128.87, 587.79, 1114.81);
        context.bezierCurveTo(586.79, 1104.67, 585.2, 1094.08, 588.95, 1084.28);
        context.bezierCurveTo(592.24, 1075.07, 598.19, 1066.27, 607.04, 1061.65);
        context.bezierCurveTo(610.24, 1060.03, 613.56, 1058.6, 616.71, 1056.87);
        context.bezierCurveTo(619.16, 1055.53, 621.52, 1054, 624.15, 1053.01);
        context.bezierCurveTo(626.52, 1053.39, 628.57, 1054.76, 630.73, 1055.76);
        context.bezierCurveTo(627.01, 1059.21, 623.65, 1063.05, 620.63, 1067.12);
        context.bezierCurveTo(620.09, 1066.69, 619.05, 1065.83, 618.53, 1065.4);
        context.bezierCurveTo(615.92, 1067.01, 614.16, 1069.6, 612.31, 1071.97);
        context.bezierCurveTo(611.55, 1071.99, 610.05, 1072.01, 609.31, 1072.03);
        context.bezierCurveTo(608.68, 1072.03, 607.44, 1072.04, 606.83, 1072.04);
        context.bezierCurveTo(601.37, 1076.15, 598.36, 1082.32, 595.71, 1088.43);
        context.bezierCurveTo(592.53, 1094.36, 594.57, 1101.28, 594.85, 1107.61);
        context.bezierCurveTo(594.87, 1118.56, 598.08, 1129.67, 605.17, 1138.17);
        context.bezierCurveTo(612.55, 1146.75, 619.97, 1155.43, 628.81, 1162.55);
        context.bezierCurveTo(646.39, 1174.99, 666.91, 1183.11, 688.16, 1186.45);
        context.bezierCurveTo(697.4, 1187.91, 706.77, 1187.92, 716.04, 1189.21);
        context.bezierCurveTo(731.29, 1188.27, 746.2, 1184.49, 761.37, 1182.71);
        context.bezierCurveTo(773.81, 1182.39, 786.2, 1184.16, 798.63, 1184.61);
        context.bezierCurveTo(805.29, 1184.63, 811.99, 1183.87, 818.64, 1184.75);
        context.bezierCurveTo(826.27, 1185.92, 833.85, 1183.92, 841.43, 1183.2);
        context.bezierCurveTo(851.01, 1182.35, 859.44, 1177.39, 868.56, 1174.76);
        context.bezierCurveTo(882.91, 1168.89, 898.99, 1165.97, 911.13, 1155.76);
        context.bezierCurveTo(917.52, 1151.13, 925.35, 1149.07, 931.73, 1144.44);
        context.bezierCurveTo(934.41, 1142.55, 937.44, 1141.23, 940.19, 1139.45);
        context.bezierCurveTo(951.08, 1128.53, 965.99, 1122.95, 977.35, 1112.6);
        context.bezierCurveTo(980.99, 1109.13, 984.95, 1106.05, 988.77, 1102.8);
        context.bezierCurveTo(992.75, 1099.56, 994.77, 1094.68, 998.27, 1091);
        context.bezierCurveTo(1005.11, 1084.41, 1007.04, 1074.71, 1011.37, 1066.56);
        context.bezierCurveTo(1014.64, 1055.24, 1020.39, 1044.87, 1023.72, 1033.57);
        context.bezierCurveTo(1026.45, 1025.48, 1029.33, 1017.28, 1029.75, 1008.67);
        context.bezierCurveTo(1030.68, 992.87, 1029.81, 976.87, 1026.08, 961.44);
        context.bezierCurveTo(1023.05, 948.67, 1021.64, 935.55, 1017.81, 922.96);
        context.bezierCurveTo(1014.83, 908.33, 1008.36, 894.83, 1003.96, 880.64);
        context.bezierCurveTo(999.72, 867.23, 989.21, 857.39, 980.64, 846.71);
        context.bezierCurveTo(973.33, 838.85, 968.24, 829.33, 963.75, 819.69);
        context.bezierCurveTo(959.4, 808.81, 951.88, 799.68, 945.44, 790.01);
        context.bezierCurveTo(941.32, 784.19, 937.88, 777.93, 934.12, 771.88);
        context.bezierCurveTo(928.48, 763.84, 927.39, 753.73, 925.87, 744.31);
        context.bezierCurveTo(923.59, 728.64, 928.63, 713.4, 931.13, 698.11);
        context.bezierCurveTo(937.49, 673.57, 940.55, 647.75, 936.35, 622.57);
        context.bezierCurveTo(932.68, 601.88, 924.93, 582.21, 920.32, 561.76);
        context.bezierCurveTo(918.4, 555.27, 915.65, 549.03, 914.07, 542.44);
        context.bezierCurveTo(911.05, 528.97, 906.63, 515.87, 903.52, 502.43);
        context.bezierCurveTo(902.37, 494.32, 903.88, 485.91, 901.28, 477.99);
        context.bezierCurveTo(898.77, 470.17, 897.57, 462.05, 895.55, 454.13);
        context.bezierCurveTo(890.71, 442.28, 885.43, 430.48, 877.81, 420.11);
        context.bezierCurveTo(870.07, 412.65, 859.39, 409.59, 849.55, 405.93);
        context.bezierCurveTo(840.11, 404.19, 830.41, 405.2, 821.09, 407.21);
        context.bezierCurveTo(814.77, 408.69, 807.48, 407.75, 802.17, 412.11);
        context.bezierCurveTo(797.12, 416.05, 788.91, 416.07, 786.64, 423.05);
        context.bezierCurveTo(780.87, 424.71, 777.12, 429.39, 773.92, 434.13);
        context.bezierCurveTo(772.65, 432.88, 771.41, 431.61, 770.17, 430.37);
        context.bezierCurveTo(777.91, 418.39, 789.87, 409.47, 802.55, 403.24);
        context.bezierCurveTo(808.91, 399.83, 816.24, 399.65, 823.2, 398.47);
        context.closePath();
        context.fillStyle = fillColor299;
        context.fill();


    }

    function drawPath323() {
        context.beginPath();
        context.moveTo(405, 411.24);
        context.bezierCurveTo(414.16, 407.67, 421.79, 401.29, 430.49, 396.84);
        context.bezierCurveTo(432.67, 398.56, 435.16, 399.8, 437.81, 400.6);
        context.bezierCurveTo(432.32, 405.17, 426.01, 408.57, 420.04, 412.44);
        context.bezierCurveTo(420.51, 413.79, 421, 415.15, 421.49, 416.49);
        context.bezierCurveTo(419.17, 414.65, 416.41, 412.52, 413.27, 413.55);
        context.bezierCurveTo(404.07, 414.93, 399.19, 423.64, 393.44, 429.93);
        context.bezierCurveTo(386.57, 433.57, 381.57, 440.83, 380.52, 448.51);
        context.bezierCurveTo(375.48, 452.69, 370.16, 456.49, 364.59, 459.93);
        context.bezierCurveTo(357.65, 465.88, 350.67, 471.93, 342.59, 476.32);
        context.bezierCurveTo(341.75, 474.56, 340.92, 472.79, 340.11, 471.03);
        context.bezierCurveTo(342.48, 467.92, 344.8, 464.77, 346.83, 461.43);
        context.bezierCurveTo(347.04, 461.19, 347.48, 460.69, 347.69, 460.45);
        context.bezierCurveTo(354.31, 456.08, 359.51, 449.53, 363.45, 442.72);
        context.bezierCurveTo(363.59, 442.6, 363.84, 442.33, 363.97, 442.21);
        context.bezierCurveTo(366.29, 442.16, 369.25, 440.6, 368.45, 437.83);
        context.bezierCurveTo(379.97, 428.09, 392.28, 419.33, 405, 411.24);
        context.closePath();
        context.fillStyle = fillColor300;
        context.fill();


    }

    function drawPath324() {
        context.beginPath();
        context.moveTo(504.11, 398.11);
        context.bezierCurveTo(506.12, 398.47, 508.13, 398.83, 510.16, 399.2);
        context.bezierCurveTo(506.57, 402.11, 502.85, 404.97, 500.17, 408.77);
        context.bezierCurveTo(498.11, 411.53, 496.4, 414.59, 493.85, 416.96);
        context.bezierCurveTo(494.16, 415.2, 494.48, 413.45, 494.8, 411.72);
        context.bezierCurveTo(489.67, 414.37, 484.64, 417.24, 479.93, 420.59);
        context.bezierCurveTo(474.03, 424.79, 467.44, 427.93, 461.77, 432.47);
        context.bezierCurveTo(459.05, 429.95, 456.19, 427.43, 452.35, 426.95);
        context.bezierCurveTo(464.69, 420.84, 474.33, 409.88, 487.81, 406);
        context.bezierCurveTo(491.27, 405.85, 494.8, 406.25, 498.2, 405.41);
        context.bezierCurveTo(499.12, 404.15, 499.89, 402.79, 500.71, 401.45);
        context.bezierCurveTo(501.15, 401.81, 501.6, 402.17, 502.08, 402.55);
        context.bezierCurveTo(502.75, 401.05, 503.41, 399.59, 504.11, 398.11);
        context.closePath();
        context.fillStyle = fillColor301;
        context.fill();


    }

    function drawPath325() {
        context.beginPath();
        context.moveTo(41.8, 399.43);
        context.bezierCurveTo(43.03, 400.16, 43.75, 401.23, 43.97, 402.64);
        context.lineTo(43.69, 403.52);
        context.bezierCurveTo(43.09, 403.12, 41.87, 402.32, 41.27, 401.92);
        context.lineTo(41.21, 400.56);
        context.lineTo(41.8, 399.43);
        context.closePath();
        context.fillStyle = fillColor302;
        context.fill();


    }

    function drawPath326() {
        context.beginPath();
        context.moveTo(41.27, 401.92);
        context.bezierCurveTo(41.87, 402.32, 43.09, 403.12, 43.69, 403.52);
        context.bezierCurveTo(43.51, 405.33, 43.48, 407.17, 43.47, 409);
        context.bezierCurveTo(43.47, 409.59, 43.45, 410.75, 43.45, 411.33);
        context.bezierCurveTo(40.93, 411.12, 38.41, 410.88, 35.89, 410.79);
        context.bezierCurveTo(37.81, 410.08, 39.73, 409.39, 41.67, 408.71);
        context.bezierCurveTo(41.52, 406.44, 41.37, 404.17, 41.27, 401.92);
        context.closePath();
        context.fillStyle = fillColor303;
        context.fill();


    }

    function drawPath327() {
        context.beginPath();
        context.moveTo(43.97, 402.64);
        context.lineTo(44.36, 401.4);
        context.bezierCurveTo(46.37, 404.52, 48.08, 407.84, 49.25, 411.37);
        context.bezierCurveTo(51.13, 412.52, 53.03, 413.68, 54.91, 414.84);
        context.bezierCurveTo(52.47, 414.76, 49.99, 414.84, 47.57, 414.33);
        context.bezierCurveTo(46.49, 411.4, 45.73, 408.39, 44.69, 405.45);
        context.bezierCurveTo(44.39, 406.33, 43.77, 408.11, 43.47, 409);
        context.bezierCurveTo(43.48, 407.17, 43.51, 405.33, 43.69, 403.52);
        context.lineTo(43.97, 402.64);
        context.closePath();
        context.fillStyle = fillColor304;
        context.fill();


    }

    function drawPath328() {
        context.beginPath();
        context.moveTo(86.01, 404.23);
        context.bezierCurveTo(86.11, 403.53, 86.32, 402.13, 86.41, 401.44);
        context.bezierCurveTo(86.72, 402.07, 87.32, 403.32, 87.61, 403.95);
        context.bezierCurveTo(91, 407.4, 94.81, 410.56, 99.04, 412.96);
        context.bezierCurveTo(98.56, 412.99, 97.63, 413.04, 97.15, 413.07);
        context.bezierCurveTo(93.44, 410.11, 89.89, 406.95, 86.01, 404.23);
        context.closePath();
        context.fillStyle = fillColor148;
        context.fill();


    }

    function drawPath329() {
        context.beginPath();
        context.moveTo(64.69, 403.43);
        context.bezierCurveTo(75.72, 404.51, 84.32, 412.07, 94.09, 416.36);
        context.bezierCurveTo(91.27, 416.4, 88.31, 416.49, 85.93, 414.69);
        context.bezierCurveTo(79.28, 410.12, 71.41, 407.87, 64.69, 403.43);
        context.closePath();
        context.fillStyle = fillColor305;
        context.fill();


    }

    function drawPath330() {
        context.beginPath();
        context.moveTo(87.61, 403.95);
        context.lineTo(89.84, 403.53);
        context.bezierCurveTo(91.03, 404.35, 92.23, 405.16, 93.43, 405.97);
        context.bezierCurveTo(93.83, 406.36, 94.64, 407.13, 95.04, 407.52);
        context.bezierCurveTo(96, 408.47, 96.97, 409.4, 97.96, 410.33);
        context.bezierCurveTo(98.64, 410.96, 100, 412.21, 100.68, 412.84);
        context.lineTo(99.04, 412.96);
        context.bezierCurveTo(94.81, 410.56, 91, 407.4, 87.61, 403.95);
        context.closePath();
        context.fillStyle = fillColor266;
        context.fill();


    }

    function drawPath331() {
        context.beginPath();
        context.moveTo(821.09, 407.21);
        context.bezierCurveTo(830.41, 405.2, 840.11, 404.19, 849.55, 405.93);
        context.bezierCurveTo(859.39, 409.59, 870.07, 412.65, 877.81, 420.11);
        context.bezierCurveTo(885.43, 430.48, 890.71, 442.28, 895.55, 454.13);
        context.bezierCurveTo(897.57, 462.05, 898.77, 470.17, 901.28, 477.99);
        context.bezierCurveTo(903.88, 485.91, 902.37, 494.32, 903.52, 502.43);
        context.bezierCurveTo(906.63, 515.87, 911.05, 528.97, 914.07, 542.44);
        context.bezierCurveTo(915.65, 549.03, 918.4, 555.27, 920.32, 561.76);
        context.bezierCurveTo(924.93, 582.21, 932.68, 601.88, 936.35, 622.57);
        context.bezierCurveTo(940.55, 647.75, 937.49, 673.57, 931.13, 698.11);
        context.bezierCurveTo(928.63, 713.4, 923.59, 728.64, 925.87, 744.31);
        context.bezierCurveTo(927.39, 753.73, 928.48, 763.84, 934.12, 771.88);
        context.bezierCurveTo(937.88, 777.93, 941.32, 784.19, 945.44, 790.01);
        context.bezierCurveTo(951.88, 799.68, 959.4, 808.81, 963.75, 819.69);
        context.bezierCurveTo(968.24, 829.33, 973.33, 838.85, 980.64, 846.71);
        context.bezierCurveTo(989.21, 857.39, 999.72, 867.23, 1003.96, 880.64);
        context.bezierCurveTo(1008.36, 894.83, 1014.83, 908.33, 1017.81, 922.96);
        context.bezierCurveTo(1021.64, 935.55, 1023.05, 948.67, 1026.08, 961.44);
        context.bezierCurveTo(1029.81, 976.87, 1030.68, 992.87, 1029.75, 1008.67);
        context.bezierCurveTo(1029.33, 1017.28, 1026.45, 1025.48, 1023.72, 1033.57);
        context.bezierCurveTo(1020.39, 1044.87, 1014.64, 1055.24, 1011.37, 1066.56);
        context.bezierCurveTo(1007.04, 1074.71, 1005.11, 1084.41, 998.27, 1091);
        context.bezierCurveTo(994.77, 1094.68, 992.75, 1099.56, 988.77, 1102.8);
        context.bezierCurveTo(984.95, 1106.05, 980.99, 1109.13, 977.35, 1112.6);
        context.bezierCurveTo(965.99, 1122.95, 951.08, 1128.53, 940.19, 1139.45);
        context.bezierCurveTo(937.44, 1141.23, 934.41, 1142.55, 931.73, 1144.44);
        context.bezierCurveTo(925.35, 1149.07, 917.52, 1151.13, 911.13, 1155.76);
        context.bezierCurveTo(898.99, 1165.97, 882.91, 1168.89, 868.56, 1174.76);
        context.bezierCurveTo(859.44, 1177.39, 851.01, 1182.35, 841.43, 1183.2);
        context.bezierCurveTo(833.85, 1183.92, 826.27, 1185.92, 818.64, 1184.75);
        context.bezierCurveTo(811.99, 1183.87, 805.29, 1184.63, 798.63, 1184.61);
        context.bezierCurveTo(786.2, 1184.16, 773.81, 1182.39, 761.37, 1182.71);
        context.bezierCurveTo(746.2, 1184.49, 731.29, 1188.27, 716.04, 1189.21);
        context.bezierCurveTo(706.77, 1187.92, 697.4, 1187.91, 688.16, 1186.45);
        context.bezierCurveTo(666.91, 1183.11, 646.39, 1174.99, 628.81, 1162.55);
        context.bezierCurveTo(619.97, 1155.43, 612.55, 1146.75, 605.17, 1138.17);
        context.bezierCurveTo(598.08, 1129.67, 594.87, 1118.56, 594.85, 1107.61);
        context.bezierCurveTo(600.93, 1096.35, 608.01, 1085.04, 609.31, 1072.03);
        context.bezierCurveTo(610.05, 1072.01, 611.55, 1071.99, 612.31, 1071.97);
        context.bezierCurveTo(614.16, 1069.6, 615.92, 1067.01, 618.53, 1065.4);
        context.bezierCurveTo(619.05, 1065.83, 620.09, 1066.69, 620.63, 1067.12);
        context.bezierCurveTo(620.03, 1069.35, 619.51, 1071.6, 619.04, 1073.88);
        context.bezierCurveTo(616.05, 1079.51, 612.43, 1084.87, 610.59, 1091.04);
        context.bezierCurveTo(607.07, 1100.57, 607.63, 1111.23, 610.53, 1120.85);
        context.bezierCurveTo(612.17, 1126.08, 613.52, 1131.63, 617.31, 1135.81);
        context.bezierCurveTo(622.04, 1147.99, 633.16, 1156.05, 644.64, 1161.35);
        context.bezierCurveTo(650.53, 1165.36, 657.85, 1165.32, 664.71, 1165.49);
        context.bezierCurveTo(669.07, 1167.69, 674.05, 1168.11, 678.73, 1169.39);
        context.bezierCurveTo(686.03, 1171.52, 691.87, 1165.51, 699.03, 1165.24);
        context.bezierCurveTo(699.21, 1164.12, 699.61, 1161.89, 699.8, 1160.77);
        context.bezierCurveTo(701.99, 1161.99, 704.12, 1163.33, 706.16, 1164.81);
        context.bezierCurveTo(706.4, 1168.57, 704.2, 1173.79, 708.17, 1176.17);
        context.bezierCurveTo(711.29, 1176.81, 713.87, 1174.53, 716.43, 1173.17);
        context.bezierCurveTo(716.37, 1171.27, 716.32, 1169.36, 716.31, 1167.48);
        context.bezierCurveTo(717.19, 1167.36, 718.95, 1167.12, 719.83, 1167);
        context.bezierCurveTo(721.29, 1168.01, 722.77, 1169.04, 724.28, 1170.07);
        context.bezierCurveTo(725.41, 1172.55, 726.96, 1176.39, 730.49, 1174.85);
        context.bezierCurveTo(733, 1174.76, 732.65, 1171.95, 733.33, 1170.23);
        context.bezierCurveTo(736.29, 1169.37, 738.73, 1167.51, 740.84, 1165.32);
        context.bezierCurveTo(740.55, 1167.88, 740.41, 1170.47, 740.4, 1173.08);
        context.bezierCurveTo(744.73, 1174.89, 749.31, 1173.88, 753.56, 1172.33);
        context.bezierCurveTo(762.73, 1171.8, 772.33, 1172.8, 781.13, 1169.71);
        context.bezierCurveTo(783.84, 1169.72, 786.56, 1169.83, 789.28, 1169.99);
        context.bezierCurveTo(796.44, 1168.83, 803.85, 1169.11, 810.79, 1166.72);
        context.bezierCurveTo(819.35, 1166.63, 827.68, 1164.57, 836.07, 1163.08);
        context.bezierCurveTo(841.05, 1162.09, 846.55, 1161.21, 850.21, 1157.32);
        context.bezierCurveTo(858.11, 1157.96, 865.67, 1154.51, 872.37, 1150.68);
        context.bezierCurveTo(880.8, 1149.16, 889.01, 1146.41, 896.05, 1141.43);
        context.bezierCurveTo(901.2, 1138.8, 906.25, 1136.11, 911.67, 1134.03);
        context.bezierCurveTo(915.2, 1131.51, 920.28, 1131.72, 922.99, 1128.04);
        context.bezierCurveTo(934.31, 1124.29, 944.09, 1116.85, 953.83, 1110.12);
        context.bezierCurveTo(954.23, 1109.61, 955, 1108.61, 955.39, 1108.11);
        context.bezierCurveTo(964.96, 1104.25, 969.75, 1094.48, 977.64, 1088.55);
        context.bezierCurveTo(977.77, 1087.67, 978.04, 1085.93, 978.17, 1085.07);
        context.bezierCurveTo(979.43, 1083.77, 980.69, 1082.49, 981.97, 1081.24);
        context.bezierCurveTo(981.99, 1080.47, 982, 1078.92, 982.01, 1078.15);
        context.bezierCurveTo(986.6, 1074.87, 988.73, 1069.61, 990.24, 1064.4);
        context.bezierCurveTo(990.77, 1063.99, 991.85, 1063.15, 992.39, 1062.73);
        context.bezierCurveTo(994.57, 1056.29, 997.25, 1050.03, 999.15, 1043.48);
        context.bezierCurveTo(999.73, 1043.13, 1000.92, 1042.43, 1001.51, 1042.08);
        context.bezierCurveTo(1002.13, 1037.56, 1003.81, 1033.24, 1004.31, 1028.71);
        context.bezierCurveTo(1004.36, 1022.75, 1007.88, 1017.39, 1007.29, 1011.36);
        context.bezierCurveTo(1007.79, 1004.28, 1008.09, 997.11, 1006.32, 990.16);
        context.bezierCurveTo(1006.33, 980.81, 1004.6, 971.57, 1002.77, 962.44);
        context.bezierCurveTo(999.91, 960.2, 1000.97, 956.84, 1000.95, 953.75);
        context.bezierCurveTo(997.04, 940.91, 994.4, 927.52, 987.79, 915.67);
        context.bezierCurveTo(986.97, 912.99, 986.15, 910.33, 984.8, 907.89);
        context.bezierCurveTo(978.12, 895.23, 975.04, 880.57, 965.93, 869.29);
        context.bezierCurveTo(963.39, 861.68, 957.97, 855.6, 954.75, 848.33);
        context.bezierCurveTo(953.77, 847.75, 952.83, 847.19, 951.89, 846.63);
        context.bezierCurveTo(950.67, 840.23, 946.92, 834.72, 943.6, 829.24);
        context.bezierCurveTo(933.68, 815.44, 927.41, 799.53, 920.37, 784.2);
        context.bezierCurveTo(919.91, 783.64, 918.99, 782.52, 918.53, 781.96);
        context.bezierCurveTo(917.84, 775.35, 913.56, 769.92, 911.73, 763.64);
        context.bezierCurveTo(913.89, 760.45, 912.76, 756.48, 910.87, 753.45);
        context.bezierCurveTo(908.27, 752.71, 906.64, 754.8, 904.93, 756.29);
        context.bezierCurveTo(905.39, 768.43, 905.59, 781.04, 910.81, 792.27);
        context.bezierCurveTo(913.31, 799.73, 917.51, 806.44, 920.52, 813.69);
        context.bezierCurveTo(925.44, 825.79, 934.61, 835.52, 939.81, 847.48);
        context.bezierCurveTo(944.12, 854.23, 947.36, 861.63, 952.25, 868);
        context.bezierCurveTo(955.09, 873.91, 958.59, 879.45, 961.65, 885.24);
        context.bezierCurveTo(965.47, 894.43, 970.27, 903.19, 973.45, 912.63);
        context.bezierCurveTo(978.95, 923.76, 983.44, 935.4, 987.11, 947.25);
        context.bezierCurveTo(992.73, 972.16, 999.28, 997.8, 995.2, 1023.47);
        context.bezierCurveTo(989.85, 1043.88, 981.45, 1063.59, 969.63, 1081.09);
        context.bezierCurveTo(966.6, 1083.32, 964.31, 1086.31, 961.95, 1089.19);
        context.bezierCurveTo(953.91, 1096.88, 944.67, 1103.12, 935.48, 1109.37);
        context.bezierCurveTo(924.56, 1117.27, 911.21, 1120.47, 899.41, 1126.73);
        context.bezierCurveTo(883.96, 1136.23, 866.16, 1140.56, 849.4, 1147.05);
        context.bezierCurveTo(851.07, 1141.39, 854.01, 1136.03, 854.47, 1130.05);
        context.bezierCurveTo(854.92, 1123.92, 855.72, 1117.44, 853.23, 1111.63);
        context.bezierCurveTo(850.35, 1104.85, 848, 1097.91, 845.99, 1090.84);
        context.bezierCurveTo(843.28, 1081.56, 836.28, 1074.52, 832.05, 1066.01);
        context.bezierCurveTo(829.13, 1060.28, 825.05, 1055.28, 821.76, 1049.79);
        context.bezierCurveTo(819.09, 1045.23, 815.12, 1041.52, 813.37, 1036.45);
        context.bezierCurveTo(812.25, 1033.01, 809.05, 1031.13, 806.6, 1028.76);
        context.bezierCurveTo(800.19, 1022.2, 793.57, 1015.72, 785.84, 1010.73);
        context.bezierCurveTo(779.33, 1005.71, 772.28, 1001.29, 764.59, 998.36);
        context.bezierCurveTo(752.39, 994.63, 739.23, 993.63, 726.69, 996.23);
        context.bezierCurveTo(713.72, 998.35, 700.44, 998.45, 687.65, 1001.68);
        context.bezierCurveTo(676.15, 1004.63, 666.45, 1011.83, 655.67, 1016.52);
        context.bezierCurveTo(652.23, 1017.84, 650.83, 1021.68, 651.63, 1025.11);
        context.bezierCurveTo(657.63, 1022.35, 663.53, 1019.36, 669.8, 1017.24);
        context.bezierCurveTo(679.2, 1014.04, 688.28, 1009.56, 698.23, 1008.28);
        context.bezierCurveTo(708.97, 1007.03, 719.79, 1006.03, 730.49, 1004.4);
        context.bezierCurveTo(742.57, 1001.64, 755.44, 1003.71, 766.72, 1008.56);
        context.bezierCurveTo(775.59, 1013.05, 783.8, 1018.87, 791.19, 1025.52);
        context.bezierCurveTo(796.85, 1030.96, 803.73, 1035.32, 807.65, 1042.36);
        context.bezierCurveTo(810.01, 1046.79, 814.95, 1050.84, 813.95, 1056.31);
        context.bezierCurveTo(806.6, 1047.25, 796, 1041.95, 786.73, 1035.2);
        context.bezierCurveTo(782.17, 1032.56, 777.53, 1030.07, 773.05, 1027.29);
        context.bezierCurveTo(755.95, 1018.57, 736.53, 1014.6, 717.39, 1015.91);
        context.bezierCurveTo(707.65, 1015.95, 698.04, 1018.13, 688.97, 1021.56);
        context.bezierCurveTo(683.08, 1023.71, 676.79, 1024.89, 671.28, 1028.01);
        context.bezierCurveTo(666.47, 1030.81, 660.8, 1032.13, 656.6, 1035.92);
        context.bezierCurveTo(653.55, 1038.65, 650.05, 1040.87, 647.24, 1043.85);
        context.bezierCurveTo(642.88, 1049.27, 635.88, 1051.28, 630.73, 1055.76);
        context.bezierCurveTo(628.57, 1054.76, 626.52, 1053.39, 624.15, 1053.01);
        context.bezierCurveTo(621.52, 1054, 619.16, 1055.53, 616.71, 1056.87);
        context.bezierCurveTo(618.65, 1052.51, 621.07, 1048.15, 621.09, 1043.25);
        context.bezierCurveTo(622.23, 1032.93, 622.97, 1022.53, 625.17, 1012.37);
        context.bezierCurveTo(626.49, 1006.75, 624.93, 1000.83, 626.85, 995.32);
        context.bezierCurveTo(628.72, 989.17, 629.12, 982.72, 630.39, 976.44);
        context.bezierCurveTo(631.47, 981.76, 635.01, 987.16, 641.13, 986.8);
        context.bezierCurveTo(645.52, 989.25, 653.53, 990.17, 655.19, 984.04);
        context.bezierCurveTo(656.29, 980.6, 660.68, 979.04, 660.69, 975.23);
        context.bezierCurveTo(658.96, 970.51, 653.79, 969.12, 649.27, 969.11);
        context.bezierCurveTo(649.76, 966.21, 650.48, 963.35, 650.97, 960.45);
        context.bezierCurveTo(648.65, 954.72, 641.01, 951.11, 635.63, 955.04);
        context.bezierCurveTo(632.79, 956.33, 633.04, 959.84, 632.33, 962.41);
        context.bezierCurveTo(633.59, 963.6, 634.96, 964.73, 636.55, 965.53);
        context.bezierCurveTo(634.15, 968.07, 632.09, 970.91, 630.28, 973.89);
        context.bezierCurveTo(629.57, 967.24, 630.93, 960.59, 630.32, 953.93);
        context.bezierCurveTo(635.03, 950.93, 639.88, 948.23, 645.48, 947.31);
        context.bezierCurveTo(653.12, 943.51, 661.55, 941.17, 668.36, 935.85);
        context.bezierCurveTo(673.63, 933.17, 678.87, 929.61, 680.17, 923.43);
        context.bezierCurveTo(678.17, 922.92, 675.92, 921.03, 673.96, 922.59);
        context.bezierCurveTo(667.61, 926.48, 661.77, 931.28, 654.79, 934.03);
        context.bezierCurveTo(647.57, 937.43, 640.2, 940.44, 632.72, 943.17);
        context.bezierCurveTo(632.67, 939.36, 632.32, 935.56, 631.89, 931.79);
        context.lineTo(631.85, 930.6);
        context.bezierCurveTo(635.16, 930.73, 638.68, 931.67, 641.84, 930.25);
        context.bezierCurveTo(649.97, 925.99, 659.48, 925.99, 668.16, 923.39);
        context.bezierCurveTo(672.68, 921.72, 674.07, 916.61, 677.16, 913.41);
        context.bezierCurveTo(678.72, 913.16, 680.29, 912.95, 681.89, 912.75);
        context.bezierCurveTo(687.17, 912.24, 690.25, 907.07, 695.53, 906.43);
        context.bezierCurveTo(698.75, 903.57, 702.96, 901.92, 705.56, 898.41);
        context.bezierCurveTo(707.31, 896.03, 709.93, 894.63, 712.19, 892.8);
        context.bezierCurveTo(713.77, 890.96, 713.93, 888.39, 714.59, 886.16);
        context.bezierCurveTo(719.43, 884.49, 719.92, 879.49, 720.84, 875.16);
        context.bezierCurveTo(724.59, 872.19, 725.53, 867.33, 727.41, 863.19);
        context.bezierCurveTo(728.69, 860.8, 727.85, 858.16, 727.64, 855.65);
        context.bezierCurveTo(731.19, 845.97, 729.89, 835.2, 728.2, 825.23);
        context.bezierCurveTo(725.72, 820.56, 724.88, 815.12, 721.4, 811.01);
        context.bezierCurveTo(721.27, 806.85, 718.69, 803.47, 714.92, 801.91);
        context.bezierCurveTo(706.84, 793.55, 694.51, 790.13, 683.15, 791.56);
        context.bezierCurveTo(681.32, 791.41, 680.27, 789.59, 679.44, 788.25);
        context.bezierCurveTo(679.88, 789.76, 680.04, 791.33, 680.31, 792.88);
        context.bezierCurveTo(675.68, 793.88, 671.89, 796.76, 667.75, 798.84);
        context.bezierCurveTo(665.07, 798.59, 662.71, 797.04, 660.19, 796.24);
        context.bezierCurveTo(658.48, 795.53, 656.79, 794.83, 655.11, 794.12);
        context.bezierCurveTo(655.08, 791.76, 655.64, 788.75, 653.01, 787.52);
        context.bezierCurveTo(645.76, 783.69, 637.2, 783.97, 629.23, 783.77);
        context.bezierCurveTo(629.08, 779.16, 628.24, 774.59, 626.16, 770.44);
        context.bezierCurveTo(624.11, 766.48, 625.45, 761.89, 624.31, 757.72);
        context.bezierCurveTo(623.4, 754.43, 621.16, 751.73, 619.93, 748.6);
        context.bezierCurveTo(619.36, 740.69, 615.83, 733.33, 611.83, 726.61);
        context.bezierCurveTo(608.81, 714.53, 602.71, 703.35, 595.45, 693.31);
        context.bezierCurveTo(592.87, 688.32, 589.57, 683.41, 588.8, 677.75);
        context.bezierCurveTo(594.88, 681.01, 601.63, 683.8, 606.09, 689.28);
        context.bezierCurveTo(607.61, 691.11, 610.75, 690.79, 611.95, 692.88);
        context.bezierCurveTo(616.36, 702.63, 626.21, 708.97, 629.07, 719.63);
        context.bezierCurveTo(631.69, 731.47, 637.13, 743.51, 634.2, 755.8);
        context.bezierCurveTo(636.64, 757.95, 638.19, 761.95, 641.97, 761.72);
        context.bezierCurveTo(646.76, 763.88, 651.29, 766.83, 656.55, 767.8);
        context.bezierCurveTo(660.39, 768.47, 664.31, 768.57, 668.21, 768.83);
        context.bezierCurveTo(668.19, 767.81, 668.13, 765.8, 668.12, 764.8);
        context.bezierCurveTo(659.8, 764.64, 650.12, 763.37, 644.51, 756.64);
        context.lineTo(645.51, 754.56);
        context.bezierCurveTo(649.65, 756.07, 653.85, 757.47, 658.05, 758.84);
        context.bezierCurveTo(662.72, 760.33, 667.81, 760.63, 672.07, 763.28);
        context.bezierCurveTo(668.01, 765.72, 669.88, 771.65, 674.55, 771.37);
        context.bezierCurveTo(677.91, 774.63, 682.95, 774.27, 686.75, 776.79);
        context.bezierCurveTo(687.49, 776.97, 688.99, 777.35, 689.73, 777.53);
        context.bezierCurveTo(692.65, 779.21, 695.73, 780.61, 698.73, 782.16);
        context.bezierCurveTo(706.12, 781.63, 712.75, 785.84, 720.08, 785.55);
        context.bezierCurveTo(723.65, 785.28, 727.77, 786.41, 730.65, 783.67);
        context.bezierCurveTo(735.12, 784.73, 739.59, 784.2, 743.45, 781.67);
        context.bezierCurveTo(752.52, 782.32, 761.67, 783.32, 770.71, 781.71);
        context.bezierCurveTo(785.87, 779.16, 801.48, 776.69, 815.15, 769.25);
        context.bezierCurveTo(822.52, 766.16, 830.51, 764.2, 836.92, 759.17);
        context.bezierCurveTo(842.25, 754.88, 848.37, 751.65, 853.53, 747.16);
        context.bezierCurveTo(856.19, 744.63, 858.93, 742.19, 861.59, 739.65);
        context.bezierCurveTo(869.28, 731.2, 876.63, 722.43, 882.59, 712.64);
        context.bezierCurveTo(888.09, 706.85, 888.91, 698.68, 892.43, 691.83);
        context.bezierCurveTo(895.99, 684.63, 898.24, 676.71, 898.71, 668.68);
        context.bezierCurveTo(898.96, 668.39, 899.49, 667.79, 899.76, 667.49);
        context.bezierCurveTo(899.16, 650.15, 901.19, 632.49, 897, 615.41);
        context.bezierCurveTo(896.16, 607.73, 892.49, 600.88, 889.89, 593.73);
        context.bezierCurveTo(887.05, 586.13, 885.24, 577.73, 879.39, 571.72);
        context.bezierCurveTo(879.41, 572.88, 879.47, 575.21, 879.49, 576.37);
        context.bezierCurveTo(879.07, 571.19, 876.04, 566.97, 872.49, 563.4);
        context.bezierCurveTo(872.92, 561.52, 873.36, 559.67, 873.81, 557.81);
        context.bezierCurveTo(880.28, 563.65, 886, 570.73, 888.96, 579.01);
        context.bezierCurveTo(891.43, 585.33, 894.92, 591.28, 896.27, 598);
        context.bezierCurveTo(897.84, 606.08, 900.28, 614.01, 901.04, 622.25);
        context.bezierCurveTo(902.43, 634.37, 901.21, 646.6, 901.89, 658.76);
        context.bezierCurveTo(902.16, 656.73, 902.32, 654.68, 902.37, 652.65);
        context.bezierCurveTo(902.16, 637.6, 903.47, 622.25, 899.17, 607.6);
        context.bezierCurveTo(896.97, 594.84, 891.99, 582.85, 886.17, 571.37);
        context.bezierCurveTo(880.77, 562.04, 871.72, 555.87, 864.52, 548.08);
        context.bezierCurveTo(857.88, 541.81, 850.51, 536.36, 843.81, 530.15);
        context.bezierCurveTo(838.12, 523.68, 829.63, 520.99, 822.13, 517.25);
        context.bezierCurveTo(813.31, 513.92, 805.44, 507.05, 795.49, 507.81);
        context.bezierCurveTo(795.6, 508.99, 795.81, 511.35, 795.92, 512.52);
        context.bezierCurveTo(806.72, 513.39, 816.07, 519.29, 825.77, 523.53);
        context.lineTo(827.03, 525.28);
        context.bezierCurveTo(822.32, 523.45, 817.69, 521.41, 813.12, 519.32);
        context.bezierCurveTo(806.97, 516.44, 800.24, 515.33, 793.72, 513.64);
        context.bezierCurveTo(788.72, 510.93, 783.2, 509.48, 777.53, 509.27);
        context.bezierCurveTo(779.76, 508.89, 782, 508.51, 784.27, 508.21);
        context.bezierCurveTo(787.83, 509.61, 791.41, 510.97, 795.12, 512.01);
        context.bezierCurveTo(795.04, 510.89, 794.91, 508.65, 794.84, 507.55);
        context.bezierCurveTo(791.81, 506.57, 788.83, 505.53, 785.91, 504.32);
        context.bezierCurveTo(779.51, 498.64, 770.48, 500.73, 762.69, 500.28);
        context.bezierCurveTo(743.57, 499.89, 724.47, 501.25, 705.53, 503.87);
        context.bezierCurveTo(695.07, 506.12, 684.07, 506.33, 674.13, 510.65);
        context.bezierCurveTo(661.04, 515.88, 647.81, 520.76, 634.85, 526.29);
        context.bezierCurveTo(621.05, 532.01, 606.39, 536.49, 594.4, 545.75);
        context.bezierCurveTo(588.97, 549.03, 584.01, 552.99, 579.47, 557.4);
        context.bezierCurveTo(569.47, 565.65, 560.28, 575.11, 553.79, 586.4);
        context.bezierCurveTo(548.29, 595.83, 541.15, 605.44, 541.44, 616.88);
        context.bezierCurveTo(541.32, 619.09, 541.35, 621.32, 541.39, 623.55);
        context.bezierCurveTo(543, 620.11, 544.51, 616.63, 545.81, 613.07);
        context.bezierCurveTo(546.2, 613.99, 546.97, 615.81, 547.36, 616.73);
        context.bezierCurveTo(547, 618.44, 546.65, 620.16, 546.33, 621.89);
        context.bezierCurveTo(550.83, 614.96, 553.44, 606.97, 558.35, 600.29);
        context.bezierCurveTo(561.43, 596.03, 563.56, 591, 567.73, 587.63);
        context.bezierCurveTo(574.49, 582.23, 580.2, 575.63, 587.29, 570.64);
        context.bezierCurveTo(592.93, 566.51, 598.28, 561.93, 604.44, 558.59);
        context.bezierCurveTo(612.03, 554.97, 619.27, 550.63, 627.27, 547.93);
        context.bezierCurveTo(646.64, 537.88, 667.55, 531.25, 688.33, 524.8);
        context.bezierCurveTo(691.16, 524.2, 694.01, 523.72, 696.87, 523.17);
        context.bezierCurveTo(715.52, 519.93, 734.28, 515.88, 753.32, 516.97);
        context.bezierCurveTo(758.21, 517.29, 763.05, 516.21, 767.93, 515.96);
        context.bezierCurveTo(776.2, 516.24, 784.49, 516.97, 792.63, 518.61);
        context.bezierCurveTo(804.73, 522.4, 817.56, 524.52, 828.6, 531.13);
        context.lineTo(829.53, 532.89);
        context.bezierCurveTo(820.93, 527.99, 811.64, 524.55, 801.99, 522.43);
        context.bezierCurveTo(786.84, 517.33, 770.51, 515.88, 754.72, 518.28);
        context.bezierCurveTo(754.69, 518.87, 754.63, 520.05, 754.6, 520.64);
        context.lineTo(754.91, 521.79);
        context.bezierCurveTo(760.05, 522.2, 765.11, 519.96, 770.25, 520.93);
        context.bezierCurveTo(781.6, 522.68, 793.25, 523.19, 804.21, 526.88);
        context.bezierCurveTo(811.52, 529.24, 818.85, 531.64, 825.79, 535);
        context.bezierCurveTo(830.88, 537.92, 835.8, 541.17, 840.73, 544.39);
        context.bezierCurveTo(841.51, 545.12, 842.29, 545.87, 843.09, 546.6);
        context.bezierCurveTo(859.64, 559.83, 873.25, 577.01, 880.95, 596.83);
        context.bezierCurveTo(884.72, 606.12, 888.96, 615.81, 888.24, 626.07);
        context.bezierCurveTo(887.84, 637.6, 889.19, 649.28, 886.83, 660.68);
        context.bezierCurveTo(881.08, 684.36, 870.16, 707.17, 853.17, 724.88);
        context.bezierCurveTo(848.73, 726.09, 846.15, 730.27, 842.25, 732.45);
        context.bezierCurveTo(827.01, 742.04, 811.61, 752.04, 794.17, 757.13);
        context.bezierCurveTo(783.59, 760.16, 772.44, 759.85, 761.79, 762.48);
        context.bezierCurveTo(755.72, 763.79, 749.41, 763.6, 743.47, 765.48);
        context.bezierCurveTo(736.48, 766.45, 729.49, 767.76, 722.43, 767.65);
        context.bezierCurveTo(712.79, 765.99, 703.09, 764.76, 693.39, 763.52);
        context.bezierCurveTo(687.28, 762.81, 681.31, 761.03, 675.12, 761.23);
        context.bezierCurveTo(674.16, 760.07, 673.23, 758.92, 672.31, 757.79);
        context.bezierCurveTo(663.59, 755.03, 654.47, 753.19, 646.27, 749.05);
        context.bezierCurveTo(645.73, 742.96, 645.01, 736.88, 644.68, 730.76);
        context.bezierCurveTo(644.63, 728.31, 642.51, 726.81, 641.13, 725.07);
        context.bezierCurveTo(643.51, 720.2, 639.76, 715.64, 638.17, 711.17);
        context.bezierCurveTo(635.67, 704.08, 630.8, 698.23, 626.15, 692.47);
        context.bezierCurveTo(628.39, 692.29, 630.95, 692.68, 632.68, 690.87);
        context.bezierCurveTo(636.21, 687.63, 640.12, 684.51, 642.4, 680.21);
        context.bezierCurveTo(643.71, 679.57, 645.04, 678.99, 646.37, 678.36);
        context.bezierCurveTo(647.87, 675.47, 651.31, 674.87, 653.47, 672.71);
        context.bezierCurveTo(654.31, 670.8, 654.75, 668.76, 655.37, 666.79);
        context.bezierCurveTo(657.41, 666.09, 659.45, 665.41, 661.51, 664.75);
        context.bezierCurveTo(663.25, 658.67, 667.76, 654.07, 670.71, 648.64);
        context.bezierCurveTo(672.83, 642.97, 675.28, 637.41, 678.64, 632.37);
        context.bezierCurveTo(678.68, 627.89, 680.75, 623.83, 681.27, 619.43);
        context.bezierCurveTo(681.8, 618.12, 682.33, 616.83, 682.89, 615.53);
        context.bezierCurveTo(681.89, 613.35, 681.05, 611.08, 680.93, 608.67);
        context.bezierCurveTo(682.91, 605.99, 682.87, 602.53, 681.91, 599.49);
        context.bezierCurveTo(680.16, 593.95, 678.57, 588.04, 674.49, 583.69);
        context.bezierCurveTo(671.43, 580.43, 668.71, 576.25, 664.05, 575.17);
        context.bezierCurveTo(657.97, 573.71, 651.95, 570.44, 645.55, 572.08);
        context.bezierCurveTo(640.21, 573.59, 634.51, 575, 630.4, 578.96);
        context.bezierCurveTo(623.32, 585.75, 615.71, 592.41, 611.35, 601.39);
        context.bezierCurveTo(606.61, 608.71, 603.56, 616.85, 599.88, 624.71);
        context.bezierCurveTo(596.61, 631.56, 596.61, 639.32, 594.83, 646.59);
        context.bezierCurveTo(593.48, 651.91, 594.11, 657.4, 594.29, 662.81);
        context.bezierCurveTo(586.72, 661.29, 579.56, 657.71, 571.65, 658.24);
        context.bezierCurveTo(568.11, 649.73, 559.64, 645.27, 554.89, 637.67);
        context.bezierCurveTo(551.41, 633.07, 545.63, 631.13, 541.68, 627.01);
        context.bezierCurveTo(534.31, 619.55, 524.88, 614.67, 515.65, 609.93);
        context.bezierCurveTo(514.8, 605.57, 519.41, 599.69, 514.37, 596.77);
        context.bezierCurveTo(511.76, 594.45, 508.17, 596.85, 506.16, 598.83);
        context.bezierCurveTo(505.07, 600.8, 505.04, 603.16, 504.56, 605.33);
        context.bezierCurveTo(500.25, 602.8, 495.51, 601.09, 490.6, 600.19);
        context.bezierCurveTo(488.96, 594.03, 489.75, 587.56, 491.77, 581.59);
        context.bezierCurveTo(493.33, 572.85, 495.41, 564.11, 499.37, 556.12);
        context.bezierCurveTo(500.97, 552.76, 503.07, 549.6, 504.15, 546.03);
        context.bezierCurveTo(503.81, 540.55, 500.45, 535.49, 501.27, 529.91);
        context.bezierCurveTo(503.16, 514.31, 502.49, 497.92, 509.4, 483.4);
        context.bezierCurveTo(511.92, 478.56, 514.4, 473.48, 518.32, 469.61);
        context.bezierCurveTo(521.01, 466.64, 526.17, 469.51, 528.41, 466.03);
        context.bezierCurveTo(529.04, 464.43, 529.59, 462.81, 530.19, 461.2);
        context.bezierCurveTo(531.91, 460.57, 533.64, 459.96, 535.39, 459.36);
        context.bezierCurveTo(538.23, 459.92, 541.77, 461.47, 543.41, 457.97);
        context.bezierCurveTo(544.85, 457.43, 546.33, 457.01, 547.83, 456.57);
        context.bezierCurveTo(550.01, 455.99, 552.05, 454.97, 553.95, 453.75);
        context.bezierCurveTo(557.71, 451.01, 562.36, 450.12, 566.93, 449.97);
        context.bezierCurveTo(574.36, 451.03, 582.89, 449.08, 589.32, 453.89);
        context.bezierCurveTo(595.05, 457.8, 600.97, 461.56, 605.77, 466.65);
        context.bezierCurveTo(608.89, 468.44, 612.16, 467.32, 614.72, 465.13);
        context.bezierCurveTo(621.21, 461.03, 626.85, 455.61, 634.03, 452.49);
        context.bezierCurveTo(645.71, 448.63, 656.68, 442.68, 668.75, 439.93);
        context.bezierCurveTo(676.37, 438.21, 684, 436.39, 691.69, 434.97);
        context.bezierCurveTo(701.93, 436.32, 712.29, 437.23, 722.61, 436.35);
        context.bezierCurveTo(730.4, 435.61, 738.23, 435.87, 746.03, 435.51);
        context.bezierCurveTo(750.83, 436.51, 755.52, 437.89, 760.24, 439.19);
        context.bezierCurveTo(763.93, 440.55, 766.83, 436.79, 768.24, 433.87);
        context.bezierCurveTo(768.87, 432.69, 769.51, 431.52, 770.17, 430.37);
        context.bezierCurveTo(771.41, 431.61, 772.65, 432.88, 773.92, 434.13);
        context.bezierCurveTo(770.51, 438.59, 769.96, 444.33, 770.2, 449.75);
        context.bezierCurveTo(758.13, 443.33, 744.24, 440.41, 730.63, 442);
        context.bezierCurveTo(724.67, 442.92, 718.95, 445.01, 712.95, 445.75);
        context.bezierCurveTo(712.45, 446.57, 711.48, 448.25, 710.99, 449.09);
        context.bezierCurveTo(712.21, 449.8, 713.48, 450.4, 714.81, 450.91);
        context.bezierCurveTo(721.96, 450.95, 729.05, 448.89, 736.17, 450.21);
        context.bezierCurveTo(739.73, 450.83, 743.55, 450.23, 746.89, 451.84);
        context.bezierCurveTo(748.29, 451.91, 749.71, 451.96, 751.12, 452.03);
        context.bezierCurveTo(757.2, 455.36, 763.92, 457.4, 770.57, 459.31);
        context.bezierCurveTo(776.99, 467.93, 782.84, 477.81, 792.51, 483.2);
        context.bezierCurveTo(793.92, 484.65, 795.35, 486.11, 796.84, 487.51);
        context.bezierCurveTo(807.61, 491.75, 817.27, 498.72, 828.53, 501.85);
        context.bezierCurveTo(830.48, 504.81, 834.05, 505.13, 837.27, 505.37);
        context.bezierCurveTo(840.17, 505.37, 842.37, 507.79, 845.24, 507.96);
        context.bezierCurveTo(850.88, 508.51, 856.55, 507.91, 862.19, 507.69);
        context.bezierCurveTo(860.99, 510.09, 860.47, 512.72, 860.01, 515.35);
        context.bezierCurveTo(858.39, 519.56, 856.81, 523.84, 856.37, 528.37);
        context.bezierCurveTo(860.28, 527.4, 864.27, 526.81, 868.31, 526.84);
        context.bezierCurveTo(868.45, 522.09, 869.81, 517.59, 872.21, 513.51);
        context.bezierCurveTo(878.56, 519.29, 879.65, 528.16, 883.75, 535.35);
        context.bezierCurveTo(887.97, 542.64, 890.51, 550.73, 894.28, 558.27);
        context.bezierCurveTo(898.11, 569.05, 901.72, 579.97, 904.15, 591.17);
        context.bezierCurveTo(905.53, 604.12, 907.53, 617.01, 908.64, 629.99);
        context.bezierCurveTo(909.11, 651.85, 910.45, 674.68, 902.19, 695.41);
        context.bezierCurveTo(901.16, 698.79, 904.24, 701.27, 906.55, 703.09);
        context.bezierCurveTo(908.49, 701.76, 910.45, 700.43, 912.36, 699.01);
        context.bezierCurveTo(912.77, 696.27, 913.71, 693.65, 915.12, 691.28);
        context.bezierCurveTo(915.16, 683.51, 919.33, 676.48, 919.11, 668.68);
        context.bezierCurveTo(918.72, 661, 920.69, 653.47, 920.32, 645.79);
        context.bezierCurveTo(917.53, 639.21, 920.43, 631.83, 919.75, 624.92);
        context.bezierCurveTo(919.32, 624.36, 918.47, 623.27, 918.03, 622.71);
        context.bezierCurveTo(919.25, 617.65, 918.71, 612.13, 917.25, 607.17);
        context.bezierCurveTo(916.56, 596.07, 914.88, 585.05, 912.08, 574.28);
        context.bezierCurveTo(911.55, 573.65, 910.48, 572.37, 909.95, 571.73);
        context.bezierCurveTo(909.88, 570.23, 909.81, 568.73, 909.77, 567.24);
        context.bezierCurveTo(908.71, 561.93, 906.44, 557.03, 903.4, 552.59);
        context.bezierCurveTo(901.93, 540.36, 893.6, 530.36, 887.53, 520.01);
        context.bezierCurveTo(885.11, 515.44, 880.6, 512.08, 879.07, 507.08);
        context.bezierCurveTo(881.75, 499.71, 882.23, 491.75, 885.53, 484.57);
        context.bezierCurveTo(886.99, 481.95, 883.73, 479.16, 885.21, 476.52);
        context.bezierCurveTo(887.33, 470.64, 886.77, 463.97, 884.43, 458.25);
        context.bezierCurveTo(880.63, 446.07, 875.15, 433.19, 863.77, 426.25);
        context.bezierCurveTo(856.96, 422.48, 849.93, 418.87, 842.44, 416.69);
        context.bezierCurveTo(830.15, 414.67, 817.36, 415.16, 805.41, 418.73);
        context.bezierCurveTo(798.75, 418.12, 792.83, 421.24, 786.64, 423.05);
        context.bezierCurveTo(788.91, 416.07, 797.12, 416.05, 802.17, 412.11);
        context.bezierCurveTo(807.48, 407.75, 814.77, 408.69, 821.09, 407.21);
        context.closePath();
        context.moveTo(688.91, 445.08);
        context.bezierCurveTo(688.17, 446.56, 687.45, 448.03, 686.77, 449.52);
        context.bezierCurveTo(691.75, 452.17, 693.39, 458.44, 698.77, 460.43);
        context.bezierCurveTo(700.27, 459.13, 701.83, 457.91, 703.43, 456.76);
        context.bezierCurveTo(703.11, 455.24, 702.33, 454.04, 701.12, 453.15);
        context.bezierCurveTo(697.17, 450.21, 694.12, 445.77, 688.91, 445.08);
        context.closePath();
        context.moveTo(669.96, 452.44);
        context.bezierCurveTo(670.32, 453.25, 671.05, 454.88, 671.41, 455.69);
        context.bezierCurveTo(673.89, 457.09, 676.28, 458.68, 678.77, 460.11);
        context.bezierCurveTo(681.64, 461.92, 685.83, 458.49, 684.43, 455.35);
        context.bezierCurveTo(679.91, 453.6, 674.49, 446.97, 669.96, 452.44);
        context.closePath();
        context.moveTo(663.73, 455.2);
        context.bezierCurveTo(662.52, 459.64, 657.97, 457.63, 654.63, 457.83);
        context.bezierCurveTo(647.13, 458.07, 640.24, 461.55, 634.05, 465.48);
        context.bezierCurveTo(627.61, 468.03, 621.24, 470.83, 615.99, 475.45);
        context.bezierCurveTo(615.01, 476.73, 613.68, 478.53, 611.88, 477.19);
        context.bezierCurveTo(604.51, 475.37, 600.81, 467.33, 593.29, 465.99);
        context.bezierCurveTo(589.56, 465.2, 586.05, 463.56, 582.32, 462.85);
        context.bezierCurveTo(576.16, 462.31, 569.96, 462.52, 563.83, 463.04);
        context.bezierCurveTo(558.36, 464.91, 552.53, 465.13, 547.07, 466.96);
        context.bezierCurveTo(541.55, 471.45, 536.24, 476.23, 530.8, 480.84);
        context.bezierCurveTo(526.72, 484.12, 525.23, 489.35, 522.05, 493.36);
        context.bezierCurveTo(519.11, 497.13, 516.76, 501.36, 515.43, 505.97);
        context.bezierCurveTo(514.11, 511.23, 515.55, 516.61, 515.45, 521.93);
        context.bezierCurveTo(510.49, 530.69, 512.8, 541.91, 519.35, 549.2);
        context.bezierCurveTo(522.41, 553.25, 527.49, 554.65, 531.77, 557.01);
        context.bezierCurveTo(535.45, 557.19, 539.13, 557.36, 542.83, 557.19);
        context.bezierCurveTo(550.35, 552.56, 558.71, 549.63, 566.75, 546.08);
        context.bezierCurveTo(568.31, 544.41, 570.05, 542.91, 571.8, 541.43);
        context.bezierCurveTo(573.65, 540.84, 575.49, 540.16, 577.16, 539.13);
        context.bezierCurveTo(583.44, 533.85, 588.73, 527.56, 594.88, 522.12);
        context.bezierCurveTo(596.15, 519.95, 597.33, 517.61, 599.55, 516.25);
        context.bezierCurveTo(604.72, 512.99, 606.77, 506.95, 609.6, 501.85);
        context.bezierCurveTo(609.71, 501.09, 609.91, 499.57, 610.01, 498.83);
        context.bezierCurveTo(611.28, 497.52, 611.63, 495.76, 612.05, 494.07);
        context.bezierCurveTo(613.32, 490.71, 612.21, 487.16, 612.07, 483.71);
        context.bezierCurveTo(613.97, 483.33, 615.88, 482.97, 617.79, 482.59);
        context.bezierCurveTo(618.31, 481.44, 618.85, 480.31, 619.41, 479.17);
        context.bezierCurveTo(620.93, 478.24, 622.43, 477.25, 623.92, 476.27);
        context.bezierCurveTo(624.91, 476.23, 626.87, 476.16, 627.85, 476.13);
        context.bezierCurveTo(629.72, 475.27, 631.71, 474.77, 633.73, 474.39);
        context.bezierCurveTo(637.21, 472.05, 641.32, 471.05, 645.29, 469.91);
        context.bezierCurveTo(649.85, 463.39, 659.4, 470.31, 663.96, 464.39);
        context.bezierCurveTo(665.73, 463.65, 667.55, 463, 669.23, 462.04);
        context.bezierCurveTo(670.83, 459.57, 669.97, 456.32, 670.25, 453.55);
        context.bezierCurveTo(667.75, 452.79, 665.57, 453.52, 663.73, 455.2);
        context.closePath();
        context.moveTo(691.92, 525.36);
        context.bezierCurveTo(684.08, 527.57, 676.64, 531.04, 668.81, 533.35);
        context.bezierCurveTo(656.03, 537.01, 643.95, 542.69, 632.09, 548.65);
        context.bezierCurveTo(619.21, 553.76, 606.8, 560.13, 595.65, 568.37);
        context.bezierCurveTo(589.39, 574.23, 581.77, 579.01, 577.56, 586.72);
        context.bezierCurveTo(573.19, 589.77, 570.96, 594.92, 567.99, 599.2);
        context.bezierCurveTo(564.09, 604.17, 562, 610.2, 558.97, 615.69);
        context.bezierCurveTo(557.75, 617.61, 557.84, 619.89, 557.84, 622.09);
        context.bezierCurveTo(561.96, 617.04, 563.21, 610.39, 567.11, 605.2);
        context.bezierCurveTo(569.93, 601.23, 572, 596.72, 575.2, 593.01);
        context.bezierCurveTo(577.04, 590.77, 579.32, 588.75, 580.04, 585.83);
        context.bezierCurveTo(584.68, 583.73, 587.47, 579.15, 591.39, 576.07);
        context.bezierCurveTo(604.75, 564.92, 620.4, 557.11, 636.32, 550.33);
        context.bezierCurveTo(643.61, 547.6, 650.21, 543.27, 657.69, 541.03);
        context.bezierCurveTo(666.6, 538.59, 674.77, 533.99, 683.91, 532.28);
        context.bezierCurveTo(693.93, 528.75, 704.45, 527.07, 714.73, 524.45);
        context.bezierCurveTo(718.67, 523.88, 722.72, 524.6, 726.64, 523.69);
        context.bezierCurveTo(734.12, 522.03, 741.91, 522.77, 749.37, 520.91);
        context.bezierCurveTo(750.39, 520.57, 751.76, 520.49, 752.24, 519.35);
        context.bezierCurveTo(752, 519.05, 751.53, 518.47, 751.29, 518.17);
        context.bezierCurveTo(731.27, 517.83, 711.52, 521.8, 691.92, 525.36);
        context.closePath();
        context.moveTo(770.88, 546.52);
        context.bezierCurveTo(767.6, 549.85, 764.05, 552.92, 760.2, 555.57);
        context.bezierCurveTo(757.23, 557.73, 756.41, 561.53, 755, 564.72);
        context.bezierCurveTo(753.25, 569.89, 751.13, 575.17, 751.6, 580.75);
        context.bezierCurveTo(753.04, 594.8, 758.45, 608.73, 768.49, 618.91);
        context.bezierCurveTo(771.24, 623.19, 774.84, 626.73, 778.81, 629.91);
        context.bezierCurveTo(781.17, 632.87, 784.15, 635.27, 786.81, 637.96);
        context.bezierCurveTo(793.95, 646.27, 803.33, 651.88, 812.88, 657);
        context.bezierCurveTo(818.15, 658.81, 823.61, 660.04, 829.13, 660.83);
        context.bezierCurveTo(836.11, 661.19, 842.69, 658.56, 849.23, 656.51);
        context.bezierCurveTo(853.64, 655.13, 856.68, 651.51, 860.19, 648.73);
        context.bezierCurveTo(860.72, 644.45, 862.71, 640.65, 864.16, 636.68);
        context.bezierCurveTo(864.4, 632.57, 864.24, 628.35, 866.12, 624.56);
        context.bezierCurveTo(866.04, 618.99, 863.8, 613.65, 861.99, 608.45);
        context.bezierCurveTo(861.72, 605.77, 861.49, 603.04, 859.81, 600.81);
        context.bezierCurveTo(859.2, 598.01, 858.24, 595.31, 857.04, 592.72);
        context.bezierCurveTo(857.04, 590.16, 856.52, 587.73, 854.39, 586.13);
        context.bezierCurveTo(854.05, 584.45, 854.52, 582.32, 852.73, 581.39);
        context.bezierCurveTo(849.43, 579.29, 848.07, 574.28, 843.6, 574.45);
        context.bezierCurveTo(843.47, 573.61, 843.21, 571.92, 843.09, 571.08);
        context.bezierCurveTo(838.95, 567.56, 835.47, 563.01, 830.2, 561.15);
        context.bezierCurveTo(828.12, 555.76, 822.55, 553.87, 818.53, 550.29);
        context.bezierCurveTo(811.32, 547.6, 804.93, 542.77, 797.23, 541.44);
        context.bezierCurveTo(791.84, 541.2, 786.43, 541.03, 781.07, 541.63);
        context.bezierCurveTo(777.89, 543.81, 773.47, 543.43, 770.88, 546.52);
        context.closePath();
        context.moveTo(520.93, 560.33);
        context.bezierCurveTo(517.76, 563.35, 513.24, 566.33, 513.59, 571.31);
        context.bezierCurveTo(512.8, 575.16, 516.48, 578.04, 520.11, 577.56);
        context.bezierCurveTo(522.44, 574.73, 525.95, 572.49, 526.41, 568.56);
        context.bezierCurveTo(527.76, 566.25, 529.63, 563.25, 527.77, 560.69);
        context.bezierCurveTo(526.31, 558.29, 522.8, 558.49, 520.93, 560.33);
        context.closePath();
        context.moveTo(504.75, 583.31);
        context.bezierCurveTo(504.44, 588.55, 506.87, 595.44, 513.31, 594.76);
        context.bezierCurveTo(517.81, 592.69, 516.85, 587.01, 516.63, 583.04);
        context.bezierCurveTo(513.17, 579.61, 508.2, 580.28, 504.75, 583.31);
        context.closePath();
        context.moveTo(716.21, 637.03);
        context.bezierCurveTo(710.24, 639.61, 705.52, 646.48, 707.68, 653.09);
        context.bezierCurveTo(709.48, 657.35, 712.11, 661.13, 714.71, 664.93);
        context.bezierCurveTo(717.61, 665.37, 720.28, 666.52, 722.72, 668.17);
        context.bezierCurveTo(725.77, 668.12, 728.97, 668.25, 731.95, 667.39);
        context.bezierCurveTo(734.17, 665.56, 736.04, 663.23, 738.85, 662.24);
        context.bezierCurveTo(739.13, 661.57, 739.67, 660.24, 739.95, 659.57);
        context.bezierCurveTo(741.39, 658.44, 742.36, 656.96, 742.53, 655.09);
        context.bezierCurveTo(743.49, 654.29, 744.48, 653.49, 745.47, 652.72);
        context.bezierCurveTo(746.01, 649.32, 748.65, 646.13, 747.05, 642.64);
        context.bezierCurveTo(746.59, 638.8, 742.64, 637.15, 741.44, 633.67);
        context.bezierCurveTo(733.08, 630.48, 723.88, 633.16, 716.21, 637.03);
        context.closePath();
        context.moveTo(900.29, 664.28);
        context.bezierCurveTo(902.04, 664.03, 902.13, 660.87, 901.27, 659.65);
        context.bezierCurveTo(899.39, 659.84, 899.33, 663.04, 900.29, 664.28);
        context.closePath();
        context.moveTo(713.21, 691.32);
        context.bezierCurveTo(712.41, 693.08, 711.77, 694.92, 711.01, 696.71);
        context.bezierCurveTo(709.92, 694.6, 708.12, 693.77, 705.61, 694.2);
        context.bezierCurveTo(704.8, 700.07, 709.08, 705.19, 713.55, 708.44);
        context.bezierCurveTo(720.21, 708.39, 727.33, 711.35, 733.76, 708.35);
        context.bezierCurveTo(741.32, 708.71, 748.96, 705.95, 754.09, 700.28);
        context.bezierCurveTo(754.67, 699.88, 755.81, 699.09, 756.39, 698.69);
        context.bezierCurveTo(756.87, 695.29, 758.92, 692.49, 761.11, 689.99);
        context.bezierCurveTo(760.97, 689.11, 760.72, 687.36, 760.59, 686.48);
        context.bezierCurveTo(758.56, 686.23, 756.55, 686.29, 754.59, 686.84);
        context.bezierCurveTo(754.24, 687.72, 753.55, 689.48, 753.2, 690.36);
        context.bezierCurveTo(753.16, 689.52, 753.05, 687.87, 753.01, 687.03);
        context.bezierCurveTo(752.07, 686.81, 750.17, 686.39, 749.23, 686.16);
        context.bezierCurveTo(750.31, 686.4, 752.47, 686.87, 753.55, 687.11);
        context.bezierCurveTo(754.2, 685.12, 755.88, 683.04, 754.19, 681.11);
        context.bezierCurveTo(749.88, 680.65, 745.61, 682.04, 741.29, 681.72);
        context.bezierCurveTo(736.79, 682.2, 733.52, 678.51, 729.25, 677.85);
        context.bezierCurveTo(726.64, 684.85, 719.44, 688.19, 713.21, 691.32);
        context.closePath();
        context.moveTo(891.43, 717.81);
        context.bezierCurveTo(892.01, 719.24, 892.6, 720.68, 893.19, 722.13);
        context.bezierCurveTo(896.17, 723.96, 899.51, 725.19, 903.05, 725.23);
        context.bezierCurveTo(903.73, 723.19, 904.36, 721.13, 905, 719.09);
        context.bezierCurveTo(902.39, 715.09, 897.24, 716.35, 893.23, 715.75);
        context.bezierCurveTo(892.61, 716.43, 892.01, 717.12, 891.43, 717.81);
        context.closePath();
        context.moveTo(888.45, 741);
        context.bezierCurveTo(891.79, 743.44, 896.27, 743.73, 900.29, 743.84);
        context.bezierCurveTo(900.35, 741.71, 900.43, 739.59, 900.52, 737.47);
        context.bezierCurveTo(896.51, 735, 887.99, 734.33, 888.45, 741);
        context.closePath();
        context.moveTo(668.52, 954.07);
        context.bezierCurveTo(668.24, 956.73, 670.37, 959.03, 670.36, 961.76);
        context.bezierCurveTo(668.12, 961, 665.4, 959.23, 663.4, 961.41);
        context.bezierCurveTo(660.99, 966.01, 662.37, 971.36, 663.27, 976.19);
        context.bezierCurveTo(666.41, 980.53, 671.73, 980.89, 676.67, 980.25);
        context.bezierCurveTo(679.08, 979.72, 679.39, 976.93, 679.81, 974.93);
        context.bezierCurveTo(680.89, 974.33, 681.99, 973.75, 683.09, 973.17);
        context.bezierCurveTo(683.89, 971.33, 684.17, 969.07, 686.03, 967.96);
        context.bezierCurveTo(689.89, 965.13, 688.64, 959.36, 686.56, 955.79);
        context.bezierCurveTo(686.43, 954.11, 686.13, 952.48, 685.67, 950.91);
        context.bezierCurveTo(682.08, 943.93, 668.92, 945.76, 668.52, 954.07);
        context.closePath();
        context.moveTo(696.87, 949.49);
        context.bezierCurveTo(695.33, 952.11, 695.28, 955.09, 695.64, 958.04);
        context.bezierCurveTo(697.49, 958.79, 699.32, 959.57, 701.19, 960.39);
        context.bezierCurveTo(700.32, 962.83, 699.09, 965.11, 697.83, 967.36);
        context.bezierCurveTo(696.16, 974.63, 701.81, 983.11, 709.31, 983.96);
        context.bezierCurveTo(712.56, 984.55, 714.27, 981.41, 715.77, 979.13);
        context.bezierCurveTo(717.43, 978.44, 719.08, 977.72, 720.75, 977.04);
        context.bezierCurveTo(721.2, 974.28, 721.84, 970.95, 719.57, 968.8);
        context.bezierCurveTo(717.93, 966.84, 715.24, 966.65, 712.96, 966.13);
        context.bezierCurveTo(714.23, 961.72, 716.07, 956.15, 712.36, 952.36);
        context.bezierCurveTo(708.43, 948.19, 702.03, 949.03, 696.87, 949.49);
        context.closePath();
        context.moveTo(729.95, 959.75);
        context.bezierCurveTo(731.37, 960.43, 732.8, 961.11, 734.25, 961.79);
        context.bezierCurveTo(732.03, 964.48, 729.92, 967.8, 731.09, 971.47);
        context.bezierCurveTo(731.48, 975.71, 735.52, 977.99, 738.63, 980.24);
        context.bezierCurveTo(742.45, 977.57, 746.88, 979.99, 750.8, 978.32);
        context.bezierCurveTo(753.33, 974.95, 756.05, 970.53, 754.88, 966.15);
        context.bezierCurveTo(753.28, 963.37, 749.88, 962.67, 746.97, 962.27);
        context.bezierCurveTo(746.23, 959.33, 747.25, 955.49, 744.59, 953.4);
        context.bezierCurveTo(742.01, 950.67, 738.03, 950.49, 734.55, 950.85);
        context.bezierCurveTo(731.12, 952.29, 729.37, 956.16, 729.95, 959.75);
        context.closePath();
        context.fillStyle = fillColor56;
        context.fill();


    }

    function drawPath332() {
        context.beginPath();
        context.moveTo(251.43, 405.33);
        context.bezierCurveTo(254.29, 411.43, 258.71, 416.92, 259.92, 423.68);
        context.bezierCurveTo(259.12, 425.55, 258.07, 427.29, 257.08, 429.07);
        context.bezierCurveTo(256.96, 432.73, 256.73, 436.4, 256.33, 440.05);
        context.bezierCurveTo(255.28, 446.71, 254.71, 453.6, 256.72, 460.15);
        context.bezierCurveTo(256.89, 464.41, 256.44, 468.67, 255.92, 472.91);
        context.bezierCurveTo(255.36, 467.33, 254.57, 461.79, 253.84, 456.24);
        context.bezierCurveTo(254.75, 451.41, 254.61, 446.48, 254.03, 441.63);
        context.bezierCurveTo(248.01, 456.56, 247.33, 472.93, 243.43, 488.41);
        context.bezierCurveTo(240.84, 495.15, 240.41, 502.45, 237.68, 509.13);
        context.bezierCurveTo(236.87, 510.81, 236.81, 512.63, 238.17, 514.08);
        context.bezierCurveTo(236.51, 517.88, 234.53, 521.53, 232.41, 525.09);
        context.bezierCurveTo(231.65, 523.79, 230.88, 522.49, 230.05, 521.23);
        context.lineTo(229.07, 520.11);
        context.bezierCurveTo(228.81, 519.83, 228.32, 519.28, 228.08, 519);
        context.bezierCurveTo(228.63, 518.97, 229.73, 518.92, 230.29, 518.89);
        context.bezierCurveTo(229.01, 514.85, 227.59, 510.84, 225.47, 507.17);
        context.bezierCurveTo(226.04, 507.08, 227.19, 506.89, 227.77, 506.8);
        context.bezierCurveTo(231.35, 497.49, 234.64, 487.97, 235.93, 478.05);
        context.bezierCurveTo(236.47, 473.75, 237.15, 469.45, 238.12, 465.23);
        context.bezierCurveTo(239.47, 459.24, 238.84, 452.88, 241.28, 447.15);
        context.bezierCurveTo(243.2, 442.29, 243.07, 437.05, 243.57, 431.96);
        context.bezierCurveTo(243.85, 428.51, 247.64, 426.8, 248.2, 423.43);
        context.bezierCurveTo(249.48, 417.44, 250.13, 411.32, 251.43, 405.33);
        context.closePath();
        context.fillStyle = fillColor306;
        context.fill();


    }

    function drawPath333() {
        context.beginPath();
        context.moveTo(361.72, 406.21);
        context.bezierCurveTo(363.6, 405.49, 364.2, 406.08, 363.52, 407.99);
        context.bezierCurveTo(361.63, 408.71, 361.03, 408.11, 361.72, 406.21);
        context.closePath();
        context.fillStyle = fillColor307;
        context.fill();


    }

    function drawPath334() {
        context.beginPath();
        context.moveTo(30.79, 408.56);
        context.bezierCurveTo(31.96, 409.84, 33.13, 411.12, 34.33, 412.37);
        context.lineTo(35.89, 410.79);
        context.bezierCurveTo(38.41, 410.88, 40.93, 411.12, 43.45, 411.33);
        context.bezierCurveTo(43.48, 412.47, 43.51, 413.61, 43.53, 414.76);
        context.bezierCurveTo(40.01, 415.25, 36.49, 415.84, 32.93, 416.09);
        context.lineTo(31.03, 416.04);
        context.bezierCurveTo(30.29, 416, 28.84, 415.92, 28.11, 415.88);
        context.bezierCurveTo(29.59, 414.47, 31.12, 413.09, 32.63, 411.72);
        context.bezierCurveTo(32.16, 410.93, 31.25, 409.35, 30.79, 408.56);
        context.closePath();
        context.fillStyle = fillColor308;
        context.fill();


    }

    function drawPath335() {
        context.beginPath();
        context.moveTo(97.96, 410.33);
        context.bezierCurveTo(99.08, 410.87, 100.21, 411.4, 101.35, 411.92);
        context.bezierCurveTo(106.6, 415.89, 111.53, 420.29, 116.95, 424.04);
        context.bezierCurveTo(116.39, 423.97, 115.25, 423.81, 114.68, 423.73);
        context.bezierCurveTo(109.96, 420.17, 105.33, 416.49, 100.68, 412.84);
        context.bezierCurveTo(100, 412.21, 98.64, 410.96, 97.96, 410.33);
        context.closePath();
        context.fillStyle = fillColor91;
        context.fill();


    }

    function drawPath336() {
        context.beginPath();
        context.moveTo(121.24, 409.87);
        context.bezierCurveTo(125.53, 414.24, 130.43, 417.93, 135.16, 421.8);
        context.bezierCurveTo(129.77, 418.85, 125.07, 414.64, 121.24, 409.87);
        context.closePath();
        context.fillStyle = fillColor261;
        context.fill();


    }

    function drawPath337() {
        context.beginPath();
        context.moveTo(264.55, 410.6);
        context.bezierCurveTo(265.01, 410.13, 265.96, 409.21, 266.44, 408.75);
        context.bezierCurveTo(269.59, 414.41, 272.93, 420, 276.79, 425.23);
        context.bezierCurveTo(276.32, 425.37, 275.4, 425.68, 274.95, 425.84);
        context.bezierCurveTo(271.53, 423.65, 268.11, 421.33, 265.75, 417.97);
        context.bezierCurveTo(266.76, 418.24, 268.79, 418.77, 269.8, 419.04);
        context.bezierCurveTo(268.03, 416.24, 266.08, 413.55, 264.55, 410.6);
        context.closePath();
        context.fillStyle = fillColor309;
        context.fill();


    }

    function drawPath338() {
        context.beginPath();
        context.moveTo(343.28, 413.4);
        context.bezierCurveTo(344.36, 412.31, 345.45, 411.23, 346.56, 410.15);
        context.bezierCurveTo(348.25, 410.72, 349.95, 411.32, 351.67, 411.91);
        context.bezierCurveTo(350.03, 415.71, 348.84, 419.67, 348.07, 423.73);
        context.bezierCurveTo(344.95, 429.73, 339.59, 434.15, 336.49, 440.16);
        context.bezierCurveTo(335.16, 439.41, 333.83, 438.67, 332.51, 437.93);
        context.bezierCurveTo(332.95, 436.79, 333.41, 435.65, 333.87, 434.52);
        context.bezierCurveTo(333.48, 434.39, 332.69, 434.11, 332.31, 433.97);
        context.bezierCurveTo(331.8, 433.71, 330.77, 433.17, 330.25, 432.91);
        context.bezierCurveTo(331.75, 431.52, 333.25, 430.16, 334.77, 428.8);
        context.bezierCurveTo(333.95, 427.47, 333.13, 426.13, 332.33, 424.8);
        context.bezierCurveTo(334.77, 422.17, 336.52, 419.03, 337.6, 415.63);
        context.bezierCurveTo(337.95, 415.08, 338.63, 413.97, 338.97, 413.43);
        context.bezierCurveTo(340.4, 413.41, 341.84, 413.4, 343.28, 413.4);
        context.closePath();
        context.fillStyle = fillColor310;
        context.fill();


    }

    function drawPath339() {
        context.beginPath();
        context.moveTo(359.2, 410.4);
        context.bezierCurveTo(361.88, 411, 358.57, 415.23, 356.72, 413.95);
        context.bezierCurveTo(356.12, 412.4, 357.84, 410.81, 359.2, 410.4);
        context.closePath();
        context.fillStyle = fillColor311;
        context.fill();


    }

    function drawPath340() {
        context.beginPath();
        context.moveTo(59.13, 414.96);
        context.bezierCurveTo(59.89, 413.65, 60.2, 410.19, 62.51, 411.53);
        context.bezierCurveTo(72.39, 415.8, 82.04, 420.68, 91.99, 424.8);
        context.bezierCurveTo(93.21, 423.84, 94.31, 422.73, 95.41, 421.65);
        context.bezierCurveTo(99.97, 423.39, 104.81, 424.23, 109.33, 426.03);
        context.bezierCurveTo(112.31, 428.79, 114.75, 432.2, 118.55, 433.97);
        context.bezierCurveTo(117.99, 437.16, 115.39, 438.25, 112.44, 438.63);
        context.bezierCurveTo(119.11, 439.67, 124.07, 444.6, 127.13, 450.33);
        context.bezierCurveTo(125.11, 450.84, 122.25, 450.12, 121.04, 452.29);
        context.bezierCurveTo(120.05, 454.49, 119.84, 456.95, 119.37, 459.31);
        context.bezierCurveTo(117.88, 456.16, 117.35, 452.4, 114.79, 449.91);
        context.bezierCurveTo(109.81, 445.13, 104.56, 440.57, 98.48, 437.25);
        context.bezierCurveTo(95.31, 433.47, 91.92, 429.51, 86.92, 428.19);
        context.bezierCurveTo(85.51, 427.59, 84.11, 426.95, 82.72, 426.29);
        context.bezierCurveTo(81.08, 425.47, 78.96, 424.28, 77.31, 425.71);
        context.lineTo(76.52, 426.17);
        context.bezierCurveTo(70.77, 424.07, 66.97, 418.95, 61.49, 416.39);
        context.bezierCurveTo(60.91, 416.03, 59.72, 415.32, 59.13, 414.96);
        context.closePath();
        context.fillStyle = fillColor312;
        context.fill();


    }

    function drawPath341() {
        context.beginPath();
        context.moveTo(101.35, 411.92);
        context.lineTo(104.4, 411.01);
        context.bezierCurveTo(113, 418.49, 123.72, 423.45, 131.05, 432.4);
        context.bezierCurveTo(135.01, 436.43, 137.77, 441.63, 142.4, 444.99);
        context.bezierCurveTo(141.92, 445.35, 140.95, 446.07, 140.47, 446.43);
        context.bezierCurveTo(136.72, 442.71, 132.53, 439.35, 129.52, 434.95);
        context.bezierCurveTo(126.56, 430.16, 122.17, 426.19, 116.95, 424.04);
        context.bezierCurveTo(111.53, 420.29, 106.6, 415.89, 101.35, 411.92);
        context.closePath();
        context.fillStyle = fillColor172;
        context.fill();


    }

    function drawPath342() {
        context.beginPath();
        context.moveTo(479.93, 420.59);
        context.bezierCurveTo(484.64, 417.24, 489.67, 414.37, 494.8, 411.72);
        context.bezierCurveTo(494.48, 413.45, 494.16, 415.2, 493.85, 416.96);
        context.bezierCurveTo(485.65, 423.57, 479.43, 432.76, 469.65, 437.32);
        context.bezierCurveTo(467.11, 435.57, 464.36, 434.13, 461.77, 432.47);
        context.bezierCurveTo(467.44, 427.93, 474.03, 424.79, 479.93, 420.59);
        context.closePath();
        context.fillStyle = fillColor313;
        context.fill();


    }

    function drawPath343() {
        context.beginPath();
        context.moveTo(393.44, 429.93);
        context.bezierCurveTo(399.19, 423.64, 404.07, 414.93, 413.27, 413.55);
        context.bezierCurveTo(416.41, 412.52, 419.17, 414.65, 421.49, 416.49);
        context.bezierCurveTo(421.73, 417.09, 422.21, 418.29, 422.45, 418.89);
        context.bezierCurveTo(422.97, 420.17, 423.51, 421.45, 424.09, 422.72);
        context.bezierCurveTo(424.28, 423.12, 424.68, 423.92, 424.88, 424.32);
        context.bezierCurveTo(428.77, 423.96, 432.85, 421.83, 436.64, 423.75);
        context.bezierCurveTo(439.43, 424.91, 442.19, 426.25, 444.59, 428.15);
        context.bezierCurveTo(446.88, 429.89, 446.2, 433.08, 446.43, 435.6);
        context.bezierCurveTo(452.21, 439.4, 459.97, 435.05, 465.39, 439.48);
        context.bezierCurveTo(461.31, 439.95, 456.87, 439.64, 453.31, 442.04);
        context.bezierCurveTo(450.52, 443.65, 448.61, 446.31, 446.64, 448.77);
        context.bezierCurveTo(446.53, 451.4, 448.27, 454.89, 445.8, 456.85);
        context.bezierCurveTo(440.01, 461.51, 439.56, 469.47, 436.05, 475.6);
        context.bezierCurveTo(433.88, 477.97, 431.59, 480.24, 429.48, 482.69);
        context.bezierCurveTo(432.47, 483.35, 434.35, 480.57, 436.52, 479.11);
        context.bezierCurveTo(434.35, 483.45, 430.17, 485.91, 425.73, 487.41);
        context.bezierCurveTo(425.91, 487.84, 426.27, 488.68, 426.45, 489.11);
        context.bezierCurveTo(426.64, 489.77, 427.01, 491.12, 427.2, 491.79);
        context.bezierCurveTo(424.08, 491.64, 420.13, 490.59, 420.72, 486.61);
        context.bezierCurveTo(422.4, 481.64, 424.77, 476.91, 426.03, 471.79);
        context.bezierCurveTo(426.63, 471.41, 427.83, 470.69, 428.43, 470.33);
        context.bezierCurveTo(428.56, 464.6, 430.28, 459.01, 433.65, 454.35);
        context.bezierCurveTo(438.21, 448.32, 438.93, 440.36, 438.13, 433.09);
        context.bezierCurveTo(437.57, 429.57, 433.81, 428.77, 430.84, 428.59);
        context.bezierCurveTo(431.09, 430.27, 431.37, 431.96, 431.65, 433.65);
        context.bezierCurveTo(430.21, 433.03, 428.79, 432.41, 427.36, 431.8);
        context.bezierCurveTo(426.84, 435.4, 426.65, 439.33, 423.91, 442.07);
        context.bezierCurveTo(421.83, 444.12, 421.36, 446.99, 421.13, 449.79);
        context.bezierCurveTo(420.73, 459.43, 418.08, 468.71, 415.77, 478);
        context.bezierCurveTo(414.01, 481.79, 412.36, 485.71, 413.45, 489.97);
        context.bezierCurveTo(418.55, 492.52, 423.84, 494.69, 429.47, 495.72);
        context.bezierCurveTo(425.24, 497.72, 420.41, 497.05, 415.91, 496.97);
        context.bezierCurveTo(411.49, 497.08, 408.24, 493.83, 404.81, 491.57);
        context.bezierCurveTo(406.24, 490.35, 407.61, 489.07, 408.97, 487.79);
        context.bezierCurveTo(407.09, 482.97, 407.64, 477.76, 407.52, 472.73);
        context.bezierCurveTo(406.19, 471.72, 404.88, 470.65, 403.6, 469.59);
        context.bezierCurveTo(404.01, 469.48, 404.81, 469.27, 405.23, 469.16);
        context.bezierCurveTo(405.99, 468.93, 407.52, 468.49, 408.29, 468.28);
        context.bezierCurveTo(405.96, 465.03, 403.2, 461.96, 401.92, 458.11);
        context.bezierCurveTo(402.23, 457.33, 402.81, 455.8, 403.11, 455.03);
        context.bezierCurveTo(404.17, 457.2, 405.28, 459.37, 406.57, 461.44);
        context.bezierCurveTo(405.6, 452.08, 398.71, 445.31, 393.16, 438.33);
        context.bezierCurveTo(396.83, 436, 391.96, 433.79, 389.71, 435.57);
        context.bezierCurveTo(390.31, 436.57, 391.08, 437.41, 392.04, 438.09);
        context.bezierCurveTo(390.33, 439.95, 388.71, 441.87, 387.12, 443.81);
        context.bezierCurveTo(388.47, 445.25, 389.81, 446.69, 391.16, 448.13);
        context.bezierCurveTo(390.31, 448.32, 388.61, 448.68, 387.76, 448.87);
        context.bezierCurveTo(388.21, 451, 388.67, 453.15, 389.15, 455.29);
        context.bezierCurveTo(387.59, 454.72, 386.03, 454.16, 384.48, 453.6);
        context.bezierCurveTo(386.4, 461.07, 387.92, 468.91, 392.39, 475.39);
        context.bezierCurveTo(392.73, 473.72, 393.07, 472.05, 393.52, 470.43);
        context.bezierCurveTo(394.07, 469.32, 394.63, 468.24, 395.23, 467.17);
        context.bezierCurveTo(395.6, 467.01, 396.35, 466.71, 396.72, 466.55);
        context.bezierCurveTo(397.08, 471.17, 398.48, 475.73, 401.87, 479.05);
        context.bezierCurveTo(401.43, 479.48, 400.55, 480.33, 400.11, 480.76);
        context.bezierCurveTo(401.41, 481.88, 402.72, 483, 404.04, 484.13);
        context.bezierCurveTo(402.77, 484.07, 401.52, 484.01, 400.28, 483.96);
        context.bezierCurveTo(400.97, 486.03, 401.65, 488.08, 402.43, 490.12);
        context.bezierCurveTo(401.8, 490, 400.56, 489.75, 399.93, 489.61);
        context.bezierCurveTo(399.2, 488.29, 398.53, 486.95, 397.87, 485.61);
        context.bezierCurveTo(397.13, 485.6, 396.4, 485.6, 395.68, 485.6);
        context.bezierCurveTo(390.28, 478.75, 387.87, 470.25, 382.97, 463.12);
        context.bezierCurveTo(382.33, 461.43, 381.68, 459.75, 381.08, 458.07);
        context.bezierCurveTo(380.64, 455.79, 380.41, 453.48, 380.25, 451.17);
        context.bezierCurveTo(380.32, 450.51, 380.45, 449.17, 380.52, 448.51);
        context.bezierCurveTo(381.57, 440.83, 386.57, 433.57, 393.44, 429.93);
        context.closePath();
        context.moveTo(406.49, 422.84);
        context.bezierCurveTo(406.03, 422.83, 405.12, 422.83, 404.65, 422.81);
        context.bezierCurveTo(405.15, 426.57, 402.09, 428.65, 399.31, 430.4);
        context.bezierCurveTo(403.55, 431.88, 406.13, 435.36, 406.05, 439.91);
        context.bezierCurveTo(407.12, 440.44, 408.19, 440.96, 409.25, 441.49);
        context.bezierCurveTo(407.48, 442.19, 404.83, 442.45, 404.68, 444.88);
        context.bezierCurveTo(405.88, 448.8, 407.08, 452.73, 407.36, 456.85);
        context.bezierCurveTo(407.69, 455.45, 408.04, 454.05, 408.4, 452.65);
        context.bezierCurveTo(409.59, 452.88, 410.77, 453.11, 411.97, 453.33);
        context.bezierCurveTo(411.19, 452.48, 410.41, 451.64, 409.63, 450.8);
        context.bezierCurveTo(410.01, 449.52, 410.41, 448.24, 410.81, 446.97);
        context.bezierCurveTo(412.12, 448.68, 413.31, 450.48, 414.39, 452.35);
        context.bezierCurveTo(414.59, 449.13, 412.91, 445.36, 414.99, 442.55);
        context.bezierCurveTo(414.67, 440.96, 414.37, 439.37, 414.12, 437.79);
        context.bezierCurveTo(415.36, 437.35, 416.64, 436.97, 417.93, 436.64);
        context.bezierCurveTo(417.95, 434.07, 417.23, 430.84, 419.93, 429.29);
        context.bezierCurveTo(420.24, 431.72, 420.48, 434.17, 420.71, 436.63);
        context.bezierCurveTo(420.12, 430.33, 424.24, 422.75, 418.31, 417.95);
        context.bezierCurveTo(418.08, 418.95, 417.61, 420.95, 417.37, 421.95);
        context.bezierCurveTo(415.53, 420.65, 413.69, 419.37, 411.87, 418.11);
        context.bezierCurveTo(410.07, 419.68, 408.28, 421.25, 406.49, 422.84);
        context.closePath();
        context.moveTo(409.39, 455.33);
        context.bezierCurveTo(408.79, 457.48, 409.56, 458.24, 411.73, 457.61);
        context.bezierCurveTo(412.33, 455.45, 411.55, 454.69, 409.39, 455.33);
        context.closePath();
        context.fillStyle = fillColor314;
        context.fill();


    }

    function drawPath344() {
        context.beginPath();
        context.moveTo(279.95, 415.24);
        context.bezierCurveTo(280.47, 415.55, 281.51, 416.17, 282.03, 416.48);
        context.bezierCurveTo(285.04, 418.39, 288.33, 419.8, 291.72, 420.95);
        context.bezierCurveTo(293.41, 421.84, 295.04, 422.87, 296.68, 423.89);
        context.bezierCurveTo(296.8, 428.59, 301.2, 434.11, 296.79, 438.03);
        context.bezierCurveTo(295.29, 435.4, 293.8, 432.55, 290.59, 431.84);
        context.bezierCurveTo(291.25, 433.29, 291.97, 434.76, 292.68, 436.23);
        context.bezierCurveTo(292.04, 436.36, 290.75, 436.65, 290.11, 436.8);
        context.bezierCurveTo(287.92, 430.91, 283.79, 426.03, 281.48, 420.21);
        context.bezierCurveTo(280.95, 418.56, 280.48, 416.88, 279.95, 415.24);
        context.closePath();
        context.fillStyle = fillColor315;
        context.fill();


    }

    function drawPath345() {
        context.beginPath();
        context.moveTo(282.03, 416.48);
        context.bezierCurveTo(282.88, 416.04, 284.57, 415.15, 285.43, 414.71);
        context.bezierCurveTo(288.64, 416.16, 292, 417.27, 295.33, 418.4);
        context.bezierCurveTo(295.19, 419, 294.88, 420.2, 294.73, 420.79);
        context.bezierCurveTo(293.97, 420.83, 292.47, 420.91, 291.72, 420.95);
        context.bezierCurveTo(288.33, 419.8, 285.04, 418.39, 282.03, 416.48);
        context.closePath();
        context.fillStyle = fillColor316;
        context.fill();


    }

    function drawPath346() {
        context.beginPath();
        context.moveTo(805.41, 418.73);
        context.bezierCurveTo(817.36, 415.16, 830.15, 414.67, 842.44, 416.69);
        context.bezierCurveTo(849.93, 418.87, 856.96, 422.48, 863.77, 426.25);
        context.bezierCurveTo(875.15, 433.19, 880.63, 446.07, 884.43, 458.25);
        context.bezierCurveTo(886.77, 463.97, 887.33, 470.64, 885.21, 476.52);
        context.bezierCurveTo(883.73, 479.16, 886.99, 481.95, 885.53, 484.57);
        context.bezierCurveTo(882.23, 491.75, 881.75, 499.71, 879.07, 507.08);
        context.bezierCurveTo(880.6, 512.08, 885.11, 515.44, 887.53, 520.01);
        context.bezierCurveTo(893.6, 530.36, 901.93, 540.36, 903.4, 552.59);
        context.bezierCurveTo(906.44, 557.03, 908.71, 561.93, 909.77, 567.24);
        context.bezierCurveTo(909.81, 568.73, 909.88, 570.23, 909.95, 571.73);
        context.bezierCurveTo(910.48, 572.37, 911.55, 573.65, 912.08, 574.28);
        context.bezierCurveTo(914.88, 585.05, 916.56, 596.07, 917.25, 607.17);
        context.bezierCurveTo(918.71, 612.13, 919.25, 617.65, 918.03, 622.71);
        context.bezierCurveTo(918.47, 623.27, 919.32, 624.36, 919.75, 624.92);
        context.bezierCurveTo(920.43, 631.83, 917.53, 639.21, 920.32, 645.79);
        context.bezierCurveTo(920.69, 653.47, 918.72, 661, 919.11, 668.68);
        context.bezierCurveTo(919.33, 676.48, 915.16, 683.51, 915.12, 691.28);
        context.bezierCurveTo(913.71, 693.65, 912.77, 696.27, 912.36, 699.01);
        context.bezierCurveTo(910.45, 700.43, 908.49, 701.76, 906.55, 703.09);
        context.bezierCurveTo(904.24, 701.27, 901.16, 698.79, 902.19, 695.41);
        context.bezierCurveTo(910.45, 674.68, 909.11, 651.85, 908.64, 629.99);
        context.bezierCurveTo(907.53, 617.01, 905.53, 604.12, 904.15, 591.17);
        context.bezierCurveTo(901.72, 579.97, 898.11, 569.05, 894.28, 558.27);
        context.bezierCurveTo(890.51, 550.73, 887.97, 542.64, 883.75, 535.35);
        context.bezierCurveTo(879.65, 528.16, 878.56, 519.29, 872.21, 513.51);
        context.bezierCurveTo(869.81, 517.59, 868.45, 522.09, 868.31, 526.84);
        context.bezierCurveTo(864.27, 526.81, 860.28, 527.4, 856.37, 528.37);
        context.bezierCurveTo(856.81, 523.84, 858.39, 519.56, 860.01, 515.35);
        context.bezierCurveTo(860.47, 512.72, 860.99, 510.09, 862.19, 507.69);
        context.bezierCurveTo(856.55, 507.91, 850.88, 508.51, 845.24, 507.96);
        context.bezierCurveTo(842.37, 507.79, 840.17, 505.37, 837.27, 505.37);
        context.bezierCurveTo(834.05, 505.13, 830.48, 504.81, 828.53, 501.85);
        context.bezierCurveTo(817.27, 498.72, 807.61, 491.75, 796.84, 487.51);
        context.bezierCurveTo(795.35, 486.11, 793.92, 484.65, 792.51, 483.2);
        context.bezierCurveTo(782.84, 477.81, 776.99, 467.93, 770.57, 459.31);
        context.bezierCurveTo(763.92, 457.4, 757.2, 455.36, 751.12, 452.03);
        context.bezierCurveTo(749.71, 451.96, 748.29, 451.91, 746.89, 451.84);
        context.bezierCurveTo(743.55, 450.23, 739.73, 450.83, 736.17, 450.21);
        context.bezierCurveTo(729.05, 448.89, 721.96, 450.95, 714.81, 450.91);
        context.bezierCurveTo(713.48, 450.4, 712.21, 449.8, 710.99, 449.09);
        context.bezierCurveTo(711.48, 448.25, 712.45, 446.57, 712.95, 445.75);
        context.bezierCurveTo(718.95, 445.01, 724.67, 442.92, 730.63, 442);
        context.bezierCurveTo(744.24, 440.41, 758.13, 443.33, 770.2, 449.75);
        context.bezierCurveTo(769.96, 444.33, 770.51, 438.59, 773.92, 434.13);
        context.bezierCurveTo(777.12, 429.39, 780.87, 424.71, 786.64, 423.05);
        context.bezierCurveTo(792.83, 421.24, 798.75, 418.12, 805.41, 418.73);
        context.closePath();
        context.moveTo(867.57, 486.67);
        context.bezierCurveTo(867.44, 489.45, 866.96, 492.21, 866.03, 494.87);
        context.bezierCurveTo(870.36, 492.05, 874.68, 487.95, 874.2, 482.28);
        context.bezierCurveTo(872, 483.79, 869.84, 485.29, 867.57, 486.67);
        context.closePath();
        context.fillStyle = fillColor261;
        context.fill();


    }

    function drawPath347() {
        context.beginPath();
        context.moveTo(31.03, 416.04);
        context.lineTo(32.93, 416.09);
        context.bezierCurveTo(36.31, 416.2, 39.67, 416.59, 43.01, 417.16);
        context.bezierCurveTo(41.33, 417.56, 39.65, 417.97, 37.97, 418.39);
        context.bezierCurveTo(38.77, 420.09, 39.59, 421.8, 40.37, 423.52);
        context.bezierCurveTo(36.17, 423, 30.63, 421.29, 31.03, 416.04);
        context.closePath();
        context.fillStyle = fillColor317;
        context.fill();


    }

    function drawPath348() {
        context.beginPath();
        context.moveTo(46.85, 417.55);
        context.bezierCurveTo(50.47, 416.12, 53.47, 418.68, 56.2, 420.68);
        context.bezierCurveTo(56.67, 420.13, 57.61, 419.05, 58.08, 418.51);
        context.bezierCurveTo(60.36, 421.52, 62.83, 424.39, 65.28, 427.25);
        context.bezierCurveTo(58.96, 427.08, 53.87, 422.8, 48.41, 420.15);
        context.bezierCurveTo(48.01, 419.49, 47.24, 418.2, 46.85, 417.55);
        context.closePath();
        context.fillStyle = fillColor318;
        context.fill();


    }

    function drawPath349() {
        context.beginPath();
        context.moveTo(59.35, 416.41);
        context.lineTo(61.49, 416.39);
        context.bezierCurveTo(66.97, 418.95, 70.77, 424.07, 76.52, 426.17);
        context.bezierCurveTo(76.01, 426.48, 74.99, 427.08, 74.47, 427.39);
        context.bezierCurveTo(68.55, 425.12, 63.81, 420.77, 59.35, 416.41);
        context.closePath();
        context.fillStyle = fillColor319;
        context.fill();


    }

    function drawPath350() {
        context.beginPath();
        context.moveTo(348.07, 423.73);
        context.bezierCurveTo(349.36, 421.95, 350.76, 420.24, 352.08, 418.48);
        context.bezierCurveTo(352.39, 419.73, 352.71, 421, 353.01, 422.28);
        context.bezierCurveTo(349.16, 428.56, 343.83, 433.99, 340.91, 440.81);
        context.bezierCurveTo(344.75, 438.4, 348.37, 435.64, 352.33, 433.39);
        context.bezierCurveTo(349.05, 438.25, 344.6, 442.09, 339.55, 445);
        context.bezierCurveTo(337.35, 445.03, 335.16, 445.04, 332.97, 445.04);
        context.bezierCurveTo(334.32, 443.55, 335.49, 441.91, 336.49, 440.16);
        context.bezierCurveTo(339.59, 434.15, 344.95, 429.73, 348.07, 423.73);
        context.closePath();
        context.fillStyle = fillColor320;
        context.fill();


    }

    function drawPath351() {
        context.beginPath();
        context.moveTo(406.49, 422.84);
        context.bezierCurveTo(408.28, 421.25, 410.07, 419.68, 411.87, 418.11);
        context.bezierCurveTo(413.69, 419.37, 415.53, 420.65, 417.37, 421.95);
        context.bezierCurveTo(417.61, 420.95, 418.08, 418.95, 418.31, 417.95);
        context.bezierCurveTo(424.24, 422.75, 420.12, 430.33, 420.71, 436.63);
        context.bezierCurveTo(420.48, 434.17, 420.24, 431.72, 419.93, 429.29);
        context.bezierCurveTo(417.23, 430.84, 417.95, 434.07, 417.93, 436.64);
        context.bezierCurveTo(416.64, 436.97, 415.36, 437.35, 414.12, 437.79);
        context.bezierCurveTo(414.37, 439.37, 414.67, 440.96, 414.99, 442.55);
        context.bezierCurveTo(412.91, 445.36, 414.59, 449.13, 414.39, 452.35);
        context.bezierCurveTo(413.31, 450.48, 412.12, 448.68, 410.81, 446.97);
        context.bezierCurveTo(410.41, 448.24, 410.01, 449.52, 409.63, 450.8);
        context.bezierCurveTo(410.41, 451.64, 411.19, 452.48, 411.97, 453.33);
        context.bezierCurveTo(410.77, 453.11, 409.59, 452.88, 408.4, 452.65);
        context.bezierCurveTo(408.04, 454.05, 407.69, 455.45, 407.36, 456.85);
        context.bezierCurveTo(407.08, 452.73, 405.88, 448.8, 404.68, 444.88);
        context.bezierCurveTo(404.83, 442.45, 407.48, 442.19, 409.25, 441.49);
        context.bezierCurveTo(408.19, 440.96, 407.12, 440.44, 406.05, 439.91);
        context.bezierCurveTo(406.13, 435.36, 403.55, 431.88, 399.31, 430.4);
        context.bezierCurveTo(402.09, 428.65, 405.15, 426.57, 404.65, 422.81);
        context.bezierCurveTo(405.12, 422.83, 406.03, 422.83, 406.49, 422.84);
        context.closePath();
        context.fillStyle = fillColor321;
        context.fill();


    }

    function drawPath352() {
        context.save();
        context.globalAlpha = 0.97;
        context.beginPath();
        context.moveTo(197.73, 419.2);
        context.bezierCurveTo(198.32, 421.43, 198.69, 423.71, 199.2, 425.96);
        context.lineTo(198.93, 425.6);
        context.bezierCurveTo(198.47, 430.81, 200.23, 435.8, 201.17, 440.84);
        context.bezierCurveTo(201.68, 443.35, 202.35, 445.83, 203.15, 448.27);
        context.bezierCurveTo(203.03, 450.37, 202.88, 452.47, 202.69, 454.57);
        context.bezierCurveTo(199.33, 449.33, 198.2, 443.17, 197.01, 437.19);
        context.bezierCurveTo(196.91, 431.17, 195.01, 424.95, 197.73, 419.2);
        context.closePath();
        context.fillStyle = fillColor322;
        context.fill();
        context.restore();


    }

    function drawPath353() {
        context.beginPath();
        context.moveTo(424.09, 422.72);
        context.bezierCurveTo(427.2, 421.69, 430.31, 420.56, 433.17, 418.95);
        context.bezierCurveTo(434.57, 419.4, 436, 419.84, 437.4, 420.36);
        context.bezierCurveTo(441.45, 423.12, 445.17, 426.33, 449.03, 429.37);
        context.bezierCurveTo(449.85, 428.76, 451.51, 427.55, 452.35, 426.95);
        context.bezierCurveTo(456.19, 427.43, 459.05, 429.95, 461.77, 432.47);
        context.bezierCurveTo(464.36, 434.13, 467.11, 435.57, 469.65, 437.32);
        context.bezierCurveTo(470.16, 438.16, 471.16, 439.85, 471.65, 440.69);
        context.bezierCurveTo(471.05, 441.08, 469.83, 441.85, 469.21, 442.24);
        context.bezierCurveTo(468.87, 442.37, 468.17, 442.64, 467.81, 442.77);
        context.bezierCurveTo(467.01, 441.65, 466.2, 440.56, 465.39, 439.48);
        context.bezierCurveTo(459.97, 435.05, 452.21, 439.4, 446.43, 435.6);
        context.bezierCurveTo(446.2, 433.08, 446.88, 429.89, 444.59, 428.15);
        context.bezierCurveTo(442.19, 426.25, 439.43, 424.91, 436.64, 423.75);
        context.bezierCurveTo(432.85, 421.83, 428.77, 423.96, 424.88, 424.32);
        context.bezierCurveTo(424.68, 423.92, 424.28, 423.12, 424.09, 422.72);
        context.closePath();
        context.fillStyle = fillColor323;
        context.fill();


    }

    function drawPath354() {
        context.beginPath();
        context.moveTo(291.72, 420.95);
        context.bezierCurveTo(292.47, 420.91, 293.97, 420.83, 294.73, 420.79);
        context.bezierCurveTo(295.41, 420.76, 296.77, 420.69, 297.45, 420.65);
        context.bezierCurveTo(298.77, 424.65, 301.71, 427.77, 304.09, 431.15);
        context.bezierCurveTo(303.36, 432.85, 302.03, 434.43, 301.93, 436.35);
        context.bezierCurveTo(302.69, 438.45, 304.2, 440.17, 305.4, 442.05);
        context.bezierCurveTo(304.75, 442.81, 304.09, 443.57, 303.45, 444.35);
        context.bezierCurveTo(304.68, 445.76, 305.91, 447.17, 307.09, 448.64);
        context.bezierCurveTo(306.65, 449.2, 305.77, 450.32, 305.33, 450.88);
        context.bezierCurveTo(303.44, 450.63, 300.72, 448.25, 299.49, 450.97);
        context.bezierCurveTo(299.09, 450.69, 298.32, 450.15, 297.92, 449.87);
        context.bezierCurveTo(297.51, 449.57, 296.65, 449, 296.23, 448.72);
        context.bezierCurveTo(294.32, 446.03, 292.25, 443.43, 289.52, 441.53);
        context.bezierCurveTo(289.31, 441.21, 288.89, 440.59, 288.68, 440.27);
        context.bezierCurveTo(289.15, 439.09, 289.69, 437.97, 290.11, 436.8);
        context.bezierCurveTo(290.75, 436.65, 292.04, 436.36, 292.68, 436.23);
        context.bezierCurveTo(291.97, 434.76, 291.25, 433.29, 290.59, 431.84);
        context.bezierCurveTo(293.8, 432.55, 295.29, 435.4, 296.79, 438.03);
        context.bezierCurveTo(301.2, 434.11, 296.8, 428.59, 296.68, 423.89);
        context.bezierCurveTo(295.04, 422.87, 293.41, 421.84, 291.72, 420.95);
        context.closePath();
        context.fillStyle = fillColor324;
        context.fill();


    }

    function drawPath355() {
        context.beginPath();
        context.moveTo(41.96, 422.36);
        context.bezierCurveTo(43.75, 423.6, 45.53, 424.83, 47.33, 426.05);
        context.bezierCurveTo(46.37, 427.56, 45.41, 429.07, 44.41, 430.56);
        context.bezierCurveTo(42.6, 429.27, 40.77, 427.96, 38.96, 426.67);
        context.bezierCurveTo(39.24, 426.28, 39.79, 425.48, 40.07, 425.08);
        context.bezierCurveTo(40.55, 424.4, 41.49, 423.04, 41.96, 422.36);
        context.closePath();
        context.fillStyle = fillColor325;
        context.fill();


    }

    function drawPath356() {
        context.beginPath();
        context.moveTo(259.92, 423.68);
        context.bezierCurveTo(260.23, 422.97, 260.83, 421.56, 261.13, 420.85);
        context.bezierCurveTo(269.85, 427.43, 275.31, 437.15, 283.6, 444.16);
        context.bezierCurveTo(286.99, 447.48, 291.72, 448.19, 296.23, 448.72);
        context.bezierCurveTo(296.65, 449, 297.51, 449.57, 297.92, 449.87);
        context.bezierCurveTo(297.76, 450.83, 297.43, 452.76, 297.27, 453.73);
        context.bezierCurveTo(295.93, 452.93, 294.61, 452.15, 293.31, 451.36);
        context.bezierCurveTo(294.8, 454.77, 296.23, 458.27, 296.77, 462);
        context.bezierCurveTo(295.97, 462.17, 294.37, 462.55, 293.59, 462.73);
        context.bezierCurveTo(296.83, 470.68, 298.47, 479.16, 301.68, 487.12);
        context.bezierCurveTo(304.13, 493.01, 304.96, 499.41, 307.4, 505.31);
        context.bezierCurveTo(312.48, 518.04, 314.44, 531.83, 314.32, 545.48);
        context.bezierCurveTo(316.52, 544.87, 318.76, 544.19, 320.6, 542.76);
        context.bezierCurveTo(323.03, 535.63, 321.52, 528.08, 322.67, 520.79);
        context.bezierCurveTo(323.01, 517.73, 323.32, 514.68, 323.68, 511.64);
        context.bezierCurveTo(325.25, 512.96, 326.8, 514.35, 328.32, 515.76);
        context.bezierCurveTo(327.84, 509.91, 327.12, 503.89, 324.13, 498.72);
        context.bezierCurveTo(324.2, 503.03, 324.33, 507.36, 323.68, 511.64);
        context.bezierCurveTo(322.37, 510, 320.89, 508.28, 320.92, 506.07);
        context.bezierCurveTo(320.52, 500.49, 320.68, 494.89, 320.25, 489.32);
        context.bezierCurveTo(320.68, 483.81, 321.85, 478.36, 321.75, 472.83);
        context.bezierCurveTo(319.87, 471.77, 317.72, 470.24, 315.47, 470.89);
        context.bezierCurveTo(313.71, 471.72, 312.17, 472.95, 310.59, 474.05);
        context.bezierCurveTo(308.17, 469.91, 306, 465.61, 304.57, 461.03);
        context.bezierCurveTo(305.31, 459.13, 305.96, 457.2, 306.49, 455.24);
        context.bezierCurveTo(316.81, 458.72, 326.85, 453.71, 336.51, 450.57);
        context.bezierCurveTo(337.24, 452.63, 337.89, 454.73, 338.39, 456.88);
        context.bezierCurveTo(338.56, 458.47, 338.72, 460.07, 338.89, 461.67);
        context.bezierCurveTo(339.15, 464.28, 339.35, 466.89, 339.53, 469.52);
        context.bezierCurveTo(339.57, 474.2, 339.21, 478.88, 338.95, 483.55);
        context.bezierCurveTo(338.61, 485.63, 338.32, 487.72, 338.05, 489.81);
        context.bezierCurveTo(337.17, 495, 337.23, 500.32, 338.69, 505.4);
        context.bezierCurveTo(338.97, 511.67, 338.17, 517.89, 338.08, 524.16);
        context.bezierCurveTo(338.92, 523.52, 340.61, 522.23, 341.45, 521.59);
        context.lineTo(342.97, 521.67);
        context.bezierCurveTo(334.92, 530.49, 328.53, 540.61, 322.23, 550.72);
        context.bezierCurveTo(317.44, 558.71, 309.2, 565.11, 308.47, 575.01);
        context.bezierCurveTo(301.24, 565.07, 296.81, 553.59, 291.27, 542.72);
        context.bezierCurveTo(291.99, 542.45, 293.43, 541.93, 294.16, 541.68);
        context.bezierCurveTo(294.16, 541.28, 294.19, 540.47, 294.19, 540.07);
        context.bezierCurveTo(294.19, 534.43, 292.88, 528.75, 290.36, 523.69);
        context.bezierCurveTo(287.83, 518.44, 287.73, 512.43, 285.32, 507.12);
        context.bezierCurveTo(280.2, 495.4, 277.28, 482.73, 276.79, 469.96);
        context.bezierCurveTo(276.63, 463.15, 273.85, 456.73, 273.51, 449.95);
        context.bezierCurveTo(273.12, 443.6, 272.95, 436.97, 269.65, 431.31);
        context.bezierCurveTo(267.71, 428.67, 265.12, 426.53, 261.81, 425.97);
        context.bezierCurveTo(259.31, 433.41, 258.59, 441.59, 260.96, 449.16);
        context.bezierCurveTo(260.05, 450.48, 259.21, 451.85, 258.43, 453.27);
        context.bezierCurveTo(257.83, 448.84, 256.85, 444.48, 256.33, 440.05);
        context.bezierCurveTo(256.73, 436.4, 256.96, 432.73, 257.08, 429.07);
        context.bezierCurveTo(258.07, 427.29, 259.12, 425.55, 259.92, 423.68);
        context.closePath();
        context.moveTo(324.27, 532.64);
        context.bezierCurveTo(324.55, 535.2, 323.64, 538.68, 326.64, 539.95);
        context.bezierCurveTo(327.15, 533.49, 327.01, 527, 326.16, 520.59);
        context.bezierCurveTo(324.37, 524.35, 324.05, 528.52, 324.27, 532.64);
        context.closePath();
        context.fillStyle = fillColor326;
        context.fill();


    }

    function drawPath357() {
        context.beginPath();
        context.moveTo(47.04, 423.2);
        context.bezierCurveTo(51.16, 423.08, 55.05, 425.07, 55.85, 429.4);
        context.bezierCurveTo(53.81, 429.96, 51.79, 430.53, 49.76, 431.11);
        context.bezierCurveTo(48.97, 429.4, 48.09, 427.75, 47.33, 426.05);
        context.bezierCurveTo(47.25, 425.33, 47.11, 423.91, 47.04, 423.2);
        context.closePath();
        context.fillStyle = fillColor327;
        context.fill();


    }

    function drawPath358() {
        context.beginPath();
        context.moveTo(25.33, 425.8);
        context.bezierCurveTo(30.21, 424.89, 35.17, 425.6, 40.07, 425.08);
        context.bezierCurveTo(39.79, 425.48, 39.24, 426.28, 38.96, 426.67);
        context.bezierCurveTo(36.6, 429.31, 37.11, 433.09, 38.03, 436.21);
        context.bezierCurveTo(38.91, 438.6, 41.95, 437.89, 43.92, 438.47);
        context.bezierCurveTo(41.88, 436.71, 39.85, 434.96, 37.88, 433.15);
        context.bezierCurveTo(39.12, 433.07, 41.6, 432.93, 42.85, 432.87);
        context.bezierCurveTo(43.24, 432.29, 44.03, 431.13, 44.41, 430.56);
        context.bezierCurveTo(45.41, 429.07, 46.37, 427.56, 47.33, 426.05);
        context.bezierCurveTo(48.09, 427.75, 48.97, 429.4, 49.76, 431.11);
        context.bezierCurveTo(50.09, 435.13, 48.61, 439.73, 51.64, 443.05);
        context.bezierCurveTo(52.43, 441.69, 53.23, 440.32, 54.03, 438.97);
        context.bezierCurveTo(57.19, 440.12, 60.52, 440.6, 63.88, 440.63);
        context.bezierCurveTo(61.83, 438.07, 59.85, 435.44, 58.39, 432.49);
        context.bezierCurveTo(64.12, 435.89, 68.55, 442.33, 75.99, 441.89);
        context.bezierCurveTo(76.85, 441.99, 78.57, 442.19, 79.43, 442.29);
        context.bezierCurveTo(84.72, 444.97, 90.43, 446.67, 95.99, 448.69);
        context.bezierCurveTo(99.41, 449.64, 100.04, 453.41, 101.15, 456.27);
        context.bezierCurveTo(100.11, 456.52, 98.01, 457, 96.97, 457.25);
        context.bezierCurveTo(93.95, 455.23, 90.55, 452.28, 86.64, 453.55);
        context.bezierCurveTo(89.27, 457.39, 93.21, 460.08, 98.04, 459.8);
        context.bezierCurveTo(100.77, 462.61, 104.01, 464.85, 107.12, 467.24);
        context.bezierCurveTo(106.51, 467.48, 105.28, 467.96, 104.67, 468.2);
        context.bezierCurveTo(101.76, 466.28, 98.72, 464.57, 95.47, 463.33);
        context.bezierCurveTo(98.91, 468.21, 103.92, 471.59, 108.23, 475.63);
        context.bezierCurveTo(104.43, 474.15, 100.64, 472.64, 96.88, 471.08);
        context.bezierCurveTo(97.93, 472.61, 98.97, 474.19, 100.01, 475.76);
        context.bezierCurveTo(100.71, 484.61, 109.93, 488.59, 114.93, 494.89);
        context.bezierCurveTo(108.05, 491.44, 102.59, 485.73, 98.55, 479.27);
        context.bezierCurveTo(96.21, 474.75, 90.69, 474.15, 86.36, 472.64);
        context.bezierCurveTo(89.55, 476.61, 93.43, 480.01, 96.15, 484.35);
        context.bezierCurveTo(92.83, 481.61, 89.61, 478.75, 86.03, 476.36);
        context.bezierCurveTo(88.33, 480.44, 91.16, 484.2, 94.13, 487.81);
        context.bezierCurveTo(97.45, 492.16, 103.55, 493.21, 106.52, 497.95);
        context.bezierCurveTo(109.09, 501.91, 113.01, 504.48, 117.29, 506.28);
        context.bezierCurveTo(116.23, 507.23, 115.16, 508.19, 114.09, 509.15);
        context.bezierCurveTo(108.85, 508.51, 103.37, 508.37, 98.47, 506.24);
        context.bezierCurveTo(92.33, 500.92, 85.89, 495.97, 80.01, 490.36);
        context.bezierCurveTo(72.44, 480.51, 66.27, 469.68, 60.56, 458.68);
        context.bezierCurveTo(56.65, 455.03, 54.13, 450.37, 51.59, 445.75);
        context.bezierCurveTo(51.05, 446.79, 50, 448.85, 49.48, 449.88);
        context.bezierCurveTo(48.41, 445.69, 49.15, 440.55, 45.61, 437.44);
        context.bezierCurveTo(45.76, 439.71, 45.95, 441.99, 46.16, 444.25);
        context.bezierCurveTo(42.07, 443.92, 37.75, 443.15, 34.8, 439.97);
        context.bezierCurveTo(32.83, 437.67, 30.55, 435.67, 27.97, 434.05);
        context.bezierCurveTo(27.01, 431.32, 26.07, 428.59, 25.33, 425.8);
        context.closePath();
        context.moveTo(61.37, 452.76);
        context.bezierCurveTo(63.15, 456.43, 65.08, 460.16, 68.37, 462.72);
        context.bezierCurveTo(68.69, 462.65, 69.31, 462.55, 69.63, 462.49);
        context.bezierCurveTo(69.79, 462.04, 70.12, 461.12, 70.29, 460.65);
        context.lineTo(70.15, 459.68);
        context.bezierCurveTo(69.35, 458.56, 68.09, 458.77, 66.92, 458.83);
        context.bezierCurveTo(64.37, 457.6, 63.15, 454.81, 61.37, 452.76);
        context.closePath();
        context.fillStyle = fillColor328;
        context.fill();


    }

    function drawPath359() {
        context.beginPath();
        context.moveTo(77.31, 425.71);
        context.bezierCurveTo(78.96, 424.28, 81.08, 425.47, 82.72, 426.29);
        context.bezierCurveTo(81.72, 429.51, 78.43, 427.89, 77.31, 425.71);
        context.closePath();
        context.fillStyle = fillColor329;
        context.fill();


    }

    function drawPath360() {
        context.beginPath();
        context.moveTo(145.64, 430.76);
        context.bezierCurveTo(142.11, 429.95, 139.93, 427.03, 137.91, 424.27);
        context.bezierCurveTo(140.33, 426.6, 142.81, 428.92, 145.64, 430.76);
        context.closePath();
        context.fillStyle = fillColor261;
        context.fill();


    }

    function drawPath361() {
        context.beginPath();
        context.moveTo(471.65, 440.69);
        context.bezierCurveTo(478.6, 435.69, 485.39, 430.48, 491.61, 424.6);
        context.bezierCurveTo(484.95, 431.36, 477.44, 437.51, 469.21, 442.24);
        context.bezierCurveTo(469.83, 441.85, 471.05, 441.08, 471.65, 440.69);
        context.closePath();
        context.fillStyle = fillColor148;
        context.fill();


    }

    function drawPath362() {
        context.beginPath();
        context.moveTo(687.51, 427.95);
        context.bezierCurveTo(694.17, 426.96, 700.77, 424.28, 707.59, 425.29);
        context.bezierCurveTo(711.84, 426.47, 710.15, 431.89, 706.64, 432.72);
        context.bezierCurveTo(701.73, 433.92, 696.63, 433.91, 691.69, 434.97);
        context.bezierCurveTo(684, 436.39, 676.37, 438.21, 668.75, 439.93);
        context.bezierCurveTo(656.68, 442.68, 645.71, 448.63, 634.03, 452.49);
        context.bezierCurveTo(626.85, 455.61, 621.21, 461.03, 614.72, 465.13);
        context.bezierCurveTo(614.59, 464.04, 614.32, 461.83, 614.19, 460.72);
        context.bezierCurveTo(618.2, 456.08, 622.33, 451.35, 627.91, 448.53);
        context.bezierCurveTo(646.05, 437.53, 666.55, 430.81, 687.51, 427.95);
        context.closePath();
        context.fillStyle = fillColor299;
        context.fill();


    }

    function drawPath363() {
        context.beginPath();
        context.moveTo(727.03, 425.13);
        context.bezierCurveTo(736.99, 425.13, 746.65, 428.19, 756.51, 429.37);
        context.bezierCurveTo(760.76, 429.79, 764.63, 431.67, 768.24, 433.87);
        context.bezierCurveTo(766.83, 436.79, 763.93, 440.55, 760.24, 439.19);
        context.bezierCurveTo(755.52, 437.89, 750.83, 436.51, 746.03, 435.51);
        context.bezierCurveTo(738.96, 431.77, 729.57, 433.59, 723.85, 427.36);
        context.bezierCurveTo(724.65, 426.81, 726.24, 425.69, 727.03, 425.13);
        context.closePath();
        context.fillStyle = fillColor299;
        context.fill();


    }

    function drawPath364() {
        context.beginPath();
        context.moveTo(261.81, 425.97);
        context.bezierCurveTo(265.12, 426.53, 267.71, 428.67, 269.65, 431.31);
        context.bezierCurveTo(269.53, 432.72, 269.4, 434.16, 269.28, 435.59);
        context.bezierCurveTo(268.04, 438.79, 268.36, 442.19, 268.99, 445.47);
        context.bezierCurveTo(267.83, 444.91, 266.65, 444.35, 265.51, 443.8);
        context.bezierCurveTo(263.96, 445.56, 262.41, 447.32, 260.96, 449.16);
        context.bezierCurveTo(258.59, 441.59, 259.31, 433.41, 261.81, 425.97);
        context.closePath();
        context.fillStyle = fillColor330;
        context.fill();


    }

    function drawPath365() {
        context.beginPath();
        context.moveTo(38.03, 436.21);
        context.bezierCurveTo(37.11, 433.09, 36.6, 429.31, 38.96, 426.67);
        context.bezierCurveTo(40.77, 427.96, 42.6, 429.27, 44.41, 430.56);
        context.bezierCurveTo(44.03, 431.13, 43.24, 432.29, 42.85, 432.87);
        context.bezierCurveTo(41.6, 432.93, 39.12, 433.07, 37.88, 433.15);
        context.bezierCurveTo(39.85, 434.96, 41.88, 436.71, 43.92, 438.47);
        context.bezierCurveTo(41.95, 437.89, 38.91, 438.6, 38.03, 436.21);
        context.closePath();
        context.fillStyle = fillColor331;
        context.fill();


    }

    function drawPath366() {
        context.beginPath();
        context.moveTo(85.03, 428.83);
        context.lineTo(86.92, 428.19);
        context.bezierCurveTo(91.92, 429.51, 95.31, 433.47, 98.48, 437.25);
        context.bezierCurveTo(96.88, 437.43, 95.44, 436.75, 94.32, 435.67);
        context.bezierCurveTo(91.4, 433.15, 88.28, 430.88, 85.03, 428.83);
        context.closePath();
        context.fillStyle = fillColor332;
        context.fill();


    }

    function drawPath367() {
        context.beginPath();
        context.moveTo(430.84, 428.59);
        context.bezierCurveTo(433.81, 428.77, 437.57, 429.57, 438.13, 433.09);
        context.bezierCurveTo(438.93, 440.36, 438.21, 448.32, 433.65, 454.35);
        context.bezierCurveTo(430.28, 459.01, 428.56, 464.6, 428.43, 470.33);
        context.bezierCurveTo(427.83, 470.69, 426.63, 471.41, 426.03, 471.79);
        context.bezierCurveTo(426.49, 465.43, 428.01, 459.21, 428.63, 452.88);
        context.bezierCurveTo(428.71, 450.43, 430.35, 448.56, 431.75, 446.72);
        context.bezierCurveTo(431.23, 443.32, 430.53, 439.93, 429.76, 436.59);
        context.bezierCurveTo(428.13, 439.04, 426.08, 441.32, 425.16, 444.17);
        context.bezierCurveTo(424.65, 447.43, 424.56, 450.75, 423.92, 454);
        context.bezierCurveTo(422.97, 452.6, 422.05, 451.19, 421.13, 449.79);
        context.bezierCurveTo(421.36, 446.99, 421.83, 444.12, 423.91, 442.07);
        context.bezierCurveTo(426.65, 439.33, 426.84, 435.4, 427.36, 431.8);
        context.bezierCurveTo(428.79, 432.41, 430.21, 433.03, 431.65, 433.65);
        context.bezierCurveTo(431.37, 431.96, 431.09, 430.27, 430.84, 428.59);
        context.closePath();
        context.fillStyle = fillColor333;
        context.fill();


    }

    function drawPath368() {
        context.beginPath();
        context.moveTo(146.23, 431.01);
        context.bezierCurveTo(150.8, 433.39, 155.91, 436.57, 158.09, 441.4);
        context.bezierCurveTo(154.93, 438.6, 151.61, 435.99, 148.41, 433.24);
        context.bezierCurveTo(147.67, 432.49, 146.95, 431.75, 146.23, 431.01);
        context.closePath();
        context.fillStyle = fillColor56;
        context.fill();


    }

    function drawPath369() {
        context.beginPath();
        context.moveTo(201.17, 440.84);
        context.bezierCurveTo(200.72, 437.44, 201.03, 434.01, 201.92, 430.72);
        context.bezierCurveTo(203.73, 437.28, 206.17, 444.2, 204.47, 451.04);
        context.bezierCurveTo(204.13, 450.35, 203.48, 448.96, 203.15, 448.27);
        context.bezierCurveTo(202.35, 445.83, 201.68, 443.35, 201.17, 440.84);
        context.closePath();
        context.fillStyle = fillColor334;
        context.fill();


    }

    function drawPath370() {
        context.beginPath();
        context.moveTo(212.35, 431.99);
        context.bezierCurveTo(213.89, 431.75, 215.44, 431.49, 217, 431.25);
        context.bezierCurveTo(217.15, 438.23, 216.6, 445.29, 217.77, 452.2);
        context.bezierCurveTo(219.2, 454.73, 222.56, 453.03, 224.68, 452.47);
        context.bezierCurveTo(223.19, 449.31, 222.69, 445.85, 223.27, 442.41);
        context.bezierCurveTo(223.96, 442, 225.32, 441.19, 226.01, 440.77);
        context.bezierCurveTo(226.72, 442.24, 227.43, 443.71, 228.13, 445.2);
        context.bezierCurveTo(229.45, 444.75, 230.83, 444.49, 232.16, 444.05);
        context.bezierCurveTo(231.29, 448.65, 230.01, 453.19, 229.6, 457.87);
        context.bezierCurveTo(228.92, 468.68, 225.08, 479.07, 225.15, 489.97);
        context.bezierCurveTo(225.49, 495.21, 223.2, 499.93, 220.63, 504.32);
        context.bezierCurveTo(217.63, 503.31, 214.61, 502.33, 211.59, 501.44);
        context.bezierCurveTo(213.83, 496.76, 210.57, 491.84, 212.31, 487.13);
        context.bezierCurveTo(210.45, 486.75, 208.6, 486.36, 206.75, 486.01);
        context.bezierCurveTo(207.16, 485.63, 208, 484.84, 208.41, 484.44);
        context.bezierCurveTo(207.19, 473.91, 205.33, 463.17, 200.15, 453.77);
        context.bezierCurveTo(197.43, 448.76, 195.21, 442.89, 197.01, 437.19);
        context.bezierCurveTo(198.2, 443.17, 199.33, 449.33, 202.69, 454.57);
        context.bezierCurveTo(202.88, 452.47, 203.03, 450.37, 203.15, 448.27);
        context.bezierCurveTo(203.48, 448.96, 204.13, 450.35, 204.47, 451.04);
        context.bezierCurveTo(205.05, 456.68, 207.64, 461.83, 210.52, 466.61);
        context.bezierCurveTo(213.84, 455.48, 215.91, 443.33, 212.35, 431.99);
        context.closePath();
        context.fillStyle = fillColor335;
        context.fill();


    }

    function drawPath371() {
        context.beginPath();
        context.moveTo(269.65, 431.31);
        context.bezierCurveTo(272.95, 436.97, 273.12, 443.6, 273.51, 449.95);
        context.bezierCurveTo(273.85, 456.73, 276.63, 463.15, 276.79, 469.96);
        context.bezierCurveTo(277.28, 482.73, 280.2, 495.4, 285.32, 507.12);
        context.bezierCurveTo(287.73, 512.43, 287.83, 518.44, 290.36, 523.69);
        context.bezierCurveTo(292.88, 528.75, 294.19, 534.43, 294.19, 540.07);
        context.lineTo(293.24, 539.48);
        context.bezierCurveTo(288.93, 531.23, 286.92, 522.12, 283.69, 513.45);
        context.bezierCurveTo(280.71, 505.73, 279.12, 497.59, 276.75, 489.68);
        context.bezierCurveTo(274.53, 479.76, 273.93, 469.56, 272.72, 459.48);
        context.bezierCurveTo(272.33, 451.45, 271.36, 443.36, 269.28, 435.59);
        context.bezierCurveTo(269.4, 434.16, 269.53, 432.72, 269.65, 431.31);
        context.closePath();
        context.fillStyle = fillColor336;
        context.fill();


    }

    function drawPath372() {
        context.beginPath();
        context.moveTo(27.97, 434.05);
        context.bezierCurveTo(30.55, 435.67, 32.83, 437.67, 34.8, 439.97);
        context.bezierCurveTo(33.91, 440.96, 33.03, 441.93, 32.13, 442.93);
        context.bezierCurveTo(33.88, 443.92, 35.63, 444.92, 37.37, 445.92);
        context.bezierCurveTo(36.95, 446.61, 36.08, 447.97, 35.65, 448.67);
        context.bezierCurveTo(32.52, 447.68, 29.25, 447.8, 26.77, 450.21);
        context.bezierCurveTo(27.61, 451.15, 28.44, 452.09, 29.33, 452.99);
        context.bezierCurveTo(25.85, 453.75, 27.28, 456.88, 27.83, 459.28);
        context.bezierCurveTo(28.19, 460.63, 28.56, 461.97, 28.93, 463.33);
        context.bezierCurveTo(27.85, 463.92, 26.73, 464.51, 25.79, 465.31);
        context.bezierCurveTo(29.52, 472.27, 35.17, 477.93, 40.85, 483.31);
        context.bezierCurveTo(41.07, 482.41, 41.48, 480.64, 41.69, 479.75);
        context.bezierCurveTo(43.29, 481.05, 44.91, 482.36, 46.53, 483.65);
        context.bezierCurveTo(43.57, 476.39, 37.69, 470.89, 34.08, 463.96);
        context.bezierCurveTo(34.49, 463.12, 35.31, 461.41, 35.71, 460.57);
        context.bezierCurveTo(33.87, 458.29, 32.08, 455.97, 30.23, 453.71);
        context.bezierCurveTo(33.52, 454.75, 36.71, 456.13, 39.67, 457.93);
        context.bezierCurveTo(39.43, 456.09, 39.2, 454.27, 38.97, 452.45);
        context.bezierCurveTo(40.8, 452.99, 42.64, 453.53, 44.47, 454.08);
        context.bezierCurveTo(44.64, 455.47, 44.83, 456.87, 45.01, 458.27);
        context.bezierCurveTo(46.37, 459.51, 47.73, 460.75, 49.08, 462.01);
        context.bezierCurveTo(50.33, 463.19, 51.56, 464.39, 52.77, 465.61);
        context.bezierCurveTo(55.43, 470.65, 58.93, 475.16, 61.85, 480.03);
        context.bezierCurveTo(62.85, 481.56, 62.21, 483.49, 62.33, 485.2);
        context.bezierCurveTo(60.52, 485.31, 58.71, 485.43, 56.91, 485.56);
        context.bezierCurveTo(57.64, 487.16, 57.97, 489.17, 59.73, 490.03);
        context.bezierCurveTo(66.77, 494.28, 73.01, 499.73, 80.31, 503.6);
        context.bezierCurveTo(77.17, 499.69, 73.43, 496.35, 70.49, 492.29);
        context.bezierCurveTo(71.69, 492.19, 72.89, 492.11, 74.09, 492.03);
        context.bezierCurveTo(74.07, 490.97, 74.04, 489.93, 74.01, 488.91);
        context.bezierCurveTo(75.84, 490.03, 77.8, 490.95, 80.01, 490.36);
        context.bezierCurveTo(85.89, 495.97, 92.33, 500.92, 98.47, 506.24);
        context.bezierCurveTo(103.37, 508.37, 108.85, 508.51, 114.09, 509.15);
        context.bezierCurveTo(115.16, 508.19, 116.23, 507.23, 117.29, 506.28);
        context.bezierCurveTo(117.75, 506.51, 118.64, 506.97, 119.09, 507.2);
        context.bezierCurveTo(118.51, 509.11, 119.05, 510.6, 120.72, 511.69);
        context.bezierCurveTo(120.69, 512.35, 120.63, 513.64, 120.59, 514.29);
        context.bezierCurveTo(116.08, 513.36, 110.33, 507.84, 106.6, 513);
        context.bezierCurveTo(106.73, 514.51, 106.92, 516, 107.25, 517.48);
        context.bezierCurveTo(112.6, 516.84, 117.93, 516, 123.31, 515.64);
        context.lineTo(123.69, 516.08);
        context.bezierCurveTo(121.01, 520.39, 116.55, 522.55, 111.59, 522.81);
        context.bezierCurveTo(107.81, 522.87, 104.03, 523.04, 100.27, 522.73);
        context.bezierCurveTo(102.07, 521.41, 103.87, 520.09, 105.61, 518.71);
        context.bezierCurveTo(98.21, 517.8, 90.79, 521.64, 83.56, 518.95);
        context.bezierCurveTo(87.45, 518.07, 91.23, 516.71, 94.64, 514.61);
        context.bezierCurveTo(91, 514.37, 87.23, 514.59, 83.75, 513.33);
        context.bezierCurveTo(79.89, 512.4, 79.91, 507.44, 76.77, 505.6);
        context.bezierCurveTo(72.75, 503.12, 68.49, 501.04, 64.37, 498.72);
        context.bezierCurveTo(63.76, 497.65, 63.13, 496.6, 62.52, 495.56);
        context.bezierCurveTo(59.11, 494.2, 55.71, 492.79, 52.29, 491.4);
        context.bezierCurveTo(55.24, 498.05, 60.8, 502.8, 65.49, 508.15);
        context.bezierCurveTo(62.87, 507.28, 59.59, 504.01, 57.29, 507.45);
        context.bezierCurveTo(57.04, 507.24, 56.53, 506.8, 56.28, 506.57);
        context.bezierCurveTo(54.37, 503.88, 52.15, 501.43, 49.37, 499.63);
        context.bezierCurveTo(45.17, 496.72, 41.72, 492.81, 37.24, 490.32);
        context.bezierCurveTo(33.92, 488.44, 31.07, 485.85, 28.53, 483.04);
        context.bezierCurveTo(22.64, 476.17, 20.87, 467.07, 17.99, 458.75);
        context.bezierCurveTo(16.67, 454.11, 14.13, 448.84, 16.95, 444.24);
        context.bezierCurveTo(19.04, 440.05, 23.75, 438.61, 27.87, 437.31);
        context.bezierCurveTo(27.89, 436.49, 27.95, 434.87, 27.97, 434.05);
        context.closePath();
        context.fillStyle = fillColor337;
        context.fill();


    }

    function drawPath373() {
        context.beginPath();
        context.moveTo(66.83, 433.84);
        context.bezierCurveTo(72.49, 433.87, 75.84, 438.67, 79.43, 442.29);
        context.bezierCurveTo(78.57, 442.19, 76.85, 441.99, 75.99, 441.89);
        context.bezierCurveTo(72.91, 439.24, 69.92, 436.48, 66.83, 433.84);
        context.closePath();
        context.fillStyle = fillColor338;
        context.fill();


    }

    function drawPath374() {
        context.beginPath();
        context.moveTo(152.41, 437.61);
        context.bezierCurveTo(150.87, 436.36, 149.08, 435.23, 148.41, 433.24);
        context.bezierCurveTo(151.61, 435.99, 154.93, 438.6, 158.09, 441.4);
        context.bezierCurveTo(159.73, 442.95, 161.24, 444.63, 162.88, 446.17);
        context.bezierCurveTo(159.27, 443.47, 156.01, 440.33, 152.41, 437.61);
        context.closePath();
        context.fillStyle = fillColor261;
        context.fill();


    }

    function drawPath375() {
        context.beginPath();
        context.moveTo(332.31, 433.97);
        context.bezierCurveTo(332.69, 434.11, 333.48, 434.39, 333.87, 434.52);
        context.bezierCurveTo(333.41, 435.65, 332.95, 436.79, 332.51, 437.93);
        context.bezierCurveTo(333.83, 438.67, 335.16, 439.41, 336.49, 440.16);
        context.bezierCurveTo(335.49, 441.91, 334.32, 443.55, 332.97, 445.04);
        context.bezierCurveTo(331.43, 446.28, 329.83, 447.44, 328.27, 448.65);
        context.bezierCurveTo(327.05, 447.09, 325.97, 445.44, 324.88, 443.81);
        context.bezierCurveTo(326.99, 441.39, 328.63, 438.6, 329.69, 435.57);
        context.bezierCurveTo(330.35, 435.17, 331.65, 434.37, 332.31, 433.97);
        context.closePath();
        context.fillStyle = fillColor339;
        context.fill();


    }

    function drawPath376() {
        context.beginPath();
        context.moveTo(129.52, 434.95);
        context.bezierCurveTo(132.53, 439.35, 136.72, 442.71, 140.47, 446.43);
        context.bezierCurveTo(145.08, 450.65, 150.61, 453.75, 154.97, 458.25);
        context.bezierCurveTo(151.23, 455.89, 147.88, 452.97, 144.27, 450.43);
        context.bezierCurveTo(143.63, 449.96, 142.33, 449.03, 141.68, 448.56);
        context.bezierCurveTo(137.43, 444.24, 132.21, 440.53, 129.52, 434.95);
        context.closePath();
        context.fillStyle = fillColor261;
        context.fill();


    }

    function drawPath377() {
        context.beginPath();
        context.moveTo(389.71, 435.57);
        context.bezierCurveTo(391.96, 433.79, 396.83, 436, 393.16, 438.33);
        context.lineTo(392.04, 438.09);
        context.bezierCurveTo(391.08, 437.41, 390.31, 436.57, 389.71, 435.57);
        context.closePath();
        context.fillStyle = fillColor340;
        context.fill();


    }

    function drawPath378() {
        context.beginPath();
        context.moveTo(268.99, 445.47);
        context.bezierCurveTo(268.36, 442.19, 268.04, 438.79, 269.28, 435.59);
        context.bezierCurveTo(271.36, 443.36, 272.33, 451.45, 272.72, 459.48);
        context.bezierCurveTo(271.95, 459.16, 270.4, 458.51, 269.64, 458.19);
        context.bezierCurveTo(270.55, 463.79, 269.44, 469.52, 270.95, 475.05);
        context.bezierCurveTo(269.45, 478.8, 271.51, 482.45, 272.85, 485.91);
        context.bezierCurveTo(272.47, 486.43, 271.71, 487.48, 271.32, 488);
        context.bezierCurveTo(279.68, 504.92, 282.03, 524.13, 290.69, 540.96);
        context.bezierCurveTo(291.33, 540.59, 292.6, 539.85, 293.24, 539.48);
        context.lineTo(294.19, 540.07);
        context.bezierCurveTo(294.19, 540.47, 294.16, 541.28, 294.16, 541.68);
        context.bezierCurveTo(293.43, 541.93, 291.99, 542.45, 291.27, 542.72);
        context.bezierCurveTo(296.81, 553.59, 301.24, 565.07, 308.47, 575.01);
        context.bezierCurveTo(309.2, 565.11, 317.44, 558.71, 322.23, 550.72);
        context.bezierCurveTo(328.53, 540.61, 334.92, 530.49, 342.97, 521.67);
        context.lineTo(341.45, 521.59);
        context.bezierCurveTo(347.41, 515.84, 353.4, 510.08, 358.76, 503.75);
        context.bezierCurveTo(361.93, 500.4, 365.63, 497.63, 369.36, 494.92);
        context.bezierCurveTo(370.41, 493.65, 371.32, 492.25, 372.23, 490.89);
        context.bezierCurveTo(374.23, 489.65, 376.09, 488.24, 377.96, 486.81);
        context.bezierCurveTo(380.28, 485.28, 382.35, 482.56, 385.4, 482.8);
        context.bezierCurveTo(388.79, 484.17, 386.96, 488.36, 387.24, 491.15);
        context.bezierCurveTo(389.35, 490.67, 391.44, 490.17, 393.57, 489.71);
        context.bezierCurveTo(392.01, 492.79, 390.67, 496, 388.64, 498.81);
        context.bezierCurveTo(386.44, 501.6, 383.31, 503.44, 380.99, 506.12);
        context.bezierCurveTo(380.59, 508.68, 383.68, 510.13, 384.93, 512.08);
        context.bezierCurveTo(388.99, 508.64, 393.71, 505.84, 396.87, 501.44);
        context.bezierCurveTo(398.97, 498.32, 402.4, 496.59, 405.6, 494.8);
        context.bezierCurveTo(407.37, 495.97, 409.24, 497.04, 411.09, 498.12);
        context.bezierCurveTo(410.83, 501.09, 410.76, 504.12, 410.03, 507.04);
        context.bezierCurveTo(408.71, 510.4, 406.31, 513.17, 404.4, 516.21);
        context.bezierCurveTo(403.84, 516.21, 402.71, 516.21, 402.13, 516.2);
        context.bezierCurveTo(400.97, 519.03, 399.04, 522, 395.68, 522.28);
        context.bezierCurveTo(389.6, 522.76, 383.16, 522.19, 377.47, 524.84);
        context.bezierCurveTo(370.69, 528.59, 367.71, 536.15, 364.36, 542.69);
        context.bezierCurveTo(363.48, 542.81, 362.61, 542.95, 361.76, 543.09);
        context.bezierCurveTo(359.45, 546.39, 356.93, 549.52, 354.28, 552.55);
        context.bezierCurveTo(350.69, 556.55, 348.35, 561.47, 344.87, 565.55);
        context.bezierCurveTo(338.68, 573.01, 332.87, 581.52, 331.88, 591.43);
        context.bezierCurveTo(329.01, 599.17, 328.25, 607.45, 328.49, 615.67);
        context.bezierCurveTo(327.96, 615.99, 326.91, 616.64, 326.39, 616.96);
        context.bezierCurveTo(325.75, 620.69, 323.57, 623.84, 322.04, 627.24);
        context.bezierCurveTo(320.09, 632.19, 315.23, 635.01, 311.29, 638.24);
        context.bezierCurveTo(314.32, 630.4, 318.32, 622.95, 321.04, 614.97);
        context.bezierCurveTo(321.79, 612.77, 321.52, 610.41, 321.56, 608.15);
        context.bezierCurveTo(316.92, 612.57, 314.28, 618.49, 312.53, 624.57);
        context.bezierCurveTo(308.37, 627.09, 306.56, 632.09, 302.19, 634.35);
        context.bezierCurveTo(302.29, 632.99, 302.4, 631.63, 302.51, 630.28);
        context.bezierCurveTo(301.57, 630.73, 300.65, 631.2, 299.73, 631.67);
        context.bezierCurveTo(297.84, 628.27, 294.17, 627.27, 290.55, 626.99);
        context.bezierCurveTo(290.29, 627.59, 289.76, 628.77, 289.49, 629.36);
        context.bezierCurveTo(289, 629.68, 288.04, 630.32, 287.56, 630.63);
        context.bezierCurveTo(287.11, 630.76, 286.2, 631.03, 285.75, 631.16);
        context.bezierCurveTo(286.51, 631.84, 288.01, 633.17, 288.77, 633.84);
        context.bezierCurveTo(288.28, 634.84, 287.8, 635.85, 287.31, 636.87);
        context.bezierCurveTo(286.04, 636.49, 284.79, 636.12, 283.53, 635.76);
        context.bezierCurveTo(282.64, 640.12, 279.29, 644.36, 274.6, 644.68);
        context.bezierCurveTo(270.24, 645.23, 266.33, 647.27, 262.67, 649.55);
        context.bezierCurveTo(256.27, 647.01, 250.65, 642.99, 244.61, 639.76);
        context.bezierCurveTo(246.33, 638.01, 248.07, 636.28, 249.93, 634.68);
        context.bezierCurveTo(252.13, 633.6, 254.32, 632.51, 256.51, 631.4);
        context.bezierCurveTo(256.95, 631.19, 257.84, 630.73, 258.28, 630.52);
        context.bezierCurveTo(251.65, 627.03, 248.84, 619.76, 246.32, 613.17);
        context.bezierCurveTo(246.21, 604.99, 245.32, 596.83, 245.71, 588.65);
        context.bezierCurveTo(245.79, 584.91, 246.2, 581.01, 244.84, 577.43);
        context.bezierCurveTo(243.68, 573.79, 241.32, 570.15, 242.63, 566.19);
        context.bezierCurveTo(243.12, 567.11, 244.11, 568.96, 244.61, 569.88);
        context.bezierCurveTo(245.05, 571.93, 245.56, 573.97, 246.08, 576.03);
        context.bezierCurveTo(246.95, 568.79, 246.73, 561.44, 248.43, 554.32);
        context.bezierCurveTo(249.81, 548.47, 249.67, 542.31, 251.85, 536.64);
        context.bezierCurveTo(253.63, 532.11, 253.71, 527.11, 255.49, 522.59);
        context.bezierCurveTo(257.48, 519.15, 260.91, 516.91, 263.68, 514.15);
        context.bezierCurveTo(267.13, 519.53, 267.17, 526.33, 270.88, 531.55);
        context.lineTo(271.12, 531.92);
        context.bezierCurveTo(270.96, 532.15, 270.64, 532.61, 270.48, 532.84);
        context.bezierCurveTo(270.23, 533.23, 269.69, 534, 269.43, 534.39);
        context.bezierCurveTo(269.13, 539.27, 269.29, 544.2, 268.59, 549.07);
        context.bezierCurveTo(267.91, 555.2, 265.97, 561.15, 265.76, 567.35);
        context.bezierCurveTo(265.45, 575.84, 263.64, 584.21, 263.77, 592.72);
        context.bezierCurveTo(263.83, 598.01, 264.09, 603.31, 263.99, 608.61);
        context.bezierCurveTo(264.03, 612.05, 263.59, 615.72, 265.21, 618.92);
        context.bezierCurveTo(265.51, 619.55, 266.08, 620.81, 266.36, 621.44);
        context.lineTo(265.67, 622.32);
        context.bezierCurveTo(262.53, 624.09, 268.08, 630.03, 267.75, 625.13);
        context.bezierCurveTo(270.73, 620.21, 274.12, 615.51, 276.49, 610.24);
        context.bezierCurveTo(281.19, 599.84, 284.11, 588.77, 288.24, 578.17);
        context.bezierCurveTo(289.01, 575.79, 290.65, 572.93, 288.48, 570.8);
        context.bezierCurveTo(284.61, 565.36, 281.04, 559.67, 278.73, 553.37);
        context.bezierCurveTo(278.53, 551.6, 278.43, 549.85, 278.19, 548.09);
        context.bezierCurveTo(279.01, 548.49, 280.67, 549.28, 281.51, 549.67);
        context.bezierCurveTo(278.96, 542.07, 273.83, 535.29, 273.11, 527.16);
        context.bezierCurveTo(272.91, 524.39, 270.57, 522.53, 269.13, 520.36);
        context.bezierCurveTo(269.07, 520.15, 268.95, 519.69, 268.88, 519.47);
        context.bezierCurveTo(267.89, 515.51, 267.53, 511.23, 265.05, 507.83);
        context.bezierCurveTo(265.09, 508.65, 265.19, 510.31, 265.23, 511.13);
        context.bezierCurveTo(262.92, 506.87, 261.99, 502.08, 260.09, 497.65);
        context.bezierCurveTo(259.81, 496.93, 259.28, 495.52, 259, 494.8);
        context.bezierCurveTo(257.31, 487.61, 256.63, 480.24, 255.92, 472.91);
        context.bezierCurveTo(256.44, 468.67, 256.89, 464.41, 256.72, 460.15);
        context.bezierCurveTo(257.25, 457.83, 257.85, 455.55, 258.43, 453.27);
        context.bezierCurveTo(259.21, 451.85, 260.05, 450.48, 260.96, 449.16);
        context.bezierCurveTo(262.41, 447.32, 263.96, 445.56, 265.51, 443.8);
        context.bezierCurveTo(266.65, 444.35, 267.83, 444.91, 268.99, 445.47);
        context.closePath();
        context.moveTo(372.63, 512.87);
        context.bezierCurveTo(371.45, 513.16, 369.56, 515.8, 371.55, 516.2);
        context.bezierCurveTo(373.8, 516.57, 376.15, 511.65, 372.63, 512.87);
        context.closePath();
        context.moveTo(309.72, 588.97);
        context.bezierCurveTo(308.73, 590.61, 311.63, 592.01, 312.83, 590.93);
        context.bezierCurveTo(313.83, 589.27, 310.89, 587.83, 309.72, 588.97);
        context.closePath();
        context.fillStyle = fillColor341;
        context.fill();


    }

    function drawPath379() {
        context.beginPath();
        context.moveTo(429.76, 436.59);
        context.bezierCurveTo(430.53, 439.93, 431.23, 443.32, 431.75, 446.72);
        context.bezierCurveTo(430.35, 448.56, 428.71, 450.43, 428.63, 452.88);
        context.bezierCurveTo(428.01, 459.21, 426.49, 465.43, 426.03, 471.79);
        context.bezierCurveTo(424.77, 476.91, 422.4, 481.64, 420.72, 486.61);
        context.bezierCurveTo(420.13, 490.59, 424.08, 491.64, 427.2, 491.79);
        context.bezierCurveTo(427.01, 491.12, 426.64, 489.77, 426.45, 489.11);
        context.bezierCurveTo(428.88, 490.27, 431.37, 491.27, 433.87, 492.33);
        context.lineTo(432.89, 493.13);
        context.bezierCurveTo(431.73, 493.99, 430.6, 494.87, 429.47, 495.72);
        context.bezierCurveTo(423.84, 494.69, 418.55, 492.52, 413.45, 489.97);
        context.bezierCurveTo(412.36, 485.71, 414.01, 481.79, 415.77, 478);
        context.bezierCurveTo(418.08, 468.71, 420.73, 459.43, 421.13, 449.79);
        context.bezierCurveTo(422.05, 451.19, 422.97, 452.6, 423.92, 454);
        context.bezierCurveTo(424.56, 450.75, 424.65, 447.43, 425.16, 444.17);
        context.bezierCurveTo(426.08, 441.32, 428.13, 439.04, 429.76, 436.59);
        context.closePath();
        context.fillStyle = fillColor342;
        context.fill();


    }

    function drawPath380() {
        context.beginPath();
        context.moveTo(45.61, 437.44);
        context.bezierCurveTo(49.15, 440.55, 48.41, 445.69, 49.48, 449.88);
        context.bezierCurveTo(50, 448.85, 51.05, 446.79, 51.59, 445.75);
        context.bezierCurveTo(54.13, 450.37, 56.65, 455.03, 60.56, 458.68);
        context.bezierCurveTo(66.27, 469.68, 72.44, 480.51, 80.01, 490.36);
        context.bezierCurveTo(77.8, 490.95, 75.84, 490.03, 74.01, 488.91);
        context.bezierCurveTo(74.04, 489.93, 74.07, 490.97, 74.09, 492.03);
        context.bezierCurveTo(72.89, 492.11, 71.69, 492.19, 70.49, 492.29);
        context.bezierCurveTo(73.43, 496.35, 77.17, 499.69, 80.31, 503.6);
        context.bezierCurveTo(73.01, 499.73, 66.77, 494.28, 59.73, 490.03);
        context.bezierCurveTo(57.97, 489.17, 57.64, 487.16, 56.91, 485.56);
        context.bezierCurveTo(58.71, 485.43, 60.52, 485.31, 62.33, 485.2);
        context.bezierCurveTo(62.21, 483.49, 62.85, 481.56, 61.85, 480.03);
        context.bezierCurveTo(58.93, 475.16, 55.43, 470.65, 52.77, 465.61);
        context.bezierCurveTo(54.43, 461.87, 51.52, 459.08, 48.44, 457.48);
        context.bezierCurveTo(48.64, 458.99, 48.85, 460.49, 49.08, 462.01);
        context.bezierCurveTo(47.73, 460.75, 46.37, 459.51, 45.01, 458.27);
        context.bezierCurveTo(44.83, 456.87, 44.64, 455.47, 44.47, 454.08);
        context.bezierCurveTo(42.64, 453.53, 40.8, 452.99, 38.97, 452.45);
        context.bezierCurveTo(37.87, 451.19, 36.75, 449.92, 35.65, 448.67);
        context.bezierCurveTo(36.08, 447.97, 36.95, 446.61, 37.37, 445.92);
        context.bezierCurveTo(35.63, 444.92, 33.88, 443.92, 32.13, 442.93);
        context.bezierCurveTo(33.03, 441.93, 33.91, 440.96, 34.8, 439.97);
        context.bezierCurveTo(37.75, 443.15, 42.07, 443.92, 46.16, 444.25);
        context.bezierCurveTo(45.95, 441.99, 45.76, 439.71, 45.61, 437.44);
        context.closePath();
        context.fillStyle = fillColor343;
        context.fill();


    }

    function drawPath381() {
        context.beginPath();
        context.moveTo(363.97, 442.21);
        context.bezierCurveTo(364.91, 440.24, 366.48, 438.73, 368.45, 437.83);
        context.bezierCurveTo(369.25, 440.6, 366.29, 442.16, 363.97, 442.21);
        context.closePath();
        context.fillStyle = fillColor344;
        context.fill();


    }

    function drawPath382() {
        context.beginPath();
        context.moveTo(387.12, 443.81);
        context.bezierCurveTo(388.71, 441.87, 390.33, 439.95, 392.04, 438.09);
        context.lineTo(393.16, 438.33);
        context.bezierCurveTo(398.71, 445.31, 405.6, 452.08, 406.57, 461.44);
        context.bezierCurveTo(405.28, 459.37, 404.17, 457.2, 403.11, 455.03);
        context.bezierCurveTo(402.81, 455.8, 402.23, 457.33, 401.92, 458.11);
        context.bezierCurveTo(401.31, 457.67, 400.07, 456.79, 399.45, 456.35);
        context.bezierCurveTo(398.99, 456, 398.05, 455.29, 397.59, 454.93);
        context.bezierCurveTo(397.45, 454.48, 397.19, 453.57, 397.05, 453.12);
        context.bezierCurveTo(397.09, 457.31, 396.69, 461.87, 399.4, 465.4);
        context.bezierCurveTo(398.73, 465.68, 397.39, 466.25, 396.72, 466.55);
        context.bezierCurveTo(396.35, 466.71, 395.6, 467.01, 395.23, 467.17);
        context.bezierCurveTo(394.63, 468.24, 394.07, 469.32, 393.52, 470.43);
        context.bezierCurveTo(391.69, 465.49, 390.24, 460.43, 389.15, 455.29);
        context.bezierCurveTo(388.67, 453.15, 388.21, 451, 387.76, 448.87);
        context.bezierCurveTo(388.61, 448.68, 390.31, 448.32, 391.16, 448.13);
        context.bezierCurveTo(389.81, 446.69, 388.47, 445.25, 387.12, 443.81);
        context.closePath();
        context.fillStyle = fillColor345;
        context.fill();


    }

    function drawPath383() {
        context.beginPath();
        context.moveTo(453.31, 442.04);
        context.bezierCurveTo(456.87, 439.64, 461.31, 439.95, 465.39, 439.48);
        context.bezierCurveTo(466.2, 440.56, 467.01, 441.65, 467.81, 442.77);
        context.bezierCurveTo(466.8, 442.83, 464.75, 442.93, 463.73, 442.99);
        context.bezierCurveTo(460.43, 441.85, 456.88, 441.71, 454.25, 444.35);
        context.bezierCurveTo(457.81, 444.72, 462.01, 443.79, 464.88, 446.49);
        context.bezierCurveTo(465.2, 448.17, 465.12, 450.04, 464.09, 451.48);
        context.bezierCurveTo(461.15, 455.95, 457.67, 460.13, 455.67, 465.16);
        context.bezierCurveTo(453.05, 472.36, 447.72, 478.05, 444.2, 484.77);
        context.bezierCurveTo(442.27, 485.57, 440.32, 486.35, 438.4, 487.13);
        context.bezierCurveTo(440.52, 483.67, 443.56, 480.92, 445.84, 477.59);
        context.bezierCurveTo(445.65, 476.27, 445.01, 475.05, 444.59, 473.83);
        context.bezierCurveTo(445.19, 472.72, 444.93, 470.48, 443.17, 471.47);
        context.bezierCurveTo(441.53, 472.12, 440.88, 473.85, 440.25, 475.36);
        context.bezierCurveTo(438.85, 475.48, 437.44, 475.52, 436.05, 475.6);
        context.bezierCurveTo(439.56, 469.47, 440.01, 461.51, 445.8, 456.85);
        context.bezierCurveTo(448.27, 454.89, 446.53, 451.4, 446.64, 448.77);
        context.bezierCurveTo(448.61, 446.31, 450.52, 443.65, 453.31, 442.04);
        context.closePath();
        context.moveTo(459.13, 446.25);
        context.bezierCurveTo(457.69, 446.4, 455.95, 448.05, 456.61, 449.57);
        context.bezierCurveTo(458.39, 450.93, 461.83, 447, 459.13, 446.25);
        context.closePath();
        context.fillStyle = fillColor346;
        context.fill();


    }

    function drawPath384() {
        context.beginPath();
        context.moveTo(256.33, 440.05);
        context.bezierCurveTo(256.85, 444.48, 257.83, 448.84, 258.43, 453.27);
        context.bezierCurveTo(257.85, 455.55, 257.25, 457.83, 256.72, 460.15);
        context.bezierCurveTo(254.71, 453.6, 255.28, 446.71, 256.33, 440.05);
        context.closePath();
        context.fillStyle = fillColor347;
        context.fill();


    }

    function drawPath385() {
        context.beginPath();
        context.moveTo(243.43, 488.41);
        context.bezierCurveTo(247.33, 472.93, 248.01, 456.56, 254.03, 441.63);
        context.bezierCurveTo(254.61, 446.48, 254.75, 451.41, 253.84, 456.24);
        context.bezierCurveTo(253.59, 456.64, 253.07, 457.44, 252.81, 457.84);
        context.bezierCurveTo(251.48, 462.01, 250.75, 466.33, 249.72, 470.59);
        context.bezierCurveTo(249.92, 472.73, 250.65, 475.03, 249.56, 477.07);
        context.bezierCurveTo(247.79, 481.52, 247.45, 486.37, 245.75, 490.85);
        context.bezierCurveTo(245.83, 491.16, 245.97, 491.77, 246.04, 492.08);
        context.bezierCurveTo(245.17, 497.25, 243.76, 502.29, 241.93, 507.2);
        context.bezierCurveTo(241.55, 507.55, 240.76, 508.25, 240.37, 508.6);
        context.bezierCurveTo(239.68, 510.44, 238.95, 512.27, 238.17, 514.08);
        context.bezierCurveTo(236.81, 512.63, 236.87, 510.81, 237.68, 509.13);
        context.bezierCurveTo(240.41, 502.45, 240.84, 495.15, 243.43, 488.41);
        context.closePath();
        context.fillStyle = fillColor348;
        context.fill();


    }

    function drawPath386() {
        context.beginPath();
        context.moveTo(283.6, 444.16);
        context.bezierCurveTo(285.57, 443.28, 287.55, 442.43, 289.52, 441.53);
        context.bezierCurveTo(292.25, 443.43, 294.32, 446.03, 296.23, 448.72);
        context.bezierCurveTo(291.72, 448.19, 286.99, 447.48, 283.6, 444.16);
        context.closePath();
        context.fillStyle = fillColor349;
        context.fill();


    }

    function drawPath387() {
        context.beginPath();
        context.moveTo(454.25, 444.35);
        context.bezierCurveTo(456.88, 441.71, 460.43, 441.85, 463.73, 442.99);
        context.bezierCurveTo(465.09, 443.56, 466.47, 444.16, 467.83, 444.79);
        context.bezierCurveTo(467.51, 447.6, 467.17, 450.41, 466.65, 453.2);
        context.bezierCurveTo(462.92, 461.49, 460.48, 470.31, 456.45, 478.49);
        context.bezierCurveTo(453.36, 483.31, 448.71, 486.56, 444.4, 490.19);
        context.bezierCurveTo(440.64, 491.48, 436.72, 492.16, 432.89, 493.13);
        context.lineTo(433.87, 492.33);
        context.bezierCurveTo(435.59, 490.8, 437.11, 489.05, 438.4, 487.13);
        context.bezierCurveTo(440.32, 486.35, 442.27, 485.57, 444.2, 484.77);
        context.bezierCurveTo(447.72, 478.05, 453.05, 472.36, 455.67, 465.16);
        context.bezierCurveTo(457.67, 460.13, 461.15, 455.95, 464.09, 451.48);
        context.bezierCurveTo(465.12, 450.04, 465.2, 448.17, 464.88, 446.49);
        context.bezierCurveTo(462.01, 443.79, 457.81, 444.72, 454.25, 444.35);
        context.closePath();
        context.fillStyle = fillColor350;
        context.fill();


    }

    function drawPath388() {
        context.beginPath();
        context.moveTo(347.69, 460.45);
        context.bezierCurveTo(352.88, 454.48, 357.81, 448.25, 363.45, 442.72);
        context.bezierCurveTo(359.51, 449.53, 354.31, 456.08, 347.69, 460.45);
        context.closePath();
        context.fillStyle = fillColor344;
        context.fill();


    }

    function drawPath389() {
        context.beginPath();
        context.moveTo(142.4, 444.99);
        context.bezierCurveTo(147.72, 448.36, 153.47, 451.55, 157.4, 456.59);
        context.bezierCurveTo(157, 457.31, 156.19, 458.73, 155.79, 459.45);
        context.bezierCurveTo(167.64, 467.36, 174.68, 480.17, 183.01, 491.33);
        context.lineTo(180.61, 491.35);
        context.bezierCurveTo(176.29, 488.8, 172.41, 485.57, 167.93, 483.29);
        context.bezierCurveTo(164.04, 482.07, 165.28, 477.4, 163.45, 474.57);
        context.bezierCurveTo(158.17, 467.08, 151.4, 460.79, 144.23, 455.13);
        context.bezierCurveTo(144.24, 453.96, 144.25, 451.6, 144.27, 450.43);
        context.bezierCurveTo(147.88, 452.97, 151.23, 455.89, 154.97, 458.25);
        context.bezierCurveTo(150.61, 453.75, 145.08, 450.65, 140.47, 446.43);
        context.bezierCurveTo(140.95, 446.07, 141.92, 445.35, 142.4, 444.99);
        context.closePath();
        context.fillStyle = fillColor351;
        context.fill();


    }

    function drawPath390() {
        context.beginPath();
        context.moveTo(328.27, 448.65);
        context.bezierCurveTo(329.83, 447.44, 331.43, 446.28, 332.97, 445.04);
        context.bezierCurveTo(335.16, 445.04, 337.35, 445.03, 339.55, 445);
        context.bezierCurveTo(336.63, 448.27, 338.36, 452.96, 338.39, 456.88);
        context.bezierCurveTo(337.89, 454.73, 337.24, 452.63, 336.51, 450.57);
        context.lineTo(335.72, 449.45);
        context.bezierCurveTo(333.64, 449.49, 331.57, 449.64, 329.52, 449.8);
        context.lineTo(328.27, 448.65);
        context.closePath();
        context.fillStyle = fillColor352;
        context.fill();


    }

    function drawPath391() {
        context.beginPath();
        context.moveTo(570.17, 445.53);
        context.bezierCurveTo(575.52, 444.39, 581.15, 443.84, 586.55, 444.96);
        context.bezierCurveTo(596.2, 447.41, 604.68, 453.04, 611.79, 459.88);
        context.bezierCurveTo(611.24, 461.76, 610.75, 463.67, 610, 465.49);
        context.bezierCurveTo(608.6, 465.92, 607.19, 466.31, 605.77, 466.65);
        context.bezierCurveTo(600.97, 461.56, 595.05, 457.8, 589.32, 453.89);
        context.bezierCurveTo(582.89, 449.08, 574.36, 451.03, 566.93, 449.97);
        context.bezierCurveTo(567.8, 448.4, 567.87, 445.72, 570.17, 445.53);
        context.closePath();
        context.fillStyle = fillColor353;
        context.fill();


    }

    function drawPath392() {
        context.beginPath();
        context.moveTo(688.91, 445.08);
        context.bezierCurveTo(694.12, 445.77, 697.17, 450.21, 701.12, 453.15);
        context.bezierCurveTo(702.33, 454.04, 703.11, 455.24, 703.43, 456.76);
        context.bezierCurveTo(701.83, 457.91, 700.27, 459.13, 698.77, 460.43);
        context.bezierCurveTo(693.39, 458.44, 691.75, 452.17, 686.77, 449.52);
        context.bezierCurveTo(687.45, 448.03, 688.17, 446.56, 688.91, 445.08);
        context.closePath();
        context.fillStyle = fillColor354;
        context.fill();


    }

    function drawPath393() {
        context.beginPath();
        context.moveTo(459.13, 446.25);
        context.bezierCurveTo(461.83, 447, 458.39, 450.93, 456.61, 449.57);
        context.bezierCurveTo(455.95, 448.05, 457.69, 446.4, 459.13, 446.25);
        context.closePath();
        context.fillStyle = fillColor355;
        context.fill();


    }

    function drawPath394() {
        context.beginPath();
        context.moveTo(26.77, 450.21);
        context.bezierCurveTo(29.25, 447.8, 32.52, 447.68, 35.65, 448.67);
        context.bezierCurveTo(36.75, 449.92, 37.87, 451.19, 38.97, 452.45);
        context.bezierCurveTo(39.2, 454.27, 39.43, 456.09, 39.67, 457.93);
        context.bezierCurveTo(36.71, 456.13, 33.52, 454.75, 30.23, 453.71);
        context.lineTo(29.33, 452.99);
        context.bezierCurveTo(28.44, 452.09, 27.61, 451.15, 26.77, 450.21);
        context.closePath();
        context.fillStyle = fillColor356;
        context.fill();


    }

    function drawPath395() {
        context.beginPath();
        context.moveTo(364.59, 459.93);
        context.bezierCurveTo(370.16, 456.49, 375.48, 452.69, 380.52, 448.51);
        context.bezierCurveTo(380.45, 449.17, 380.32, 450.51, 380.25, 451.17);
        context.bezierCurveTo(377.52, 456.68, 371.51, 458.81, 366.51, 461.68);
        context.bezierCurveTo(366.19, 462.56, 365.56, 464.33, 365.24, 465.21);
        context.bezierCurveTo(361.25, 469.09, 354.44, 470.75, 353.09, 476.79);
        context.bezierCurveTo(353.23, 479.01, 354.68, 480.89, 355.55, 482.89);
        context.bezierCurveTo(361.09, 482.21, 366.51, 480.69, 372.08, 480.13);
        context.bezierCurveTo(371.91, 479.16, 371.73, 478.21, 371.57, 477.25);
        context.bezierCurveTo(376.61, 476.08, 382.21, 475.57, 386.11, 471.75);
        context.bezierCurveTo(385.08, 469.99, 384.08, 468.24, 383.09, 466.48);
        context.bezierCurveTo(383.07, 465.64, 383, 463.96, 382.97, 463.12);
        context.bezierCurveTo(387.87, 470.25, 390.28, 478.75, 395.68, 485.6);
        context.bezierCurveTo(396.4, 485.6, 397.13, 485.6, 397.87, 485.61);
        context.bezierCurveTo(398.53, 486.95, 399.2, 488.29, 399.93, 489.61);
        context.bezierCurveTo(398.01, 489.33, 396.28, 488.49, 394.57, 487.61);
        context.bezierCurveTo(394.33, 488.15, 393.83, 489.19, 393.57, 489.71);
        context.bezierCurveTo(391.44, 490.17, 389.35, 490.67, 387.24, 491.15);
        context.bezierCurveTo(386.96, 488.36, 388.79, 484.17, 385.4, 482.8);
        context.bezierCurveTo(382.35, 482.56, 380.28, 485.28, 377.96, 486.81);
        context.bezierCurveTo(371.23, 485.39, 365.4, 489.69, 359, 490.84);
        context.bezierCurveTo(353.29, 492.19, 347.41, 491.37, 341.68, 490.61);
        context.bezierCurveTo(341.32, 488.05, 340.83, 485.47, 338.95, 483.55);
        context.bezierCurveTo(339.21, 478.88, 339.57, 474.2, 339.53, 469.52);
        context.bezierCurveTo(339.68, 469.89, 339.97, 470.65, 340.11, 471.03);
        context.bezierCurveTo(340.92, 472.79, 341.75, 474.56, 342.59, 476.32);
        context.bezierCurveTo(350.67, 471.93, 357.65, 465.88, 364.59, 459.93);
        context.closePath();
        context.fillStyle = fillColor357;
        context.fill();


    }

    function drawPath396() {
        context.beginPath();
        context.moveTo(545.08, 448.76);
        context.bezierCurveTo(549.11, 448.19, 552.09, 450.33, 553.95, 453.75);
        context.bezierCurveTo(552.05, 454.97, 550.01, 455.99, 547.83, 456.57);
        context.bezierCurveTo(546.84, 453.99, 545.92, 451.37, 545.08, 448.76);
        context.closePath();
        context.fillStyle = fillColor358;
        context.fill();


    }

    function drawPath397() {
        context.beginPath();
        context.moveTo(121.04, 452.29);
        context.bezierCurveTo(122.25, 450.12, 125.11, 450.84, 127.13, 450.33);
        context.bezierCurveTo(129.61, 454.87, 132.33, 459.27, 135.51, 463.36);
        context.bezierCurveTo(134.83, 465.44, 133.12, 467.2, 130.81, 466.09);
        context.bezierCurveTo(127.39, 465.28, 124.23, 463.68, 121.04, 462.28);
        context.bezierCurveTo(120.63, 461.53, 119.79, 460.04, 119.37, 459.31);
        context.bezierCurveTo(119.84, 456.95, 120.05, 454.49, 121.04, 452.29);
        context.closePath();
        context.fillStyle = fillColor359;
        context.fill();


    }

    function drawPath398() {
        context.beginPath();
        context.moveTo(141.68, 448.56);
        context.bezierCurveTo(142.33, 449.03, 143.63, 449.96, 144.27, 450.43);
        context.bezierCurveTo(144.25, 451.6, 144.24, 453.96, 144.23, 455.13);
        context.bezierCurveTo(144.89, 461.45, 144.85, 468.6, 149.01, 473.79);
        context.bezierCurveTo(147.85, 473.47, 146.69, 473.16, 145.53, 472.88);
        context.bezierCurveTo(145.6, 474.28, 145.65, 475.69, 145.69, 477.11);
        context.bezierCurveTo(145.71, 478.17, 145.72, 480.32, 145.73, 481.39);
        context.bezierCurveTo(144.39, 482.55, 143.07, 483.75, 141.72, 484.92);
        context.bezierCurveTo(140.32, 491.56, 141.52, 499.05, 137.52, 504.91);
        context.bezierCurveTo(136.21, 505.97, 134.91, 507.03, 133.6, 508.09);
        context.bezierCurveTo(133.4, 507.85, 133, 507.39, 132.8, 507.15);
        context.bezierCurveTo(134.25, 504.08, 136.08, 501.17, 137.24, 497.96);
        context.bezierCurveTo(138.85, 493.28, 138.17, 488.15, 139.92, 483.52);
        context.bezierCurveTo(148.61, 473.53, 141.43, 460.08, 141.68, 448.56);
        context.closePath();
        context.fillStyle = fillColor360;
        context.fill();


    }

    function drawPath399() {
        context.beginPath();
        context.moveTo(166.99, 449.39);
        context.bezierCurveTo(168.76, 450.72, 170.4, 452.25, 171.65, 454.12);
        context.bezierCurveTo(175.68, 459.89, 180.53, 465.05, 184.41, 470.95);
        context.bezierCurveTo(188.92, 476.97, 192.17, 483.85, 196.99, 489.67);
        context.bezierCurveTo(199.15, 492.19, 201.35, 494.67, 203.51, 497.19);
        context.bezierCurveTo(203.24, 498.57, 202.89, 499.93, 202.59, 501.32);
        context.bezierCurveTo(191.6, 489.95, 185.01, 475.19, 174.48, 463.44);
        context.bezierCurveTo(170.95, 459.43, 166.84, 455.12, 166.99, 449.39);
        context.closePath();
        context.fillStyle = fillColor361;
        context.fill();


    }

    function drawPath400() {
        context.beginPath();
        context.moveTo(297.92, 449.87);
        context.bezierCurveTo(298.32, 450.15, 299.09, 450.69, 299.49, 450.97);
        context.bezierCurveTo(301.29, 452.85, 302.99, 454.84, 304.67, 456.84);
        context.bezierCurveTo(305.12, 456.44, 306.04, 455.64, 306.49, 455.24);
        context.bezierCurveTo(305.96, 457.2, 305.31, 459.13, 304.57, 461.03);
        context.bezierCurveTo(306, 465.61, 308.17, 469.91, 310.59, 474.05);
        context.bezierCurveTo(309.95, 474.51, 308.67, 475.4, 308.01, 475.85);
        context.bezierCurveTo(307.97, 477.71, 307.96, 479.57, 307.96, 481.44);
        context.bezierCurveTo(303.87, 472.8, 304.83, 461.93, 297.59, 454.88);
        context.bezierCurveTo(299.81, 463.6, 302.51, 472.19, 305, 480.84);
        context.bezierCurveTo(307.17, 486.84, 308.92, 493.17, 312.91, 498.29);
        context.bezierCurveTo(313.35, 499.89, 313.76, 501.49, 314.17, 503.12);
        context.bezierCurveTo(314.13, 508.75, 316.53, 514.05, 316.33, 519.65);
        context.bezierCurveTo(318.49, 518.32, 318, 520.99, 318.48, 521.93);
        context.bezierCurveTo(319.65, 528.27, 319.81, 534.73, 319.96, 541.16);
        context.bezierCurveTo(318.76, 538.4, 317.27, 535.72, 316.77, 532.73);
        context.bezierCurveTo(315.13, 522.32, 313.31, 511.83, 309.49, 501.95);
        context.bezierCurveTo(306.27, 493.72, 304.07, 485.15, 301.16, 476.81);
        context.bezierCurveTo(299.63, 471.89, 297.63, 467.09, 296.77, 462);
        context.bezierCurveTo(296.23, 458.27, 294.8, 454.77, 293.31, 451.36);
        context.bezierCurveTo(294.61, 452.15, 295.93, 452.93, 297.27, 453.73);
        context.bezierCurveTo(297.43, 452.76, 297.76, 450.83, 297.92, 449.87);
        context.closePath();
        context.fillStyle = fillColor362;
        context.fill();


    }

    function drawPath401() {
        context.beginPath();
        context.moveTo(308.2, 452.35);
        context.bezierCurveTo(315.37, 452.6, 322.36, 450.25, 329.52, 449.8);
        context.bezierCurveTo(331.57, 449.64, 333.64, 449.49, 335.72, 449.45);
        context.lineTo(336.51, 450.57);
        context.bezierCurveTo(326.85, 453.71, 316.81, 458.72, 306.49, 455.24);
        context.bezierCurveTo(306.92, 454.52, 307.77, 453.07, 308.2, 452.35);
        context.closePath();
        context.fillStyle = fillColor363;
        context.fill();


    }

    function drawPath402() {
        context.beginPath();
        context.moveTo(669.96, 452.44);
        context.bezierCurveTo(674.49, 446.97, 679.91, 453.6, 684.43, 455.35);
        context.bezierCurveTo(685.83, 458.49, 681.64, 461.92, 678.77, 460.11);
        context.bezierCurveTo(676.28, 458.68, 673.89, 457.09, 671.41, 455.69);
        context.bezierCurveTo(671.05, 454.88, 670.32, 453.25, 669.96, 452.44);
        context.closePath();
        context.fillStyle = fillColor354;
        context.fill();


    }

    function drawPath403() {
        context.beginPath();
        context.moveTo(177.49, 450.89);
        context.bezierCurveTo(177.73, 451.64, 178.23, 453.12, 178.48, 453.85);
        context.lineTo(177.52, 453.28);
        context.bezierCurveTo(177.51, 452.69, 177.49, 451.49, 177.49, 450.89);
        context.closePath();
        context.fillStyle = fillColor56;
        context.fill();


    }

    function drawPath404() {
        context.beginPath();
        context.moveTo(366.51, 461.68);
        context.bezierCurveTo(371.51, 458.81, 377.52, 456.68, 380.25, 451.17);
        context.bezierCurveTo(380.41, 453.48, 380.64, 455.79, 381.08, 458.07);
        context.bezierCurveTo(376.37, 461.04, 371.32, 463.44, 366.08, 465.32);
        context.lineTo(365.24, 465.21);
        context.bezierCurveTo(365.56, 464.33, 366.19, 462.56, 366.51, 461.68);
        context.closePath();
        context.fillStyle = fillColor364;
        context.fill();


    }

    function drawPath405() {
        context.beginPath();
        context.moveTo(61.37, 452.76);
        context.bezierCurveTo(63.15, 454.81, 64.37, 457.6, 66.92, 458.83);
        context.bezierCurveTo(68.09, 458.77, 69.35, 458.56, 70.15, 459.68);
        context.lineTo(70.29, 460.65);
        context.bezierCurveTo(70.12, 461.12, 69.79, 462.04, 69.63, 462.49);
        context.bezierCurveTo(69.31, 462.55, 68.69, 462.65, 68.37, 462.72);
        context.bezierCurveTo(65.08, 460.16, 63.15, 456.43, 61.37, 452.76);
        context.closePath();
        context.fillStyle = fillColor148;
        context.fill();


    }

    function drawPath406() {
        context.beginPath();
        context.moveTo(86.64, 453.55);
        context.bezierCurveTo(90.55, 452.28, 93.95, 455.23, 96.97, 457.25);
        context.bezierCurveTo(97.24, 457.89, 97.77, 459.16, 98.04, 459.8);
        context.bezierCurveTo(93.21, 460.08, 89.27, 457.39, 86.64, 453.55);
        context.closePath();
        context.fillStyle = fillColor365;
        context.fill();


    }

    function drawPath407() {
        context.beginPath();
        context.moveTo(397.05, 453.12);
        context.bezierCurveTo(397.19, 453.57, 397.45, 454.48, 397.59, 454.93);
        context.bezierCurveTo(398.05, 455.29, 398.99, 456, 399.45, 456.35);
        context.lineTo(397.45, 455.07);
        context.bezierCurveTo(397.75, 457.67, 397.39, 460.48, 398.44, 462.96);
        context.bezierCurveTo(399.97, 465.68, 402.69, 467.43, 405.23, 469.16);
        context.bezierCurveTo(404.81, 469.27, 404.01, 469.48, 403.6, 469.59);
        context.bezierCurveTo(402.09, 468.29, 400.71, 466.87, 399.4, 465.4);
        context.bezierCurveTo(396.69, 461.87, 397.09, 457.31, 397.05, 453.12);
        context.closePath();
        context.fillStyle = fillColor148;
        context.fill();


    }

    function drawPath408() {
        context.beginPath();
        context.moveTo(535.39, 459.36);
        context.bezierCurveTo(535.13, 456.77, 535.2, 454.17, 535.68, 451.63);
        context.bezierCurveTo(538.49, 453.43, 541.13, 455.51, 543.41, 457.97);
        context.bezierCurveTo(541.77, 461.47, 538.23, 459.92, 535.39, 459.36);
        context.closePath();
        context.fillStyle = fillColor358;
        context.fill();


    }

    function drawPath409() {
        context.beginPath();
        context.moveTo(27.83, 459.28);
        context.bezierCurveTo(27.28, 456.88, 25.85, 453.75, 29.33, 452.99);
        context.lineTo(30.23, 453.71);
        context.bezierCurveTo(32.08, 455.97, 33.87, 458.29, 35.71, 460.57);
        context.bezierCurveTo(35.31, 461.41, 34.49, 463.12, 34.08, 463.96);
        context.bezierCurveTo(32.11, 462.27, 29.96, 460.77, 27.83, 459.28);
        context.closePath();
        context.fillStyle = fillColor366;
        context.fill();


    }

    function drawPath410() {
        context.beginPath();
        context.moveTo(392.39, 475.39);
        context.bezierCurveTo(387.92, 468.91, 386.4, 461.07, 384.48, 453.6);
        context.bezierCurveTo(386.03, 454.16, 387.59, 454.72, 389.15, 455.29);
        context.bezierCurveTo(390.24, 460.43, 391.69, 465.49, 393.52, 470.43);
        context.bezierCurveTo(393.07, 472.05, 392.73, 473.72, 392.39, 475.39);
        context.closePath();
        context.fillStyle = fillColor367;
        context.fill();


    }

    function drawPath411() {
        context.beginPath();
        context.moveTo(663.73, 455.2);
        context.bezierCurveTo(665.57, 453.52, 667.75, 452.79, 670.25, 453.55);
        context.bezierCurveTo(669.97, 456.32, 670.83, 459.57, 669.23, 462.04);
        context.bezierCurveTo(667.55, 463, 665.73, 463.65, 663.96, 464.39);
        context.bezierCurveTo(659.4, 470.31, 649.85, 463.39, 645.29, 469.91);
        context.bezierCurveTo(641.32, 471.05, 637.21, 472.05, 633.73, 474.39);
        context.bezierCurveTo(631.71, 474.77, 629.72, 475.27, 627.85, 476.13);
        context.bezierCurveTo(626.87, 476.16, 624.91, 476.23, 623.92, 476.27);
        context.bezierCurveTo(622.43, 477.25, 620.93, 478.24, 619.41, 479.17);
        context.bezierCurveTo(618.85, 480.31, 618.31, 481.44, 617.79, 482.59);
        context.bezierCurveTo(615.88, 482.97, 613.97, 483.33, 612.07, 483.71);
        context.bezierCurveTo(612.21, 487.16, 613.32, 490.71, 612.05, 494.07);
        context.bezierCurveTo(611.63, 495.76, 611.28, 497.52, 610.01, 498.83);
        context.bezierCurveTo(609.91, 499.57, 609.71, 501.09, 609.6, 501.85);
        context.bezierCurveTo(606.77, 506.95, 604.72, 512.99, 599.55, 516.25);
        context.bezierCurveTo(597.33, 517.61, 596.15, 519.95, 594.88, 522.12);
        context.bezierCurveTo(588.73, 527.56, 583.44, 533.85, 577.16, 539.13);
        context.bezierCurveTo(575.49, 540.16, 573.65, 540.84, 571.8, 541.43);
        context.bezierCurveTo(570.05, 542.91, 568.31, 544.41, 566.75, 546.08);
        context.bezierCurveTo(558.71, 549.63, 550.35, 552.56, 542.83, 557.19);
        context.bezierCurveTo(539.13, 557.36, 535.45, 557.19, 531.77, 557.01);
        context.bezierCurveTo(527.49, 554.65, 522.41, 553.25, 519.35, 549.2);
        context.bezierCurveTo(512.8, 541.91, 510.49, 530.69, 515.45, 521.93);
        context.bezierCurveTo(515.55, 516.61, 514.11, 511.23, 515.43, 505.97);
        context.bezierCurveTo(516.76, 501.36, 519.11, 497.13, 522.05, 493.36);
        context.bezierCurveTo(525.23, 489.35, 526.72, 484.12, 530.8, 480.84);
        context.bezierCurveTo(536.24, 476.23, 541.55, 471.45, 547.07, 466.96);
        context.bezierCurveTo(552.53, 465.13, 558.36, 464.91, 563.83, 463.04);
        context.bezierCurveTo(569.96, 462.52, 576.16, 462.31, 582.32, 462.85);
        context.bezierCurveTo(586.05, 463.56, 589.56, 465.2, 593.29, 465.99);
        context.bezierCurveTo(600.81, 467.33, 604.51, 475.37, 611.88, 477.19);
        context.bezierCurveTo(613.68, 478.53, 615.01, 476.73, 615.99, 475.45);
        context.bezierCurveTo(621.24, 470.83, 627.61, 468.03, 634.05, 465.48);
        context.bezierCurveTo(640.24, 461.55, 647.13, 458.07, 654.63, 457.83);
        context.bezierCurveTo(657.97, 457.63, 662.52, 459.64, 663.73, 455.2);
        context.closePath();
        context.fillStyle = fillColor261;
        context.fill();


    }

    function drawPath412() {
        context.save();
        context.globalAlpha = 0.97;
        context.beginPath();
        context.moveTo(297.59, 454.88);
        context.bezierCurveTo(304.83, 461.93, 303.87, 472.8, 307.96, 481.44);
        context.bezierCurveTo(309.93, 486.96, 311.68, 492.56, 312.91, 498.29);
        context.bezierCurveTo(308.92, 493.17, 307.17, 486.84, 305, 480.84);
        context.bezierCurveTo(302.51, 472.19, 299.81, 463.6, 297.59, 454.88);
        context.closePath();
        context.fillStyle = fillColor368;
        context.fill();
        context.restore();


    }

    function drawPath413() {
        context.beginPath();
        context.moveTo(409.39, 455.33);
        context.bezierCurveTo(411.55, 454.69, 412.33, 455.45, 411.73, 457.61);
        context.bezierCurveTo(409.56, 458.24, 408.79, 457.48, 409.39, 455.33);
        context.closePath();
        context.fillStyle = fillColor369;
        context.fill();


    }

    function drawPath414() {
        context.beginPath();
        context.moveTo(101.28, 458.59);
        context.bezierCurveTo(102.89, 457.36, 104.87, 456.36, 106.64, 458.01);
        context.bezierCurveTo(112.59, 462.72, 116.12, 469.8, 121.97, 474.63);
        context.bezierCurveTo(124.51, 476.53, 127.77, 476.91, 130.77, 477.68);
        context.bezierCurveTo(128.19, 472.15, 124.19, 467.47, 121.04, 462.28);
        context.bezierCurveTo(124.23, 463.68, 127.39, 465.28, 130.81, 466.09);
        context.bezierCurveTo(133.12, 467.2, 134.83, 465.44, 135.51, 463.36);
        context.bezierCurveTo(140.29, 468.96, 137.21, 477.01, 139.92, 483.52);
        context.bezierCurveTo(138.17, 488.15, 138.85, 493.28, 137.24, 497.96);
        context.bezierCurveTo(136.08, 501.17, 134.25, 504.08, 132.8, 507.15);
        context.bezierCurveTo(132.17, 506.47, 130.93, 505.11, 130.32, 504.44);
        context.bezierCurveTo(129.89, 502.76, 129.27, 501.17, 128.61, 499.59);
        context.bezierCurveTo(130.04, 497.95, 131.75, 496.36, 132.19, 494.12);
        context.bezierCurveTo(128.79, 491.27, 123.56, 490.17, 122.17, 485.44);
        context.bezierCurveTo(120.65, 480.85, 117.23, 477.2, 112.57, 475.79);
        context.bezierCurveTo(109.75, 473.45, 107.21, 470.81, 104.67, 468.2);
        context.bezierCurveTo(105.28, 467.96, 106.51, 467.48, 107.12, 467.24);
        context.bezierCurveTo(108.75, 466.95, 110.4, 466.85, 112.07, 466.73);
        context.bezierCurveTo(108.59, 463.87, 104.97, 461.16, 101.28, 458.59);
        context.closePath();
        context.fillStyle = fillColor370;
        context.fill();


    }

    function drawPath415() {
        context.beginPath();
        context.moveTo(397.45, 455.07);
        context.lineTo(399.45, 456.35);
        context.bezierCurveTo(400.07, 456.79, 401.31, 457.67, 401.92, 458.11);
        context.bezierCurveTo(403.2, 461.96, 405.96, 465.03, 408.29, 468.28);
        context.bezierCurveTo(407.52, 468.49, 405.99, 468.93, 405.23, 469.16);
        context.bezierCurveTo(402.69, 467.43, 399.97, 465.68, 398.44, 462.96);
        context.bezierCurveTo(397.39, 460.48, 397.75, 457.67, 397.45, 455.07);
        context.closePath();
        context.fillStyle = fillColor266;
        context.fill();


    }

    function drawPath416() {
        context.beginPath();
        context.moveTo(48.44, 457.48);
        context.bezierCurveTo(51.52, 459.08, 54.43, 461.87, 52.77, 465.61);
        context.bezierCurveTo(51.56, 464.39, 50.33, 463.19, 49.08, 462.01);
        context.bezierCurveTo(48.85, 460.49, 48.64, 458.99, 48.44, 457.48);
        context.closePath();
        context.fillStyle = fillColor371;
        context.fill();


    }

    function drawPath417() {
        context.beginPath();
        context.moveTo(269.64, 458.19);
        context.bezierCurveTo(270.4, 458.51, 271.95, 459.16, 272.72, 459.48);
        context.bezierCurveTo(273.93, 469.56, 274.53, 479.76, 276.75, 489.68);
        context.bezierCurveTo(279.12, 497.59, 280.71, 505.73, 283.69, 513.45);
        context.bezierCurveTo(286.92, 522.12, 288.93, 531.23, 293.24, 539.48);
        context.bezierCurveTo(292.6, 539.85, 291.33, 540.59, 290.69, 540.96);
        context.bezierCurveTo(282.03, 524.13, 279.68, 504.92, 271.32, 488);
        context.bezierCurveTo(271.71, 487.48, 272.47, 486.43, 272.85, 485.91);
        context.bezierCurveTo(271.51, 482.45, 269.45, 478.8, 270.95, 475.05);
        context.bezierCurveTo(269.44, 469.52, 270.55, 463.79, 269.64, 458.19);
        context.closePath();
        context.fillStyle = fillColor372;
        context.fill();


    }

    function drawPath418() {
        context.beginPath();
        context.moveTo(27.83, 459.28);
        context.bezierCurveTo(29.96, 460.77, 32.11, 462.27, 34.08, 463.96);
        context.bezierCurveTo(37.69, 470.89, 43.57, 476.39, 46.53, 483.65);
        context.bezierCurveTo(44.91, 482.36, 43.29, 481.05, 41.69, 479.75);
        context.bezierCurveTo(41.48, 480.64, 41.07, 482.41, 40.85, 483.31);
        context.bezierCurveTo(35.17, 477.93, 29.52, 472.27, 25.79, 465.31);
        context.bezierCurveTo(26.73, 464.51, 27.85, 463.92, 28.93, 463.33);
        context.bezierCurveTo(28.56, 461.97, 28.19, 460.63, 27.83, 459.28);
        context.closePath();
        context.fillStyle = fillColor373;
        context.fill();


    }

    function drawPath419() {
        context.beginPath();
        context.moveTo(366.08, 465.32);
        context.bezierCurveTo(371.32, 463.44, 376.37, 461.04, 381.08, 458.07);
        context.bezierCurveTo(381.68, 459.75, 382.33, 461.43, 382.97, 463.12);
        context.bezierCurveTo(383, 463.96, 383.07, 465.64, 383.09, 466.48);
        context.bezierCurveTo(381.76, 465.13, 380.4, 463.84, 379.04, 462.55);
        context.bezierCurveTo(374.97, 464.44, 370.68, 466.96, 366.08, 465.32);
        context.closePath();
        context.fillStyle = fillColor374;
        context.fill();


    }

    function drawPath420() {
        context.beginPath();
        context.moveTo(511.45, 466.77);
        context.bezierCurveTo(514.61, 462.52, 519.43, 458.03, 525.21, 459.71);
        context.bezierCurveTo(528.23, 460.25, 528.76, 463.45, 528.41, 466.03);
        context.bezierCurveTo(526.17, 469.51, 521.01, 466.64, 518.32, 469.61);
        context.bezierCurveTo(514.4, 473.48, 511.92, 478.56, 509.4, 483.4);
        context.bezierCurveTo(502.49, 497.92, 503.16, 514.31, 501.27, 529.91);
        context.bezierCurveTo(500.45, 535.49, 503.81, 540.55, 504.15, 546.03);
        context.bezierCurveTo(503.07, 549.6, 500.97, 552.76, 499.37, 556.12);
        context.bezierCurveTo(495.41, 564.11, 493.33, 572.85, 491.77, 581.59);
        context.bezierCurveTo(489.75, 587.56, 488.96, 594.03, 490.6, 600.19);
        context.bezierCurveTo(489.28, 602.97, 487.01, 607.84, 483.16, 605.65);
        context.bezierCurveTo(482.17, 603.27, 481.84, 600.69, 481.67, 598.16);
        context.bezierCurveTo(482.45, 587.31, 484.88, 576.65, 488.37, 566.39);
        context.bezierCurveTo(490.87, 559.13, 495.41, 552.85, 498.64, 545.95);
        context.bezierCurveTo(495.56, 537.41, 494.96, 528.29, 495.31, 519.31);
        context.bezierCurveTo(495.4, 500.84, 499.01, 481.12, 511.45, 466.77);
        context.closePath();
        context.fillStyle = fillColor299;
        context.fill();


    }

    function drawPath421() {
        context.beginPath();
        context.moveTo(191.12, 460.83);
        context.lineTo(194.15, 461.47);
        context.bezierCurveTo(195.53, 463.85, 196.68, 466.39, 197.23, 469.12);
        context.bezierCurveTo(194.93, 466.55, 193.01, 463.68, 191.12, 460.83);
        context.closePath();
        context.fillStyle = fillColor375;
        context.fill();


    }

    function drawPath422() {
        context.beginPath();
        context.moveTo(293.59, 462.73);
        context.bezierCurveTo(294.37, 462.55, 295.97, 462.17, 296.77, 462);
        context.bezierCurveTo(297.63, 467.09, 299.63, 471.89, 301.16, 476.81);
        context.bezierCurveTo(304.07, 485.15, 306.27, 493.72, 309.49, 501.95);
        context.bezierCurveTo(313.31, 511.83, 315.13, 522.32, 316.77, 532.73);
        context.bezierCurveTo(317.27, 535.72, 318.76, 538.4, 319.96, 541.16);
        context.lineTo(320.6, 542.76);
        context.bezierCurveTo(318.76, 544.19, 316.52, 544.87, 314.32, 545.48);
        context.bezierCurveTo(314.44, 531.83, 312.48, 518.04, 307.4, 505.31);
        context.bezierCurveTo(304.96, 499.41, 304.13, 493.01, 301.68, 487.12);
        context.bezierCurveTo(298.47, 479.16, 296.83, 470.68, 293.59, 462.73);
        context.closePath();
        context.moveTo(316.37, 538.57);
        context.bezierCurveTo(315.15, 540.15, 315.44, 541.09, 317.25, 541.41);
        context.bezierCurveTo(318.47, 539.83, 318.17, 538.89, 316.37, 538.57);
        context.closePath();
        context.fillStyle = fillColor376;
        context.fill();


    }

    function drawPath423() {
        context.beginPath();
        context.moveTo(338.89, 461.67);
        context.bezierCurveTo(339.28, 463.64, 339.96, 465.53, 340.65, 467.43);
        context.bezierCurveTo(342.76, 465.48, 344.81, 463.47, 346.83, 461.43);
        context.bezierCurveTo(344.8, 464.77, 342.48, 467.92, 340.11, 471.03);
        context.bezierCurveTo(339.97, 470.65, 339.68, 469.89, 339.53, 469.52);
        context.bezierCurveTo(339.35, 466.89, 339.15, 464.28, 338.89, 461.67);
        context.closePath();
        context.fillStyle = fillColor56;
        context.fill();


    }

    function drawPath424() {
        context.beginPath();
        context.moveTo(379.04, 462.55);
        context.bezierCurveTo(380.4, 463.84, 381.76, 465.13, 383.09, 466.48);
        context.bezierCurveTo(384.08, 468.24, 385.08, 469.99, 386.11, 471.75);
        context.bezierCurveTo(382.21, 475.57, 376.61, 476.08, 371.57, 477.25);
        context.bezierCurveTo(371.73, 478.21, 371.91, 479.16, 372.08, 480.13);
        context.bezierCurveTo(366.51, 480.69, 361.09, 482.21, 355.55, 482.89);
        context.bezierCurveTo(354.68, 480.89, 353.23, 479.01, 353.09, 476.79);
        context.bezierCurveTo(354.44, 470.75, 361.25, 469.09, 365.24, 465.21);
        context.lineTo(366.08, 465.32);
        context.bezierCurveTo(370.68, 466.96, 374.97, 464.44, 379.04, 462.55);
        context.closePath();
        context.fillStyle = fillColor377;
        context.fill();


    }

    function drawPath425() {
        context.beginPath();
        context.moveTo(95.47, 463.33);
        context.bezierCurveTo(98.72, 464.57, 101.76, 466.28, 104.67, 468.2);
        context.bezierCurveTo(107.21, 470.81, 109.75, 473.45, 112.57, 475.79);
        context.bezierCurveTo(115.27, 479.73, 117.65, 483.97, 118.49, 488.73);
        context.bezierCurveTo(115.17, 484.28, 112.95, 478.87, 108.23, 475.63);
        context.bezierCurveTo(103.92, 471.59, 98.91, 468.21, 95.47, 463.33);
        context.closePath();
        context.fillStyle = fillColor378;
        context.fill();


    }

    function drawPath426() {
        context.beginPath();
        context.moveTo(396.72, 466.55);
        context.bezierCurveTo(397.39, 466.25, 398.73, 465.68, 399.4, 465.4);
        context.bezierCurveTo(400.71, 466.87, 402.09, 468.29, 403.6, 469.59);
        context.bezierCurveTo(404.88, 470.65, 406.19, 471.72, 407.52, 472.73);
        context.bezierCurveTo(407.64, 477.76, 407.09, 482.97, 408.97, 487.79);
        context.bezierCurveTo(407.61, 489.07, 406.24, 490.35, 404.81, 491.57);
        context.lineTo(403.69, 492.29);
        context.bezierCurveTo(403.37, 491.75, 402.75, 490.67, 402.43, 490.12);
        context.bezierCurveTo(401.65, 488.08, 400.97, 486.03, 400.28, 483.96);
        context.bezierCurveTo(401.52, 484.01, 402.77, 484.07, 404.04, 484.13);
        context.bezierCurveTo(402.72, 483, 401.41, 481.88, 400.11, 480.76);
        context.bezierCurveTo(400.55, 480.33, 401.43, 479.48, 401.87, 479.05);
        context.bezierCurveTo(398.48, 475.73, 397.08, 471.17, 396.72, 466.55);
        context.closePath();
        context.fillStyle = fillColor379;
        context.fill();


    }

    function drawPath427() {
        context.beginPath();
        context.moveTo(96.88, 471.08);
        context.bezierCurveTo(100.64, 472.64, 104.43, 474.15, 108.23, 475.63);
        context.bezierCurveTo(112.95, 478.87, 115.17, 484.28, 118.49, 488.73);
        context.bezierCurveTo(117.65, 483.97, 115.27, 479.73, 112.57, 475.79);
        context.bezierCurveTo(117.23, 477.2, 120.65, 480.85, 122.17, 485.44);
        context.bezierCurveTo(123.56, 490.17, 128.79, 491.27, 132.19, 494.12);
        context.bezierCurveTo(131.75, 496.36, 130.04, 497.95, 128.61, 499.59);
        context.bezierCurveTo(125.89, 502.43, 123.44, 505.65, 119.89, 507.53);
        context.lineTo(119.09, 507.2);
        context.bezierCurveTo(118.64, 506.97, 117.75, 506.51, 117.29, 506.28);
        context.bezierCurveTo(113.01, 504.48, 109.09, 501.91, 106.52, 497.95);
        context.bezierCurveTo(103.55, 493.21, 97.45, 492.16, 94.13, 487.81);
        context.bezierCurveTo(91.16, 484.2, 88.33, 480.44, 86.03, 476.36);
        context.bezierCurveTo(89.61, 478.75, 92.83, 481.61, 96.15, 484.35);
        context.bezierCurveTo(93.43, 480.01, 89.55, 476.61, 86.36, 472.64);
        context.bezierCurveTo(90.69, 474.15, 96.21, 474.75, 98.55, 479.27);
        context.bezierCurveTo(102.59, 485.73, 108.05, 491.44, 114.93, 494.89);
        context.bezierCurveTo(109.93, 488.59, 100.71, 484.61, 100.01, 475.76);
        context.bezierCurveTo(98.97, 474.19, 97.93, 472.61, 96.88, 471.08);
        context.closePath();
        context.fillStyle = fillColor380;
        context.fill();


    }

    function drawPath428() {
        context.beginPath();
        context.moveTo(443.17, 471.47);
        context.bezierCurveTo(444.93, 470.48, 445.19, 472.72, 444.59, 473.83);
        context.bezierCurveTo(443.24, 474.65, 441.8, 475.16, 440.25, 475.36);
        context.bezierCurveTo(440.88, 473.85, 441.53, 472.12, 443.17, 471.47);
        context.closePath();
        context.fillStyle = fillColor381;
        context.fill();


    }

    function drawPath429() {
        context.beginPath();
        context.moveTo(145.53, 472.88);
        context.bezierCurveTo(146.69, 473.16, 147.85, 473.47, 149.01, 473.79);
        context.bezierCurveTo(151.83, 475.75, 154.44, 478.01, 156.88, 480.43);
        context.bezierCurveTo(156.25, 481.08, 155, 482.39, 154.37, 483.04);
        context.bezierCurveTo(151.53, 480.97, 148.67, 478.97, 145.69, 477.11);
        context.bezierCurveTo(145.65, 475.69, 145.6, 474.28, 145.53, 472.88);
        context.closePath();
        context.fillStyle = fillColor382;
        context.fill();


    }

    function drawPath430() {
        context.beginPath();
        context.moveTo(440.25, 475.36);
        context.bezierCurveTo(441.8, 475.16, 443.24, 474.65, 444.59, 473.83);
        context.bezierCurveTo(445.01, 475.05, 445.65, 476.27, 445.84, 477.59);
        context.bezierCurveTo(443.56, 480.92, 440.52, 483.67, 438.4, 487.13);
        context.bezierCurveTo(437.11, 489.05, 435.59, 490.8, 433.87, 492.33);
        context.bezierCurveTo(431.37, 491.27, 428.88, 490.27, 426.45, 489.11);
        context.bezierCurveTo(426.27, 488.68, 425.91, 487.84, 425.73, 487.41);
        context.bezierCurveTo(430.17, 485.91, 434.35, 483.45, 436.52, 479.11);
        context.bezierCurveTo(434.35, 480.57, 432.47, 483.35, 429.48, 482.69);
        context.bezierCurveTo(431.59, 480.24, 433.88, 477.97, 436.05, 475.6);
        context.bezierCurveTo(437.44, 475.52, 438.85, 475.48, 440.25, 475.36);
        context.closePath();
        context.fillStyle = fillColor383;
        context.fill();


    }

    function drawPath431() {
        context.beginPath();
        context.moveTo(145.69, 477.11);
        context.bezierCurveTo(148.67, 478.97, 151.53, 480.97, 154.37, 483.04);
        context.bezierCurveTo(155, 482.39, 156.25, 481.08, 156.88, 480.43);
        context.bezierCurveTo(158.75, 482.24, 160.52, 484.16, 162.27, 486.11);
        context.bezierCurveTo(161.92, 486.63, 161.23, 487.65, 160.88, 488.17);
        context.bezierCurveTo(162.09, 491.35, 163.88, 494.27, 165.24, 497.37);
        context.bezierCurveTo(157.8, 493.27, 152.77, 486.07, 145.73, 481.39);
        context.bezierCurveTo(145.72, 480.32, 145.71, 478.17, 145.69, 477.11);
        context.closePath();
        context.fillStyle = fillColor384;
        context.fill();


    }

    function drawPath432() {
        context.beginPath();
        context.moveTo(867.57, 486.67);
        context.bezierCurveTo(869.84, 485.29, 872, 483.79, 874.2, 482.28);
        context.bezierCurveTo(874.68, 487.95, 870.36, 492.05, 866.03, 494.87);
        context.bezierCurveTo(866.96, 492.21, 867.44, 489.45, 867.57, 486.67);
        context.closePath();
        context.fillStyle = fillColor385;
        context.fill();


    }

    function drawPath433() {
        context.beginPath();
        context.moveTo(200.72, 485.03);
        context.bezierCurveTo(202.73, 485.33, 204.75, 485.65, 206.75, 486.01);
        context.bezierCurveTo(208.6, 486.36, 210.45, 486.75, 212.31, 487.13);
        context.bezierCurveTo(210.57, 491.84, 213.83, 496.76, 211.59, 501.44);
        context.bezierCurveTo(210.87, 504.47, 210.52, 507.59, 210.2, 510.69);
        context.bezierCurveTo(209.63, 510.63, 208.49, 510.48, 207.92, 510.41);
        context.bezierCurveTo(206.31, 507.29, 204.69, 504.15, 202.59, 501.32);
        context.bezierCurveTo(202.89, 499.93, 203.24, 498.57, 203.51, 497.19);
        context.bezierCurveTo(204.21, 493.81, 203.39, 490.45, 201.81, 487.47);
        context.bezierCurveTo(201.55, 486.85, 201, 485.64, 200.72, 485.03);
        context.closePath();
        context.fillStyle = fillColor386;
        context.fill();


    }

    function drawPath434() {
        context.beginPath();
        context.moveTo(338.95, 483.55);
        context.bezierCurveTo(340.83, 485.47, 341.32, 488.05, 341.68, 490.61);
        context.bezierCurveTo(347.41, 491.37, 353.29, 492.19, 359, 490.84);
        context.bezierCurveTo(365.4, 489.69, 371.23, 485.39, 377.96, 486.81);
        context.bezierCurveTo(376.09, 488.24, 374.23, 489.65, 372.23, 490.89);
        context.bezierCurveTo(361.73, 494.51, 351.03, 497.67, 339.85, 498.23);
        context.bezierCurveTo(339.2, 495.43, 338.55, 492.63, 338.05, 489.81);
        context.bezierCurveTo(338.32, 487.72, 338.61, 485.63, 338.95, 483.55);
        context.closePath();
        context.fillStyle = fillColor387;
        context.fill();


    }

    function drawPath435() {
        context.beginPath();
        context.moveTo(141.72, 484.92);
        context.bezierCurveTo(151.71, 489.81, 157.53, 499.8, 166.48, 506.07);
        context.bezierCurveTo(173.69, 512.04, 183.04, 515.12, 189.41, 522.09);
        context.bezierCurveTo(194.96, 529.17, 201.47, 535.39, 208.72, 540.71);
        context.bezierCurveTo(207.43, 543.53, 206.25, 546.41, 205.25, 549.35);
        context.bezierCurveTo(201.96, 548.19, 198.61, 546.77, 195.04, 547.24);
        context.bezierCurveTo(194.95, 547.16, 194.76, 547.01, 194.68, 546.93);
        context.bezierCurveTo(192.97, 544.03, 190.13, 542.39, 187, 541.44);
        context.bezierCurveTo(187.53, 541.04, 188.6, 540.24, 189.13, 539.84);
        context.bezierCurveTo(183.39, 532.59, 173.19, 533.25, 166.47, 527.45);
        context.bezierCurveTo(161.08, 523.27, 154.68, 520.72, 149.12, 516.8);
        context.bezierCurveTo(151.08, 521.08, 153.31, 525.37, 156.95, 528.51);
        context.bezierCurveTo(156.88, 529.17, 156.75, 530.52, 156.68, 531.19);
        context.bezierCurveTo(161.72, 533.47, 166.6, 536.08, 171.12, 539.27);
        context.bezierCurveTo(169.87, 539.59, 168.61, 539.91, 167.36, 540.23);
        context.bezierCurveTo(167.03, 540.8, 166.37, 541.96, 166.05, 542.53);
        context.bezierCurveTo(161.25, 540.6, 156.31, 539.03, 151.61, 536.87);
        context.bezierCurveTo(147.29, 534.91, 143.97, 530.81, 138.99, 530.48);
        context.bezierCurveTo(135.51, 523.99, 128.29, 521.48, 123.69, 516.08);
        context.lineTo(123.31, 515.64);
        context.lineTo(122.63, 514.04);
        context.bezierCurveTo(123.53, 515.52, 124.84, 516.29, 126.52, 516.37);
        context.bezierCurveTo(132.53, 515.85, 136.25, 510.33, 137.52, 504.91);
        context.bezierCurveTo(141.52, 499.05, 140.32, 491.56, 141.72, 484.92);
        context.closePath();
        context.fillStyle = fillColor388;
        context.fill();


    }

    function drawPath436() {
        context.beginPath();
        context.moveTo(196.99, 489.67);
        context.bezierCurveTo(197.52, 489.04, 198.57, 487.79, 199.11, 487.15);
        context.bezierCurveTo(199.79, 487.23, 201.13, 487.39, 201.81, 487.47);
        context.bezierCurveTo(203.39, 490.45, 204.21, 493.81, 203.51, 497.19);
        context.bezierCurveTo(201.35, 494.67, 199.15, 492.19, 196.99, 489.67);
        context.closePath();
        context.fillStyle = fillColor389;
        context.fill();


    }

    function drawPath437() {
        context.beginPath();
        context.moveTo(394.57, 487.61);
        context.bezierCurveTo(396.28, 488.49, 398.01, 489.33, 399.93, 489.61);
        context.bezierCurveTo(400.56, 489.75, 401.8, 490, 402.43, 490.12);
        context.bezierCurveTo(402.75, 490.67, 403.37, 491.75, 403.69, 492.29);
        context.bezierCurveTo(404.29, 493.15, 404.92, 493.97, 405.6, 494.8);
        context.bezierCurveTo(402.4, 496.59, 398.97, 498.32, 396.87, 501.44);
        context.bezierCurveTo(393.71, 505.84, 388.99, 508.64, 384.93, 512.08);
        context.bezierCurveTo(383.68, 510.13, 380.59, 508.68, 380.99, 506.12);
        context.bezierCurveTo(383.31, 503.44, 386.44, 501.6, 388.64, 498.81);
        context.bezierCurveTo(390.67, 496, 392.01, 492.79, 393.57, 489.71);
        context.bezierCurveTo(393.83, 489.19, 394.33, 488.15, 394.57, 487.61);
        context.closePath();
        context.fillStyle = fillColor390;
        context.fill();


    }

    function drawPath438() {
        context.beginPath();
        context.moveTo(0.01, 503.49);
        context.bezierCurveTo(-0.53, 497.99, 0.88, 490.92, 6.56, 488.53);
        context.bezierCurveTo(2.41, 492.24, -0.28, 497.73, 0.75, 503.37);
        context.bezierCurveTo(2.2, 508.97, 5.23, 514.09, 9.12, 518.35);
        context.bezierCurveTo(20.28, 532.85, 35.61, 543.29, 50.07, 554.21);
        context.bezierCurveTo(39.8, 549.19, 31.87, 540.76, 22.64, 534.21);
        context.bezierCurveTo(18.28, 531.44, 15.37, 527.12, 11.92, 523.4);
        context.bezierCurveTo(6.84, 517.57, 1.43, 511.36, 0.01, 503.49);
        context.closePath();
        context.fillStyle = fillColor103;
        context.fill();


    }

    function drawPath439() {
        context.beginPath();
        context.moveTo(6.56, 488.53);
        context.bezierCurveTo(13.59, 486.76, 21.32, 487.57, 26.81, 492.67);
        context.bezierCurveTo(35.19, 499.95, 46.51, 501.87, 56.28, 506.57);
        context.bezierCurveTo(56.53, 506.8, 57.04, 507.24, 57.29, 507.45);
        context.bezierCurveTo(63.69, 513.31, 71.17, 517.89, 79.13, 521.28);
        context.bezierCurveTo(85.73, 524.11, 93.03, 523.63, 99.99, 524.68);
        context.bezierCurveTo(107.59, 526.04, 115.17, 523.51, 122.8, 524.33);
        context.bezierCurveTo(126.71, 524.95, 130.84, 525.24, 134.36, 527.2);
        context.bezierCurveTo(137.76, 529.56, 140, 533.17, 143.23, 535.75);
        context.lineTo(144.13, 536.15);
        context.bezierCurveTo(152.17, 539.65, 161.21, 541.51, 167.92, 547.49);
        context.bezierCurveTo(170.61, 549.81, 173.55, 552.01, 177.15, 552.65);
        context.bezierCurveTo(177.55, 554.03, 177.93, 555.4, 178.33, 556.8);
        context.bezierCurveTo(175.57, 556.35, 172.59, 556.28, 170.25, 554.57);
        context.bezierCurveTo(164.29, 550.55, 160.72, 543.15, 153.07, 541.83);
        context.bezierCurveTo(159.2, 548.79, 165.52, 555.91, 173.57, 560.68);
        context.bezierCurveTo(173.75, 559.97, 174.09, 558.55, 174.27, 557.83);
        context.bezierCurveTo(177.45, 557.41, 180.63, 557.83, 183.65, 558.89);
        context.bezierCurveTo(183.31, 559.52, 182.59, 560.79, 182.24, 561.41);
        context.bezierCurveTo(182.33, 561.77, 182.52, 562.48, 182.63, 562.84);
        context.bezierCurveTo(184.35, 562.31, 186.08, 561.79, 187.83, 561.27);
        context.bezierCurveTo(187.76, 564.2, 187.71, 567.15, 187.6, 570.08);
        context.bezierCurveTo(183.51, 566.99, 180.11, 563.13, 176.89, 559.16);
        context.bezierCurveTo(176.87, 560.59, 176.85, 562, 176.83, 563.43);
        context.bezierCurveTo(165.81, 560.76, 158.08, 550.51, 146.32, 549.84);
        context.bezierCurveTo(150.45, 552.72, 155, 554.91, 159.49, 557.15);
        context.bezierCurveTo(159.09, 557.56, 158.28, 558.37, 157.87, 558.79);
        context.bezierCurveTo(163.96, 563.65, 169.77, 569.05, 176.95, 572.32);
        context.bezierCurveTo(176.23, 573.41, 175.51, 574.51, 174.8, 575.63);
        context.bezierCurveTo(171.77, 573.16, 168.96, 570.36, 165.51, 568.51);
        context.bezierCurveTo(163.71, 568.19, 161.89, 568.81, 160.08, 568.75);
        context.bezierCurveTo(158.33, 568.24, 157.25, 566.64, 155.99, 565.45);
        context.bezierCurveTo(148.61, 565.83, 142.07, 561.99, 135.09, 560.27);
        context.bezierCurveTo(122.25, 556.33, 108.87, 554.8, 95.76, 552);
        context.bezierCurveTo(78.6, 550.08, 63.12, 540.68, 45.65, 540.48);
        context.bezierCurveTo(46.16, 541.16, 46.64, 541.85, 47.12, 542.57);
        context.bezierCurveTo(47.21, 543.01, 47.43, 543.89, 47.53, 544.33);
        context.bezierCurveTo(56, 545.6, 64.04, 550.65, 72.77, 549.17);
        context.bezierCurveTo(75.36, 549.51, 77.92, 550.08, 80.39, 550.95);
        context.bezierCurveTo(79.83, 551.35, 78.73, 552.15, 78.17, 552.53);
        context.bezierCurveTo(77.87, 552.77, 77.27, 553.23, 76.96, 553.45);
        context.lineTo(76.11, 554.17);
        context.bezierCurveTo(78.12, 556.93, 80.36, 559.52, 82.91, 561.79);
        context.bezierCurveTo(78.05, 560.01, 73.36, 557.79, 68.4, 556.36);
        context.bezierCurveTo(66.59, 555.53, 64.95, 556.88, 63.35, 557.55);
        context.bezierCurveTo(48.87, 551.75, 36.83, 541.48, 25.11, 531.44);
        context.bezierCurveTo(19.84, 527, 15.85, 520.76, 9.12, 518.35);
        context.bezierCurveTo(5.23, 514.09, 2.2, 508.97, 0.75, 503.37);
        context.bezierCurveTo(-0.28, 497.73, 2.41, 492.24, 6.56, 488.53);
        context.closePath();
        context.moveTo(29.36, 514);
        context.bezierCurveTo(32.29, 518.52, 37.77, 519.85, 42.15, 522.49);
        context.bezierCurveTo(48.79, 526.36, 56.55, 528.08, 64.19, 528.32);
        context.bezierCurveTo(52.36, 524.12, 40.52, 519.84, 29.36, 514);
        context.closePath();
        context.moveTo(111.75, 542.21);
        context.bezierCurveTo(117.69, 544.09, 123.57, 546.35, 129.75, 547.36);
        context.bezierCurveTo(127.59, 545.51, 124.75, 544.93, 122.12, 544.15);
        context.bezierCurveTo(122.85, 543.73, 124.33, 542.91, 125.07, 542.49);
        context.bezierCurveTo(120.61, 542.61, 116.19, 542.01, 111.75, 542.21);
        context.closePath();
        context.fillStyle = fillColor391;
        context.fill();


    }

    function drawPath440() {
        context.beginPath();
        context.moveTo(320.25, 489.32);
        context.bezierCurveTo(320.68, 494.89, 320.52, 500.49, 320.92, 506.07);
        context.bezierCurveTo(320.89, 508.28, 322.37, 510, 323.68, 511.64);
        context.bezierCurveTo(323.32, 514.68, 323.01, 517.73, 322.67, 520.79);
        context.bezierCurveTo(321.52, 528.08, 323.03, 535.63, 320.6, 542.76);
        context.lineTo(319.96, 541.16);
        context.bezierCurveTo(319.81, 534.73, 319.65, 528.27, 318.48, 521.93);
        context.bezierCurveTo(318, 520.99, 318.49, 518.32, 316.33, 519.65);
        context.bezierCurveTo(316.53, 514.05, 314.13, 508.75, 314.17, 503.12);
        context.bezierCurveTo(314.8, 504.83, 315.55, 506.47, 316.29, 508.16);
        context.bezierCurveTo(319.72, 502.51, 318.89, 495.56, 320.25, 489.32);
        context.closePath();
        context.fillStyle = fillColor392;
        context.fill();


    }

    function drawPath441() {
        context.beginPath();
        context.moveTo(338.69, 505.4);
        context.bezierCurveTo(337.23, 500.32, 337.17, 495, 338.05, 489.81);
        context.bezierCurveTo(338.55, 492.63, 339.2, 495.43, 339.85, 498.23);
        context.bezierCurveTo(351.03, 497.67, 361.73, 494.51, 372.23, 490.89);
        context.bezierCurveTo(371.32, 492.25, 370.41, 493.65, 369.36, 494.92);
        context.bezierCurveTo(365.13, 494.79, 361.49, 497.17, 357.51, 498.16);
        context.bezierCurveTo(353.6, 499.15, 349.56, 499.44, 345.64, 500.32);
        context.bezierCurveTo(342.59, 500.79, 340.12, 502.69, 338.69, 505.4);
        context.closePath();
        context.fillStyle = fillColor393;
        context.fill();


    }

    function drawPath442() {
        context.beginPath();
        context.moveTo(432.89, 493.13);
        context.bezierCurveTo(436.72, 492.16, 440.64, 491.48, 444.4, 490.19);
        context.bezierCurveTo(441.57, 493.23, 439.63, 496.89, 437.44, 500.39);
        context.bezierCurveTo(436.85, 499.13, 436.27, 497.88, 435.68, 496.64);
        context.bezierCurveTo(432.56, 497.37, 429.48, 498.27, 426.36, 499);
        context.bezierCurveTo(421.51, 498.56, 416.77, 499.67, 412.85, 502.64);
        context.bezierCurveTo(412.25, 501.12, 411.67, 499.63, 411.09, 498.12);
        context.bezierCurveTo(409.24, 497.04, 407.37, 495.97, 405.6, 494.8);
        context.bezierCurveTo(404.92, 493.97, 404.29, 493.15, 403.69, 492.29);
        context.lineTo(404.81, 491.57);
        context.bezierCurveTo(408.24, 493.83, 411.49, 497.08, 415.91, 496.97);
        context.bezierCurveTo(420.41, 497.05, 425.24, 497.72, 429.47, 495.72);
        context.bezierCurveTo(430.6, 494.87, 431.73, 493.99, 432.89, 493.13);
        context.closePath();
        context.fillStyle = fillColor394;
        context.fill();


    }

    function drawPath443() {
        context.beginPath();
        context.moveTo(52.29, 491.4);
        context.bezierCurveTo(55.71, 492.79, 59.11, 494.2, 62.52, 495.56);
        context.bezierCurveTo(63.13, 496.6, 63.76, 497.65, 64.37, 498.72);
        context.bezierCurveTo(68.49, 501.04, 72.75, 503.12, 76.77, 505.6);
        context.bezierCurveTo(79.91, 507.44, 79.89, 512.4, 83.75, 513.33);
        context.bezierCurveTo(87.23, 514.59, 91, 514.37, 94.64, 514.61);
        context.bezierCurveTo(91.23, 516.71, 87.45, 518.07, 83.56, 518.95);
        context.bezierCurveTo(76.89, 516.57, 70.69, 512.99, 65.49, 508.15);
        context.bezierCurveTo(60.8, 502.8, 55.24, 498.05, 52.29, 491.4);
        context.closePath();
        context.fillStyle = fillColor395;
        context.fill();


    }

    function drawPath444() {
        context.beginPath();
        context.moveTo(180.61, 491.35);
        context.lineTo(183.01, 491.33);
        context.bezierCurveTo(185.49, 493.07, 187.92, 495.04, 189.35, 497.79);
        context.bezierCurveTo(189.15, 498.36, 188.75, 499.53, 188.55, 500.12);
        context.bezierCurveTo(187.4, 498.83, 186.27, 497.56, 185.11, 496.32);
        context.bezierCurveTo(183.67, 494.6, 182.21, 492.89, 180.61, 491.35);
        context.closePath();
        context.fillStyle = fillColor396;
        context.fill();


    }

    function drawPath445() {
        context.beginPath();
        context.moveTo(26.81, 492.67);
        context.bezierCurveTo(34.35, 496.73, 41.97, 501.8, 50.79, 502.2);
        context.bezierCurveTo(50.43, 501.56, 49.72, 500.27, 49.37, 499.63);
        context.bezierCurveTo(52.15, 501.43, 54.37, 503.88, 56.28, 506.57);
        context.bezierCurveTo(46.51, 501.87, 35.19, 499.95, 26.81, 492.67);
        context.closePath();
        context.fillStyle = fillColor56;
        context.fill();


    }

    function drawPath446() {
        context.beginPath();
        context.moveTo(357.51, 498.16);
        context.bezierCurveTo(361.49, 497.17, 365.13, 494.79, 369.36, 494.92);
        context.bezierCurveTo(365.63, 497.63, 361.93, 500.4, 358.76, 503.75);
        context.bezierCurveTo(358.99, 502.96, 359.45, 501.37, 359.68, 500.59);
        context.bezierCurveTo(358.2, 500.75, 356.72, 500.93, 355.25, 501.13);
        context.bezierCurveTo(352.96, 500.97, 350.51, 500.17, 348.29, 501.04);
        context.bezierCurveTo(345.65, 502.63, 343.43, 504.79, 340.88, 506.51);
        context.bezierCurveTo(342.39, 504.39, 344.03, 502.37, 345.64, 500.32);
        context.bezierCurveTo(349.56, 499.44, 353.6, 499.15, 357.51, 498.16);
        context.closePath();
        context.fillStyle = fillColor242;
        context.fill();


    }

    function drawPath447() {
        context.beginPath();
        context.moveTo(259, 494.8);
        context.bezierCurveTo(259.28, 495.52, 259.81, 496.93, 260.09, 497.65);
        context.bezierCurveTo(260.64, 503.25, 261.07, 509.03, 263.68, 514.15);
        context.bezierCurveTo(260.91, 516.91, 257.48, 519.15, 255.49, 522.59);
        context.bezierCurveTo(253.71, 527.11, 253.63, 532.11, 251.85, 536.64);
        context.bezierCurveTo(249.67, 542.31, 249.81, 548.47, 248.43, 554.32);
        context.bezierCurveTo(246.73, 561.44, 246.95, 568.79, 246.08, 576.03);
        context.bezierCurveTo(245.56, 573.97, 245.05, 571.93, 244.61, 569.88);
        context.bezierCurveTo(245.75, 563.56, 245.11, 557.08, 246.27, 550.77);
        context.bezierCurveTo(248.07, 537.83, 253.59, 525.77, 255.67, 512.88);
        context.bezierCurveTo(256.45, 506.77, 259.88, 501.08, 259, 494.8);
        context.closePath();
        context.fillStyle = fillColor397;
        context.fill();


    }

    function drawPath448() {
        context.beginPath();
        context.moveTo(188.16, 502.09);
        context.bezierCurveTo(185.97, 501.12, 182.52, 498.81, 185.11, 496.32);
        context.bezierCurveTo(186.27, 497.56, 187.4, 498.83, 188.55, 500.12);
        context.bezierCurveTo(188.4, 500.76, 188.27, 501.43, 188.16, 502.09);
        context.closePath();
        context.fillStyle = fillColor398;
        context.fill();


    }

    function drawPath449() {
        context.beginPath();
        context.moveTo(426.36, 499);
        context.bezierCurveTo(429.48, 498.27, 432.56, 497.37, 435.68, 496.64);
        context.bezierCurveTo(436.27, 497.88, 436.85, 499.13, 437.44, 500.39);
        context.bezierCurveTo(435.89, 502.69, 434.2, 504.91, 432.45, 507.09);
        context.bezierCurveTo(431.59, 507.19, 429.83, 507.37, 428.95, 507.47);
        context.bezierCurveTo(430.79, 505.23, 432.61, 502.97, 434.49, 500.76);
        context.bezierCurveTo(431.81, 500, 429.11, 499.36, 426.36, 499);
        context.closePath();
        context.fillStyle = fillColor399;
        context.fill();


    }

    function drawPath450() {
        context.beginPath();
        context.moveTo(189.35, 497.79);
        context.bezierCurveTo(194.79, 507.88, 203.68, 516.07, 206.93, 527.31);
        context.bezierCurveTo(202.84, 526.63, 198.37, 525.87, 195.65, 522.39);
        context.bezierCurveTo(191.71, 517.48, 185.37, 514.88, 182.37, 509.23);
        context.bezierCurveTo(184.08, 508.44, 185.79, 507.67, 187.49, 506.91);
        context.bezierCurveTo(187.71, 505.29, 187.92, 503.69, 188.16, 502.09);
        context.bezierCurveTo(188.27, 501.43, 188.4, 500.76, 188.55, 500.12);
        context.bezierCurveTo(188.75, 499.53, 189.15, 498.36, 189.35, 497.79);
        context.closePath();
        context.fillStyle = fillColor400;
        context.fill();


    }

    function drawPath451() {
        context.beginPath();
        context.moveTo(260.09, 497.65);
        context.bezierCurveTo(261.99, 502.08, 262.92, 506.87, 265.23, 511.13);
        context.bezierCurveTo(266.59, 513.84, 267.91, 516.59, 268.88, 519.47);
        context.bezierCurveTo(268.95, 519.69, 269.07, 520.15, 269.13, 520.36);
        context.bezierCurveTo(269.75, 524.08, 270.28, 527.81, 270.88, 531.55);
        context.bezierCurveTo(267.17, 526.33, 267.13, 519.53, 263.68, 514.15);
        context.bezierCurveTo(261.07, 509.03, 260.64, 503.25, 260.09, 497.65);
        context.closePath();
        context.fillStyle = fillColor401;
        context.fill();


    }

    function drawPath452() {
        context.beginPath();
        context.moveTo(411.09, 498.12);
        context.bezierCurveTo(411.67, 499.63, 412.25, 501.12, 412.85, 502.64);
        context.bezierCurveTo(416.77, 499.67, 421.51, 498.56, 426.36, 499);
        context.bezierCurveTo(429.11, 499.36, 431.81, 500, 434.49, 500.76);
        context.bezierCurveTo(432.61, 502.97, 430.79, 505.23, 428.95, 507.47);
        context.bezierCurveTo(423.43, 512.95, 417.47, 517.99, 411.51, 522.97);
        context.bezierCurveTo(411.88, 524.08, 412.25, 525.17, 412.64, 526.29);
        context.bezierCurveTo(406.45, 531.72, 399.41, 536.04, 393, 541.19);
        context.bezierCurveTo(388.79, 539.88, 384.84, 542.79, 380.6, 542.52);
        context.bezierCurveTo(385.21, 537.72, 390, 533.2, 395.72, 529.76);
        context.bezierCurveTo(399.12, 525.76, 406, 522.35, 404.4, 516.21);
        context.bezierCurveTo(406.31, 513.17, 408.71, 510.4, 410.03, 507.04);
        context.bezierCurveTo(410.76, 504.12, 410.83, 501.09, 411.09, 498.12);
        context.closePath();
        context.fillStyle = fillColor402;
        context.fill();


    }

    function drawPath453() {
        context.beginPath();
        context.moveTo(324.13, 498.72);
        context.bezierCurveTo(327.12, 503.89, 327.84, 509.91, 328.32, 515.76);
        context.bezierCurveTo(326.8, 514.35, 325.25, 512.96, 323.68, 511.64);
        context.bezierCurveTo(324.33, 507.36, 324.2, 503.03, 324.13, 498.72);
        context.closePath();
        context.fillStyle = fillColor403;
        context.fill();


    }

    function drawPath454() {
        context.beginPath();
        context.moveTo(119.89, 507.53);
        context.bezierCurveTo(123.44, 505.65, 125.89, 502.43, 128.61, 499.59);
        context.bezierCurveTo(129.27, 501.17, 129.89, 502.76, 130.32, 504.44);
        context.bezierCurveTo(130.72, 508.79, 129.27, 512.99, 126.52, 516.37);
        context.bezierCurveTo(124.84, 516.29, 123.53, 515.52, 122.63, 514.04);
        context.bezierCurveTo(122.35, 513.31, 121.8, 511.85, 121.52, 511.12);
        context.bezierCurveTo(121.35, 509.75, 120.8, 508.55, 119.89, 507.53);
        context.closePath();
        context.fillStyle = fillColor404;
        context.fill();


    }

    function drawPath455() {
        context.beginPath();
        context.moveTo(171.79, 500.29);
        context.bezierCurveTo(172.41, 500.85, 173.68, 501.97, 174.32, 502.53);
        context.bezierCurveTo(176.04, 505, 178.08, 507.23, 180.05, 509.51);
        context.lineTo(180.59, 510.69);
        context.bezierCurveTo(175.37, 510.11, 173.41, 504.49, 171.79, 500.29);
        context.closePath();
        context.fillStyle = fillColor405;
        context.fill();


    }

    function drawPath456() {
        context.beginPath();
        context.moveTo(174.09, 500.28);
        context.bezierCurveTo(177.15, 502.27, 180.71, 505.47, 180.05, 509.51);
        context.bezierCurveTo(178.08, 507.23, 176.04, 505, 174.32, 502.53);
        context.lineTo(174.09, 500.28);
        context.closePath();
        context.fillStyle = fillColor406;
        context.fill();


    }

    function drawPath457() {
        context.beginPath();
        context.moveTo(705.53, 503.87);
        context.bezierCurveTo(724.47, 501.25, 743.57, 499.89, 762.69, 500.28);
        context.bezierCurveTo(770.48, 500.73, 779.51, 498.64, 785.91, 504.32);
        context.bezierCurveTo(779.29, 504.27, 772.68, 504.28, 766.08, 504.33);
        context.bezierCurveTo(749.65, 503.92, 733.21, 504.76, 716.92, 506.81);
        context.bezierCurveTo(702.45, 508.08, 687.87, 510.15, 674.41, 515.85);
        context.bezierCurveTo(670.08, 517.19, 665.89, 518.91, 661.88, 521);
        context.bezierCurveTo(660.27, 521.72, 658.63, 522.39, 656.97, 523);
        context.bezierCurveTo(646.91, 525.47, 638.25, 531.59, 628.2, 534.01);
        context.bezierCurveTo(620.61, 536.61, 612.99, 539.57, 606.24, 543.95);
        context.bezierCurveTo(598.73, 549.43, 590.2, 553.6, 583.57, 560.21);
        context.bezierCurveTo(579.53, 565.09, 573.81, 568.15, 569.56, 572.84);
        context.bezierCurveTo(563.05, 579.72, 556.97, 587.32, 552.88, 595.92);
        context.bezierCurveTo(547.67, 602.08, 544.97, 609.73, 541.44, 616.88);
        context.bezierCurveTo(541.15, 605.44, 548.29, 595.83, 553.79, 586.4);
        context.bezierCurveTo(560.28, 575.11, 569.47, 565.65, 579.47, 557.4);
        context.bezierCurveTo(584.01, 552.99, 588.97, 549.03, 594.4, 545.75);
        context.bezierCurveTo(606.39, 536.49, 621.05, 532.01, 634.85, 526.29);
        context.bezierCurveTo(647.81, 520.76, 661.04, 515.88, 674.13, 510.65);
        context.bezierCurveTo(684.07, 506.33, 695.07, 506.12, 705.53, 503.87);
        context.closePath();
        context.fillStyle = fillColor407;
        context.fill();


    }

    function drawPath458() {
        context.beginPath();
        context.moveTo(210.2, 510.69);
        context.bezierCurveTo(210.52, 507.59, 210.87, 504.47, 211.59, 501.44);
        context.bezierCurveTo(212.24, 513.03, 220.87, 521.44, 228.6, 529.09);
        context.bezierCurveTo(228.17, 525.73, 228.01, 522.37, 228.08, 519);
        context.bezierCurveTo(228.32, 519.28, 228.81, 519.83, 229.07, 520.11);
        context.bezierCurveTo(230.09, 526.05, 231.73, 531.92, 235.01, 537.05);
        context.bezierCurveTo(234.93, 543.2, 237.44, 548.97, 238.31, 555.01);
        context.bezierCurveTo(237.01, 554.04, 235.73, 553.08, 234.44, 552.12);
        context.bezierCurveTo(232.52, 553.27, 230.61, 554.43, 228.69, 555.59);
        context.bezierCurveTo(226.76, 554.33, 224.83, 553.11, 222.81, 552.01);
        context.bezierCurveTo(222.43, 551.83, 221.67, 551.45, 221.28, 551.27);
        context.bezierCurveTo(223.69, 550.15, 226.28, 548.55, 226.23, 545.52);
        context.bezierCurveTo(225.72, 542.12, 224.08, 538.93, 224.19, 535.41);
        context.bezierCurveTo(222.04, 534.53, 219.6, 533.83, 218.23, 531.81);
        context.bezierCurveTo(213.36, 525.44, 211.91, 517.28, 207.92, 510.41);
        context.bezierCurveTo(208.49, 510.48, 209.63, 510.63, 210.2, 510.69);
        context.closePath();
        context.fillStyle = fillColor408;
        context.fill();


    }

    function drawPath459() {
        context.beginPath();
        context.moveTo(351.59, 503.29);
        context.bezierCurveTo(353.51, 502.72, 354.12, 503.35, 353.43, 505.16);
        context.bezierCurveTo(351.51, 505.71, 350.89, 505.08, 351.59, 503.29);
        context.closePath();
        context.fillStyle = fillColor242;
        context.fill();


    }

    function drawPath460() {
        context.beginPath();
        context.moveTo(57.29, 507.45);
        context.bezierCurveTo(59.59, 504.01, 62.87, 507.28, 65.49, 508.15);
        context.bezierCurveTo(70.69, 512.99, 76.89, 516.57, 83.56, 518.95);
        context.bezierCurveTo(90.79, 521.64, 98.21, 517.8, 105.61, 518.71);
        context.bezierCurveTo(103.87, 520.09, 102.07, 521.41, 100.27, 522.73);
        context.bezierCurveTo(95.27, 521.6, 90.12, 521.55, 85.05, 520.95);
        context.bezierCurveTo(77.2, 519.23, 69.8, 515.51, 63.63, 510.37);
        context.bezierCurveTo(61.84, 508.8, 59.6, 507.95, 57.29, 507.45);
        context.closePath();
        context.fillStyle = fillColor409;
        context.fill();


    }

    function drawPath461() {
        context.beginPath();
        context.moveTo(126.52, 516.37);
        context.bezierCurveTo(129.27, 512.99, 130.72, 508.79, 130.32, 504.44);
        context.bezierCurveTo(130.93, 505.11, 132.17, 506.47, 132.8, 507.15);
        context.bezierCurveTo(133, 507.39, 133.4, 507.85, 133.6, 508.09);
        context.bezierCurveTo(134.91, 507.03, 136.21, 505.97, 137.52, 504.91);
        context.bezierCurveTo(136.25, 510.33, 132.53, 515.85, 126.52, 516.37);
        context.closePath();
        context.fillStyle = fillColor410;
        context.fill();


    }

    function drawPath462() {
        context.save();
        context.globalAlpha = 0.32;
        context.beginPath();
        context.moveTo(345.33, 506.72);
        context.bezierCurveTo(345.08, 504.84, 345.88, 504, 347.71, 504.21);
        context.bezierCurveTo(347.93, 506.08, 347.15, 506.92, 345.33, 506.72);
        context.closePath();
        context.fillStyle = fillColor411;
        context.fill();
        context.restore();


    }

    function drawPath463() {
        context.beginPath();
        context.moveTo(716.92, 506.81);
        context.bezierCurveTo(733.21, 504.76, 749.65, 503.92, 766.08, 504.33);
        context.bezierCurveTo(766.69, 504.96, 767.93, 506.2, 768.56, 506.83);
        context.bezierCurveTo(773.8, 506.68, 779.33, 505.89, 784.27, 508.21);
        context.bezierCurveTo(782, 508.51, 779.76, 508.89, 777.53, 509.27);
        context.bezierCurveTo(783.2, 509.48, 788.72, 510.93, 793.72, 513.64);
        context.bezierCurveTo(791.8, 513.6, 789.89, 513.57, 788, 513.52);
        context.bezierCurveTo(781.85, 512.61, 775.68, 511.71, 769.45, 511.95);
        context.bezierCurveTo(761.45, 512, 753.45, 512.09, 745.45, 512.17);
        context.bezierCurveTo(732.39, 512.36, 719.65, 515.83, 706.61, 516.31);
        context.bezierCurveTo(701.52, 516.71, 696.6, 518.17, 691.73, 519.64);
        context.bezierCurveTo(689.04, 520.43, 686.33, 521.2, 683.64, 521.93);
        context.bezierCurveTo(671.03, 524.65, 659.61, 531.01, 647.01, 533.81);
        context.bezierCurveTo(650.81, 528.53, 657.84, 527.36, 662.99, 523.76);
        context.bezierCurveTo(660.97, 523.47, 658.97, 523.21, 656.97, 523);
        context.bezierCurveTo(658.63, 522.39, 660.27, 521.72, 661.88, 521);
        context.bezierCurveTo(665.81, 522.13, 671.25, 523.09, 673.45, 518.64);
        context.bezierCurveTo(675.25, 518.13, 677.08, 517.67, 678.92, 517.19);
        context.bezierCurveTo(677.79, 516.85, 675.53, 516.19, 674.41, 515.85);
        context.bezierCurveTo(687.87, 510.15, 702.45, 508.08, 716.92, 506.81);
        context.closePath();
        context.fillStyle = fillColor103;
        context.fill();


    }

    function drawPath464() {
        context.beginPath();
        context.moveTo(766.08, 504.33);
        context.bezierCurveTo(772.68, 504.28, 779.29, 504.27, 785.91, 504.32);
        context.bezierCurveTo(788.83, 505.53, 791.81, 506.57, 794.84, 507.55);
        context.bezierCurveTo(794.91, 508.65, 795.04, 510.89, 795.12, 512.01);
        context.bezierCurveTo(791.41, 510.97, 787.83, 509.61, 784.27, 508.21);
        context.bezierCurveTo(779.33, 505.89, 773.8, 506.68, 768.56, 506.83);
        context.bezierCurveTo(767.93, 506.2, 766.69, 504.96, 766.08, 504.33);
        context.closePath();
        context.fillStyle = fillColor412;
        context.fill();


    }

    function drawPath465() {
        context.beginPath();
        context.moveTo(57.29, 507.45);
        context.bezierCurveTo(59.6, 507.95, 61.84, 508.8, 63.63, 510.37);
        context.bezierCurveTo(69.8, 515.51, 77.2, 519.23, 85.05, 520.95);
        context.bezierCurveTo(90.12, 521.55, 95.27, 521.6, 100.27, 522.73);
        context.bezierCurveTo(104.03, 523.04, 107.81, 522.87, 111.59, 522.81);
        context.bezierCurveTo(115.33, 523.17, 119.07, 523.81, 122.8, 524.33);
        context.bezierCurveTo(115.17, 523.51, 107.59, 526.04, 99.99, 524.68);
        context.bezierCurveTo(93.03, 523.63, 85.73, 524.11, 79.13, 521.28);
        context.bezierCurveTo(71.17, 517.89, 63.69, 513.31, 57.29, 507.45);
        context.closePath();
        context.fillStyle = fillColor19;
        context.fill();


    }

    function drawPath466() {
        context.beginPath();
        context.moveTo(119.09, 507.2);
        context.lineTo(119.89, 507.53);
        context.bezierCurveTo(120.8, 508.55, 121.35, 509.75, 121.52, 511.12);
        context.lineTo(120.72, 511.69);
        context.bezierCurveTo(119.05, 510.6, 118.51, 509.11, 119.09, 507.2);
        context.closePath();
        context.fillStyle = fillColor413;
        context.fill();


    }

    function drawPath467() {
        context.beginPath();
        context.moveTo(223.57, 507.39);
        context.lineTo(225.47, 507.17);
        context.bezierCurveTo(227.59, 510.84, 229.01, 514.85, 230.29, 518.89);
        context.bezierCurveTo(229.73, 518.92, 228.63, 518.97, 228.08, 519);
        context.bezierCurveTo(227.03, 514.96, 225.27, 511.17, 223.57, 507.39);
        context.closePath();
        context.fillStyle = fillColor414;
        context.fill();


    }

    function drawPath468() {
        context.beginPath();
        context.moveTo(428.95, 507.47);
        context.bezierCurveTo(429.83, 507.37, 431.59, 507.19, 432.45, 507.09);
        context.bezierCurveTo(427.4, 514.89, 419.73, 520.45, 412.64, 526.29);
        context.bezierCurveTo(412.25, 525.17, 411.88, 524.08, 411.51, 522.97);
        context.bezierCurveTo(417.47, 517.99, 423.43, 512.95, 428.95, 507.47);
        context.closePath();
        context.fillStyle = fillColor242;
        context.fill();


    }

    function drawPath469() {
        context.beginPath();
        context.moveTo(265.05, 507.83);
        context.bezierCurveTo(267.53, 511.23, 267.89, 515.51, 268.88, 519.47);
        context.bezierCurveTo(267.91, 516.59, 266.59, 513.84, 265.23, 511.13);
        context.bezierCurveTo(265.19, 510.31, 265.09, 508.65, 265.05, 507.83);
        context.closePath();
        context.fillStyle = fillColor242;
        context.fill();


    }

    function drawPath470() {
        context.beginPath();
        context.moveTo(795.49, 507.81);
        context.bezierCurveTo(805.44, 507.05, 813.31, 513.92, 822.13, 517.25);
        context.bezierCurveTo(829.63, 520.99, 838.12, 523.68, 843.81, 530.15);
        context.bezierCurveTo(844.23, 530.68, 845.04, 531.75, 845.44, 532.28);
        context.bezierCurveTo(837.89, 531.89, 833.15, 524.75, 825.77, 523.53);
        context.bezierCurveTo(816.07, 519.29, 806.72, 513.39, 795.92, 512.52);
        context.bezierCurveTo(795.81, 511.35, 795.6, 508.99, 795.49, 507.81);
        context.closePath();
        context.fillStyle = fillColor415;
        context.fill();


    }

    function drawPath471() {
        context.beginPath();
        context.moveTo(106.6, 513);
        context.bezierCurveTo(110.33, 507.84, 116.08, 513.36, 120.59, 514.29);
        context.bezierCurveTo(120.63, 513.64, 120.69, 512.35, 120.72, 511.69);
        context.lineTo(121.52, 511.12);
        context.bezierCurveTo(121.8, 511.85, 122.35, 513.31, 122.63, 514.04);
        context.lineTo(123.31, 515.64);
        context.bezierCurveTo(117.93, 516, 112.6, 516.84, 107.25, 517.48);
        context.bezierCurveTo(106.92, 516, 106.73, 514.51, 106.6, 513);
        context.closePath();
        context.fillStyle = fillColor416;
        context.fill();


    }

    function drawPath472() {
        context.beginPath();
        context.moveTo(372.63, 512.87);
        context.bezierCurveTo(376.15, 511.65, 373.8, 516.57, 371.55, 516.2);
        context.bezierCurveTo(369.56, 515.8, 371.45, 513.16, 372.63, 512.87);
        context.closePath();
        context.fillStyle = fillColor417;
        context.fill();


    }

    function drawPath473() {
        context.beginPath();
        context.moveTo(706.61, 516.31);
        context.bezierCurveTo(719.65, 515.83, 732.39, 512.36, 745.45, 512.17);
        context.bezierCurveTo(753.45, 512.09, 761.45, 512, 769.45, 511.95);
        context.bezierCurveTo(769.07, 512.96, 768.31, 514.96, 767.93, 515.96);
        context.bezierCurveTo(763.05, 516.21, 758.21, 517.29, 753.32, 516.97);
        context.bezierCurveTo(734.28, 515.88, 715.52, 519.93, 696.87, 523.17);
        context.bezierCurveTo(695.15, 521.99, 693.43, 520.8, 691.73, 519.64);
        context.bezierCurveTo(696.6, 518.17, 701.52, 516.71, 706.61, 516.31);
        context.closePath();
        context.fillStyle = fillColor418;
        context.fill();


    }

    function drawPath474() {
        context.beginPath();
        context.moveTo(769.45, 511.95);
        context.bezierCurveTo(775.68, 511.71, 781.85, 512.61, 788, 513.52);
        context.bezierCurveTo(789.52, 515.23, 791.07, 516.92, 792.63, 518.61);
        context.bezierCurveTo(784.49, 516.97, 776.2, 516.24, 767.93, 515.96);
        context.bezierCurveTo(768.31, 514.96, 769.07, 512.96, 769.45, 511.95);
        context.closePath();
        context.fillStyle = fillColor419;
        context.fill();


    }

    function drawPath475() {
        context.beginPath();
        context.moveTo(29.36, 514);
        context.bezierCurveTo(40.52, 519.84, 52.36, 524.12, 64.19, 528.32);
        context.bezierCurveTo(56.55, 528.08, 48.79, 526.36, 42.15, 522.49);
        context.bezierCurveTo(37.77, 519.85, 32.29, 518.52, 29.36, 514);
        context.closePath();
        context.fillStyle = fillColor420;
        context.fill();


    }

    function drawPath476() {
        context.beginPath();
        context.moveTo(788, 513.52);
        context.bezierCurveTo(789.89, 513.57, 791.8, 513.6, 793.72, 513.64);
        context.bezierCurveTo(800.24, 515.33, 806.97, 516.44, 813.12, 519.32);
        context.bezierCurveTo(817.69, 521.41, 822.32, 523.45, 827.03, 525.28);
        context.bezierCurveTo(834.71, 530.37, 842.56, 535.21, 849.57, 541.25);
        context.bezierCurveTo(850.69, 543.37, 851.73, 545.53, 852.85, 547.67);
        context.bezierCurveTo(844.73, 542.21, 837.89, 534.76, 828.6, 531.13);
        context.bezierCurveTo(817.56, 524.52, 804.73, 522.4, 792.63, 518.61);
        context.bezierCurveTo(791.07, 516.92, 789.52, 515.23, 788, 513.52);
        context.closePath();
        context.fillStyle = fillColor421;
        context.fill();


    }

    function drawPath477() {
        context.beginPath();
        context.moveTo(402.13, 516.2);
        context.bezierCurveTo(402.71, 516.21, 403.84, 516.21, 404.4, 516.21);
        context.bezierCurveTo(406, 522.35, 399.12, 525.76, 395.72, 529.76);
        context.bezierCurveTo(390, 533.2, 385.21, 537.72, 380.6, 542.52);
        context.bezierCurveTo(376.73, 544.8, 372.41, 546.61, 369.35, 550);
        context.bezierCurveTo(366.23, 554.48, 363.96, 559.53, 362.37, 564.77);
        context.bezierCurveTo(352.35, 571.75, 347.48, 583.79, 346.44, 595.61);
        context.bezierCurveTo(345.67, 602.52, 345.36, 609.55, 343.16, 616.21);
        context.bezierCurveTo(338.89, 620.93, 332.87, 623.28, 327.89, 627.03);
        context.bezierCurveTo(321.79, 632.8, 314.49, 637.24, 309.29, 643.96);
        context.bezierCurveTo(308.83, 643.37, 307.91, 642.23, 307.45, 641.64);
        context.bezierCurveTo(308.08, 639.53, 308.71, 637.43, 309.33, 635.33);
        context.bezierCurveTo(306.23, 635.52, 302.37, 635.05, 300.85, 638.48);
        context.bezierCurveTo(300.05, 639.83, 299.28, 641.2, 298.55, 642.59);
        context.bezierCurveTo(297.83, 642.15, 296.39, 641.27, 295.67, 640.81);
        context.bezierCurveTo(295.63, 637.17, 295.39, 633.49, 294.29, 630);
        context.bezierCurveTo(292.04, 630.17, 289.8, 630.39, 287.56, 630.63);
        context.bezierCurveTo(288.04, 630.32, 289, 629.68, 289.49, 629.36);
        context.bezierCurveTo(289.76, 628.77, 290.29, 627.59, 290.55, 626.99);
        context.bezierCurveTo(294.17, 627.27, 297.84, 628.27, 299.73, 631.67);
        context.bezierCurveTo(300.65, 631.2, 301.57, 630.73, 302.51, 630.28);
        context.bezierCurveTo(302.4, 631.63, 302.29, 632.99, 302.19, 634.35);
        context.bezierCurveTo(306.56, 632.09, 308.37, 627.09, 312.53, 624.57);
        context.bezierCurveTo(314.28, 618.49, 316.92, 612.57, 321.56, 608.15);
        context.bezierCurveTo(321.52, 610.41, 321.79, 612.77, 321.04, 614.97);
        context.bezierCurveTo(318.32, 622.95, 314.32, 630.4, 311.29, 638.24);
        context.bezierCurveTo(315.23, 635.01, 320.09, 632.19, 322.04, 627.24);
        context.bezierCurveTo(323.57, 623.84, 325.75, 620.69, 326.39, 616.96);
        context.bezierCurveTo(326.91, 616.64, 327.96, 615.99, 328.49, 615.67);
        context.bezierCurveTo(328.25, 607.45, 329.01, 599.17, 331.88, 591.43);
        context.bezierCurveTo(332.87, 581.52, 338.68, 573.01, 344.87, 565.55);
        context.bezierCurveTo(348.35, 561.47, 350.69, 556.55, 354.28, 552.55);
        context.bezierCurveTo(356.93, 549.52, 359.45, 546.39, 361.76, 543.09);
        context.bezierCurveTo(362.61, 542.95, 363.48, 542.81, 364.36, 542.69);
        context.bezierCurveTo(367.71, 536.15, 370.69, 528.59, 377.47, 524.84);
        context.bezierCurveTo(383.16, 522.19, 389.6, 522.76, 395.68, 522.28);
        context.bezierCurveTo(399.04, 522, 400.97, 519.03, 402.13, 516.2);
        context.closePath();
        context.fillStyle = fillColor422;
        context.fill();


    }

    function drawPath478() {
        context.beginPath();
        context.moveTo(123.69, 516.08);
        context.bezierCurveTo(128.29, 521.48, 135.51, 523.99, 138.99, 530.48);
        context.bezierCurveTo(140.57, 532.48, 142.29, 534.37, 144.13, 536.15);
        context.lineTo(143.23, 535.75);
        context.bezierCurveTo(140, 533.17, 137.76, 529.56, 134.36, 527.2);
        context.bezierCurveTo(130.84, 525.24, 126.71, 524.95, 122.8, 524.33);
        context.bezierCurveTo(119.07, 523.81, 115.33, 523.17, 111.59, 522.81);
        context.bezierCurveTo(116.55, 522.55, 121.01, 520.39, 123.69, 516.08);
        context.closePath();
        context.fillStyle = fillColor423;
        context.fill();


    }

    function drawPath479() {
        context.beginPath();
        context.moveTo(149.12, 516.8);
        context.bezierCurveTo(154.68, 520.72, 161.08, 523.27, 166.47, 527.45);
        context.bezierCurveTo(173.19, 533.25, 183.39, 532.59, 189.13, 539.84);
        context.bezierCurveTo(188.6, 540.24, 187.53, 541.04, 187, 541.44);
        context.bezierCurveTo(190.13, 542.39, 192.97, 544.03, 194.68, 546.93);
        context.bezierCurveTo(189.71, 543.69, 183.96, 542, 178.08, 541.45);
        context.lineTo(178.52, 543.45);
        context.bezierCurveTo(177.64, 542.69, 176.77, 541.96, 175.89, 541.24);
        context.bezierCurveTo(176.89, 540.99, 178.91, 540.48, 179.92, 540.23);
        context.bezierCurveTo(171.93, 536.95, 164.81, 531.99, 156.95, 528.51);
        context.bezierCurveTo(153.31, 525.37, 151.08, 521.08, 149.12, 516.8);
        context.closePath();
        context.fillStyle = fillColor424;
        context.fill();


    }

    function drawPath480() {
        context.beginPath();
        context.moveTo(661.88, 521);
        context.bezierCurveTo(665.89, 518.91, 670.08, 517.19, 674.41, 515.85);
        context.bezierCurveTo(675.53, 516.19, 677.79, 516.85, 678.92, 517.19);
        context.bezierCurveTo(677.08, 517.67, 675.25, 518.13, 673.45, 518.64);
        context.bezierCurveTo(671.25, 523.09, 665.81, 522.13, 661.88, 521);
        context.closePath();
        context.fillStyle = fillColor425;
        context.fill();


    }

    function drawPath481() {
        context.beginPath();
        context.moveTo(9.12, 518.35);
        context.bezierCurveTo(15.85, 520.76, 19.84, 527, 25.11, 531.44);
        context.bezierCurveTo(36.83, 541.48, 48.87, 551.75, 63.35, 557.55);
        context.bezierCurveTo(82.88, 564.96, 102, 574.11, 122.71, 577.88);
        context.bezierCurveTo(133.92, 579.84, 144.85, 583.16, 156.13, 584.76);
        context.bezierCurveTo(161.36, 585.57, 166.67, 585.99, 171.81, 587.29);
        context.lineTo(171.99, 589.53);
        context.bezierCurveTo(168.33, 589.23, 164.67, 589.03, 161.01, 588.76);
        context.bezierCurveTo(158.15, 588.29, 155.29, 587.8, 152.47, 587.19);
        context.bezierCurveTo(139.65, 583.12, 126.23, 581.33, 112.96, 579.48);
        context.lineTo(112.77, 579.41);
        context.bezierCurveTo(107.69, 577.08, 102.32, 575.52, 96.89, 574.24);
        context.bezierCurveTo(94.11, 573.25, 91.35, 572.21, 88.6, 571.13);
        context.bezierCurveTo(84.11, 568.68, 79.37, 566.57, 74.27, 565.91);
        context.lineTo(73.89, 565.77);
        context.bezierCurveTo(67.57, 562.41, 61.17, 559.15, 54.41, 556.75);
        context.bezierCurveTo(52.95, 555.93, 51.49, 555.08, 50.07, 554.21);
        context.bezierCurveTo(35.61, 543.29, 20.28, 532.85, 9.12, 518.35);
        context.closePath();
        context.fillStyle = fillColor426;
        context.fill();


    }

    function drawPath482() {
        context.beginPath();
        context.moveTo(691.92, 525.36);
        context.bezierCurveTo(711.52, 521.8, 731.27, 517.83, 751.29, 518.17);
        context.bezierCurveTo(751.53, 518.47, 752, 519.05, 752.24, 519.35);
        context.bezierCurveTo(751.76, 520.49, 750.39, 520.57, 749.37, 520.91);
        context.bezierCurveTo(741.91, 522.77, 734.12, 522.03, 726.64, 523.69);
        context.bezierCurveTo(722.72, 524.6, 718.67, 523.88, 714.73, 524.45);
        context.bezierCurveTo(704.45, 527.07, 693.93, 528.75, 683.91, 532.28);
        context.bezierCurveTo(674.77, 533.99, 666.6, 538.59, 657.69, 541.03);
        context.bezierCurveTo(650.21, 543.27, 643.61, 547.6, 636.32, 550.33);
        context.bezierCurveTo(620.4, 557.11, 604.75, 564.92, 591.39, 576.07);
        context.bezierCurveTo(587.47, 579.15, 584.68, 583.73, 580.04, 585.83);
        context.bezierCurveTo(579.43, 586.05, 578.19, 586.49, 577.56, 586.72);
        context.bezierCurveTo(581.77, 579.01, 589.39, 574.23, 595.65, 568.37);
        context.bezierCurveTo(606.8, 560.13, 619.21, 553.76, 632.09, 548.65);
        context.bezierCurveTo(643.95, 542.69, 656.03, 537.01, 668.81, 533.35);
        context.bezierCurveTo(676.64, 531.04, 684.08, 527.57, 691.92, 525.36);
        context.closePath();
        context.fillStyle = fillColor427;
        context.fill();


    }

    function drawPath483() {
        context.beginPath();
        context.moveTo(754.72, 518.28);
        context.bezierCurveTo(770.51, 515.88, 786.84, 517.33, 801.99, 522.43);
        context.bezierCurveTo(811.64, 524.55, 820.93, 527.99, 829.53, 532.89);
        context.bezierCurveTo(833.13, 536.68, 840.59, 538.35, 840.73, 544.39);
        context.bezierCurveTo(835.8, 541.17, 830.88, 537.92, 825.79, 535);
        context.bezierCurveTo(818.85, 531.64, 811.52, 529.24, 804.21, 526.88);
        context.bezierCurveTo(793.25, 523.19, 781.6, 522.68, 770.25, 520.93);
        context.bezierCurveTo(765.11, 519.96, 760.05, 522.2, 754.91, 521.79);
        context.lineTo(754.6, 520.64);
        context.bezierCurveTo(754.63, 520.05, 754.69, 518.87, 754.72, 518.28);
        context.closePath();
        context.fillStyle = fillColor428;
        context.fill();


    }

    function drawPath484() {
        context.beginPath();
        context.moveTo(269.13, 520.36);
        context.bezierCurveTo(270.57, 522.53, 272.91, 524.39, 273.11, 527.16);
        context.bezierCurveTo(273.83, 535.29, 278.96, 542.07, 281.51, 549.67);
        context.bezierCurveTo(280.67, 549.28, 279.01, 548.49, 278.19, 548.09);
        context.lineTo(278.05, 547.43);
        context.bezierCurveTo(272.64, 544.63, 270.87, 538.49, 270.48, 532.84);
        context.bezierCurveTo(270.64, 532.61, 270.96, 532.15, 271.12, 531.92);
        context.lineTo(270.88, 531.55);
        context.bezierCurveTo(270.28, 527.81, 269.75, 524.08, 269.13, 520.36);
        context.closePath();
        context.fillStyle = fillColor429;
        context.fill();


    }

    function drawPath485() {
        context.beginPath();
        context.moveTo(324.27, 532.64);
        context.bezierCurveTo(324.05, 528.52, 324.37, 524.35, 326.16, 520.59);
        context.bezierCurveTo(327.01, 527, 327.15, 533.49, 326.64, 539.95);
        context.bezierCurveTo(323.64, 538.68, 324.55, 535.2, 324.27, 532.64);
        context.closePath();
        context.fillStyle = fillColor430;
        context.fill();


    }

    function drawPath486() {
        context.beginPath();
        context.moveTo(683.64, 521.93);
        context.bezierCurveTo(686.33, 521.2, 689.04, 520.43, 691.73, 519.64);
        context.bezierCurveTo(693.43, 520.8, 695.15, 521.99, 696.87, 523.17);
        context.bezierCurveTo(694.01, 523.72, 691.16, 524.2, 688.33, 524.8);
        context.bezierCurveTo(686.76, 523.84, 685.19, 522.88, 683.64, 521.93);
        context.closePath();
        context.fillStyle = fillColor431;
        context.fill();


    }

    function drawPath487() {
        context.beginPath();
        context.moveTo(647.01, 533.81);
        context.bezierCurveTo(659.61, 531.01, 671.03, 524.65, 683.64, 521.93);
        context.bezierCurveTo(685.19, 522.88, 686.76, 523.84, 688.33, 524.8);
        context.bezierCurveTo(667.55, 531.25, 646.64, 537.88, 627.27, 547.93);
        context.bezierCurveTo(619.27, 550.63, 612.03, 554.97, 604.44, 558.59);
        context.bezierCurveTo(598.28, 561.93, 592.93, 566.51, 587.29, 570.64);
        context.bezierCurveTo(580.2, 575.63, 574.49, 582.23, 567.73, 587.63);
        context.bezierCurveTo(567.44, 587.03, 566.88, 585.83, 566.59, 585.23);
        context.bezierCurveTo(571.55, 577.57, 579.01, 572.19, 585.72, 566.21);
        context.bezierCurveTo(592.67, 560.29, 601.23, 556.81, 608.49, 551.36);
        context.bezierCurveTo(620.04, 547.28, 630.92, 541.59, 642, 536.43);
        context.bezierCurveTo(643.67, 535.56, 645.35, 534.72, 647.01, 533.81);
        context.closePath();
        context.fillStyle = fillColor432;
        context.fill();


    }

    function drawPath488() {
        context.beginPath();
        context.moveTo(628.2, 534.01);
        context.bezierCurveTo(638.25, 531.59, 646.91, 525.47, 656.97, 523);
        context.bezierCurveTo(658.97, 523.21, 660.97, 523.47, 662.99, 523.76);
        context.bezierCurveTo(657.84, 527.36, 650.81, 528.53, 647.01, 533.81);
        context.bezierCurveTo(645.35, 534.72, 643.67, 535.56, 642, 536.43);
        context.bezierCurveTo(635.64, 534.73, 630.11, 538.84, 623.99, 539.51);
        context.bezierCurveTo(625.8, 538.49, 627.63, 537.52, 629.47, 536.56);
        context.bezierCurveTo(629.15, 535.92, 628.52, 534.65, 628.2, 534.01);
        context.closePath();
        context.fillStyle = fillColor433;
        context.fill();


    }

    function drawPath489() {
        context.beginPath();
        context.moveTo(825.77, 523.53);
        context.bezierCurveTo(833.15, 524.75, 837.89, 531.89, 845.44, 532.28);
        context.bezierCurveTo(850.41, 536.73, 855.63, 540.91, 860.72, 545.23);
        context.bezierCurveTo(865.32, 549.17, 869.13, 553.95, 873.81, 557.81);
        context.bezierCurveTo(873.36, 559.67, 872.92, 561.52, 872.49, 563.4);
        context.bezierCurveTo(865.33, 555.57, 858.44, 547.19, 849.57, 541.25);
        context.bezierCurveTo(842.56, 535.21, 834.71, 530.37, 827.03, 525.28);
        context.lineTo(825.77, 523.53);
        context.closePath();
        context.fillStyle = fillColor434;
        context.fill();


    }

    function drawPath490() {
        context.beginPath();
        context.moveTo(156.95, 528.51);
        context.bezierCurveTo(164.81, 531.99, 171.93, 536.95, 179.92, 540.23);
        context.bezierCurveTo(178.91, 540.48, 176.89, 540.99, 175.89, 541.24);
        context.bezierCurveTo(176.77, 541.96, 177.64, 542.69, 178.52, 543.45);
        context.bezierCurveTo(183.6, 548.05, 188.47, 552.88, 193.57, 557.47);
        context.bezierCurveTo(193.45, 558.56, 193.19, 560.73, 193.05, 561.83);
        context.bezierCurveTo(194.67, 569.27, 201.87, 572.92, 205.56, 579.09);
        context.bezierCurveTo(208.75, 584.31, 213.37, 588.28, 218.01, 592.15);
        context.bezierCurveTo(229.35, 605.09, 240.04, 618.88, 246.87, 634.84);
        context.bezierCurveTo(247.63, 634.8, 249.16, 634.72, 249.93, 634.68);
        context.bezierCurveTo(248.07, 636.28, 246.33, 638.01, 244.61, 639.76);
        context.bezierCurveTo(241.47, 639.56, 238.53, 638.28, 235.73, 636.92);
        context.bezierCurveTo(234.89, 636.37, 233.2, 635.28, 232.36, 634.72);
        context.bezierCurveTo(231.77, 634, 231.19, 633.28, 230.59, 632.59);
        context.bezierCurveTo(231.44, 632.63, 233.12, 632.71, 233.96, 632.75);
        context.lineTo(235.21, 632.83);
        context.bezierCurveTo(234.47, 627.13, 229.57, 623.68, 227.05, 618.87);
        context.bezierCurveTo(222.04, 610.09, 216.17, 601.85, 209.36, 594.39);
        context.bezierCurveTo(209.08, 594.53, 208.55, 594.83, 208.27, 594.97);
        context.bezierCurveTo(207.41, 595.47, 205.71, 596.45, 204.84, 596.96);
        context.bezierCurveTo(203.37, 595.57, 201.61, 594.57, 199.77, 593.79);
        context.bezierCurveTo(196.53, 592.37, 193.51, 590.51, 190.43, 588.77);
        context.bezierCurveTo(195.28, 594.49, 197.79, 601.65, 202.25, 607.63);
        context.bezierCurveTo(204.55, 612.84, 206.39, 618.4, 209.96, 622.93);
        context.bezierCurveTo(210.97, 623.11, 213.01, 623.47, 214.04, 623.64);
        context.bezierCurveTo(215.41, 623.64, 216.8, 623.6, 218.19, 623.57);
        context.bezierCurveTo(218.57, 624.47, 218.99, 625.35, 219.43, 626.24);
        context.bezierCurveTo(217.36, 625.91, 215.28, 625.57, 213.21, 625.25);
        context.bezierCurveTo(214.48, 626.39, 215.73, 627.51, 217, 628.67);
        context.bezierCurveTo(216.75, 629.79, 216.49, 630.92, 216.27, 632.05);
        context.lineTo(215.93, 633.79);
        context.bezierCurveTo(220.32, 638.75, 224.53, 643.87, 228.71, 649.01);
        context.lineTo(229.97, 647.8);
        context.bezierCurveTo(230.55, 647.88, 231.71, 648.03, 232.28, 648.09);
        context.bezierCurveTo(235.56, 654.48, 242.63, 656.76, 248.95, 658.93);
        context.bezierCurveTo(252.51, 660.11, 255.08, 662.76, 255.12, 666.68);
        context.bezierCurveTo(253.95, 666.64, 252.77, 666.61, 251.61, 666.59);
        context.bezierCurveTo(249.21, 671.4, 248.35, 676.85, 250, 682.04);
        context.bezierCurveTo(249.83, 682.11, 249.45, 682.21, 249.27, 682.28);
        context.bezierCurveTo(242.13, 677.76, 233.68, 676.47, 225.95, 673.44);
        context.bezierCurveTo(216.77, 668.03, 211.6, 658.31, 204.6, 650.64);
        context.bezierCurveTo(200.55, 646.43, 198.07, 641.08, 194.61, 636.43);
        context.bezierCurveTo(196.6, 649.88, 210.33, 656.63, 214.65, 668.91);
        context.bezierCurveTo(212.69, 666.84, 210.29, 665.35, 207.84, 663.99);
        context.bezierCurveTo(207.6, 663.76, 207.09, 663.33, 206.85, 663.12);
        context.bezierCurveTo(203.93, 659.72, 200.97, 656.37, 197.64, 653.37);
        context.bezierCurveTo(195.47, 650.25, 193.61, 646.91, 191.84, 643.53);
        context.bezierCurveTo(192.79, 640.48, 193.33, 637.17, 191.56, 634.29);
        context.bezierCurveTo(188.15, 627.99, 187.55, 620.21, 181.93, 615.23);
        context.bezierCurveTo(182.28, 614.77, 182.96, 613.85, 183.29, 613.4);
        context.bezierCurveTo(177.89, 609.6, 179.69, 602.73, 178.88, 597.13);
        context.bezierCurveTo(177.43, 597.75, 175.99, 598.37, 174.55, 599.01);
        context.bezierCurveTo(173.83, 596.96, 173.09, 594.91, 172.39, 592.87);
        context.bezierCurveTo(172.24, 590.51, 172.05, 588.15, 171.72, 585.81);
        context.lineTo(171.81, 587.29);
        context.bezierCurveTo(166.67, 585.99, 161.36, 585.57, 156.13, 584.76);
        context.bezierCurveTo(144.85, 583.16, 133.92, 579.84, 122.71, 577.88);
        context.bezierCurveTo(102, 574.11, 82.88, 564.96, 63.35, 557.55);
        context.bezierCurveTo(64.95, 556.88, 66.59, 555.53, 68.4, 556.36);
        context.bezierCurveTo(73.36, 557.79, 78.05, 560.01, 82.91, 561.79);
        context.bezierCurveTo(103.25, 570.95, 125.52, 573.95, 147.05, 579.01);
        context.bezierCurveTo(150.35, 579.67, 153.85, 580.35, 157.03, 578.8);
        context.bezierCurveTo(139.8, 575.41, 122.43, 572.61, 105.71, 567.16);
        context.bezierCurveTo(95.23, 565.28, 84.36, 561.47, 76.96, 553.45);
        context.bezierCurveTo(77.27, 553.23, 77.87, 552.77, 78.17, 552.53);
        context.bezierCurveTo(85.68, 555.29, 93.36, 557.8, 101.37, 558.48);
        context.bezierCurveTo(115.88, 559.55, 129.67, 564.51, 143.81, 567.53);
        context.bezierCurveTo(150.91, 568.96, 157.12, 573.08, 164.29, 574.19);
        context.bezierCurveTo(153.39, 566.53, 139.71, 565.64, 127.51, 561.12);
        context.bezierCurveTo(116.53, 557.19, 104.65, 557.96, 93.45, 555.09);
        context.bezierCurveTo(88.99, 554.05, 84.71, 552.44, 80.39, 550.95);
        context.bezierCurveTo(77.92, 550.08, 75.36, 549.51, 72.77, 549.17);
        context.bezierCurveTo(64.25, 546.83, 55.91, 543.79, 47.12, 542.57);
        context.bezierCurveTo(46.64, 541.85, 46.16, 541.16, 45.65, 540.48);
        context.bezierCurveTo(63.12, 540.68, 78.6, 550.08, 95.76, 552);
        context.bezierCurveTo(108.87, 554.8, 122.25, 556.33, 135.09, 560.27);
        context.bezierCurveTo(142.07, 561.99, 148.61, 565.83, 155.99, 565.45);
        context.bezierCurveTo(157.25, 566.64, 158.33, 568.24, 160.08, 568.75);
        context.bezierCurveTo(161.89, 568.81, 163.71, 568.19, 165.51, 568.51);
        context.bezierCurveTo(168.96, 570.36, 171.77, 573.16, 174.8, 575.63);
        context.bezierCurveTo(175.51, 574.51, 176.23, 573.41, 176.95, 572.32);
        context.bezierCurveTo(169.77, 569.05, 163.96, 563.65, 157.87, 558.79);
        context.bezierCurveTo(158.28, 558.37, 159.09, 557.56, 159.49, 557.15);
        context.bezierCurveTo(155, 554.91, 150.45, 552.72, 146.32, 549.84);
        context.bezierCurveTo(158.08, 550.51, 165.81, 560.76, 176.83, 563.43);
        context.bezierCurveTo(176.85, 562, 176.87, 560.59, 176.89, 559.16);
        context.bezierCurveTo(180.11, 563.13, 183.51, 566.99, 187.6, 570.08);
        context.bezierCurveTo(187.71, 567.15, 187.76, 564.2, 187.83, 561.27);
        context.bezierCurveTo(186.08, 561.79, 184.35, 562.31, 182.63, 562.84);
        context.bezierCurveTo(182.52, 562.48, 182.33, 561.77, 182.24, 561.41);
        context.bezierCurveTo(182.59, 560.79, 183.31, 559.52, 183.65, 558.89);
        context.bezierCurveTo(180.63, 557.83, 177.45, 557.41, 174.27, 557.83);
        context.bezierCurveTo(174.09, 558.55, 173.75, 559.97, 173.57, 560.68);
        context.bezierCurveTo(165.52, 555.91, 159.2, 548.79, 153.07, 541.83);
        context.bezierCurveTo(160.72, 543.15, 164.29, 550.55, 170.25, 554.57);
        context.bezierCurveTo(172.59, 556.28, 175.57, 556.35, 178.33, 556.8);
        context.bezierCurveTo(177.93, 555.4, 177.55, 554.03, 177.15, 552.65);
        context.bezierCurveTo(173.55, 552.01, 170.61, 549.81, 167.92, 547.49);
        context.bezierCurveTo(161.21, 541.51, 152.17, 539.65, 144.13, 536.15);
        context.bezierCurveTo(142.29, 534.37, 140.57, 532.48, 138.99, 530.48);
        context.bezierCurveTo(143.97, 530.81, 147.29, 534.91, 151.61, 536.87);
        context.bezierCurveTo(156.31, 539.03, 161.25, 540.6, 166.05, 542.53);
        context.bezierCurveTo(166.37, 541.96, 167.03, 540.8, 167.36, 540.23);
        context.bezierCurveTo(168.61, 539.91, 169.87, 539.59, 171.12, 539.27);
        context.bezierCurveTo(166.6, 536.08, 161.72, 533.47, 156.68, 531.19);
        context.bezierCurveTo(156.75, 530.52, 156.88, 529.17, 156.95, 528.51);
        context.closePath();
        context.moveTo(189.71, 580.68);
        context.bezierCurveTo(189.8, 581.91, 189.91, 583.16, 190, 584.41);
        context.bezierCurveTo(192.11, 586.33, 194.47, 587.99, 197.19, 588.96);
        context.bezierCurveTo(197.65, 584.28, 192.83, 582.85, 189.71, 580.68);
        context.closePath();
        context.fillStyle = fillColor435;
        context.fill();


    }

    function drawPath491() {
        context.beginPath();
        context.moveTo(843.81, 530.15);
        context.bezierCurveTo(850.51, 536.36, 857.88, 541.81, 864.52, 548.08);
        context.bezierCurveTo(871.72, 555.87, 880.77, 562.04, 886.17, 571.37);
        context.bezierCurveTo(891.99, 582.85, 896.97, 594.84, 899.17, 607.6);
        context.bezierCurveTo(903.47, 622.25, 902.16, 637.6, 902.37, 652.65);
        context.bezierCurveTo(902.32, 654.68, 902.16, 656.73, 901.89, 658.76);
        context.bezierCurveTo(901.21, 646.6, 902.43, 634.37, 901.04, 622.25);
        context.bezierCurveTo(900.28, 614.01, 897.84, 606.08, 896.27, 598);
        context.bezierCurveTo(894.92, 591.28, 891.43, 585.33, 888.96, 579.01);
        context.bezierCurveTo(886, 570.73, 880.28, 563.65, 873.81, 557.81);
        context.bezierCurveTo(869.13, 553.95, 865.32, 549.17, 860.72, 545.23);
        context.bezierCurveTo(855.63, 540.91, 850.41, 536.73, 845.44, 532.28);
        context.bezierCurveTo(845.04, 531.75, 844.23, 530.68, 843.81, 530.15);
        context.closePath();
        context.fillStyle = fillColor436;
        context.fill();


    }

    function drawPath492() {
        context.beginPath();
        context.moveTo(828.6, 531.13);
        context.bezierCurveTo(837.89, 534.76, 844.73, 542.21, 852.85, 547.67);
        context.bezierCurveTo(858.55, 554, 864.99, 559.69, 869.77, 566.8);
        context.bezierCurveTo(876.47, 576.71, 882.87, 587, 887.17, 598.2);
        context.bezierCurveTo(887.2, 599.53, 887.23, 602.21, 887.24, 603.55);
        context.bezierCurveTo(882.52, 594.99, 879.04, 585.8, 873.84, 577.51);
        context.bezierCurveTo(869.29, 567.97, 862.04, 560.13, 854.71, 552.68);
        context.bezierCurveTo(851.53, 549.6, 847.96, 545.83, 843.09, 546.6);
        context.bezierCurveTo(842.29, 545.87, 841.51, 545.12, 840.73, 544.39);
        context.bezierCurveTo(840.59, 538.35, 833.13, 536.68, 829.53, 532.89);
        context.lineTo(828.6, 531.13);
        context.closePath();
        context.fillStyle = fillColor437;
        context.fill();


    }

    function drawPath493() {
        context.beginPath();
        context.moveTo(269.43, 534.39);
        context.bezierCurveTo(269.69, 534, 270.23, 533.23, 270.48, 532.84);
        context.bezierCurveTo(270.87, 538.49, 272.64, 544.63, 278.05, 547.43);
        context.lineTo(278.19, 548.09);
        context.bezierCurveTo(278.43, 549.85, 278.53, 551.6, 278.73, 553.37);
        context.bezierCurveTo(277.65, 552.55, 276.56, 551.73, 275.45, 550.96);
        context.bezierCurveTo(271.09, 562.36, 268.8, 574.35, 265.37, 586.03);
        context.bezierCurveTo(264.33, 596.92, 264.61, 607.99, 265.21, 618.92);
        context.bezierCurveTo(263.59, 615.72, 264.03, 612.05, 263.99, 608.61);
        context.bezierCurveTo(264.09, 603.31, 263.83, 598.01, 263.77, 592.72);
        context.bezierCurveTo(263.64, 584.21, 265.45, 575.84, 265.76, 567.35);
        context.bezierCurveTo(265.97, 561.15, 267.91, 555.2, 268.59, 549.07);
        context.bezierCurveTo(269.29, 544.2, 269.13, 539.27, 269.43, 534.39);
        context.closePath();
        context.fillStyle = fillColor438;
        context.fill();


    }

    function drawPath494() {
        context.beginPath();
        context.moveTo(606.24, 543.95);
        context.bezierCurveTo(612.99, 539.57, 620.61, 536.61, 628.2, 534.01);
        context.bezierCurveTo(628.52, 534.65, 629.15, 535.92, 629.47, 536.56);
        context.bezierCurveTo(627.63, 537.52, 625.8, 538.49, 623.99, 539.51);
        context.bezierCurveTo(630.11, 538.84, 635.64, 534.73, 642, 536.43);
        context.bezierCurveTo(630.92, 541.59, 620.04, 547.28, 608.49, 551.36);
        context.bezierCurveTo(604.03, 552.52, 600.33, 555.37, 596.31, 557.51);
        context.bezierCurveTo(596.49, 556.6, 596.85, 554.77, 597.04, 553.87);
        context.bezierCurveTo(600.48, 551.11, 605.97, 549, 606.24, 543.95);
        context.closePath();
        context.fillStyle = fillColor439;
        context.fill();


    }

    function drawPath495() {
        context.beginPath();
        context.moveTo(316.37, 538.57);
        context.bezierCurveTo(318.17, 538.89, 318.47, 539.83, 317.25, 541.41);
        context.bezierCurveTo(315.44, 541.09, 315.15, 540.15, 316.37, 538.57);
        context.closePath();
        context.fillStyle = fillColor440;
        context.fill();


    }

    function drawPath496() {
        context.beginPath();
        context.moveTo(380.6, 542.52);
        context.bezierCurveTo(384.84, 542.79, 388.79, 539.88, 393, 541.19);
        context.bezierCurveTo(385.99, 546.33, 379.17, 551.73, 372.73, 557.59);
        context.bezierCurveTo(368.88, 559.36, 365.64, 562.11, 362.37, 564.77);
        context.bezierCurveTo(363.96, 559.53, 366.23, 554.48, 369.35, 550);
        context.bezierCurveTo(372.41, 546.61, 376.73, 544.8, 380.6, 542.52);
        context.closePath();
        context.fillStyle = fillColor441;
        context.fill();


    }

    function drawPath497() {
        context.beginPath();
        context.moveTo(111.75, 542.21);
        context.bezierCurveTo(116.19, 542.01, 120.61, 542.61, 125.07, 542.49);
        context.bezierCurveTo(124.33, 542.91, 122.85, 543.73, 122.12, 544.15);
        context.bezierCurveTo(124.75, 544.93, 127.59, 545.51, 129.75, 547.36);
        context.bezierCurveTo(123.57, 546.35, 117.69, 544.09, 111.75, 542.21);
        context.closePath();
        context.fillStyle = fillColor442;
        context.fill();


    }

    function drawPath498() {
        context.beginPath();
        context.moveTo(770.88, 546.52);
        context.bezierCurveTo(773.47, 543.43, 777.89, 543.81, 781.07, 541.63);
        context.bezierCurveTo(786.43, 541.03, 791.84, 541.2, 797.23, 541.44);
        context.bezierCurveTo(804.93, 542.77, 811.32, 547.6, 818.53, 550.29);
        context.bezierCurveTo(822.55, 553.87, 828.12, 555.76, 830.2, 561.15);
        context.bezierCurveTo(835.47, 563.01, 838.95, 567.56, 843.09, 571.08);
        context.bezierCurveTo(843.21, 571.92, 843.47, 573.61, 843.6, 574.45);
        context.bezierCurveTo(848.07, 574.28, 849.43, 579.29, 852.73, 581.39);
        context.bezierCurveTo(854.52, 582.32, 854.05, 584.45, 854.39, 586.13);
        context.bezierCurveTo(856.52, 587.73, 857.04, 590.16, 857.04, 592.72);
        context.bezierCurveTo(858.24, 595.31, 859.2, 598.01, 859.81, 600.81);
        context.bezierCurveTo(861.49, 603.04, 861.72, 605.77, 861.99, 608.45);
        context.bezierCurveTo(863.8, 613.65, 866.04, 618.99, 866.12, 624.56);
        context.bezierCurveTo(864.24, 628.35, 864.4, 632.57, 864.16, 636.68);
        context.bezierCurveTo(862.71, 640.65, 860.72, 644.45, 860.19, 648.73);
        context.bezierCurveTo(856.68, 651.51, 853.64, 655.13, 849.23, 656.51);
        context.bezierCurveTo(842.69, 658.56, 836.11, 661.19, 829.13, 660.83);
        context.bezierCurveTo(823.61, 660.04, 818.15, 658.81, 812.88, 657);
        context.bezierCurveTo(803.33, 651.88, 793.95, 646.27, 786.81, 637.96);
        context.bezierCurveTo(784.15, 635.27, 781.17, 632.87, 778.81, 629.91);
        context.bezierCurveTo(774.84, 626.73, 771.24, 623.19, 768.49, 618.91);
        context.bezierCurveTo(758.45, 608.73, 753.04, 594.8, 751.6, 580.75);
        context.bezierCurveTo(751.13, 575.17, 753.25, 569.89, 755, 564.72);
        context.bezierCurveTo(756.41, 561.53, 757.23, 557.73, 760.2, 555.57);
        context.bezierCurveTo(764.05, 552.92, 767.6, 549.85, 770.88, 546.52);
        context.closePath();
        context.moveTo(782.2, 606.85);
        context.bezierCurveTo(780.96, 608.24, 782.01, 610.19, 782.13, 611.79);
        context.bezierCurveTo(786.71, 611.67, 791.29, 611.57, 795.88, 611.8);
        context.bezierCurveTo(797.83, 613.49, 800.35, 614.21, 802.75, 615.04);
        context.bezierCurveTo(803.97, 615.79, 805.27, 616.44, 806.61, 617);
        context.bezierCurveTo(810.19, 616.84, 811.15, 612.57, 809.89, 609.83);
        context.bezierCurveTo(806.6, 608.65, 803.52, 606.96, 800.36, 605.51);
        context.bezierCurveTo(797.71, 605.03, 795.05, 604.53, 792.43, 604.08);
        context.bezierCurveTo(793.21, 602.67, 794.35, 601.65, 795.79, 601.01);
        context.bezierCurveTo(799.16, 598.79, 803.29, 597.77, 806.09, 594.68);
        context.bezierCurveTo(808.25, 593.91, 808.16, 589.99, 805.16, 590.96);
        context.bezierCurveTo(796.65, 594.72, 788.01, 599.35, 782.2, 606.85);
        context.closePath();
        context.fillStyle = fillColor261;
        context.fill();


    }

    function drawPath499() {
        context.beginPath();
        context.moveTo(849.57, 541.25);
        context.bezierCurveTo(858.44, 547.19, 865.33, 555.57, 872.49, 563.4);
        context.bezierCurveTo(876.04, 566.97, 879.07, 571.19, 879.49, 576.37);
        context.bezierCurveTo(879.47, 575.21, 879.41, 572.88, 879.39, 571.72);
        context.bezierCurveTo(885.24, 577.73, 887.05, 586.13, 889.89, 593.73);
        context.bezierCurveTo(892.49, 600.88, 896.16, 607.73, 897, 615.41);
        context.bezierCurveTo(895.72, 618.85, 896.64, 622.48, 897.05, 625.99);
        context.bezierCurveTo(896.56, 625.6, 895.59, 624.83, 895.09, 624.44);
        context.bezierCurveTo(893.92, 615.37, 892.27, 605.99, 887.17, 598.2);
        context.bezierCurveTo(882.87, 587, 876.47, 576.71, 869.77, 566.8);
        context.bezierCurveTo(864.99, 559.69, 858.55, 554, 852.85, 547.67);
        context.bezierCurveTo(851.73, 545.53, 850.69, 543.37, 849.57, 541.25);
        context.closePath();
        context.fillStyle = fillColor443;
        context.fill();


    }

    function drawPath500() {
        context.beginPath();
        context.moveTo(47.53, 544.33);
        context.bezierCurveTo(47.43, 543.89, 47.21, 543.01, 47.12, 542.57);
        context.bezierCurveTo(55.91, 543.79, 64.25, 546.83, 72.77, 549.17);
        context.bezierCurveTo(64.04, 550.65, 56, 545.6, 47.53, 544.33);
        context.closePath();
        context.fillStyle = fillColor444;
        context.fill();


    }

    function drawPath501() {
        context.beginPath();
        context.moveTo(583.57, 560.21);
        context.bezierCurveTo(590.2, 553.6, 598.73, 549.43, 606.24, 543.95);
        context.bezierCurveTo(605.97, 549, 600.48, 551.11, 597.04, 553.87);
        context.bezierCurveTo(596.85, 554.77, 596.49, 556.6, 596.31, 557.51);
        context.bezierCurveTo(586.35, 562.35, 578.44, 570.19, 570.75, 577.95);
        context.bezierCurveTo(567.99, 581.04, 564.67, 584.11, 564.39, 588.53);
        context.bezierCurveTo(561.31, 594.21, 556.73, 598.97, 554.03, 604.88);
        context.bezierCurveTo(552.13, 609.01, 549.68, 612.84, 547.36, 616.73);
        context.bezierCurveTo(546.97, 615.81, 546.2, 613.99, 545.81, 613.07);
        context.bezierCurveTo(547.15, 606.89, 551.88, 602.13, 552.88, 595.92);
        context.bezierCurveTo(556.97, 587.32, 563.05, 579.72, 569.56, 572.84);
        context.bezierCurveTo(573.81, 568.15, 579.53, 565.09, 583.57, 560.21);
        context.closePath();
        context.fillStyle = fillColor445;
        context.fill();


    }

    function drawPath502() {
        context.beginPath();
        context.moveTo(843.09, 546.6);
        context.bezierCurveTo(847.96, 545.83, 851.53, 549.6, 854.71, 552.68);
        context.bezierCurveTo(862.04, 560.13, 869.29, 567.97, 873.84, 577.51);
        context.bezierCurveTo(879.04, 585.8, 882.52, 594.99, 887.24, 603.55);
        context.bezierCurveTo(888.12, 606.48, 888.99, 609.43, 889.8, 612.39);
        context.bezierCurveTo(889.99, 615.12, 890.08, 617.88, 890.11, 620.63);
        context.bezierCurveTo(887.68, 631.4, 889.16, 642.59, 889.11, 653.53);
        context.bezierCurveTo(887.95, 663.13, 885.91, 672.63, 881.59, 681.36);
        context.bezierCurveTo(878.76, 690.88, 873.72, 699.48, 868.33, 707.75);
        context.bezierCurveTo(863.84, 713.37, 860.59, 720.16, 854.56, 724.39);
        context.bezierCurveTo(854.21, 724.51, 853.52, 724.76, 853.17, 724.88);
        context.bezierCurveTo(870.16, 707.17, 881.08, 684.36, 886.83, 660.68);
        context.bezierCurveTo(889.19, 649.28, 887.84, 637.6, 888.24, 626.07);
        context.bezierCurveTo(888.96, 615.81, 884.72, 606.12, 880.95, 596.83);
        context.bezierCurveTo(873.25, 577.01, 859.64, 559.83, 843.09, 546.6);
        context.closePath();
        context.fillStyle = fillColor242;
        context.fill();


    }

    function drawPath503() {
        context.beginPath();
        context.moveTo(207.65, 552.64);
        context.bezierCurveTo(209.03, 551.24, 210.33, 549.76, 211.91, 548.57);
        context.bezierCurveTo(215.17, 548.79, 218.31, 549.92, 221.28, 551.27);
        context.bezierCurveTo(221.67, 551.45, 222.43, 551.83, 222.81, 552.01);
        context.bezierCurveTo(221.81, 555.12, 220.88, 558.25, 220, 561.41);
        context.bezierCurveTo(217.25, 560.57, 214.51, 559.76, 211.76, 558.99);
        context.bezierCurveTo(209.73, 556.24, 206.89, 554.33, 203.72, 553.17);
        context.bezierCurveTo(204.69, 553.04, 206.67, 552.77, 207.65, 552.64);
        context.closePath();
        context.fillStyle = fillColor446;
        context.fill();


    }

    function drawPath504() {
        context.beginPath();
        context.moveTo(78.17, 552.53);
        context.bezierCurveTo(78.73, 552.15, 79.83, 551.35, 80.39, 550.95);
        context.bezierCurveTo(84.71, 552.44, 88.99, 554.05, 93.45, 555.09);
        context.bezierCurveTo(104.65, 557.96, 116.53, 557.19, 127.51, 561.12);
        context.bezierCurveTo(139.71, 565.64, 153.39, 566.53, 164.29, 574.19);
        context.bezierCurveTo(157.12, 573.08, 150.91, 568.96, 143.81, 567.53);
        context.bezierCurveTo(129.67, 564.51, 115.88, 559.55, 101.37, 558.48);
        context.bezierCurveTo(93.36, 557.8, 85.68, 555.29, 78.17, 552.53);
        context.closePath();
        context.fillStyle = fillColor447;
        context.fill();


    }

    function drawPath505() {
        context.beginPath();
        context.moveTo(596.31, 557.51);
        context.bezierCurveTo(600.33, 555.37, 604.03, 552.52, 608.49, 551.36);
        context.bezierCurveTo(601.23, 556.81, 592.67, 560.29, 585.72, 566.21);
        context.bezierCurveTo(579.01, 572.19, 571.55, 577.57, 566.59, 585.23);
        context.bezierCurveTo(566.04, 586.05, 564.95, 587.71, 564.39, 588.53);
        context.bezierCurveTo(564.67, 584.11, 567.99, 581.04, 570.75, 577.95);
        context.bezierCurveTo(578.44, 570.19, 586.35, 562.35, 596.31, 557.51);
        context.closePath();
        context.fillStyle = fillColor56;
        context.fill();


    }

    function drawPath506() {
        context.beginPath();
        context.moveTo(222.81, 552.01);
        context.bezierCurveTo(224.83, 553.11, 226.76, 554.33, 228.69, 555.59);
        context.bezierCurveTo(230.61, 554.43, 232.52, 553.27, 234.44, 552.12);
        context.bezierCurveTo(235.73, 553.08, 237.01, 554.04, 238.31, 555.01);
        context.bezierCurveTo(239.15, 558.95, 240.8, 562.63, 242.63, 566.19);
        context.bezierCurveTo(241.32, 570.15, 243.68, 573.79, 244.84, 577.43);
        context.bezierCurveTo(246.2, 581.01, 245.79, 584.91, 245.71, 588.65);
        context.bezierCurveTo(245.32, 596.83, 246.21, 604.99, 246.32, 613.17);
        context.bezierCurveTo(244.21, 608.39, 241.03, 604.2, 237.53, 600.35);
        context.bezierCurveTo(236.27, 598.71, 234.12, 596.92, 235.17, 594.59);
        context.bezierCurveTo(235.56, 597.39, 237.76, 598.04, 240.09, 598.67);
        context.bezierCurveTo(239.92, 597.68, 239.56, 595.68, 239.39, 594.69);
        context.bezierCurveTo(241.23, 595.33, 243.04, 595.99, 244.84, 596.79);
        context.bezierCurveTo(240.92, 589.21, 238.32, 581.09, 235.59, 573.05);
        context.bezierCurveTo(234.56, 569.52, 231.71, 567.09, 228.79, 565.09);
        context.bezierCurveTo(229.79, 568.55, 231.08, 571.91, 232.57, 575.19);
        context.lineTo(231.29, 575.72);
        context.bezierCurveTo(230.73, 575.37, 229.63, 574.68, 229.07, 574.32);
        context.bezierCurveTo(226.55, 571.45, 225.43, 566.85, 221.27, 565.93);
        context.bezierCurveTo(217.37, 564.76, 214.15, 562.23, 211.76, 558.99);
        context.bezierCurveTo(214.51, 559.76, 217.25, 560.57, 220, 561.41);
        context.bezierCurveTo(220.88, 558.25, 221.81, 555.12, 222.81, 552.01);
        context.closePath();
        context.fillStyle = fillColor448;
        context.fill();


    }

    function drawPath507() {
        context.beginPath();
        context.moveTo(76.11, 554.17);
        context.lineTo(76.96, 553.45);
        context.bezierCurveTo(84.36, 561.47, 95.23, 565.28, 105.71, 567.16);
        context.bezierCurveTo(122.43, 572.61, 139.8, 575.41, 157.03, 578.8);
        context.bezierCurveTo(153.85, 580.35, 150.35, 579.67, 147.05, 579.01);
        context.bezierCurveTo(125.52, 573.95, 103.25, 570.95, 82.91, 561.79);
        context.bezierCurveTo(80.36, 559.52, 78.12, 556.93, 76.11, 554.17);
        context.closePath();
        context.fillStyle = fillColor449;
        context.fill();


    }

    function drawPath508() {
        context.beginPath();
        context.moveTo(54.41, 556.75);
        context.bezierCurveTo(61.17, 559.15, 67.57, 562.41, 73.89, 565.77);
        context.bezierCurveTo(66.95, 563.83, 60.49, 560.6, 54.41, 556.75);
        context.closePath();
        context.fillStyle = fillColor344;
        context.fill();


    }

    function drawPath509() {
        context.beginPath();
        context.moveTo(193.57, 557.47);
        context.bezierCurveTo(200.31, 562.99, 208.91, 565.92, 214.67, 572.69);
        context.bezierCurveTo(214.01, 572.84, 212.68, 573.12, 212.03, 573.27);
        context.bezierCurveTo(215.43, 580.85, 222.09, 587.13, 229.87, 590.08);
        context.bezierCurveTo(231.73, 591.41, 234.03, 593.01, 235.17, 594.59);
        context.bezierCurveTo(234.12, 596.92, 236.27, 598.71, 237.53, 600.35);
        context.bezierCurveTo(241.03, 604.2, 244.21, 608.39, 246.32, 613.17);
        context.bezierCurveTo(248.84, 619.76, 251.65, 627.03, 258.28, 630.52);
        context.bezierCurveTo(257.84, 630.73, 256.95, 631.19, 256.51, 631.4);
        context.bezierCurveTo(254.36, 631.08, 252.21, 630.79, 250.07, 630.48);
        context.bezierCurveTo(247.88, 624.65, 245.09, 619.05, 241.28, 614.12);
        context.bezierCurveTo(236.35, 607.56, 232.48, 599.55, 224.89, 595.61);
        context.bezierCurveTo(224.93, 594.75, 224.99, 593.88, 225.04, 593.01);
        context.bezierCurveTo(222.65, 590.43, 220.05, 588.05, 217.2, 586);
        context.bezierCurveTo(213.76, 584.03, 213.11, 579.79, 210.56, 577.01);
        context.bezierCurveTo(208.76, 574.61, 206.12, 573.12, 203.67, 571.51);
        context.bezierCurveTo(200.85, 569.91, 201.45, 565.45, 198.33, 564.2);
        context.bezierCurveTo(196.64, 563.28, 194.83, 562.57, 193.05, 561.83);
        context.bezierCurveTo(193.19, 560.73, 193.45, 558.56, 193.57, 557.47);
        context.closePath();
        context.fillStyle = fillColor450;
        context.fill();


    }

    function drawPath510() {
        context.beginPath();
        context.moveTo(362.37, 564.77);
        context.bezierCurveTo(365.64, 562.11, 368.88, 559.36, 372.73, 557.59);
        context.bezierCurveTo(368.43, 562.63, 364.16, 567.73, 360.61, 573.35);
        context.bezierCurveTo(355.8, 579.59, 350.85, 585.84, 347.47, 593);
        context.lineTo(349.96, 591.97);
        context.bezierCurveTo(349.47, 592.29, 348.45, 592.93, 347.95, 593.24);
        context.bezierCurveTo(347.57, 593.84, 346.81, 595.03, 346.44, 595.61);
        context.bezierCurveTo(347.48, 583.79, 352.35, 571.75, 362.37, 564.77);
        context.closePath();
        context.fillStyle = fillColor451;
        context.fill();


    }

    function drawPath511() {
        context.beginPath();
        context.moveTo(520.93, 560.33);
        context.bezierCurveTo(522.8, 558.49, 526.31, 558.29, 527.77, 560.69);
        context.bezierCurveTo(529.63, 563.25, 527.76, 566.25, 526.41, 568.56);
        context.bezierCurveTo(525.95, 572.49, 522.44, 574.73, 520.11, 577.56);
        context.bezierCurveTo(516.48, 578.04, 512.8, 575.16, 513.59, 571.31);
        context.bezierCurveTo(513.24, 566.33, 517.76, 563.35, 520.93, 560.33);
        context.closePath();
        context.fillStyle = fillColor452;
        context.fill();


    }

    function drawPath512() {
        context.beginPath();
        context.moveTo(193.05, 561.83);
        context.bezierCurveTo(194.83, 562.57, 196.64, 563.28, 198.33, 564.2);
        context.bezierCurveTo(201.45, 565.45, 200.85, 569.91, 203.67, 571.51);
        context.bezierCurveTo(206.12, 573.12, 208.76, 574.61, 210.56, 577.01);
        context.bezierCurveTo(213.11, 579.79, 213.76, 584.03, 217.2, 586);
        context.bezierCurveTo(220.05, 588.05, 222.65, 590.43, 225.04, 593.01);
        context.bezierCurveTo(224.99, 593.88, 224.93, 594.75, 224.89, 595.61);
        context.bezierCurveTo(232.48, 599.55, 236.35, 607.56, 241.28, 614.12);
        context.bezierCurveTo(245.09, 619.05, 247.88, 624.65, 250.07, 630.48);
        context.bezierCurveTo(252.21, 630.79, 254.36, 631.08, 256.51, 631.4);
        context.bezierCurveTo(254.32, 632.51, 252.13, 633.6, 249.93, 634.68);
        context.bezierCurveTo(249.16, 634.72, 247.63, 634.8, 246.87, 634.84);
        context.bezierCurveTo(240.04, 618.88, 229.35, 605.09, 218.01, 592.15);
        context.bezierCurveTo(213.37, 588.28, 208.75, 584.31, 205.56, 579.09);
        context.bezierCurveTo(201.87, 572.92, 194.67, 569.27, 193.05, 561.83);
        context.closePath();
        context.fillStyle = fillColor453;
        context.fill();


    }

    function drawPath513() {
        context.beginPath();
        context.moveTo(74.27, 565.91);
        context.bezierCurveTo(79.37, 566.57, 84.11, 568.68, 88.6, 571.13);
        context.bezierCurveTo(83.8, 569.45, 78.97, 567.83, 74.27, 565.91);
        context.closePath();
        context.fillStyle = fillColor344;
        context.fill();


    }

    function drawPath514() {
        context.beginPath();
        context.moveTo(228.79, 565.09);
        context.bezierCurveTo(231.71, 567.09, 234.56, 569.52, 235.59, 573.05);
        context.bezierCurveTo(238.32, 581.09, 240.92, 589.21, 244.84, 596.79);
        context.bezierCurveTo(243.04, 595.99, 241.23, 595.33, 239.39, 594.69);
        context.bezierCurveTo(236.95, 588.52, 234.01, 582.56, 230.77, 576.77);
        context.lineTo(231.29, 575.72);
        context.lineTo(232.57, 575.19);
        context.bezierCurveTo(231.08, 571.91, 229.79, 568.55, 228.79, 565.09);
        context.closePath();
        context.fillStyle = fillColor454;
        context.fill();


    }

    function drawPath515() {
        context.beginPath();
        context.moveTo(630.4, 578.96);
        context.bezierCurveTo(634.51, 575, 640.21, 573.59, 645.55, 572.08);
        context.bezierCurveTo(651.95, 570.44, 657.97, 573.71, 664.05, 575.17);
        context.bezierCurveTo(668.71, 576.25, 671.43, 580.43, 674.49, 583.69);
        context.bezierCurveTo(678.57, 588.04, 680.16, 593.95, 681.91, 599.49);
        context.bezierCurveTo(682.87, 602.53, 682.91, 605.99, 680.93, 608.67);
        context.bezierCurveTo(681.05, 611.08, 681.89, 613.35, 682.89, 615.53);
        context.bezierCurveTo(682.33, 616.83, 681.8, 618.12, 681.27, 619.43);
        context.bezierCurveTo(680.75, 623.83, 678.68, 627.89, 678.64, 632.37);
        context.bezierCurveTo(675.28, 637.41, 672.83, 642.97, 670.71, 648.64);
        context.bezierCurveTo(667.76, 654.07, 663.25, 658.67, 661.51, 664.75);
        context.bezierCurveTo(659.45, 665.41, 657.41, 666.09, 655.37, 666.79);
        context.bezierCurveTo(654.75, 668.76, 654.31, 670.8, 653.47, 672.71);
        context.bezierCurveTo(651.31, 674.87, 647.87, 675.47, 646.37, 678.36);
        context.bezierCurveTo(645.04, 678.99, 643.71, 679.57, 642.4, 680.21);
        context.bezierCurveTo(640.12, 684.51, 636.21, 687.63, 632.68, 690.87);
        context.bezierCurveTo(630.95, 692.68, 628.39, 692.29, 626.15, 692.47);
        context.bezierCurveTo(630.8, 698.23, 635.67, 704.08, 638.17, 711.17);
        context.bezierCurveTo(639.76, 715.64, 643.51, 720.2, 641.13, 725.07);
        context.bezierCurveTo(642.51, 726.81, 644.63, 728.31, 644.68, 730.76);
        context.bezierCurveTo(645.01, 736.88, 645.73, 742.96, 646.27, 749.05);
        context.bezierCurveTo(646.29, 749.45, 646.33, 750.27, 646.36, 750.67);
        context.bezierCurveTo(645.17, 750.76, 642.77, 750.95, 641.57, 751.04);
        context.bezierCurveTo(643.04, 751.4, 644.52, 751.77, 646.01, 752.13);
        context.bezierCurveTo(645.88, 752.75, 645.63, 753.95, 645.51, 754.56);
        context.lineTo(644.51, 756.64);
        context.bezierCurveTo(643.65, 758.32, 642.77, 760, 641.97, 761.72);
        context.bezierCurveTo(638.19, 761.95, 636.64, 757.95, 634.2, 755.8);
        context.bezierCurveTo(637.13, 743.51, 631.69, 731.47, 629.07, 719.63);
        context.bezierCurveTo(626.21, 708.97, 616.36, 702.63, 611.95, 692.88);
        context.bezierCurveTo(610.75, 690.79, 607.61, 691.11, 606.09, 689.28);
        context.bezierCurveTo(601.63, 683.8, 594.88, 681.01, 588.8, 677.75);
        context.bezierCurveTo(582.69, 674.37, 576.37, 671.4, 570.76, 667.2);
        context.bezierCurveTo(570.24, 666.68, 569.21, 665.63, 568.69, 665.09);
        context.bezierCurveTo(569.67, 662.8, 570.64, 660.52, 571.65, 658.24);
        context.bezierCurveTo(579.56, 657.71, 586.72, 661.29, 594.29, 662.81);
        context.bezierCurveTo(594.11, 657.4, 593.48, 651.91, 594.83, 646.59);
        context.bezierCurveTo(596.61, 639.32, 596.61, 631.56, 599.88, 624.71);
        context.bezierCurveTo(603.56, 616.85, 606.61, 608.71, 611.35, 601.39);
        context.bezierCurveTo(615.71, 592.41, 623.32, 585.75, 630.4, 578.96);
        context.closePath();
        context.moveTo(633.84, 621.52);
        context.bezierCurveTo(632.79, 622.61, 631.76, 623.73, 630.73, 624.84);
        context.bezierCurveTo(632.21, 625.68, 633.79, 625.97, 635.47, 625.72);
        context.bezierCurveTo(640.79, 624.96, 645.88, 627.97, 651.2, 626.85);
        context.bezierCurveTo(651.35, 627.99, 651.52, 629.15, 651.71, 630.31);
        context.bezierCurveTo(644.08, 634.11, 636.93, 638.96, 630.57, 644.61);
        context.bezierCurveTo(631.37, 646.32, 631.64, 650.51, 634.6, 649.36);
        context.bezierCurveTo(636.93, 649.39, 637.43, 646.55, 639.24, 645.57);
        context.bezierCurveTo(646.13, 641.21, 653.71, 637.83, 659.99, 632.55);
        context.bezierCurveTo(660.79, 632.28, 662.37, 631.77, 663.17, 631.52);
        context.bezierCurveTo(663.01, 629.51, 662.57, 627.57, 661.89, 625.71);
        context.bezierCurveTo(658.11, 624.71, 654.6, 622.92, 650.87, 621.81);
        context.bezierCurveTo(645.24, 620.84, 639.48, 620.63, 633.84, 621.52);
        context.closePath();
        context.fillStyle = fillColor261;
        context.fill();


    }

    function drawPath516() {
        context.beginPath();
        context.moveTo(212.03, 573.27);
        context.bezierCurveTo(212.68, 573.12, 214.01, 572.84, 214.67, 572.69);
        context.bezierCurveTo(216.84, 574.29, 220.71, 574.67, 221.09, 577.84);
        context.bezierCurveTo(221.85, 583.16, 226.52, 586.35, 229.87, 590.08);
        context.bezierCurveTo(222.09, 587.13, 215.43, 580.85, 212.03, 573.27);
        context.closePath();
        context.fillStyle = fillColor455;
        context.fill();


    }

    function drawPath517() {
        context.beginPath();
        context.moveTo(96.89, 574.24);
        context.bezierCurveTo(102.32, 575.52, 107.69, 577.08, 112.77, 579.41);
        context.bezierCurveTo(107.19, 578.71, 102.11, 576.2, 96.89, 574.24);
        context.closePath();
        context.fillStyle = fillColor344;
        context.fill();


    }

    function drawPath518() {
        context.save();
        context.globalAlpha = 0.57;
        context.beginPath();
        context.moveTo(229.07, 574.32);
        context.bezierCurveTo(229.63, 574.68, 230.73, 575.37, 231.29, 575.72);
        context.lineTo(230.77, 576.77);
        context.bezierCurveTo(230.35, 576.16, 229.49, 574.93, 229.07, 574.32);
        context.closePath();
        context.fillStyle = fillColor456;
        context.fill();
        context.restore();


    }

    function drawPath519() {
        context.beginPath();
        context.moveTo(112.96, 579.48);
        context.bezierCurveTo(126.23, 581.33, 139.65, 583.12, 152.47, 587.19);
        context.bezierCurveTo(139.35, 584.39, 126.03, 582.48, 112.96, 579.48);
        context.closePath();
        context.fillStyle = fillColor242;
        context.fill();


    }

    function drawPath520() {
        context.beginPath();
        context.moveTo(189.71, 580.68);
        context.bezierCurveTo(192.83, 582.85, 197.65, 584.28, 197.19, 588.96);
        context.bezierCurveTo(194.47, 587.99, 192.11, 586.33, 190, 584.41);
        context.bezierCurveTo(189.91, 583.16, 189.8, 581.91, 189.71, 580.68);
        context.closePath();
        context.fillStyle = fillColor457;
        context.fill();


    }

    function drawPath521() {
        context.beginPath();
        context.moveTo(504.75, 583.31);
        context.bezierCurveTo(508.2, 580.28, 513.17, 579.61, 516.63, 583.04);
        context.bezierCurveTo(516.85, 587.01, 517.81, 592.69, 513.31, 594.76);
        context.bezierCurveTo(506.87, 595.44, 504.44, 588.55, 504.75, 583.31);
        context.closePath();
        context.fillStyle = fillColor458;
        context.fill();


    }

    function drawPath522() {
        context.beginPath();
        context.moveTo(171.72, 585.81);
        context.bezierCurveTo(172.05, 588.15, 172.24, 590.51, 172.39, 592.87);
        context.bezierCurveTo(172.17, 594.57, 171.99, 596.31, 171.81, 598.04);
        context.bezierCurveTo(171.48, 596.31, 171.25, 594.57, 171.04, 592.84);
        context.bezierCurveTo(168.24, 590.36, 164.6, 589.41, 161.01, 588.76);
        context.bezierCurveTo(164.67, 589.03, 168.33, 589.23, 171.99, 589.53);
        context.lineTo(171.81, 587.29);
        context.lineTo(171.72, 585.81);
        context.closePath();
        context.fillStyle = fillColor56;
        context.fill();


    }

    function drawPath523() {
        context.beginPath();
        context.moveTo(564.39, 588.53);
        context.bezierCurveTo(564.95, 587.71, 566.04, 586.05, 566.59, 585.23);
        context.bezierCurveTo(566.88, 585.83, 567.44, 587.03, 567.73, 587.63);
        context.bezierCurveTo(563.56, 591, 561.43, 596.03, 558.35, 600.29);
        context.bezierCurveTo(553.44, 606.97, 550.83, 614.96, 546.33, 621.89);
        context.bezierCurveTo(546.65, 620.16, 547, 618.44, 547.36, 616.73);
        context.bezierCurveTo(549.68, 612.84, 552.13, 609.01, 554.03, 604.88);
        context.bezierCurveTo(556.73, 598.97, 561.31, 594.21, 564.39, 588.53);
        context.closePath();
        context.fillStyle = fillColor91;
        context.fill();


    }

    function drawPath524() {
        context.beginPath();
        context.moveTo(577.56, 586.72);
        context.bezierCurveTo(578.19, 586.49, 579.43, 586.05, 580.04, 585.83);
        context.bezierCurveTo(579.32, 588.75, 577.04, 590.77, 575.2, 593.01);
        context.bezierCurveTo(572, 596.72, 569.93, 601.23, 567.11, 605.2);
        context.bezierCurveTo(563.21, 610.39, 561.96, 617.04, 557.84, 622.09);
        context.bezierCurveTo(557.84, 619.89, 557.75, 617.61, 558.97, 615.69);
        context.bezierCurveTo(562, 610.2, 564.09, 604.17, 567.99, 599.2);
        context.bezierCurveTo(570.96, 594.92, 573.19, 589.77, 577.56, 586.72);
        context.closePath();
        context.fillStyle = fillColor335;
        context.fill();


    }

    function drawPath525() {
        context.beginPath();
        context.moveTo(190.43, 588.77);
        context.bezierCurveTo(193.51, 590.51, 196.53, 592.37, 199.77, 593.79);
        context.bezierCurveTo(204.85, 603.57, 210.19, 613.29, 214.04, 623.64);
        context.bezierCurveTo(213.01, 623.47, 210.97, 623.11, 209.96, 622.93);
        context.bezierCurveTo(206.39, 618.4, 204.55, 612.84, 202.25, 607.63);
        context.bezierCurveTo(197.79, 601.65, 195.28, 594.49, 190.43, 588.77);
        context.closePath();
        context.fillStyle = fillColor459;
        context.fill();


    }

    function drawPath526() {
        context.beginPath();
        context.moveTo(309.72, 588.97);
        context.bezierCurveTo(310.89, 587.83, 313.83, 589.27, 312.83, 590.93);
        context.bezierCurveTo(311.63, 592.01, 308.73, 590.61, 309.72, 588.97);
        context.closePath();
        context.fillStyle = fillColor460;
        context.fill();


    }

    function drawPath527() {
        context.beginPath();
        context.moveTo(408.07, 593.11);
        context.bezierCurveTo(414.72, 592.49, 421.25, 590.75, 427.97, 590.89);
        context.bezierCurveTo(446.05, 590.69, 464.6, 591.63, 481.67, 598.16);
        context.bezierCurveTo(481.84, 600.69, 482.17, 603.27, 483.16, 605.65);
        context.bezierCurveTo(487.01, 607.84, 489.28, 602.97, 490.6, 600.19);
        context.bezierCurveTo(495.51, 601.09, 500.25, 602.8, 504.56, 605.33);
        context.bezierCurveTo(505.04, 603.16, 505.07, 600.8, 506.16, 598.83);
        context.bezierCurveTo(508.17, 596.85, 511.76, 594.45, 514.37, 596.77);
        context.bezierCurveTo(519.41, 599.69, 514.8, 605.57, 515.65, 609.93);
        context.bezierCurveTo(524.88, 614.67, 534.31, 619.55, 541.68, 627.01);
        context.bezierCurveTo(545.63, 631.13, 551.41, 633.07, 554.89, 637.67);
        context.bezierCurveTo(559.64, 645.27, 568.11, 649.73, 571.65, 658.24);
        context.bezierCurveTo(570.64, 660.52, 569.67, 662.8, 568.69, 665.09);
        context.bezierCurveTo(569.21, 665.63, 570.24, 666.68, 570.76, 667.2);
        context.bezierCurveTo(576.37, 671.4, 582.69, 674.37, 588.8, 677.75);
        context.bezierCurveTo(589.57, 683.41, 592.87, 688.32, 595.45, 693.31);
        context.bezierCurveTo(602.71, 703.35, 608.81, 714.53, 611.83, 726.61);
        context.bezierCurveTo(615.83, 733.33, 619.36, 740.69, 619.93, 748.6);
        context.bezierCurveTo(621.16, 751.73, 623.4, 754.43, 624.31, 757.72);
        context.bezierCurveTo(625.45, 761.89, 624.11, 766.48, 626.16, 770.44);
        context.bezierCurveTo(628.24, 774.59, 629.08, 779.16, 629.23, 783.77);
        context.bezierCurveTo(621.67, 783.93, 614.09, 784, 606.53, 784.33);
        context.bezierCurveTo(607.32, 784.07, 608.89, 783.55, 609.68, 783.28);
        context.bezierCurveTo(606.51, 771.37, 604.57, 759.03, 599.51, 747.71);
        context.bezierCurveTo(592.16, 727.49, 581.11, 708.91, 570.01, 690.57);
        context.bezierCurveTo(563.51, 680.45, 556.01, 671.01, 547.97, 662.08);
        context.bezierCurveTo(536.47, 648.39, 521.8, 637.45, 505.75, 629.65);
        context.bezierCurveTo(498.33, 625.92, 491, 621.51, 482.64, 620.4);
        context.bezierCurveTo(475.85, 619.33, 469.45, 616.6, 462.65, 615.67);
        context.bezierCurveTo(445.45, 613.63, 427.95, 612, 410.75, 615.03);
        context.bezierCurveTo(396.79, 615.69, 383.41, 620.41, 370.91, 626.4);
        context.bezierCurveTo(365.4, 629.19, 359.04, 630.67, 354.49, 635.07);
        context.bezierCurveTo(350.03, 638.69, 344.49, 640.65, 339.25, 642.87);
        context.bezierCurveTo(335.77, 649.47, 328.56, 652.47, 323.96, 658.09);
        context.bezierCurveTo(320.91, 661.71, 316.79, 664.16, 313.44, 667.45);
        context.bezierCurveTo(309.79, 674.84, 306.31, 682.35, 302.11, 689.45);
        context.bezierCurveTo(300.29, 692.43, 295.96, 694, 296.03, 697.88);
        context.bezierCurveTo(295.77, 699.93, 295.72, 702.04, 295.28, 704.09);
        context.bezierCurveTo(293.73, 707.23, 290.84, 709.69, 290.19, 713.24);
        context.bezierCurveTo(288.4, 721.48, 287.88, 729.96, 285.55, 738.08);
        context.bezierCurveTo(281.75, 752.84, 281.45, 768.23, 282.41, 783.33);
        context.bezierCurveTo(284.12, 788.97, 285.96, 794.56, 286.88, 800.4);
        context.bezierCurveTo(290.47, 808.48, 292.88, 817.05, 296.93, 824.95);
        context.bezierCurveTo(298.13, 827.09, 296.45, 830.07, 294.16, 830.63);
        context.bezierCurveTo(285.91, 833.96, 277.57, 828.84, 269.31, 828.24);
        context.bezierCurveTo(259.55, 827.44, 249.79, 826.53, 240.04, 825.71);
        context.bezierCurveTo(224.83, 826.05, 209.31, 828.08, 195.47, 834.73);
        context.bezierCurveTo(188.05, 839.39, 180.73, 844.19, 173.2, 848.64);
        context.bezierCurveTo(169.87, 851.04, 167.59, 854.61, 164.2, 856.99);
        context.bezierCurveTo(156.35, 863.39, 151, 872.13, 144.2, 879.52);
        context.bezierCurveTo(139.44, 884.37, 138.91, 891.61, 134.76, 896.85);
        context.bezierCurveTo(129.96, 902.69, 128.05, 910.21, 123.6, 916.28);
        context.bezierCurveTo(120.77, 919.76, 121.59, 924.41, 120.79, 928.55);
        context.bezierCurveTo(119.93, 930.64, 118.41, 932.36, 117.15, 934.23);
        context.bezierCurveTo(118.12, 938.63, 117.37, 943.01, 116.61, 947.37);
        context.bezierCurveTo(116.47, 953.73, 117.17, 960.08, 116.84, 966.45);
        context.bezierCurveTo(116.59, 971.97, 118.85, 977.09, 119.96, 982.39);
        context.bezierCurveTo(121.04, 986.96, 118.17, 991.68, 120.4, 996.13);
        context.bezierCurveTo(122.89, 1002.49, 125.09, 1008.95, 126.56, 1015.6);
        context.bezierCurveTo(130.6, 1020.29, 128.99, 1026.59, 129.99, 1032.19);
        context.bezierCurveTo(131.83, 1033.88, 134.28, 1034.77, 136.27, 1036.32);
        context.bezierCurveTo(138.01, 1039.63, 137.64, 1043.64, 138.84, 1047.17);
        context.bezierCurveTo(140.07, 1049.36, 142.52, 1050.55, 143.85, 1052.68);
        context.bezierCurveTo(145.52, 1055.99, 146.07, 1059.87, 148.47, 1062.81);
        context.bezierCurveTo(150.91, 1065.77, 153.33, 1068.77, 155.6, 1071.91);
        context.bezierCurveTo(160.05, 1077.99, 166.81, 1082.16, 170.29, 1089);
        context.bezierCurveTo(171.27, 1091.08, 173.08, 1092.48, 175.04, 1093.61);
        context.bezierCurveTo(180.55, 1096.77, 184.76, 1101.64, 189.97, 1105.23);
        context.bezierCurveTo(194.73, 1108.47, 197.92, 1113.85, 203.6, 1115.69);
        context.bezierCurveTo(211.65, 1118.53, 218.01, 1125.2, 226.71, 1126.31);
        context.bezierCurveTo(229.36, 1126.73, 231.79, 1127.92, 234.16, 1129.13);
        context.bezierCurveTo(238.85, 1131.59, 244.32, 1131.23, 249.37, 1132.32);
        context.bezierCurveTo(258.96, 1133.67, 267.69, 1138.39, 277.35, 1139.43);
        context.bezierCurveTo(298.03, 1141.56, 318.49, 1147.91, 339.45, 1145.51);
        context.bezierCurveTo(358.21, 1145.53, 376.75, 1142.32, 395.43, 1141.39);
        context.bezierCurveTo(410.95, 1138.29, 426.72, 1136.65, 442.24, 1133.51);
        context.bezierCurveTo(452.67, 1132.21, 463.16, 1131.12, 473.36, 1128.48);
        context.bezierCurveTo(481.25, 1126.32, 489.47, 1125.85, 497.35, 1123.64);
        context.bezierCurveTo(503.6, 1121.93, 510.23, 1122.84, 516.43, 1120.91);
        context.bezierCurveTo(521.69, 1119.37, 527.15, 1118.61, 532.52, 1117.56);
        context.bezierCurveTo(538.19, 1116.25, 543.8, 1118.4, 549.21, 1119.84);
        context.bezierCurveTo(552.32, 1120.45, 553.89, 1123.51, 556.41, 1125.11);
        context.bezierCurveTo(558.35, 1125.8, 560.39, 1126.19, 562.4, 1126.68);
        context.bezierCurveTo(562.84, 1127.87, 563.25, 1129.09, 563.67, 1130.33);
        context.bezierCurveTo(563.12, 1132.73, 562.88, 1136.04, 560, 1136.8);
        context.bezierCurveTo(551.48, 1139.91, 542.16, 1137.25, 533.49, 1139.63);
        context.bezierCurveTo(526.87, 1141.6, 519.81, 1140.75, 513.21, 1142.79);
        context.bezierCurveTo(500.89, 1145.47, 488.47, 1147.69, 476.09, 1150.09);
        context.bezierCurveTo(455.88, 1155.05, 435.13, 1157.04, 414.64, 1160.31);
        context.bezierCurveTo(408.99, 1160.99, 403.21, 1160.87, 397.72, 1162.51);
        context.bezierCurveTo(385.39, 1165.75, 372.56, 1164.63, 360.05, 1166.52);
        context.bezierCurveTo(341.87, 1166.87, 323.53, 1167.85, 305.44, 1165.41);
        context.bezierCurveTo(287.28, 1164, 269.53, 1159.59, 251.83, 1155.48);
        context.bezierCurveTo(237.88, 1151.17, 223.13, 1149.31, 209.96, 1142.75);
        context.bezierCurveTo(199.64, 1138.59, 190.95, 1131.59, 181.75, 1125.53);
        context.bezierCurveTo(167.63, 1114.49, 154.24, 1102.32, 142.97, 1088.33);
        context.bezierCurveTo(132.2, 1074.73, 124.05, 1059.23, 117.59, 1043.16);
        context.bezierCurveTo(113.28, 1034.13, 109.96, 1024.69, 106.92, 1015.19);
        context.bezierCurveTo(105.24, 1009.77, 106.43, 1003.93, 104.68, 998.55);
        context.bezierCurveTo(103.33, 994.24, 101.45, 990.13, 100.21, 985.81);
        context.bezierCurveTo(93.8, 965.03, 94.2, 942.01, 102.4, 921.77);
        context.bezierCurveTo(105.68, 914.37, 105.76, 905.83, 110.43, 899.03);
        context.bezierCurveTo(114.76, 890.92, 119.85, 883.23, 123.71, 874.88);
        context.bezierCurveTo(128.33, 866.17, 134.52, 858.41, 140.77, 850.83);
        context.bezierCurveTo(147.93, 842.35, 156.77, 835.57, 165.24, 828.51);
        context.bezierCurveTo(175.83, 820.39, 187.61, 813.84, 200.15, 809.27);
        context.bezierCurveTo(204.75, 807.91, 209.68, 808.44, 214.24, 806.92);
        context.bezierCurveTo(225.53, 803.19, 237.68, 803.67, 249.4, 804.33);
        context.bezierCurveTo(256.92, 804.64, 263.99, 807.59, 271.48, 808.16);
        context.bezierCurveTo(269.25, 801.71, 266.31, 795.45, 265.15, 788.69);
        context.bezierCurveTo(261.12, 768.31, 263.53, 747.27, 268.84, 727.36);
        context.bezierCurveTo(270.64, 714.59, 275.31, 702.59, 279.28, 690.41);
        context.bezierCurveTo(282.4, 682.84, 287.21, 676.12, 290.44, 668.61);
        context.bezierCurveTo(295.33, 665, 296.12, 658.51, 300.63, 654.6);
        context.bezierCurveTo(303.85, 651.33, 306.43, 647.52, 309.29, 643.96);
        context.bezierCurveTo(314.49, 637.24, 321.79, 632.8, 327.89, 627.03);
        context.bezierCurveTo(332.87, 623.28, 338.89, 620.93, 343.16, 616.21);
        context.bezierCurveTo(346.47, 616, 349.64, 614.88, 352.4, 613.05);
        context.bezierCurveTo(360.49, 607.88, 369.47, 604.33, 378.21, 600.47);
        context.bezierCurveTo(387.92, 597.19, 397.73, 593.59, 408.07, 593.11);
        context.closePath();
        context.fillStyle = fillColor461;
        context.fill();


    }

    function drawPath528() {
        context.beginPath();
        context.moveTo(782.2, 606.85);
        context.bezierCurveTo(788.01, 599.35, 796.65, 594.72, 805.16, 590.96);
        context.bezierCurveTo(808.16, 589.99, 808.25, 593.91, 806.09, 594.68);
        context.bezierCurveTo(803.29, 597.77, 799.16, 598.79, 795.79, 601.01);
        context.bezierCurveTo(794.35, 601.65, 793.21, 602.67, 792.43, 604.08);
        context.bezierCurveTo(795.05, 604.53, 797.71, 605.03, 800.36, 605.51);
        context.bezierCurveTo(803.52, 606.96, 806.6, 608.65, 809.89, 609.83);
        context.bezierCurveTo(811.15, 612.57, 810.19, 616.84, 806.61, 617);
        context.bezierCurveTo(805.27, 616.44, 803.97, 615.79, 802.75, 615.04);
        context.bezierCurveTo(800.35, 614.21, 797.83, 613.49, 795.88, 611.8);
        context.bezierCurveTo(791.29, 611.57, 786.71, 611.67, 782.13, 611.79);
        context.bezierCurveTo(782.01, 610.19, 780.96, 608.24, 782.2, 606.85);
        context.closePath();
        context.fillStyle = fillColor462;
        context.fill();


    }

    function drawPath529() {
        context.beginPath();
        context.moveTo(171.81, 598.04);
        context.bezierCurveTo(171.99, 596.31, 172.17, 594.57, 172.39, 592.87);
        context.bezierCurveTo(173.09, 594.91, 173.83, 596.96, 174.55, 599.01);
        context.bezierCurveTo(175.99, 598.37, 177.43, 597.75, 178.88, 597.13);
        context.bezierCurveTo(179.69, 602.73, 177.89, 609.6, 183.29, 613.4);
        context.bezierCurveTo(182.96, 613.85, 182.28, 614.77, 181.93, 615.23);
        context.bezierCurveTo(187.55, 620.21, 188.15, 627.99, 191.56, 634.29);
        context.bezierCurveTo(193.33, 637.17, 192.79, 640.48, 191.84, 643.53);
        context.bezierCurveTo(190.44, 640.93, 189.07, 638.33, 187.77, 635.69);
        context.bezierCurveTo(188.39, 633.53, 187.57, 630.8, 185.08, 630.39);
        context.lineTo(184.77, 629.67);
        context.bezierCurveTo(184.71, 629.52, 184.57, 629.24, 184.51, 629.09);
        context.bezierCurveTo(183.64, 627.33, 182.73, 625.6, 181.8, 623.91);
        context.bezierCurveTo(181.69, 623.68, 181.47, 623.24, 181.36, 623.01);
        context.lineTo(180.88, 621.85);
        context.bezierCurveTo(180.8, 621.67, 180.63, 621.28, 180.53, 621.09);
        context.bezierCurveTo(179.63, 619.05, 178.93, 616.97, 178.09, 614.95);
        context.bezierCurveTo(178.03, 614.79, 177.91, 614.48, 177.85, 614.32);
        context.bezierCurveTo(177.25, 612.52, 176.63, 610.79, 176.07, 609);
        context.bezierCurveTo(176.87, 606.6, 175.77, 604.07, 173.36, 603.21);
        context.bezierCurveTo(172.76, 601.51, 172.15, 599.8, 171.81, 598.04);
        context.closePath();
        context.fillStyle = fillColor463;
        context.fill();


    }

    function drawPath530() {
        context.beginPath();
        context.moveTo(199.77, 593.79);
        context.bezierCurveTo(201.61, 594.57, 203.37, 595.57, 204.84, 596.96);
        context.bezierCurveTo(207.16, 601.27, 209.09, 605.89, 212.53, 609.48);
        context.bezierCurveTo(219.29, 616.59, 223.6, 625.63, 230.59, 632.59);
        context.bezierCurveTo(231.19, 633.28, 231.77, 634, 232.36, 634.72);
        context.bezierCurveTo(233.65, 637.08, 234.92, 639.47, 236.27, 641.81);
        context.bezierCurveTo(236.67, 643.51, 237, 645.25, 237.35, 646.99);
        context.bezierCurveTo(236.63, 646.87, 235.17, 646.65, 234.45, 646.53);
        context.bezierCurveTo(232.97, 644.79, 231.33, 643.17, 229.55, 641.75);
        context.bezierCurveTo(230.35, 643.91, 231.21, 646.04, 232.28, 648.09);
        context.bezierCurveTo(231.71, 648.03, 230.55, 647.88, 229.97, 647.8);
        context.bezierCurveTo(225.81, 642.21, 221.83, 636.35, 216.27, 632.05);
        context.bezierCurveTo(216.49, 630.92, 216.75, 629.79, 217, 628.67);
        context.bezierCurveTo(215.73, 627.51, 214.48, 626.39, 213.21, 625.25);
        context.bezierCurveTo(215.28, 625.57, 217.36, 625.91, 219.43, 626.24);
        context.bezierCurveTo(220.65, 628.71, 222.03, 631.11, 223.36, 633.53);
        context.bezierCurveTo(223.87, 632.17, 223.92, 630.83, 224.07, 629.44);
        context.bezierCurveTo(225.21, 627.52, 220.79, 628.43, 222.87, 626.21);
        context.lineTo(221.63, 625.87);
        context.bezierCurveTo(220.31, 622.61, 217.79, 619.97, 215.65, 617.15);
        context.bezierCurveTo(216.44, 619.31, 217.27, 621.45, 218.19, 623.57);
        context.bezierCurveTo(216.8, 623.6, 215.41, 623.64, 214.04, 623.64);
        context.bezierCurveTo(210.19, 613.29, 204.85, 603.57, 199.77, 593.79);
        context.closePath();
        context.moveTo(225.65, 634.35);
        context.bezierCurveTo(225.24, 636.09, 227.05, 638.89, 228.92, 638.87);
        context.bezierCurveTo(230.01, 637.03, 227.83, 633.63, 225.65, 634.35);
        context.closePath();
        context.fillStyle = fillColor464;
        context.fill();


    }

    function drawPath531() {
        context.beginPath();
        context.moveTo(208.27, 594.97);
        context.bezierCurveTo(208.55, 594.83, 209.08, 594.53, 209.36, 594.39);
        context.bezierCurveTo(216.17, 601.85, 222.04, 610.09, 227.05, 618.87);
        context.bezierCurveTo(229.57, 623.68, 234.47, 627.13, 235.21, 632.83);
        context.lineTo(233.96, 632.75);
        context.bezierCurveTo(224.23, 620.93, 218.93, 606.11, 208.27, 594.97);
        context.closePath();
        context.fillStyle = fillColor83;
        context.fill();


    }

    function drawPath532() {
        context.beginPath();
        context.moveTo(204.84, 596.96);
        context.bezierCurveTo(205.71, 596.45, 207.41, 595.47, 208.27, 594.97);
        context.bezierCurveTo(218.93, 606.11, 224.23, 620.93, 233.96, 632.75);
        context.bezierCurveTo(233.12, 632.71, 231.44, 632.63, 230.59, 632.59);
        context.bezierCurveTo(223.6, 625.63, 219.29, 616.59, 212.53, 609.48);
        context.bezierCurveTo(209.09, 605.89, 207.16, 601.27, 204.84, 596.96);
        context.closePath();
        context.fillStyle = fillColor465;
        context.fill();


    }

    function drawPath533() {
        context.beginPath();
        context.moveTo(552.88, 595.92);
        context.bezierCurveTo(551.88, 602.13, 547.15, 606.89, 545.81, 613.07);
        context.bezierCurveTo(544.51, 616.63, 543, 620.11, 541.39, 623.55);
        context.bezierCurveTo(541.35, 621.32, 541.32, 619.09, 541.44, 616.88);
        context.bezierCurveTo(544.97, 609.73, 547.67, 602.08, 552.88, 595.92);
        context.closePath();
        context.fillStyle = fillColor466;
        context.fill();


    }

    function drawPath534() {
        context.beginPath();
        context.moveTo(887.17, 598.2);
        context.bezierCurveTo(892.27, 605.99, 893.92, 615.37, 895.09, 624.44);
        context.bezierCurveTo(895.16, 632.47, 894.79, 640.49, 894.97, 648.53);
        context.bezierCurveTo(895.11, 652.04, 894.48, 655.49, 893.47, 658.84);
        context.bezierCurveTo(892.97, 648.25, 893.73, 637.63, 892.56, 627.08);
        context.bezierCurveTo(891.56, 633.79, 892.31, 640.56, 892.16, 647.31);
        context.bezierCurveTo(891.31, 673.72, 880.95, 699.28, 864.93, 720.12);
        context.bezierCurveTo(863.61, 721.87, 862.2, 723.84, 863.75, 726);
        context.bezierCurveTo(861.16, 730.29, 857.68, 733.89, 853.95, 737.19);
        context.bezierCurveTo(852.79, 736.25, 851.64, 735.32, 850.49, 734.4);
        context.bezierCurveTo(848.33, 735.75, 846.17, 737.09, 844.07, 738.52);
        context.bezierCurveTo(844.87, 736.36, 845.71, 734.23, 846.69, 732.16);
        context.bezierCurveTo(849.55, 729.81, 852.01, 727.05, 854.56, 724.39);
        context.bezierCurveTo(860.59, 720.16, 863.84, 713.37, 868.33, 707.75);
        context.bezierCurveTo(873.72, 699.48, 878.76, 690.88, 881.59, 681.36);
        context.bezierCurveTo(885.91, 672.63, 887.95, 663.13, 889.11, 653.53);
        context.bezierCurveTo(892.93, 645.07, 890.24, 635.65, 891.04, 626.75);
        context.bezierCurveTo(892.6, 621.92, 891.47, 617, 889.8, 612.39);
        context.bezierCurveTo(888.99, 609.43, 888.12, 606.48, 887.24, 603.55);
        context.bezierCurveTo(887.23, 602.21, 887.2, 599.53, 887.17, 598.2);
        context.closePath();
        context.fillStyle = fillColor467;
        context.fill();


    }

    function drawPath535() {
        context.beginPath();
        context.moveTo(173.36, 603.21);
        context.bezierCurveTo(175.77, 604.07, 176.87, 606.6, 176.07, 609);
        context.bezierCurveTo(174.13, 607.68, 173.44, 605.43, 173.36, 603.21);
        context.closePath();
        context.fillStyle = fillColor344;
        context.fill();


    }

    function drawPath536() {
        context.beginPath();
        context.moveTo(410.75, 615.03);
        context.bezierCurveTo(427.95, 612, 445.45, 613.63, 462.65, 615.67);
        context.bezierCurveTo(469.45, 616.6, 475.85, 619.33, 482.64, 620.4);
        context.bezierCurveTo(491, 621.51, 498.33, 625.92, 505.75, 629.65);
        context.bezierCurveTo(521.8, 637.45, 536.47, 648.39, 547.97, 662.08);
        context.bezierCurveTo(556.01, 671.01, 563.51, 680.45, 570.01, 690.57);
        context.bezierCurveTo(581.11, 708.91, 592.16, 727.49, 599.51, 747.71);
        context.bezierCurveTo(604.57, 759.03, 606.51, 771.37, 609.68, 783.28);
        context.bezierCurveTo(608.89, 783.55, 607.32, 784.07, 606.53, 784.33);
        context.bezierCurveTo(599.4, 784.96, 592.19, 785.36, 585.32, 787.59);
        context.bezierCurveTo(585.72, 787.99, 586.53, 788.81, 586.95, 789.23);
        context.bezierCurveTo(583.21, 789.37, 579.49, 790.08, 576.24, 791.96);
        context.bezierCurveTo(572.97, 794.03, 568.97, 793.44, 565.37, 794.33);
        context.bezierCurveTo(561.89, 794.92, 559.28, 797.51, 556.11, 798.84);
        context.bezierCurveTo(553.12, 799.85, 549.89, 799.85, 546.93, 800.89);
        context.bezierCurveTo(543.56, 802.79, 540.69, 805.61, 536.81, 806.52);
        context.bezierCurveTo(532.11, 807.63, 528.43, 810.71, 524.84, 813.75);
        context.bezierCurveTo(515.09, 818.51, 507.31, 826.32, 499.47, 833.65);
        context.bezierCurveTo(497.29, 835.17, 496.15, 837.59, 494.99, 839.89);
        context.bezierCurveTo(488.36, 846.12, 486.13, 855.4, 483.43, 863.76);
        context.bezierCurveTo(479.47, 867.43, 479.77, 873.04, 479.08, 877.96);
        context.bezierCurveTo(477.51, 890.47, 478.43, 903.75, 484.19, 915.16);
        context.bezierCurveTo(486.93, 921.13, 489.41, 927.35, 493.63, 932.49);
        context.bezierCurveTo(503.09, 944.72, 517.61, 951.44, 531.67, 956.92);
        context.bezierCurveTo(550.19, 960.61, 569.19, 961.77, 588.07, 961.79);
        context.bezierCurveTo(595.97, 961.84, 603.72, 960.13, 611.39, 958.4);
        context.bezierCurveTo(612.76, 964.45, 611.43, 970.6, 610.64, 976.64);
        context.bezierCurveTo(607.35, 1002.85, 604.72, 1029.2, 600.09, 1055.23);
        context.bezierCurveTo(602.16, 1057.6, 604.68, 1059.56, 607.04, 1061.65);
        context.bezierCurveTo(598.19, 1066.27, 592.24, 1075.07, 588.95, 1084.28);
        context.bezierCurveTo(585.2, 1094.08, 586.79, 1104.67, 587.79, 1114.81);
        context.bezierCurveTo(580.08, 1118.45, 573.19, 1123.89, 564.63, 1125.52);
        context.bezierCurveTo(564.29, 1127.11, 563.97, 1128.71, 563.67, 1130.33);
        context.bezierCurveTo(563.25, 1129.09, 562.84, 1127.87, 562.4, 1126.68);
        context.bezierCurveTo(560.39, 1126.19, 558.35, 1125.8, 556.41, 1125.11);
        context.bezierCurveTo(553.89, 1123.51, 552.32, 1120.45, 549.21, 1119.84);
        context.bezierCurveTo(543.8, 1118.4, 538.19, 1116.25, 532.52, 1117.56);
        context.bezierCurveTo(527.15, 1118.61, 521.69, 1119.37, 516.43, 1120.91);
        context.bezierCurveTo(510.23, 1122.84, 503.6, 1121.93, 497.35, 1123.64);
        context.bezierCurveTo(489.47, 1125.85, 481.25, 1126.32, 473.36, 1128.48);
        context.bezierCurveTo(463.16, 1131.12, 452.67, 1132.21, 442.24, 1133.51);
        context.bezierCurveTo(426.72, 1136.65, 410.95, 1138.29, 395.43, 1141.39);
        context.bezierCurveTo(376.75, 1142.32, 358.21, 1145.53, 339.45, 1145.51);
        context.bezierCurveTo(318.49, 1147.91, 298.03, 1141.56, 277.35, 1139.43);
        context.bezierCurveTo(267.69, 1138.39, 258.96, 1133.67, 249.37, 1132.32);
        context.bezierCurveTo(244.32, 1131.23, 238.85, 1131.59, 234.16, 1129.13);
        context.bezierCurveTo(231.79, 1127.92, 229.36, 1126.73, 226.71, 1126.31);
        context.bezierCurveTo(218.01, 1125.2, 211.65, 1118.53, 203.6, 1115.69);
        context.bezierCurveTo(197.92, 1113.85, 194.73, 1108.47, 189.97, 1105.23);
        context.bezierCurveTo(184.76, 1101.64, 180.55, 1096.77, 175.04, 1093.61);
        context.bezierCurveTo(173.08, 1092.48, 171.27, 1091.08, 170.29, 1089);
        context.bezierCurveTo(166.81, 1082.16, 160.05, 1077.99, 155.6, 1071.91);
        context.bezierCurveTo(153.33, 1068.77, 150.91, 1065.77, 148.47, 1062.81);
        context.bezierCurveTo(146.07, 1059.87, 145.52, 1055.99, 143.85, 1052.68);
        context.bezierCurveTo(142.52, 1050.55, 140.07, 1049.36, 138.84, 1047.17);
        context.bezierCurveTo(137.64, 1043.64, 138.01, 1039.63, 136.27, 1036.32);
        context.bezierCurveTo(134.28, 1034.77, 131.83, 1033.88, 129.99, 1032.19);
        context.bezierCurveTo(128.99, 1026.59, 130.6, 1020.29, 126.56, 1015.6);
        context.bezierCurveTo(125.09, 1008.95, 122.89, 1002.49, 120.4, 996.13);
        context.bezierCurveTo(118.17, 991.68, 121.04, 986.96, 119.96, 982.39);
        context.bezierCurveTo(118.85, 977.09, 116.59, 971.97, 116.84, 966.45);
        context.bezierCurveTo(117.17, 960.08, 116.47, 953.73, 116.61, 947.37);
        context.bezierCurveTo(117.37, 943.01, 118.12, 938.63, 117.15, 934.23);
        context.bezierCurveTo(118.41, 932.36, 119.93, 930.64, 120.79, 928.55);
        context.bezierCurveTo(121.59, 924.41, 120.77, 919.76, 123.6, 916.28);
        context.bezierCurveTo(128.05, 910.21, 129.96, 902.69, 134.76, 896.85);
        context.bezierCurveTo(138.91, 891.61, 139.44, 884.37, 144.2, 879.52);
        context.bezierCurveTo(151, 872.13, 156.35, 863.39, 164.2, 856.99);
        context.bezierCurveTo(167.59, 854.61, 169.87, 851.04, 173.2, 848.64);
        context.bezierCurveTo(180.73, 844.19, 188.05, 839.39, 195.47, 834.73);
        context.bezierCurveTo(209.31, 828.08, 224.83, 826.05, 240.04, 825.71);
        context.bezierCurveTo(249.79, 826.53, 259.55, 827.44, 269.31, 828.24);
        context.bezierCurveTo(277.57, 828.84, 285.91, 833.96, 294.16, 830.63);
        context.bezierCurveTo(296.45, 830.07, 298.13, 827.09, 296.93, 824.95);
        context.bezierCurveTo(292.88, 817.05, 290.47, 808.48, 286.88, 800.4);
        context.bezierCurveTo(285.96, 794.56, 284.12, 788.97, 282.41, 783.33);
        context.bezierCurveTo(281.45, 768.23, 281.75, 752.84, 285.55, 738.08);
        context.bezierCurveTo(287.88, 729.96, 288.4, 721.48, 290.19, 713.24);
        context.bezierCurveTo(290.84, 709.69, 293.73, 707.23, 295.28, 704.09);
        context.bezierCurveTo(295.72, 702.04, 295.77, 699.93, 296.03, 697.88);
        context.bezierCurveTo(295.96, 694, 300.29, 692.43, 302.11, 689.45);
        context.bezierCurveTo(306.31, 682.35, 309.79, 674.84, 313.44, 667.45);
        context.bezierCurveTo(316.79, 664.16, 320.91, 661.71, 323.96, 658.09);
        context.bezierCurveTo(328.56, 652.47, 335.77, 649.47, 339.25, 642.87);
        context.bezierCurveTo(344.49, 640.65, 350.03, 638.69, 354.49, 635.07);
        context.bezierCurveTo(359.04, 630.67, 365.4, 629.19, 370.91, 626.4);
        context.bezierCurveTo(383.41, 620.41, 396.79, 615.69, 410.75, 615.03);
        context.closePath();
        context.moveTo(480.49, 693.4);
        context.bezierCurveTo(477.36, 694.89, 474.57, 697.05, 471.75, 699.05);
        context.bezierCurveTo(468.93, 702.23, 467.57, 706.43, 464.71, 709.57);
        context.bezierCurveTo(455.19, 708.32, 445.53, 711.29, 438.48, 717.84);
        context.bezierCurveTo(436.77, 722.64, 436.31, 727.71, 435.75, 732.73);
        context.bezierCurveTo(436.45, 738.85, 438.55, 745.24, 443.29, 749.44);
        context.bezierCurveTo(453.12, 762.89, 470.44, 771.07, 487.07, 769.37);
        context.bezierCurveTo(488.99, 766.92, 491.12, 764.63, 492.8, 762);
        context.bezierCurveTo(493.68, 756.12, 486.24, 757.79, 482.69, 757.09);
        context.bezierCurveTo(476.15, 754.73, 470.81, 750.07, 465.39, 745.84);
        context.bezierCurveTo(460.32, 740.61, 454.03, 735.69, 452.41, 728.19);
        context.bezierCurveTo(459.29, 726.8, 465.29, 732.19, 472.11, 730.51);
        context.bezierCurveTo(478.19, 725.39, 478.53, 716.59, 483.59, 710.77);
        context.bezierCurveTo(486.59, 711.07, 489.87, 710.05, 492.65, 711.6);
        context.bezierCurveTo(497.01, 713.51, 499.05, 718.23, 501.31, 722.13);
        context.bezierCurveTo(503.64, 729.11, 501.49, 736.47, 499.75, 743.32);
        context.bezierCurveTo(498.47, 747.65, 502.16, 752.55, 506.68, 752.37);
        context.bezierCurveTo(509.16, 752.49, 512.44, 751.35, 512.95, 748.6);
        context.bezierCurveTo(513.36, 744.83, 517.76, 743.11, 517.69, 739.23);
        context.bezierCurveTo(517.92, 734.71, 519.63, 730.08, 518.09, 725.65);
        context.bezierCurveTo(517.61, 723.92, 518.77, 722.24, 519.05, 720.59);
        context.bezierCurveTo(516.84, 717.21, 516.75, 713.12, 515.35, 709.45);
        context.bezierCurveTo(513.53, 706.11, 511.57, 702.67, 508.67, 700.15);
        context.bezierCurveTo(504.05, 697.37, 499.77, 693.89, 494.64, 692.12);
        context.bezierCurveTo(489.91, 691.77, 485.05, 692.07, 480.49, 693.4);
        context.closePath();
        context.moveTo(414.68, 819.52);
        context.bezierCurveTo(405.8, 819.49, 396.51, 820.57, 388.95, 825.64);
        context.bezierCurveTo(379.11, 836.97, 376.44, 855.56, 386.17, 867.79);
        context.bezierCurveTo(389.96, 873.52, 397.64, 875, 404.04, 874.27);
        context.bezierCurveTo(411.09, 873.85, 415.28, 866.95, 417.75, 861.08);
        context.bezierCurveTo(420.37, 856.53, 419.27, 850.55, 423.2, 846.61);
        context.bezierCurveTo(426.15, 843.6, 421.76, 839.33, 424.68, 836.12);
        context.bezierCurveTo(426.2, 835.96, 427.72, 835.8, 429.24, 835.63);
        context.bezierCurveTo(431.81, 832.76, 435.92, 832.69, 438.91, 830.51);
        context.bezierCurveTo(443.55, 828.12, 441.61, 822.23, 443.48, 818.19);
        context.bezierCurveTo(443.07, 813.43, 436.81, 813.87, 433.35, 814.56);
        context.bezierCurveTo(427.24, 816.65, 420.87, 817.69, 414.68, 819.52);
        context.closePath();
        context.moveTo(369.6, 883.61);
        context.bezierCurveTo(363.65, 884.93, 360.09, 890.08, 356.12, 894.2);
        context.bezierCurveTo(354.97, 895.45, 354.8, 897.25, 354.2, 898.81);
        context.bezierCurveTo(351.97, 898.2, 349.67, 898.35, 347.43, 898.65);
        context.bezierCurveTo(345.36, 903.41, 347.56, 908.85, 350.88, 912.47);
        context.bezierCurveTo(353.73, 915.45, 355.47, 919.29, 358.24, 922.36);
        context.bezierCurveTo(360.03, 924.59, 363.16, 923.68, 365.63, 924.13);
        context.bezierCurveTo(367.07, 922.69, 368.73, 921.4, 369.76, 919.63);
        context.bezierCurveTo(372.04, 915.4, 366.55, 910.93, 369.79, 906.91);
        context.bezierCurveTo(371.44, 900.65, 378.83, 900.85, 383.99, 900.32);
        context.bezierCurveTo(388.23, 901.07, 393.11, 901.68, 396.2, 897.88);
        context.bezierCurveTo(397.24, 893.97, 396.39, 889.84, 396.04, 885.88);
        context.bezierCurveTo(394.4, 884.45, 392.04, 884.48, 390.13, 883.63);
        context.bezierCurveTo(383.85, 880.07, 376.19, 882.01, 369.6, 883.61);
        context.closePath();
        context.moveTo(312.92, 906.93);
        context.bezierCurveTo(309.8, 908.6, 308.05, 911.87, 308.88, 915.39);
        context.bezierCurveTo(312.01, 916.77, 315.53, 918.28, 319, 917.12);
        context.bezierCurveTo(321.79, 915.79, 324.24, 913.83, 327.08, 912.57);
        context.bezierCurveTo(327.39, 910.75, 327.68, 908.95, 328, 907.16);
        context.bezierCurveTo(328.99, 905.12, 330.05, 902.96, 329.61, 900.64);
        context.bezierCurveTo(328.49, 897.72, 324.87, 898.53, 322.44, 898.59);
        context.bezierCurveTo(319.15, 901.23, 316.71, 904.87, 312.92, 906.93);
        context.closePath();
        context.moveTo(328.41, 931.25);
        context.bezierCurveTo(330.43, 937.84, 335.97, 942.52, 338.36, 948.96);
        context.bezierCurveTo(340.69, 950.11, 342.99, 951.43, 345.55, 952.01);
        context.bezierCurveTo(347.01, 951.09, 348.31, 949.95, 349.63, 948.83);
        context.bezierCurveTo(349, 944.69, 352.31, 939.49, 348.11, 936.59);
        context.bezierCurveTo(343.31, 932.2, 339.16, 925.55, 332.03, 925.17);
        context.bezierCurveTo(328.72, 924.69, 327.89, 928.81, 328.41, 931.25);
        context.closePath();
        context.moveTo(271.76, 954.84);
        context.bezierCurveTo(270.79, 958.33, 268.81, 962.15, 271.08, 965.6);
        context.bezierCurveTo(276.71, 976.44, 282.79, 987.21, 290.65, 996.63);
        context.bezierCurveTo(293.76, 998.79, 298.11, 999.39, 301.8, 998.59);
        context.bezierCurveTo(307.44, 994.39, 301.93, 986.89, 304.6, 981.4);
        context.bezierCurveTo(307.04, 979.11, 308.89, 976.08, 311.95, 974.52);
        context.bezierCurveTo(318.37, 973.97, 324.47, 976.69, 330.77, 977.13);
        context.bezierCurveTo(337.63, 975.29, 335.29, 967.67, 335.11, 962.51);
        context.bezierCurveTo(334.25, 960.6, 331.88, 959.79, 330.21, 958.67);
        context.bezierCurveTo(326.8, 956.33, 322.53, 958.31, 318.84, 957.01);
        context.bezierCurveTo(312.08, 954.41, 304.44, 956.77, 298.6, 960.56);
        context.bezierCurveTo(295.33, 963.44, 292.92, 967.19, 290.69, 970.92);
        context.bezierCurveTo(288.88, 970.07, 287.68, 968.55, 286.85, 966.8);
        context.bezierCurveTo(285.76, 966.28, 284.67, 965.79, 283.57, 965.31);
        context.bezierCurveTo(283.32, 960.95, 278.27, 959.19, 277.52, 954.87);
        context.bezierCurveTo(275.6, 954.67, 273.67, 954.67, 271.76, 954.84);
        context.closePath();
        context.moveTo(230.63, 983.16);
        context.bezierCurveTo(229.43, 985.47, 228.23, 987.83, 226.45, 989.79);
        context.bezierCurveTo(220.91, 995.23, 220.07, 1003.81, 220.88, 1011.17);
        context.bezierCurveTo(221.33, 1018.08, 225.71, 1023.64, 228.21, 1029.87);
        context.bezierCurveTo(232.07, 1034.84, 236.37, 1040.21, 242.69, 1042.08);
        context.bezierCurveTo(250.16, 1045.56, 258.67, 1045.21, 266.37, 1042.84);
        context.bezierCurveTo(270.97, 1040.2, 276.65, 1037.85, 278.08, 1032.2);
        context.bezierCurveTo(281.49, 1029.51, 284.33, 1026.17, 287.01, 1022.77);
        context.bezierCurveTo(288.28, 1020.17, 289.43, 1017.49, 291.33, 1015.28);
        context.bezierCurveTo(291.31, 1012.96, 291.08, 1010.65, 290.49, 1008.44);
        context.bezierCurveTo(291.11, 1004.64, 289.57, 1001.43, 286.83, 998.91);
        context.bezierCurveTo(284.89, 999.25, 282.96, 999.63, 281.04, 1000.03);
        context.bezierCurveTo(274.11, 1007.93, 269.75, 1017.85, 261.32, 1024.4);
        context.bezierCurveTo(256.28, 1026.6, 250.35, 1025.72, 245.48, 1023.45);
        context.bezierCurveTo(242.25, 1019.81, 239.91, 1015.43, 236.67, 1011.76);
        context.bezierCurveTo(236.96, 1010.61, 237.52, 1008.31, 237.81, 1007.16);
        context.bezierCurveTo(237.01, 1005.89, 236.23, 1004.64, 235.44, 1003.4);
        context.bezierCurveTo(236.72, 1000.33, 237.47, 997.08, 238.68, 994);
        context.bezierCurveTo(240.51, 991.69, 243.4, 990.6, 245.79, 988.97);
        context.bezierCurveTo(246.07, 985.48, 247.4, 981.87, 246.04, 978.47);
        context.bezierCurveTo(240.32, 977.36, 235.4, 980.56, 230.63, 983.16);
        context.closePath();
        context.fillStyle = fillColor175;
        context.fill();


    }

    function drawPath537() {
        context.beginPath();
        context.moveTo(889.8, 612.39);
        context.bezierCurveTo(891.47, 617, 892.6, 621.92, 891.04, 626.75);
        context.bezierCurveTo(890.8, 625.21, 890.33, 622.16, 890.11, 620.63);
        context.bezierCurveTo(890.08, 617.88, 889.99, 615.12, 889.8, 612.39);
        context.closePath();
        context.fillStyle = fillColor468;
        context.fill();


    }

    function drawPath538() {
        context.save();
        context.globalAlpha = 0.47;
        context.beginPath();
        context.moveTo(177.85, 614.32);
        context.bezierCurveTo(177.91, 614.48, 178.03, 614.79, 178.09, 614.95);
        context.bezierCurveTo(178.03, 614.79, 177.91, 614.48, 177.85, 614.32);
        context.closePath();
        context.fillStyle = fillColor469;
        context.fill();
        context.restore();


    }

    function drawPath539() {
        context.beginPath();
        context.moveTo(897.05, 625.99);
        context.bezierCurveTo(896.64, 622.48, 895.72, 618.85, 897, 615.41);
        context.bezierCurveTo(901.19, 632.49, 899.16, 650.15, 899.76, 667.49);
        context.bezierCurveTo(899.49, 667.79, 898.96, 668.39, 898.71, 668.68);
        context.bezierCurveTo(898.24, 676.71, 895.99, 684.63, 892.43, 691.83);
        context.bezierCurveTo(888.91, 698.68, 888.09, 706.85, 882.59, 712.64);
        context.bezierCurveTo(876.63, 722.43, 869.28, 731.2, 861.59, 739.65);
        context.bezierCurveTo(860.17, 739.81, 858.76, 739.96, 857.37, 740.09);
        context.bezierCurveTo(857.24, 739.61, 856.99, 738.65, 856.85, 738.17);
        context.bezierCurveTo(873.32, 724.04, 884.59, 704.59, 891.57, 684.24);
        context.bezierCurveTo(898.05, 668.68, 898.25, 651.36, 897.27, 634.79);
        context.bezierCurveTo(897.33, 631.84, 897.33, 628.91, 897.05, 625.99);
        context.closePath();
        context.fillStyle = fillColor470;
        context.fill();


    }

    function drawPath540() {
        context.beginPath();
        context.moveTo(215.65, 617.15);
        context.bezierCurveTo(217.79, 619.97, 220.31, 622.61, 221.63, 625.87);
        context.lineTo(222.87, 626.21);
        context.bezierCurveTo(220.79, 628.43, 225.21, 627.52, 224.07, 629.44);
        context.bezierCurveTo(223.92, 630.83, 223.87, 632.17, 223.36, 633.53);
        context.bezierCurveTo(222.03, 631.11, 220.65, 628.71, 219.43, 626.24);
        context.bezierCurveTo(218.99, 625.35, 218.57, 624.47, 218.19, 623.57);
        context.bezierCurveTo(217.27, 621.45, 216.44, 619.31, 215.65, 617.15);
        context.closePath();
        context.fillStyle = fillColor457;
        context.fill();


    }

    function drawPath541() {
        context.save();
        context.globalAlpha = 0.5;
        context.beginPath();
        context.moveTo(180.53, 621.09);
        context.bezierCurveTo(180.63, 621.28, 180.8, 621.67, 180.88, 621.85);
        context.bezierCurveTo(180.8, 621.67, 180.63, 621.28, 180.53, 621.09);
        context.closePath();
        context.fillStyle = fillColor471;
        context.fill();
        context.restore();


    }

    function drawPath542() {
        context.beginPath();
        context.moveTo(633.84, 621.52);
        context.bezierCurveTo(639.48, 620.63, 645.24, 620.84, 650.87, 621.81);
        context.bezierCurveTo(654.6, 622.92, 658.11, 624.71, 661.89, 625.71);
        context.bezierCurveTo(662.57, 627.57, 663.01, 629.51, 663.17, 631.52);
        context.bezierCurveTo(662.37, 631.77, 660.79, 632.28, 659.99, 632.55);
        context.bezierCurveTo(653.71, 637.83, 646.13, 641.21, 639.24, 645.57);
        context.bezierCurveTo(637.43, 646.55, 636.93, 649.39, 634.6, 649.36);
        context.bezierCurveTo(631.64, 650.51, 631.37, 646.32, 630.57, 644.61);
        context.bezierCurveTo(636.93, 638.96, 644.08, 634.11, 651.71, 630.31);
        context.bezierCurveTo(651.52, 629.15, 651.35, 627.99, 651.2, 626.85);
        context.bezierCurveTo(645.88, 627.97, 640.79, 624.96, 635.47, 625.72);
        context.bezierCurveTo(633.79, 625.97, 632.21, 625.68, 630.73, 624.84);
        context.bezierCurveTo(631.76, 623.73, 632.79, 622.61, 633.84, 621.52);
        context.closePath();
        context.fillStyle = fillColor462;
        context.fill();


    }

    function drawPath543() {
        context.beginPath();
        context.moveTo(267.75, 625.13);
        context.bezierCurveTo(268.08, 630.03, 262.53, 624.09, 265.67, 622.32);
        context.bezierCurveTo(265.99, 622.76, 266.63, 623.64, 266.95, 624.08);
        context.lineTo(267.75, 625.13);
        context.closePath();
        context.fillStyle = fillColor56;
        context.fill();


    }

    function drawPath544() {
        context.beginPath();
        context.moveTo(889.11, 653.53);
        context.bezierCurveTo(889.16, 642.59, 887.68, 631.4, 890.11, 620.63);
        context.bezierCurveTo(890.33, 622.16, 890.8, 625.21, 891.04, 626.75);
        context.bezierCurveTo(890.24, 635.65, 892.93, 645.07, 889.11, 653.53);
        context.closePath();
        context.fillStyle = fillColor472;
        context.fill();


    }

    function drawPath545() {
        context.save();
        context.globalAlpha = 0.65;
        context.beginPath();
        context.moveTo(181.36, 623.01);
        context.bezierCurveTo(181.47, 623.24, 181.69, 623.68, 181.8, 623.91);
        context.lineTo(181.6, 623.52);
        context.lineTo(181.36, 623.01);
        context.closePath();
        context.fillStyle = fillColor473;
        context.fill();
        context.restore();


    }

    function drawPath546() {
        context.beginPath();
        context.moveTo(895.09, 624.44);
        context.bezierCurveTo(895.59, 624.83, 896.56, 625.6, 897.05, 625.99);
        context.bezierCurveTo(897.33, 628.91, 897.33, 631.84, 897.27, 634.79);
        context.bezierCurveTo(895.68, 642.8, 897.43, 651.04, 895.77, 659.04);
        context.bezierCurveTo(892.12, 673.01, 888.83, 687.28, 881.59, 699.93);
        context.bezierCurveTo(882.63, 692.8, 886.96, 686.81, 888.8, 679.93);
        context.bezierCurveTo(891.11, 673.08, 892.13, 665.92, 893.47, 658.84);
        context.bezierCurveTo(894.48, 655.49, 895.11, 652.04, 894.97, 648.53);
        context.bezierCurveTo(894.79, 640.49, 895.16, 632.47, 895.09, 624.44);
        context.closePath();
        context.fillStyle = fillColor474;
        context.fill();


    }

    function drawPath547() {
        context.beginPath();
        context.moveTo(892.16, 647.31);
        context.bezierCurveTo(892.31, 640.56, 891.56, 633.79, 892.56, 627.08);
        context.bezierCurveTo(893.73, 637.63, 892.97, 648.25, 893.47, 658.84);
        context.bezierCurveTo(892.13, 665.92, 891.11, 673.08, 888.8, 679.93);
        context.bezierCurveTo(886.96, 686.81, 882.63, 692.8, 881.59, 699.93);
        context.bezierCurveTo(876.52, 709.15, 870.55, 717.96, 863.75, 726);
        context.bezierCurveTo(862.2, 723.84, 863.61, 721.87, 864.93, 720.12);
        context.bezierCurveTo(880.95, 699.28, 891.31, 673.72, 892.16, 647.31);
        context.closePath();
        context.fillStyle = fillColor475;
        context.fill();


    }

    function drawPath548() {
        context.save();
        context.globalAlpha = 0.54;
        context.beginPath();
        context.moveTo(184.51, 629.09);
        context.bezierCurveTo(184.57, 629.24, 184.71, 629.52, 184.77, 629.67);
        context.bezierCurveTo(184.71, 629.52, 184.57, 629.24, 184.51, 629.09);
        context.closePath();
        context.fillStyle = fillColor476;
        context.fill();
        context.restore();


    }

    function drawPath549() {
        context.beginPath();
        context.moveTo(285.75, 631.16);
        context.bezierCurveTo(286.2, 631.03, 287.11, 630.76, 287.56, 630.63);
        context.bezierCurveTo(289.8, 630.39, 292.04, 630.17, 294.29, 630);
        context.bezierCurveTo(295.39, 633.49, 295.63, 637.17, 295.67, 640.81);
        context.bezierCurveTo(296.39, 641.27, 297.83, 642.15, 298.55, 642.59);
        context.bezierCurveTo(297.25, 645.01, 295.69, 647.29, 293.93, 649.41);
        context.bezierCurveTo(291.99, 645.52, 290.92, 641.29, 290.44, 636.99);
        context.bezierCurveTo(289.15, 637.37, 287.87, 637.77, 286.6, 638.2);
        context.lineTo(287.31, 636.87);
        context.bezierCurveTo(287.8, 635.85, 288.28, 634.84, 288.77, 633.84);
        context.bezierCurveTo(288.01, 633.17, 286.51, 631.84, 285.75, 631.16);
        context.closePath();
        context.fillStyle = fillColor477;
        context.fill();


    }

    function drawPath550() {
        context.save();
        context.globalAlpha = 0.81;
        context.beginPath();
        context.moveTo(185.08, 630.39);
        context.bezierCurveTo(187.57, 630.8, 188.39, 633.53, 187.77, 635.69);
        context.bezierCurveTo(186.33, 634.25, 185.41, 632.39, 185.08, 630.39);
        context.closePath();
        context.fillStyle = fillColor478;
        context.fill();
        context.restore();


    }

    function drawPath551() {
        context.beginPath();
        context.moveTo(216.27, 632.05);
        context.bezierCurveTo(221.83, 636.35, 225.81, 642.21, 229.97, 647.8);
        context.lineTo(228.71, 649.01);
        context.bezierCurveTo(224.53, 643.87, 220.32, 638.75, 215.93, 633.79);
        context.lineTo(216.27, 632.05);
        context.closePath();
        context.fillStyle = fillColor479;
        context.fill();


    }

    function drawPath552() {
        context.beginPath();
        context.moveTo(716.21, 637.03);
        context.bezierCurveTo(723.88, 633.16, 733.08, 630.48, 741.44, 633.67);
        context.bezierCurveTo(742.64, 637.15, 746.59, 638.8, 747.05, 642.64);
        context.bezierCurveTo(748.65, 646.13, 746.01, 649.32, 745.47, 652.72);
        context.bezierCurveTo(744.48, 653.49, 743.49, 654.29, 742.53, 655.09);
        context.bezierCurveTo(742.36, 656.96, 741.39, 658.44, 739.95, 659.57);
        context.bezierCurveTo(739.67, 660.24, 739.13, 661.57, 738.85, 662.24);
        context.bezierCurveTo(736.04, 663.23, 734.17, 665.56, 731.95, 667.39);
        context.bezierCurveTo(728.97, 668.25, 725.77, 668.12, 722.72, 668.17);
        context.bezierCurveTo(720.28, 666.52, 717.61, 665.37, 714.71, 664.93);
        context.bezierCurveTo(712.11, 661.13, 709.48, 657.35, 707.68, 653.09);
        context.bezierCurveTo(705.52, 646.48, 710.24, 639.61, 716.21, 637.03);
        context.closePath();
        context.fillStyle = fillColor261;
        context.fill();


    }

    function drawPath553() {
        context.beginPath();
        context.moveTo(225.65, 634.35);
        context.bezierCurveTo(227.83, 633.63, 230.01, 637.03, 228.92, 638.87);
        context.bezierCurveTo(227.05, 638.89, 225.24, 636.09, 225.65, 634.35);
        context.closePath();
        context.fillStyle = fillColor261;
        context.fill();


    }

    function drawPath554() {
        context.beginPath();
        context.moveTo(236.27, 641.81);
        context.bezierCurveTo(234.92, 639.47, 233.65, 637.08, 232.36, 634.72);
        context.bezierCurveTo(233.2, 635.28, 234.89, 636.37, 235.73, 636.92);
        context.bezierCurveTo(240.52, 644.16, 249.15, 646.65, 256.13, 651.12);
        context.bezierCurveTo(256.04, 651.72, 255.87, 652.92, 255.79, 653.52);
        context.bezierCurveTo(248.47, 651.29, 240.08, 649.21, 236.27, 641.81);
        context.closePath();
        context.fillStyle = fillColor480;
        context.fill();


    }

    function drawPath555() {
        context.beginPath();
        context.moveTo(283.53, 635.76);
        context.bezierCurveTo(284.79, 636.12, 286.04, 636.49, 287.31, 636.87);
        context.lineTo(286.6, 638.2);
        context.bezierCurveTo(281.61, 642.39, 278.75, 648.45, 279.17, 655.03);
        context.bezierCurveTo(276.67, 654.72, 274.13, 654.52, 271.63, 654.67);
        context.bezierCurveTo(270.99, 654.73, 269.71, 654.89, 269.07, 654.97);
        context.bezierCurveTo(264.11, 657.11, 260.12, 653.51, 256.13, 651.12);
        context.bezierCurveTo(249.15, 646.65, 240.52, 644.16, 235.73, 636.92);
        context.bezierCurveTo(238.53, 638.28, 241.47, 639.56, 244.61, 639.76);
        context.bezierCurveTo(250.65, 642.99, 256.27, 647.01, 262.67, 649.55);
        context.bezierCurveTo(266.33, 647.27, 270.24, 645.23, 274.6, 644.68);
        context.bezierCurveTo(279.29, 644.36, 282.64, 640.12, 283.53, 635.76);
        context.closePath();
        context.fillStyle = fillColor481;
        context.fill();


    }

    function drawPath556() {
        context.beginPath();
        context.moveTo(300.85, 638.48);
        context.bezierCurveTo(302.37, 635.05, 306.23, 635.52, 309.33, 635.33);
        context.bezierCurveTo(308.71, 637.43, 308.08, 639.53, 307.45, 641.64);
        context.bezierCurveTo(307.91, 642.23, 308.83, 643.37, 309.29, 643.96);
        context.bezierCurveTo(306.43, 647.52, 303.85, 651.33, 300.63, 654.6);
        context.bezierCurveTo(296.12, 658.51, 295.33, 665, 290.44, 668.61);
        context.bezierCurveTo(290.87, 665.99, 291.25, 663.35, 291.72, 660.73);
        context.bezierCurveTo(290.4, 661.25, 289.08, 661.79, 287.75, 662.29);
        context.bezierCurveTo(289.69, 658.6, 290.09, 653.05, 294.84, 651.77);
        context.bezierCurveTo(300.4, 650, 303.77, 644.27, 304.21, 638.67);
        context.bezierCurveTo(303.37, 638.61, 301.69, 638.52, 300.85, 638.48);
        context.closePath();
        context.fillStyle = fillColor482;
        context.fill();


    }

    function drawPath557() {
        context.beginPath();
        context.moveTo(895.77, 659.04);
        context.bezierCurveTo(897.43, 651.04, 895.68, 642.8, 897.27, 634.79);
        context.bezierCurveTo(898.25, 651.36, 898.05, 668.68, 891.57, 684.24);
        context.bezierCurveTo(884.59, 704.59, 873.32, 724.04, 856.85, 738.17);
        context.bezierCurveTo(853.08, 741.15, 849.01, 743.73, 845, 746.36);
        context.bezierCurveTo(842.6, 747.85, 840.15, 749.23, 837.73, 750.69);
        context.bezierCurveTo(838.41, 747.56, 841.48, 746.13, 843.91, 744.53);
        context.bezierCurveTo(847.44, 742.36, 850.88, 740.01, 853.95, 737.19);
        context.bezierCurveTo(857.68, 733.89, 861.16, 730.29, 863.75, 726);
        context.bezierCurveTo(870.55, 717.96, 876.52, 709.15, 881.59, 699.93);
        context.bezierCurveTo(888.83, 687.28, 892.12, 673.01, 895.77, 659.04);
        context.closePath();
        context.fillStyle = fillColor483;
        context.fill();


    }

    function drawPath558() {
        context.beginPath();
        context.moveTo(194.61, 636.43);
        context.bezierCurveTo(198.07, 641.08, 200.55, 646.43, 204.6, 650.64);
        context.bezierCurveTo(211.6, 658.31, 216.77, 668.03, 225.95, 673.44);
        context.bezierCurveTo(233.68, 676.47, 242.13, 677.76, 249.27, 682.28);
        context.bezierCurveTo(246.73, 683.31, 244.07, 684.04, 241.32, 683.71);
        context.bezierCurveTo(234.55, 680.47, 227.19, 678.72, 220.56, 675.16);
        context.bezierCurveTo(218.49, 673.16, 216.44, 671.15, 214.65, 668.91);
        context.bezierCurveTo(210.33, 656.63, 196.6, 649.88, 194.61, 636.43);
        context.closePath();
        context.fillStyle = fillColor484;
        context.fill();


    }

    function drawPath559() {
        context.beginPath();
        context.moveTo(286.6, 638.2);
        context.bezierCurveTo(287.87, 637.77, 289.15, 637.37, 290.44, 636.99);
        context.bezierCurveTo(290.92, 641.29, 291.99, 645.52, 293.93, 649.41);
        context.bezierCurveTo(295.69, 647.29, 297.25, 645.01, 298.55, 642.59);
        context.bezierCurveTo(299.28, 641.2, 300.05, 639.83, 300.85, 638.48);
        context.bezierCurveTo(301.69, 638.52, 303.37, 638.61, 304.21, 638.67);
        context.bezierCurveTo(303.77, 644.27, 300.4, 650, 294.84, 651.77);
        context.bezierCurveTo(290.09, 653.05, 289.69, 658.6, 287.75, 662.29);
        context.bezierCurveTo(285.56, 663.09, 283.17, 662.92, 280.89, 663.17);
        context.bezierCurveTo(279.95, 660.55, 278.93, 657.87, 279.17, 655.03);
        context.bezierCurveTo(278.75, 648.45, 281.61, 642.39, 286.6, 638.2);
        context.closePath();
        context.fillStyle = fillColor485;
        context.fill();


    }

    function drawPath560() {
        context.beginPath();
        context.moveTo(229.55, 641.75);
        context.bezierCurveTo(231.33, 643.17, 232.97, 644.79, 234.45, 646.53);
        context.bezierCurveTo(237.49, 650.76, 242.29, 652.89, 246.71, 655.35);
        context.bezierCurveTo(248.27, 655.95, 249.05, 657.25, 248.95, 658.93);
        context.bezierCurveTo(242.63, 656.76, 235.56, 654.48, 232.28, 648.09);
        context.bezierCurveTo(231.21, 646.04, 230.35, 643.91, 229.55, 641.75);
        context.closePath();
        context.fillStyle = fillColor486;
        context.fill();


    }

    function drawPath561() {
        context.beginPath();
        context.moveTo(236.27, 641.81);
        context.bezierCurveTo(240.08, 649.21, 248.47, 651.29, 255.79, 653.52);
        context.bezierCurveTo(255.87, 652.92, 256.04, 651.72, 256.13, 651.12);
        context.bezierCurveTo(260.12, 653.51, 264.11, 657.11, 269.07, 654.97);
        context.bezierCurveTo(270.56, 658.59, 272.65, 661.95, 273.91, 665.65);
        context.bezierCurveTo(273.64, 668.32, 272.31, 670.76, 270.8, 672.93);
        context.bezierCurveTo(268.33, 672.23, 269.93, 669.01, 269.59, 667.16);
        context.bezierCurveTo(268.85, 668.39, 268.11, 669.61, 267.37, 670.87);
        context.bezierCurveTo(266.41, 669.51, 265.63, 668.04, 264.43, 666.91);
        context.bezierCurveTo(262.08, 666.31, 259.64, 666.56, 257.27, 666.63);
        context.bezierCurveTo(255.87, 668.37, 254.45, 670.11, 253.04, 671.84);
        context.bezierCurveTo(253.43, 672.85, 253.81, 673.87, 254.21, 674.89);
        context.bezierCurveTo(253.67, 675.72, 253.12, 676.56, 252.57, 677.41);
        context.bezierCurveTo(253.33, 677.56, 254.84, 677.85, 255.6, 678);
        context.bezierCurveTo(254.35, 681.71, 253.09, 686.31, 248.63, 687.17);
        context.bezierCurveTo(246.21, 685.97, 243.77, 684.81, 241.32, 683.71);
        context.bezierCurveTo(244.07, 684.04, 246.73, 683.31, 249.27, 682.28);
        context.bezierCurveTo(249.45, 682.21, 249.83, 682.11, 250, 682.04);
        context.bezierCurveTo(248.35, 676.85, 249.21, 671.4, 251.61, 666.59);
        context.bezierCurveTo(252.77, 666.61, 253.95, 666.64, 255.12, 666.68);
        context.bezierCurveTo(255.08, 662.76, 252.51, 660.11, 248.95, 658.93);
        context.bezierCurveTo(249.05, 657.25, 248.27, 655.95, 246.71, 655.35);
        context.bezierCurveTo(242.29, 652.89, 237.49, 650.76, 234.45, 646.53);
        context.bezierCurveTo(235.17, 646.65, 236.63, 646.87, 237.35, 646.99);
        context.bezierCurveTo(237, 645.25, 236.67, 643.51, 236.27, 641.81);
        context.closePath();
        context.fillStyle = fillColor487;
        context.fill();


    }

    function drawPath562() {
        context.beginPath();
        context.moveTo(197.64, 653.37);
        context.bezierCurveTo(200.97, 656.37, 203.93, 659.72, 206.85, 663.12);
        context.bezierCurveTo(204.88, 661.48, 202.84, 659.92, 200.75, 658.45);
        context.bezierCurveTo(199.73, 656.75, 198.72, 655.04, 197.64, 653.37);
        context.closePath();
        context.fillStyle = fillColor175;
        context.fill();


    }

    function drawPath563() {
        context.beginPath();
        context.moveTo(271.63, 654.67);
        context.bezierCurveTo(274.13, 654.52, 276.67, 654.72, 279.17, 655.03);
        context.bezierCurveTo(278.93, 657.87, 279.95, 660.55, 280.89, 663.17);
        context.bezierCurveTo(279.61, 663.45, 278.36, 663.84, 277.12, 664.21);
        context.bezierCurveTo(275.99, 660.65, 274.35, 657.25, 271.63, 654.67);
        context.closePath();
        context.fillStyle = fillColor488;
        context.fill();


    }

    function drawPath564() {
        context.beginPath();
        context.moveTo(269.07, 654.97);
        context.bezierCurveTo(269.71, 654.89, 270.99, 654.73, 271.63, 654.67);
        context.bezierCurveTo(274.35, 657.25, 275.99, 660.65, 277.12, 664.21);
        context.bezierCurveTo(278.36, 663.84, 279.61, 663.45, 280.89, 663.17);
        context.bezierCurveTo(283.17, 662.92, 285.56, 663.09, 287.75, 662.29);
        context.bezierCurveTo(289.08, 661.79, 290.4, 661.25, 291.72, 660.73);
        context.bezierCurveTo(291.25, 663.35, 290.87, 665.99, 290.44, 668.61);
        context.bezierCurveTo(287.21, 676.12, 282.4, 682.84, 279.28, 690.41);
        context.bezierCurveTo(275.2, 688.39, 271.37, 685.07, 266.59, 685.17);
        context.bezierCurveTo(262.52, 684.81, 259.31, 688.13, 255.32, 688.28);
        context.bezierCurveTo(251.97, 688.27, 248.63, 688.03, 245.35, 687.41);
        context.bezierCurveTo(246.16, 687.36, 247.81, 687.23, 248.63, 687.17);
        context.bezierCurveTo(253.09, 686.31, 254.35, 681.71, 255.6, 678);
        context.bezierCurveTo(254.84, 677.85, 253.33, 677.56, 252.57, 677.41);
        context.bezierCurveTo(253.12, 676.56, 253.67, 675.72, 254.21, 674.89);
        context.bezierCurveTo(253.81, 673.87, 253.43, 672.85, 253.04, 671.84);
        context.bezierCurveTo(254.45, 670.11, 255.87, 668.37, 257.27, 666.63);
        context.bezierCurveTo(259.64, 666.56, 262.08, 666.31, 264.43, 666.91);
        context.bezierCurveTo(265.63, 668.04, 266.41, 669.51, 267.37, 670.87);
        context.bezierCurveTo(268.11, 669.61, 268.85, 668.39, 269.59, 667.16);
        context.bezierCurveTo(269.93, 669.01, 268.33, 672.23, 270.8, 672.93);
        context.bezierCurveTo(272.31, 670.76, 273.64, 668.32, 273.91, 665.65);
        context.bezierCurveTo(272.65, 661.95, 270.56, 658.59, 269.07, 654.97);
        context.closePath();
        context.fillStyle = fillColor489;
        context.fill();


    }

    function drawPath565() {
        context.beginPath();
        context.moveTo(900.29, 664.28);
        context.bezierCurveTo(899.33, 663.04, 899.39, 659.84, 901.27, 659.65);
        context.bezierCurveTo(902.13, 660.87, 902.04, 664.03, 900.29, 664.28);
        context.closePath();
        context.fillStyle = fillColor490;
        context.fill();


    }

    function drawPath566() {
        context.beginPath();
        context.moveTo(207.84, 663.99);
        context.bezierCurveTo(210.29, 665.35, 212.69, 666.84, 214.65, 668.91);
        context.bezierCurveTo(216.44, 671.15, 218.49, 673.16, 220.56, 675.16);
        context.lineTo(221.63, 676.87);
        context.bezierCurveTo(216.93, 672.68, 212.4, 668.32, 207.84, 663.99);
        context.closePath();
        context.fillStyle = fillColor242;
        context.fill();


    }

    function drawPath567() {
        context.save();
        context.globalAlpha = 0.97;
        context.beginPath();
        context.moveTo(220.56, 675.16);
        context.bezierCurveTo(227.19, 678.72, 234.55, 680.47, 241.32, 683.71);
        context.bezierCurveTo(243.77, 684.81, 246.21, 685.97, 248.63, 687.17);
        context.bezierCurveTo(247.81, 687.23, 246.16, 687.36, 245.35, 687.41);
        context.bezierCurveTo(239.99, 685.47, 234.39, 684, 229.37, 681.24);
        context.bezierCurveTo(228.81, 681.19, 227.69, 681.09, 227.13, 681.05);
        context.bezierCurveTo(225.17, 679.81, 223.32, 678.43, 221.63, 676.87);
        context.lineTo(220.56, 675.16);
        context.closePath();
        context.fillStyle = fillColor491;
        context.fill();
        context.restore();


    }

    function drawPath568() {
        context.beginPath();
        context.moveTo(713.21, 691.32);
        context.bezierCurveTo(719.44, 688.19, 726.64, 684.85, 729.25, 677.85);
        context.bezierCurveTo(733.52, 678.51, 736.79, 682.2, 741.29, 681.72);
        context.bezierCurveTo(745.61, 682.04, 749.88, 680.65, 754.19, 681.11);
        context.bezierCurveTo(755.88, 683.04, 754.2, 685.12, 753.55, 687.11);
        context.bezierCurveTo(752.47, 686.87, 750.31, 686.4, 749.23, 686.16);
        context.bezierCurveTo(743.69, 685.89, 737.84, 687.65, 732.65, 684.75);
        context.bezierCurveTo(731.32, 682.8, 728.88, 684.27, 729.44, 686.39);
        context.bezierCurveTo(724.05, 691.13, 717.75, 694.79, 710.99, 697.17);
        context.bezierCurveTo(711.23, 698.84, 711.47, 700.49, 711.73, 702.17);
        context.bezierCurveTo(720.57, 707.92, 731.71, 705.07, 740.67, 701.13);
        context.bezierCurveTo(745.56, 698.68, 750.89, 695.56, 753.2, 690.36);
        context.bezierCurveTo(753.55, 689.48, 754.24, 687.72, 754.59, 686.84);
        context.bezierCurveTo(756.55, 686.29, 758.56, 686.23, 760.59, 686.48);
        context.bezierCurveTo(760.72, 687.36, 760.97, 689.11, 761.11, 689.99);
        context.bezierCurveTo(758.92, 692.49, 756.87, 695.29, 756.39, 698.69);
        context.bezierCurveTo(755.81, 699.09, 754.67, 699.88, 754.09, 700.28);
        context.bezierCurveTo(748.96, 705.95, 741.32, 708.71, 733.76, 708.35);
        context.bezierCurveTo(727.33, 711.35, 720.21, 708.39, 713.55, 708.44);
        context.bezierCurveTo(709.08, 705.19, 704.8, 700.07, 705.61, 694.2);
        context.bezierCurveTo(708.12, 693.77, 709.92, 694.6, 711.01, 696.71);
        context.bezierCurveTo(711.77, 694.92, 712.41, 693.08, 713.21, 691.32);
        context.closePath();
        context.fillStyle = fillColor492;
        context.fill();


    }

    function drawPath569() {
        context.beginPath();
        context.moveTo(729.44, 686.39);
        context.bezierCurveTo(728.88, 684.27, 731.32, 682.8, 732.65, 684.75);
        context.bezierCurveTo(731.85, 685.15, 730.24, 685.97, 729.44, 686.39);
        context.closePath();
        context.fillStyle = fillColor493;
        context.fill();


    }

    function drawPath570() {
        context.beginPath();
        context.moveTo(732.65, 684.75);
        context.bezierCurveTo(737.84, 687.65, 743.69, 685.89, 749.23, 686.16);
        context.bezierCurveTo(750.17, 686.39, 752.07, 686.81, 753.01, 687.03);
        context.bezierCurveTo(753.05, 687.87, 753.16, 689.52, 753.2, 690.36);
        context.bezierCurveTo(750.89, 695.56, 745.56, 698.68, 740.67, 701.13);
        context.bezierCurveTo(731.71, 705.07, 720.57, 707.92, 711.73, 702.17);
        context.bezierCurveTo(711.47, 700.49, 711.23, 698.84, 710.99, 697.17);
        context.bezierCurveTo(717.75, 694.79, 724.05, 691.13, 729.44, 686.39);
        context.bezierCurveTo(730.24, 685.97, 731.85, 685.15, 732.65, 684.75);
        context.closePath();
        context.fillStyle = fillColor91;
        context.fill();


    }

    function drawPath571() {
        context.beginPath();
        context.moveTo(480.49, 693.4);
        context.bezierCurveTo(485.05, 692.07, 489.91, 691.77, 494.64, 692.12);
        context.bezierCurveTo(499.77, 693.89, 504.05, 697.37, 508.67, 700.15);
        context.bezierCurveTo(511.57, 702.67, 513.53, 706.11, 515.35, 709.45);
        context.bezierCurveTo(516.75, 713.12, 516.84, 717.21, 519.05, 720.59);
        context.bezierCurveTo(518.77, 722.24, 517.61, 723.92, 518.09, 725.65);
        context.bezierCurveTo(519.63, 730.08, 517.92, 734.71, 517.69, 739.23);
        context.bezierCurveTo(517.76, 743.11, 513.36, 744.83, 512.95, 748.6);
        context.bezierCurveTo(512.44, 751.35, 509.16, 752.49, 506.68, 752.37);
        context.bezierCurveTo(502.16, 752.55, 498.47, 747.65, 499.75, 743.32);
        context.bezierCurveTo(501.49, 736.47, 503.64, 729.11, 501.31, 722.13);
        context.bezierCurveTo(499.05, 718.23, 497.01, 713.51, 492.65, 711.6);
        context.bezierCurveTo(489.87, 710.05, 486.59, 711.07, 483.59, 710.77);
        context.bezierCurveTo(478.53, 716.59, 478.19, 725.39, 472.11, 730.51);
        context.bezierCurveTo(465.29, 732.19, 459.29, 726.8, 452.41, 728.19);
        context.bezierCurveTo(454.03, 735.69, 460.32, 740.61, 465.39, 745.84);
        context.bezierCurveTo(470.81, 750.07, 476.15, 754.73, 482.69, 757.09);
        context.bezierCurveTo(486.24, 757.79, 493.68, 756.12, 492.8, 762);
        context.bezierCurveTo(491.12, 764.63, 488.99, 766.92, 487.07, 769.37);
        context.bezierCurveTo(470.44, 771.07, 453.12, 762.89, 443.29, 749.44);
        context.bezierCurveTo(438.55, 745.24, 436.45, 738.85, 435.75, 732.73);
        context.bezierCurveTo(436.31, 727.71, 436.77, 722.64, 438.48, 717.84);
        context.bezierCurveTo(445.53, 711.29, 455.19, 708.32, 464.71, 709.57);
        context.bezierCurveTo(467.57, 706.43, 468.93, 702.23, 471.75, 699.05);
        context.bezierCurveTo(474.57, 697.05, 477.36, 694.89, 480.49, 693.4);
        context.closePath();
        context.fillStyle = fillColor494;
        context.fill();


    }

    function drawPath572() {
        context.beginPath();
        context.moveTo(891.43, 717.81);
        context.bezierCurveTo(892.01, 717.12, 892.61, 716.43, 893.23, 715.75);
        context.bezierCurveTo(897.24, 716.35, 902.39, 715.09, 905, 719.09);
        context.bezierCurveTo(904.36, 721.13, 903.73, 723.19, 903.05, 725.23);
        context.bezierCurveTo(899.51, 725.19, 896.17, 723.96, 893.19, 722.13);
        context.bezierCurveTo(892.6, 720.68, 892.01, 719.24, 891.43, 717.81);
        context.closePath();
        context.fillStyle = fillColor354;
        context.fill();


    }

    function drawPath573() {
        context.beginPath();
        context.moveTo(842.25, 732.45);
        context.bezierCurveTo(846.15, 730.27, 848.73, 726.09, 853.17, 724.88);
        context.bezierCurveTo(853.52, 724.76, 854.21, 724.51, 854.56, 724.39);
        context.bezierCurveTo(852.01, 727.05, 849.55, 729.81, 846.69, 732.16);
        context.bezierCurveTo(840.59, 735.27, 835.83, 740.31, 830.05, 743.92);
        context.bezierCurveTo(817.85, 752.44, 802.64, 754.76, 789.88, 762.2);
        context.bezierCurveTo(783.19, 763.15, 776.48, 764.11, 769.85, 765.44);
        context.bezierCurveTo(763.44, 766.69, 756.87, 766.32, 750.43, 767.28);
        context.bezierCurveTo(749.4, 767.43, 747.37, 767.75, 746.35, 767.91);
        context.bezierCurveTo(745.63, 767.31, 744.19, 766.08, 743.47, 765.48);
        context.bezierCurveTo(749.41, 763.6, 755.72, 763.79, 761.79, 762.48);
        context.bezierCurveTo(772.44, 759.85, 783.59, 760.16, 794.17, 757.13);
        context.bezierCurveTo(811.61, 752.04, 827.01, 742.04, 842.25, 732.45);
        context.closePath();
        context.fillStyle = fillColor495;
        context.fill();


    }

    function drawPath574() {
        context.beginPath();
        context.moveTo(830.05, 743.92);
        context.bezierCurveTo(835.83, 740.31, 840.59, 735.27, 846.69, 732.16);
        context.bezierCurveTo(845.71, 734.23, 844.87, 736.36, 844.07, 738.52);
        context.bezierCurveTo(839.75, 741.65, 835.59, 745.03, 830.89, 747.57);
        context.bezierCurveTo(830.51, 748.56, 830.13, 749.53, 829.76, 750.53);
        context.bezierCurveTo(829.64, 750.61, 829.4, 750.79, 829.28, 750.87);
        context.bezierCurveTo(827.31, 750.68, 825.12, 749.47, 823.28, 750.69);
        context.bezierCurveTo(819.03, 753.15, 814.85, 755.73, 810.35, 757.71);
        context.bezierCurveTo(809.75, 757.8, 808.56, 757.97, 807.96, 758.07);
        context.bezierCurveTo(802.12, 760.15, 796.15, 762.03, 789.88, 762.2);
        context.bezierCurveTo(802.64, 754.76, 817.85, 752.44, 830.05, 743.92);
        context.closePath();
        context.fillStyle = fillColor496;
        context.fill();


    }

    function drawPath575() {
        context.beginPath();
        context.moveTo(844.07, 738.52);
        context.bezierCurveTo(846.17, 737.09, 848.33, 735.75, 850.49, 734.4);
        context.bezierCurveTo(851.64, 735.32, 852.79, 736.25, 853.95, 737.19);
        context.bezierCurveTo(850.88, 740.01, 847.44, 742.36, 843.91, 744.53);
        context.bezierCurveTo(841.48, 746.13, 838.41, 747.56, 837.73, 750.69);
        context.bezierCurveTo(833.23, 753.61, 828.99, 757.57, 823.44, 758.25);
        context.bezierCurveTo(816.92, 758.29, 811.44, 762.19, 805.75, 764.84);
        context.bezierCurveTo(805.88, 765.31, 806.13, 766.25, 806.25, 766.73);
        context.bezierCurveTo(806.35, 767.05, 806.53, 767.72, 806.64, 768.05);
        context.lineTo(806.45, 768.11);
        context.bezierCurveTo(800.73, 767.33, 795.4, 769.96, 789.8, 770.57);
        context.bezierCurveTo(776.77, 771.81, 763.96, 774.77, 750.83, 775.08);
        context.bezierCurveTo(750.28, 775.87, 749.19, 777.45, 748.64, 778.24);
        context.bezierCurveTo(747.99, 778.08, 746.68, 777.75, 746.04, 777.59);
        context.bezierCurveTo(746.47, 776.97, 747.32, 775.73, 747.75, 775.12);
        context.bezierCurveTo(748.79, 772.6, 747.47, 770.13, 746.35, 767.91);
        context.bezierCurveTo(747.37, 767.75, 749.4, 767.43, 750.43, 767.28);
        context.bezierCurveTo(750.63, 768.19, 751.04, 770, 751.24, 770.92);
        context.bezierCurveTo(763.67, 771.43, 775.63, 767.6, 787.95, 766.77);
        context.bezierCurveTo(802.57, 764.33, 816.71, 758.68, 829.28, 750.87);
        context.bezierCurveTo(829.4, 750.79, 829.64, 750.61, 829.76, 750.53);
        context.bezierCurveTo(830.13, 749.53, 830.51, 748.56, 830.89, 747.57);
        context.bezierCurveTo(835.59, 745.03, 839.75, 741.65, 844.07, 738.52);
        context.closePath();
        context.fillStyle = fillColor497;
        context.fill();


    }

    function drawPath576() {
        context.beginPath();
        context.moveTo(888.45, 741);
        context.bezierCurveTo(887.99, 734.33, 896.51, 735, 900.52, 737.47);
        context.bezierCurveTo(900.43, 739.59, 900.35, 741.71, 900.29, 743.84);
        context.bezierCurveTo(896.27, 743.73, 891.79, 743.44, 888.45, 741);
        context.closePath();
        context.fillStyle = fillColor354;
        context.fill();


    }

    function drawPath577() {
        context.beginPath();
        context.moveTo(845, 746.36);
        context.bezierCurveTo(849.01, 743.73, 853.08, 741.15, 856.85, 738.17);
        context.bezierCurveTo(856.99, 738.65, 857.24, 739.61, 857.37, 740.09);
        context.bezierCurveTo(858.76, 739.96, 860.17, 739.81, 861.59, 739.65);
        context.bezierCurveTo(858.93, 742.19, 856.19, 744.63, 853.53, 747.16);
        context.bezierCurveTo(849.85, 748.4, 846.27, 749.92, 843.03, 752.04);
        context.bezierCurveTo(843.68, 750.15, 844.33, 748.24, 845, 746.36);
        context.closePath();
        context.fillStyle = fillColor498;
        context.fill();


    }

    function drawPath578() {
        context.beginPath();
        context.moveTo(837.73, 750.69);
        context.bezierCurveTo(840.15, 749.23, 842.6, 747.85, 845, 746.36);
        context.bezierCurveTo(844.33, 748.24, 843.68, 750.15, 843.03, 752.04);
        context.bezierCurveTo(834.37, 757.64, 825.19, 762.47, 815.63, 766.31);
        context.bezierCurveTo(812.55, 766.44, 809.53, 767.04, 806.64, 768.05);
        context.bezierCurveTo(806.53, 767.72, 806.35, 767.05, 806.25, 766.73);
        context.bezierCurveTo(812.15, 764.29, 818.47, 762.41, 823.44, 758.25);
        context.bezierCurveTo(828.99, 757.57, 833.23, 753.61, 837.73, 750.69);
        context.closePath();
        context.fillStyle = fillColor499;
        context.fill();


    }

    function drawPath579() {
        context.beginPath();
        context.moveTo(843.03, 752.04);
        context.bezierCurveTo(846.27, 749.92, 849.85, 748.4, 853.53, 747.16);
        context.bezierCurveTo(848.37, 751.65, 842.25, 754.88, 836.92, 759.17);
        context.bezierCurveTo(830.51, 764.2, 822.52, 766.16, 815.15, 769.25);
        context.bezierCurveTo(801.48, 776.69, 785.87, 779.16, 770.71, 781.71);
        context.bezierCurveTo(761.67, 783.32, 752.52, 782.32, 743.45, 781.67);
        context.bezierCurveTo(743.99, 780.21, 744.52, 778.79, 745.05, 777.35);
        context.lineTo(746.04, 777.59);
        context.bezierCurveTo(746.68, 777.75, 747.99, 778.08, 748.64, 778.24);
        context.bezierCurveTo(757.44, 780.33, 766.43, 777.96, 775.05, 776.13);
        context.bezierCurveTo(785.19, 775.21, 795.49, 774.52, 805.13, 770.93);
        context.bezierCurveTo(808.87, 769.97, 812.41, 768.43, 815.63, 766.31);
        context.bezierCurveTo(825.19, 762.47, 834.37, 757.64, 843.03, 752.04);
        context.closePath();
        context.fillStyle = fillColor500;
        context.fill();


    }

    function drawPath580() {
        context.beginPath();
        context.moveTo(646.27, 749.05);
        context.bezierCurveTo(654.47, 753.19, 663.59, 755.03, 672.31, 757.79);
        context.bezierCurveTo(673.23, 758.92, 674.16, 760.07, 675.12, 761.23);
        context.bezierCurveTo(674.08, 761.88, 673.09, 762.6, 672.07, 763.28);
        context.bezierCurveTo(667.81, 760.63, 662.72, 760.33, 658.05, 758.84);
        context.bezierCurveTo(653.85, 757.47, 649.65, 756.07, 645.51, 754.56);
        context.bezierCurveTo(645.63, 753.95, 645.88, 752.75, 646.01, 752.13);
        context.bezierCurveTo(644.52, 751.77, 643.04, 751.4, 641.57, 751.04);
        context.bezierCurveTo(642.77, 750.95, 645.17, 750.76, 646.36, 750.67);
        context.bezierCurveTo(646.33, 750.27, 646.29, 749.45, 646.27, 749.05);
        context.closePath();
        context.fillStyle = fillColor501;
        context.fill();


    }

    function drawPath581() {
        context.beginPath();
        context.moveTo(823.28, 750.69);
        context.bezierCurveTo(825.12, 749.47, 827.31, 750.68, 829.28, 750.87);
        context.bezierCurveTo(816.71, 758.68, 802.57, 764.33, 787.95, 766.77);
        context.bezierCurveTo(775.63, 767.6, 763.67, 771.43, 751.24, 770.92);
        context.bezierCurveTo(751.04, 770, 750.63, 768.19, 750.43, 767.28);
        context.bezierCurveTo(756.87, 766.32, 763.44, 766.69, 769.85, 765.44);
        context.bezierCurveTo(776.48, 764.11, 783.19, 763.15, 789.88, 762.2);
        context.bezierCurveTo(796.15, 762.03, 802.12, 760.15, 807.96, 758.07);
        context.bezierCurveTo(808.83, 759.95, 809.63, 759.83, 810.35, 757.71);
        context.bezierCurveTo(814.85, 755.73, 819.03, 753.15, 823.28, 750.69);
        context.closePath();
        context.fillStyle = fillColor502;
        context.fill();


    }

    function drawPath582() {
        context.beginPath();
        context.moveTo(904.93, 756.29);
        context.bezierCurveTo(906.64, 754.8, 908.27, 752.71, 910.87, 753.45);
        context.bezierCurveTo(912.76, 756.48, 913.89, 760.45, 911.73, 763.64);
        context.bezierCurveTo(913.56, 769.92, 917.84, 775.35, 918.53, 781.96);
        context.bezierCurveTo(918.99, 782.52, 919.91, 783.64, 920.37, 784.2);
        context.bezierCurveTo(927.41, 799.53, 933.68, 815.44, 943.6, 829.24);
        context.bezierCurveTo(946.92, 834.72, 950.67, 840.23, 951.89, 846.63);
        context.bezierCurveTo(952.83, 847.19, 953.77, 847.75, 954.75, 848.33);
        context.bezierCurveTo(957.97, 855.6, 963.39, 861.68, 965.93, 869.29);
        context.bezierCurveTo(975.04, 880.57, 978.12, 895.23, 984.8, 907.89);
        context.bezierCurveTo(986.15, 910.33, 986.97, 912.99, 987.79, 915.67);
        context.bezierCurveTo(994.4, 927.52, 997.04, 940.91, 1000.95, 953.75);
        context.bezierCurveTo(1000.97, 956.84, 999.91, 960.2, 1002.77, 962.44);
        context.bezierCurveTo(1004.6, 971.57, 1006.33, 980.81, 1006.32, 990.16);
        context.bezierCurveTo(1008.09, 997.11, 1007.79, 1004.28, 1007.29, 1011.36);
        context.bezierCurveTo(1007.88, 1017.39, 1004.36, 1022.75, 1004.31, 1028.71);
        context.bezierCurveTo(1003.81, 1033.24, 1002.13, 1037.56, 1001.51, 1042.08);
        context.bezierCurveTo(1000.92, 1042.43, 999.73, 1043.13, 999.15, 1043.48);
        context.bezierCurveTo(997.25, 1050.03, 994.57, 1056.29, 992.39, 1062.73);
        context.bezierCurveTo(991.85, 1063.15, 990.77, 1063.99, 990.24, 1064.4);
        context.bezierCurveTo(988.73, 1069.61, 986.6, 1074.87, 982.01, 1078.15);
        context.bezierCurveTo(982, 1078.92, 981.99, 1080.47, 981.97, 1081.24);
        context.bezierCurveTo(980.69, 1082.49, 979.43, 1083.77, 978.17, 1085.07);
        context.bezierCurveTo(978.04, 1085.93, 977.77, 1087.67, 977.64, 1088.55);
        context.bezierCurveTo(969.75, 1094.48, 964.96, 1104.25, 955.39, 1108.11);
        context.bezierCurveTo(955, 1108.61, 954.23, 1109.61, 953.83, 1110.12);
        context.bezierCurveTo(944.09, 1116.85, 934.31, 1124.29, 922.99, 1128.04);
        context.bezierCurveTo(920.28, 1131.72, 915.2, 1131.51, 911.67, 1134.03);
        context.bezierCurveTo(906.25, 1136.11, 901.2, 1138.8, 896.05, 1141.43);
        context.bezierCurveTo(889.01, 1146.41, 880.8, 1149.16, 872.37, 1150.68);
        context.bezierCurveTo(865.67, 1154.51, 858.11, 1157.96, 850.21, 1157.32);
        context.bezierCurveTo(846.55, 1161.21, 841.05, 1162.09, 836.07, 1163.08);
        context.bezierCurveTo(827.68, 1164.57, 819.35, 1166.63, 810.79, 1166.72);
        context.bezierCurveTo(803.85, 1169.11, 796.44, 1168.83, 789.28, 1169.99);
        context.bezierCurveTo(786.56, 1169.83, 783.84, 1169.72, 781.13, 1169.71);
        context.bezierCurveTo(772.33, 1172.8, 762.73, 1171.8, 753.56, 1172.33);
        context.bezierCurveTo(749.31, 1173.88, 744.73, 1174.89, 740.4, 1173.08);
        context.bezierCurveTo(740.41, 1170.47, 740.55, 1167.88, 740.84, 1165.32);
        context.bezierCurveTo(738.73, 1167.51, 736.29, 1169.37, 733.33, 1170.23);
        context.bezierCurveTo(732.65, 1171.95, 733, 1174.76, 730.49, 1174.85);
        context.bezierCurveTo(726.96, 1176.39, 725.41, 1172.55, 724.28, 1170.07);
        context.bezierCurveTo(722.77, 1169.04, 721.29, 1168.01, 719.83, 1167);
        context.bezierCurveTo(718.95, 1167.12, 717.19, 1167.36, 716.31, 1167.48);
        context.bezierCurveTo(716.32, 1169.36, 716.37, 1171.27, 716.43, 1173.17);
        context.bezierCurveTo(713.87, 1174.53, 711.29, 1176.81, 708.17, 1176.17);
        context.bezierCurveTo(704.2, 1173.79, 706.4, 1168.57, 706.16, 1164.81);
        context.bezierCurveTo(704.12, 1163.33, 701.99, 1161.99, 699.8, 1160.77);
        context.bezierCurveTo(699.61, 1161.89, 699.21, 1164.12, 699.03, 1165.24);
        context.bezierCurveTo(691.87, 1165.51, 686.03, 1171.52, 678.73, 1169.39);
        context.bezierCurveTo(674.05, 1168.11, 669.07, 1167.69, 664.71, 1165.49);
        context.bezierCurveTo(657.85, 1165.32, 650.53, 1165.36, 644.64, 1161.35);
        context.bezierCurveTo(633.16, 1156.05, 622.04, 1147.99, 617.31, 1135.81);
        context.bezierCurveTo(613.52, 1131.63, 612.17, 1126.08, 610.53, 1120.85);
        context.bezierCurveTo(607.63, 1111.23, 607.07, 1100.57, 610.59, 1091.04);
        context.bezierCurveTo(612.43, 1084.87, 616.05, 1079.51, 619.04, 1073.88);
        context.bezierCurveTo(619.51, 1071.6, 620.03, 1069.35, 620.63, 1067.12);
        context.bezierCurveTo(623.65, 1063.05, 627.01, 1059.21, 630.73, 1055.76);
        context.bezierCurveTo(635.88, 1051.28, 642.88, 1049.27, 647.24, 1043.85);
        context.bezierCurveTo(650.05, 1040.87, 653.55, 1038.65, 656.6, 1035.92);
        context.bezierCurveTo(660.8, 1032.13, 666.47, 1030.81, 671.28, 1028.01);
        context.bezierCurveTo(676.79, 1024.89, 683.08, 1023.71, 688.97, 1021.56);
        context.bezierCurveTo(698.04, 1018.13, 707.65, 1015.95, 717.39, 1015.91);
        context.bezierCurveTo(736.53, 1014.6, 755.95, 1018.57, 773.05, 1027.29);
        context.bezierCurveTo(777.53, 1030.07, 782.17, 1032.56, 786.73, 1035.2);
        context.bezierCurveTo(796, 1041.95, 806.6, 1047.25, 813.95, 1056.31);
        context.bezierCurveTo(821.71, 1063.96, 828.37, 1072.68, 833.71, 1082.2);
        context.bezierCurveTo(834.49, 1084.59, 835.75, 1086.77, 837.43, 1088.67);
        context.bezierCurveTo(839.15, 1094.99, 842.27, 1100.88, 843.47, 1107.36);
        context.bezierCurveTo(844.68, 1114.89, 846.52, 1122.36, 846.36, 1130.05);
        context.bezierCurveTo(846.04, 1136.57, 847.67, 1143.84, 843.03, 1149.25);
        context.bezierCurveTo(845.15, 1148.52, 847.27, 1147.8, 849.4, 1147.05);
        context.bezierCurveTo(866.16, 1140.56, 883.96, 1136.23, 899.41, 1126.73);
        context.bezierCurveTo(911.21, 1120.47, 924.56, 1117.27, 935.48, 1109.37);
        context.bezierCurveTo(944.67, 1103.12, 953.91, 1096.88, 961.95, 1089.19);
        context.bezierCurveTo(964.31, 1086.31, 966.6, 1083.32, 969.63, 1081.09);
        context.bezierCurveTo(981.45, 1063.59, 989.85, 1043.88, 995.2, 1023.47);
        context.bezierCurveTo(999.28, 997.8, 992.73, 972.16, 987.11, 947.25);
        context.bezierCurveTo(983.44, 935.4, 978.95, 923.76, 973.45, 912.63);
        context.bezierCurveTo(970.27, 903.19, 965.47, 894.43, 961.65, 885.24);
        context.bezierCurveTo(958.59, 879.45, 955.09, 873.91, 952.25, 868);
        context.bezierCurveTo(947.36, 861.63, 944.12, 854.23, 939.81, 847.48);
        context.bezierCurveTo(934.61, 835.52, 925.44, 825.79, 920.52, 813.69);
        context.bezierCurveTo(917.51, 806.44, 913.31, 799.73, 910.81, 792.27);
        context.bezierCurveTo(905.59, 781.04, 905.39, 768.43, 904.93, 756.29);
        context.closePath();
        context.moveTo(620.24, 1111.88);
        context.bezierCurveTo(619.01, 1113.21, 619.75, 1115.96, 621.56, 1116.4);
        context.bezierCurveTo(623.84, 1115.83, 622.53, 1110.87, 620.24, 1111.88);
        context.closePath();
        context.moveTo(621.61, 1118.61);
        context.bezierCurveTo(620.43, 1119.93, 621.2, 1122.53, 622.95, 1123);
        context.bezierCurveTo(625.45, 1122.59, 623.92, 1117.45, 621.61, 1118.61);
        context.closePath();
        context.moveTo(831.6, 1140.88);
        context.bezierCurveTo(831.69, 1142.43, 831.79, 1143.99, 831.88, 1145.57);
        context.bezierCurveTo(832.24, 1145.39, 832.99, 1145, 833.35, 1144.81);
        context.bezierCurveTo(834.13, 1143.08, 834.95, 1141.37, 835.69, 1139.65);
        context.bezierCurveTo(834.27, 1139.91, 832.92, 1140.32, 831.6, 1140.88);
        context.closePath();
        context.fillStyle = fillColor261;
        context.fill();


    }

    function drawPath583() {
        context.beginPath();
        context.moveTo(1038.64, 762.47);
        context.bezierCurveTo(1034.89, 760.32, 1036.25, 754.71, 1039.88, 753.37);
        context.bezierCurveTo(1043, 753.44, 1046.13, 754.16, 1048.88, 755.71);
        context.bezierCurveTo(1048.95, 755.75, 1049.05, 755.81, 1049.12, 755.84);
        context.bezierCurveTo(1051.09, 757.19, 1053.56, 758.41, 1054.45, 760.84);
        context.bezierCurveTo(1055.55, 763.97, 1057.59, 766.61, 1059.67, 769.17);
        context.bezierCurveTo(1061.15, 771.47, 1062.75, 774.17, 1062.29, 777.04);
        context.bezierCurveTo(1061.64, 779.12, 1062.85, 781.01, 1064.68, 782);
        context.bezierCurveTo(1068.01, 784.49, 1068.91, 791.36, 1064.77, 793.52);
        context.bezierCurveTo(1063.17, 793.89, 1062.41, 794.85, 1062.48, 796.39);
        context.lineTo(1062.48, 797.91);
        context.bezierCurveTo(1057.91, 801.27, 1049.97, 798.68, 1050.99, 792.33);
        context.bezierCurveTo(1051.65, 790.33, 1050.08, 788.71, 1048.99, 787.28);
        context.bezierCurveTo(1047.29, 784.92, 1046.67, 781.84, 1046.75, 778.99);
        context.bezierCurveTo(1047, 776.23, 1047.09, 772.87, 1044.43, 771.21);
        context.lineTo(1044.33, 770.85);
        context.bezierCurveTo(1044.05, 767.12, 1041.43, 764.59, 1038.64, 762.47);
        context.closePath();
        context.fillStyle = fillColor148;
        context.fill();


    }

    function drawPath584() {
        context.save();
        context.globalAlpha = 0.78;
        context.beginPath();
        context.moveTo(1048.88, 755.71);
        context.bezierCurveTo(1048.95, 755.75, 1049.05, 755.81, 1049.12, 755.84);
        context.bezierCurveTo(1049.05, 755.81, 1048.95, 755.75, 1048.88, 755.71);
        context.closePath();
        context.fillStyle = fillColor503;
        context.fill();
        context.restore();


    }

    function drawPath585() {
        context.beginPath();
        context.moveTo(641.97, 761.72);
        context.bezierCurveTo(642.77, 760, 643.65, 758.32, 644.51, 756.64);
        context.bezierCurveTo(650.12, 763.37, 659.8, 764.64, 668.12, 764.8);
        context.bezierCurveTo(668.13, 765.8, 668.19, 767.81, 668.21, 768.83);
        context.bezierCurveTo(664.31, 768.57, 660.39, 768.47, 656.55, 767.8);
        context.bezierCurveTo(651.29, 766.83, 646.76, 763.88, 641.97, 761.72);
        context.closePath();
        context.fillStyle = fillColor504;
        context.fill();


    }

    function drawPath586() {
        context.beginPath();
        context.moveTo(807.96, 758.07);
        context.bezierCurveTo(808.56, 757.97, 809.75, 757.8, 810.35, 757.71);
        context.bezierCurveTo(809.63, 759.83, 808.83, 759.95, 807.96, 758.07);
        context.closePath();
        context.fillStyle = fillColor505;
        context.fill();


    }

    function drawPath587() {
        context.beginPath();
        context.moveTo(805.75, 764.84);
        context.bezierCurveTo(811.44, 762.19, 816.92, 758.29, 823.44, 758.25);
        context.bezierCurveTo(818.47, 762.41, 812.15, 764.29, 806.25, 766.73);
        context.bezierCurveTo(806.13, 766.25, 805.88, 765.31, 805.75, 764.84);
        context.closePath();
        context.fillStyle = fillColor506;
        context.fill();


    }

    function drawPath588() {
        context.beginPath();
        context.moveTo(675.12, 761.23);
        context.bezierCurveTo(681.31, 761.03, 687.28, 762.81, 693.39, 763.52);
        context.bezierCurveTo(703.09, 764.76, 712.79, 765.99, 722.43, 767.65);
        context.bezierCurveTo(727.33, 768.48, 732.31, 767.97, 737.15, 766.99);
        context.bezierCurveTo(737.76, 770.69, 740.63, 771.37, 743.93, 770.99);
        context.bezierCurveTo(745.19, 772.36, 746.45, 773.73, 747.75, 775.12);
        context.bezierCurveTo(747.32, 775.73, 746.47, 776.97, 746.04, 777.59);
        context.lineTo(745.05, 777.35);
        context.bezierCurveTo(744.52, 778.79, 743.99, 780.21, 743.45, 781.67);
        context.bezierCurveTo(739.59, 784.2, 735.12, 784.73, 730.65, 783.67);
        context.bezierCurveTo(727.77, 786.41, 723.65, 785.28, 720.08, 785.55);
        context.bezierCurveTo(712.75, 785.84, 706.12, 781.63, 698.73, 782.16);
        context.bezierCurveTo(695.73, 780.61, 692.65, 779.21, 689.73, 777.53);
        context.bezierCurveTo(688.99, 777.35, 687.49, 776.97, 686.75, 776.79);
        context.bezierCurveTo(682.95, 774.27, 677.91, 774.63, 674.55, 771.37);
        context.bezierCurveTo(669.88, 771.65, 668.01, 765.72, 672.07, 763.28);
        context.bezierCurveTo(673.09, 762.6, 674.08, 761.88, 675.12, 761.23);
        context.closePath();
        context.fillStyle = fillColor507;
        context.fill();


    }

    function drawPath589() {
        context.beginPath();
        context.moveTo(1054.45, 760.84);
        context.bezierCurveTo(1056.39, 763.47, 1058.08, 766.29, 1059.67, 769.17);
        context.bezierCurveTo(1057.59, 766.61, 1055.55, 763.97, 1054.45, 760.84);
        context.closePath();
        context.fillStyle = fillColor344;
        context.fill();


    }

    function drawPath590() {
        context.save();
        context.globalAlpha = 0.78;
        context.beginPath();
        context.moveTo(1038.64, 762.47);
        context.bezierCurveTo(1041.43, 764.59, 1044.05, 767.12, 1044.33, 770.85);
        context.bezierCurveTo(1042.13, 768.27, 1040.28, 765.41, 1038.64, 762.47);
        context.closePath();
        context.fillStyle = fillColor508;
        context.fill();
        context.restore();


    }

    function drawPath591() {
        context.beginPath();
        context.moveTo(722.43, 767.65);
        context.bezierCurveTo(729.49, 767.76, 736.48, 766.45, 743.47, 765.48);
        context.bezierCurveTo(744.19, 766.08, 745.63, 767.31, 746.35, 767.91);
        context.bezierCurveTo(747.47, 770.13, 748.79, 772.6, 747.75, 775.12);
        context.bezierCurveTo(746.45, 773.73, 745.19, 772.36, 743.93, 770.99);
        context.bezierCurveTo(740.63, 771.37, 737.76, 770.69, 737.15, 766.99);
        context.bezierCurveTo(732.31, 767.97, 727.33, 768.48, 722.43, 767.65);
        context.closePath();
        context.fillStyle = fillColor509;
        context.fill();


    }

    function drawPath592() {
        context.beginPath();
        context.moveTo(806.64, 768.05);
        context.bezierCurveTo(809.53, 767.04, 812.55, 766.44, 815.63, 766.31);
        context.bezierCurveTo(812.41, 768.43, 808.87, 769.97, 805.13, 770.93);
        context.lineTo(806.45, 768.11);
        context.lineTo(806.64, 768.05);
        context.closePath();
        context.fillStyle = fillColor510;
        context.fill();


    }

    function drawPath593() {
        context.beginPath();
        context.moveTo(789.8, 770.57);
        context.bezierCurveTo(795.4, 769.96, 800.73, 767.33, 806.45, 768.11);
        context.lineTo(805.13, 770.93);
        context.bezierCurveTo(795.49, 774.52, 785.19, 775.21, 775.05, 776.13);
        context.bezierCurveTo(766.43, 777.96, 757.44, 780.33, 748.64, 778.24);
        context.bezierCurveTo(749.19, 777.45, 750.28, 775.87, 750.83, 775.08);
        context.bezierCurveTo(763.96, 774.77, 776.77, 771.81, 789.8, 770.57);
        context.closePath();
        context.fillStyle = fillColor511;
        context.fill();


    }

    function drawPath594() {
        context.save();
        context.globalAlpha = 0.75;
        context.beginPath();
        context.moveTo(1044.43, 771.21);
        context.bezierCurveTo(1047.09, 772.87, 1047, 776.23, 1046.75, 778.99);
        context.bezierCurveTo(1044.68, 777.8, 1043.89, 773.55, 1044.43, 771.21);
        context.closePath();
        context.fillStyle = fillColor512;
        context.fill();
        context.restore();


    }

    function drawPath595() {
        context.beginPath();
        context.moveTo(992.92, 783.21);
        context.bezierCurveTo(989.07, 781.04, 990.49, 774.21, 994.57, 773.43);
        context.bezierCurveTo(1001.19, 774.76, 1007, 779.12, 1010.99, 784.43);
        context.bezierCurveTo(1011.79, 787.21, 1012.69, 790.01, 1014.47, 792.36);
        context.bezierCurveTo(1015.72, 794.35, 1016.83, 796.41, 1017.85, 798.55);
        context.bezierCurveTo(1017.88, 798.6, 1017.93, 798.72, 1017.96, 798.77);
        context.bezierCurveTo(1018.72, 800.72, 1019.95, 802.61, 1020.11, 804.77);
        context.bezierCurveTo(1020.04, 805.61, 1019.89, 807.29, 1019.83, 808.13);
        context.bezierCurveTo(1019.36, 809.68, 1018.36, 810.65, 1016.85, 811.05);
        context.bezierCurveTo(1016.31, 811.49, 1015.23, 812.35, 1014.68, 812.77);
        context.bezierCurveTo(1013.19, 816.35, 1008.52, 816.07, 1005.35, 815.52);
        context.bezierCurveTo(1003.77, 809.6, 1002.52, 803.56, 1000.16, 797.91);
        context.lineTo(1000.11, 797.75);
        context.bezierCurveTo(998.28, 792.69, 997.47, 786.68, 992.92, 783.21);
        context.closePath();
        context.fillStyle = fillColor148;
        context.fill();


    }

    function drawPath596() {
        context.beginPath();
        context.moveTo(1062.29, 777.04);
        context.bezierCurveTo(1064.44, 776.68, 1065.43, 780.37, 1064.68, 782);
        context.bezierCurveTo(1062.85, 781.01, 1061.64, 779.12, 1062.29, 777.04);
        context.closePath();
        context.fillStyle = fillColor344;
        context.fill();


    }

    function drawPath597() {
        context.beginPath();
        context.moveTo(606.53, 784.33);
        context.bezierCurveTo(614.09, 784, 621.67, 783.93, 629.23, 783.77);
        context.bezierCurveTo(637.2, 783.97, 645.76, 783.69, 653.01, 787.52);
        context.bezierCurveTo(655.64, 788.75, 655.08, 791.76, 655.11, 794.12);
        context.bezierCurveTo(656.79, 794.83, 658.48, 795.53, 660.19, 796.24);
        context.bezierCurveTo(654.48, 794.44, 648.57, 797.64, 642.92, 795.69);
        context.bezierCurveTo(646.09, 795.69, 649.28, 795.57, 652.45, 795.27);
        context.bezierCurveTo(650, 788.67, 641.49, 790.44, 636.33, 792.37);
        context.bezierCurveTo(632.39, 790.8, 628.12, 790.73, 623.96, 790.37);
        context.bezierCurveTo(617.41, 789.13, 610.76, 787.39, 604.07, 788.35);
        context.bezierCurveTo(598.4, 789.21, 592.65, 789.05, 586.95, 789.23);
        context.bezierCurveTo(586.53, 788.81, 585.72, 787.99, 585.32, 787.59);
        context.bezierCurveTo(592.19, 785.36, 599.4, 784.96, 606.53, 784.33);
        context.closePath();
        context.fillStyle = fillColor299;
        context.fill();


    }

    function drawPath598() {
        context.beginPath();
        context.moveTo(992.92, 783.21);
        context.bezierCurveTo(997.47, 786.68, 998.28, 792.69, 1000.11, 797.75);
        context.bezierCurveTo(998.27, 792.63, 995.95, 787.73, 992.92, 783.21);
        context.closePath();
        context.fillStyle = fillColor344;
        context.fill();


    }

    function drawPath599() {
        context.beginPath();
        context.moveTo(1010.99, 784.43);
        context.bezierCurveTo(1012.48, 786.91, 1013.48, 789.64, 1014.47, 792.36);
        context.bezierCurveTo(1012.69, 790.01, 1011.79, 787.21, 1010.99, 784.43);
        context.closePath();
        context.fillStyle = fillColor344;
        context.fill();


    }

    function drawPath600() {
        context.beginPath();
        context.moveTo(1048.99, 787.28);
        context.bezierCurveTo(1050.08, 788.71, 1051.65, 790.33, 1050.99, 792.33);
        context.bezierCurveTo(1048.48, 792.97, 1047.81, 788.79, 1048.99, 787.28);
        context.closePath();
        context.fillStyle = fillColor103;
        context.fill();


    }

    function drawPath601() {
        context.beginPath();
        context.moveTo(586.95, 789.23);
        context.bezierCurveTo(592.65, 789.05, 598.4, 789.21, 604.07, 788.35);
        context.bezierCurveTo(610.76, 787.39, 617.41, 789.13, 623.96, 790.37);
        context.bezierCurveTo(628.12, 790.73, 632.39, 790.8, 636.33, 792.37);
        context.bezierCurveTo(638.59, 793.33, 640.77, 794.49, 642.92, 795.69);
        context.bezierCurveTo(648.57, 797.64, 654.48, 794.44, 660.19, 796.24);
        context.bezierCurveTo(662.71, 797.04, 665.07, 798.59, 667.75, 798.84);
        context.bezierCurveTo(671.89, 796.76, 675.68, 793.88, 680.31, 792.88);
        context.bezierCurveTo(680.04, 791.33, 679.88, 789.76, 679.44, 788.25);
        context.bezierCurveTo(680.27, 789.59, 681.32, 791.41, 683.15, 791.56);
        context.bezierCurveTo(694.51, 790.13, 706.84, 793.55, 714.92, 801.91);
        context.bezierCurveTo(718.69, 803.47, 721.27, 806.85, 721.4, 811.01);
        context.bezierCurveTo(724.88, 815.12, 725.72, 820.56, 728.2, 825.23);
        context.bezierCurveTo(729.89, 835.2, 731.19, 845.97, 727.64, 855.65);
        context.bezierCurveTo(727.85, 858.16, 728.69, 860.8, 727.41, 863.19);
        context.bezierCurveTo(725.53, 867.33, 724.59, 872.19, 720.84, 875.16);
        context.bezierCurveTo(719.92, 879.49, 719.43, 884.49, 714.59, 886.16);
        context.bezierCurveTo(713.93, 888.39, 713.77, 890.96, 712.19, 892.8);
        context.bezierCurveTo(709.93, 894.63, 707.31, 896.03, 705.56, 898.41);
        context.bezierCurveTo(702.96, 901.92, 698.75, 903.57, 695.53, 906.43);
        context.bezierCurveTo(690.25, 907.07, 687.17, 912.24, 681.89, 912.75);
        context.bezierCurveTo(680.29, 912.95, 678.72, 913.16, 677.16, 913.41);
        context.bezierCurveTo(674.07, 916.61, 672.68, 921.72, 668.16, 923.39);
        context.bezierCurveTo(659.48, 925.99, 649.97, 925.99, 641.84, 930.25);
        context.bezierCurveTo(638.68, 931.67, 635.16, 930.73, 631.85, 930.6);
        context.lineTo(631.89, 931.79);
        context.bezierCurveTo(626.71, 937.53, 619.08, 941.37, 611.27, 941.2);
        context.bezierCurveTo(608.29, 947.48, 601.84, 950.53, 595.25, 951.41);
        context.bezierCurveTo(589.83, 953.09, 584.19, 952.32, 578.81, 950.95);
        context.bezierCurveTo(574.09, 951.57, 569.23, 953.2, 564.61, 951.13);
        context.bezierCurveTo(560.41, 949.13, 556.25, 951.92, 552.04, 952.05);
        context.bezierCurveTo(546.15, 951.41, 540.48, 949.48, 534.65, 948.48);
        context.bezierCurveTo(530.96, 948, 529.12, 943.83, 525.37, 943.57);
        context.bezierCurveTo(520.59, 943.13, 516.63, 940.25, 513.87, 936.48);
        context.bezierCurveTo(510.69, 935.31, 507.39, 934.08, 505.24, 931.32);
        context.bezierCurveTo(499.79, 925.16, 493.93, 919.23, 489.64, 912.15);
        context.bezierCurveTo(486.68, 907.55, 488.24, 901.51, 484.96, 897.05);
        context.bezierCurveTo(481.96, 892.6, 481.19, 887.21, 480.89, 881.99);
        context.bezierCurveTo(480.33, 875.77, 483.01, 869.91, 483.43, 863.76);
        context.bezierCurveTo(486.13, 855.4, 488.36, 846.12, 494.99, 839.89);
        context.bezierCurveTo(496.15, 837.59, 497.29, 835.17, 499.47, 833.65);
        context.bezierCurveTo(507.31, 826.32, 515.09, 818.51, 524.84, 813.75);
        context.bezierCurveTo(528.43, 810.71, 532.11, 807.63, 536.81, 806.52);
        context.bezierCurveTo(540.69, 805.61, 543.56, 802.79, 546.93, 800.89);
        context.bezierCurveTo(549.89, 799.85, 553.12, 799.85, 556.11, 798.84);
        context.bezierCurveTo(559.28, 797.51, 561.89, 794.92, 565.37, 794.33);
        context.bezierCurveTo(568.97, 793.44, 572.97, 794.03, 576.24, 791.96);
        context.bezierCurveTo(579.49, 790.08, 583.21, 789.37, 586.95, 789.23);
        context.closePath();
        context.moveTo(670.17, 811.12);
        context.bezierCurveTo(669.83, 813, 670.17, 814.89, 670.79, 816.69);
        context.bezierCurveTo(671.07, 815.65, 671.63, 813.57, 671.91, 812.53);
        context.bezierCurveTo(672.75, 811.84, 673.6, 811.15, 674.48, 810.47);
        context.bezierCurveTo(673.03, 810.68, 671.6, 810.91, 670.17, 811.12);
        context.closePath();
        context.fillStyle = fillColor261;
        context.fill();


    }

    function drawPath602() {
        context.beginPath();
        context.moveTo(636.33, 792.37);
        context.bezierCurveTo(641.49, 790.44, 650, 788.67, 652.45, 795.27);
        context.bezierCurveTo(649.28, 795.57, 646.09, 795.69, 642.92, 795.69);
        context.bezierCurveTo(640.77, 794.49, 638.59, 793.33, 636.33, 792.37);
        context.closePath();
        context.fillStyle = fillColor462;
        context.fill();


    }

    function drawPath603() {
        context.save();
        context.globalAlpha = 0.6;
        context.beginPath();
        context.moveTo(1062.48, 796.39);
        context.bezierCurveTo(1062.41, 794.85, 1063.17, 793.89, 1064.77, 793.52);
        context.bezierCurveTo(1065.29, 795.64, 1064.53, 796.6, 1062.48, 796.39);
        context.closePath();
        context.fillStyle = fillColor513;
        context.fill();
        context.restore();


    }

    function drawPath604() {
        context.save();
        context.globalAlpha = 0.36;
        context.beginPath();
        context.moveTo(1017.85, 798.55);
        context.bezierCurveTo(1017.88, 798.6, 1017.93, 798.72, 1017.96, 798.77);
        context.bezierCurveTo(1017.93, 798.72, 1017.88, 798.6, 1017.85, 798.55);
        context.closePath();
        context.fillStyle = fillColor514;
        context.fill();
        context.restore();


    }

    function drawPath605() {
        context.save();
        context.globalAlpha = 0.7;
        context.beginPath();
        context.moveTo(1000.16, 797.91);
        context.bezierCurveTo(1002.52, 803.56, 1003.77, 809.6, 1005.35, 815.52);
        context.bezierCurveTo(1001.68, 810.59, 1000.96, 803.87, 1000.16, 797.91);
        context.closePath();
        context.fillStyle = fillColor515;
        context.fill();
        context.restore();


    }

    function drawPath606() {
        context.save();
        context.globalAlpha = 0.48;
        context.beginPath();
        context.moveTo(1020.11, 804.77);
        context.bezierCurveTo(1022.53, 804.05, 1022.09, 809.16, 1019.83, 808.13);
        context.bezierCurveTo(1019.89, 807.29, 1020.04, 805.61, 1020.11, 804.77);
        context.closePath();
        context.fillStyle = fillColor516;
        context.fill();
        context.restore();


    }

    function drawPath607() {
        context.beginPath();
        context.moveTo(670.17, 811.12);
        context.bezierCurveTo(671.6, 810.91, 673.03, 810.68, 674.48, 810.47);
        context.bezierCurveTo(673.6, 811.15, 672.75, 811.84, 671.91, 812.53);
        context.bezierCurveTo(671.63, 813.57, 671.07, 815.65, 670.79, 816.69);
        context.bezierCurveTo(670.17, 814.89, 669.83, 813, 670.17, 811.12);
        context.closePath();
        context.fillStyle = fillColor56;
        context.fill();


    }

    function drawPath608() {
        context.save();
        context.globalAlpha = 0.65;
        context.beginPath();
        context.moveTo(1014.68, 812.77);
        context.bezierCurveTo(1015.23, 812.35, 1016.31, 811.49, 1016.85, 811.05);
        context.lineTo(1016.91, 812.28);
        context.lineTo(1015.8, 813.16);
        context.lineTo(1014.68, 812.77);
        context.closePath();
        context.fillStyle = fillColor517;
        context.fill();
        context.restore();


    }

    function drawPath609() {
        context.beginPath();
        context.moveTo(414.68, 819.52);
        context.bezierCurveTo(420.87, 817.69, 427.24, 816.65, 433.35, 814.56);
        context.bezierCurveTo(436.81, 813.87, 443.07, 813.43, 443.48, 818.19);
        context.bezierCurveTo(441.61, 822.23, 443.55, 828.12, 438.91, 830.51);
        context.bezierCurveTo(435.92, 832.69, 431.81, 832.76, 429.24, 835.63);
        context.bezierCurveTo(427.72, 835.8, 426.2, 835.96, 424.68, 836.12);
        context.bezierCurveTo(421.76, 839.33, 426.15, 843.6, 423.2, 846.61);
        context.bezierCurveTo(419.27, 850.55, 420.37, 856.53, 417.75, 861.08);
        context.bezierCurveTo(415.28, 866.95, 411.09, 873.85, 404.04, 874.27);
        context.bezierCurveTo(397.64, 875, 389.96, 873.52, 386.17, 867.79);
        context.bezierCurveTo(376.44, 855.56, 379.11, 836.97, 388.95, 825.64);
        context.bezierCurveTo(396.51, 820.57, 405.8, 819.49, 414.68, 819.52);
        context.closePath();
        context.moveTo(398.05, 837.87);
        context.bezierCurveTo(396.53, 843.27, 395.55, 848.75, 397.21, 854.28);
        context.bezierCurveTo(397.93, 854.69, 399.39, 855.53, 400.12, 855.95);
        context.bezierCurveTo(400.81, 855.52, 402.23, 854.65, 402.93, 854.23);
        context.bezierCurveTo(405.61, 847.61, 409.13, 841.2, 409.93, 834);
        context.bezierCurveTo(405.55, 834.15, 402.47, 838.01, 398.05, 837.87);
        context.closePath();
        context.fillStyle = fillColor494;
        context.fill();


    }

    function drawPath610() {
        context.beginPath();
        context.moveTo(398.05, 837.87);
        context.bezierCurveTo(402.47, 838.01, 405.55, 834.15, 409.93, 834);
        context.bezierCurveTo(409.13, 841.2, 405.61, 847.61, 402.93, 854.23);
        context.bezierCurveTo(402.23, 854.65, 400.81, 855.52, 400.12, 855.95);
        context.bezierCurveTo(399.39, 855.53, 397.93, 854.69, 397.21, 854.28);
        context.bezierCurveTo(395.55, 848.75, 396.53, 843.27, 398.05, 837.87);
        context.closePath();
        context.fillStyle = fillColor518;
        context.fill();


    }

    function drawPath611() {
        context.beginPath();
        context.moveTo(479.08, 877.96);
        context.bezierCurveTo(479.77, 873.04, 479.47, 867.43, 483.43, 863.76);
        context.bezierCurveTo(483.01, 869.91, 480.33, 875.77, 480.89, 881.99);
        context.bezierCurveTo(481.19, 887.21, 481.96, 892.6, 484.96, 897.05);
        context.bezierCurveTo(488.24, 901.51, 486.68, 907.55, 489.64, 912.15);
        context.bezierCurveTo(493.93, 919.23, 499.79, 925.16, 505.24, 931.32);
        context.bezierCurveTo(507.39, 934.08, 510.69, 935.31, 513.87, 936.48);
        context.bezierCurveTo(516.63, 940.25, 520.59, 943.13, 525.37, 943.57);
        context.bezierCurveTo(529.12, 943.83, 530.96, 948, 534.65, 948.48);
        context.bezierCurveTo(540.48, 949.48, 546.15, 951.41, 552.04, 952.05);
        context.bezierCurveTo(556.25, 951.92, 560.41, 949.13, 564.61, 951.13);
        context.bezierCurveTo(569.23, 953.2, 574.09, 951.57, 578.81, 950.95);
        context.bezierCurveTo(584.19, 952.32, 589.83, 953.09, 595.25, 951.41);
        context.bezierCurveTo(601.59, 953.48, 607.69, 949.8, 613.88, 948.88);
        context.bezierCurveTo(620.35, 947.69, 626.68, 945.8, 632.72, 943.17);
        context.bezierCurveTo(640.2, 940.44, 647.57, 937.43, 654.79, 934.03);
        context.bezierCurveTo(661.77, 931.28, 667.61, 926.48, 673.96, 922.59);
        context.bezierCurveTo(675.92, 921.03, 678.17, 922.92, 680.17, 923.43);
        context.bezierCurveTo(678.87, 929.61, 673.63, 933.17, 668.36, 935.85);
        context.bezierCurveTo(661.55, 941.17, 653.12, 943.51, 645.48, 947.31);
        context.bezierCurveTo(639.88, 948.23, 635.03, 950.93, 630.32, 953.93);
        context.bezierCurveTo(623.92, 955.05, 617.64, 956.67, 611.39, 958.4);
        context.bezierCurveTo(603.72, 960.13, 595.97, 961.84, 588.07, 961.79);
        context.bezierCurveTo(569.19, 961.77, 550.19, 960.61, 531.67, 956.92);
        context.bezierCurveTo(517.61, 951.44, 503.09, 944.72, 493.63, 932.49);
        context.bezierCurveTo(489.41, 927.35, 486.93, 921.13, 484.19, 915.16);
        context.bezierCurveTo(478.43, 903.75, 477.51, 890.47, 479.08, 877.96);
        context.closePath();
        context.fillStyle = fillColor344;
        context.fill();


    }

    function drawPath612() {
        context.beginPath();
        context.moveTo(369.6, 883.61);
        context.bezierCurveTo(376.19, 882.01, 383.85, 880.07, 390.13, 883.63);
        context.bezierCurveTo(392.04, 884.48, 394.4, 884.45, 396.04, 885.88);
        context.bezierCurveTo(396.39, 889.84, 397.24, 893.97, 396.2, 897.88);
        context.bezierCurveTo(393.11, 901.68, 388.23, 901.07, 383.99, 900.32);
        context.bezierCurveTo(378.83, 900.85, 371.44, 900.65, 369.79, 906.91);
        context.bezierCurveTo(366.55, 910.93, 372.04, 915.4, 369.76, 919.63);
        context.bezierCurveTo(368.73, 921.4, 367.07, 922.69, 365.63, 924.13);
        context.bezierCurveTo(363.16, 923.68, 360.03, 924.59, 358.24, 922.36);
        context.bezierCurveTo(355.47, 919.29, 353.73, 915.45, 350.88, 912.47);
        context.bezierCurveTo(347.56, 908.85, 345.36, 903.41, 347.43, 898.65);
        context.bezierCurveTo(349.67, 898.35, 351.97, 898.2, 354.2, 898.81);
        context.bezierCurveTo(354.8, 897.25, 354.97, 895.45, 356.12, 894.2);
        context.bezierCurveTo(360.09, 890.08, 363.65, 884.93, 369.6, 883.61);
        context.closePath();
        context.fillStyle = fillColor436;
        context.fill();


    }

    function drawPath613() {
        context.beginPath();
        context.moveTo(312.92, 906.93);
        context.bezierCurveTo(316.71, 904.87, 319.15, 901.23, 322.44, 898.59);
        context.bezierCurveTo(324.87, 898.53, 328.49, 897.72, 329.61, 900.64);
        context.bezierCurveTo(330.05, 902.96, 328.99, 905.12, 328, 907.16);
        context.bezierCurveTo(327.68, 908.95, 327.39, 910.75, 327.08, 912.57);
        context.bezierCurveTo(324.24, 913.83, 321.79, 915.79, 319, 917.12);
        context.bezierCurveTo(315.53, 918.28, 312.01, 916.77, 308.88, 915.39);
        context.bezierCurveTo(308.05, 911.87, 309.8, 908.6, 312.92, 906.93);
        context.closePath();
        context.fillStyle = fillColor519;
        context.fill();


    }

    function drawPath614() {
        context.beginPath();
        context.moveTo(328.41, 931.25);
        context.bezierCurveTo(327.89, 928.81, 328.72, 924.69, 332.03, 925.17);
        context.bezierCurveTo(339.16, 925.55, 343.31, 932.2, 348.11, 936.59);
        context.bezierCurveTo(352.31, 939.49, 349, 944.69, 349.63, 948.83);
        context.bezierCurveTo(348.31, 949.95, 347.01, 951.09, 345.55, 952.01);
        context.bezierCurveTo(342.99, 951.43, 340.69, 950.11, 338.36, 948.96);
        context.bezierCurveTo(335.97, 942.52, 330.43, 937.84, 328.41, 931.25);
        context.closePath();
        context.fillStyle = fillColor520;
        context.fill();


    }

    function drawPath615() {
        context.beginPath();
        context.moveTo(611.27, 941.2);
        context.bezierCurveTo(619.08, 941.37, 626.71, 937.53, 631.89, 931.79);
        context.bezierCurveTo(632.32, 935.56, 632.67, 939.36, 632.72, 943.17);
        context.bezierCurveTo(626.68, 945.8, 620.35, 947.69, 613.88, 948.88);
        context.bezierCurveTo(613.37, 946.2, 613.52, 943.12, 611.27, 941.2);
        context.closePath();
        context.fillStyle = fillColor521;
        context.fill();


    }

    function drawPath616() {
        context.beginPath();
        context.moveTo(595.25, 951.41);
        context.bezierCurveTo(601.84, 950.53, 608.29, 947.48, 611.27, 941.2);
        context.bezierCurveTo(613.52, 943.12, 613.37, 946.2, 613.88, 948.88);
        context.bezierCurveTo(607.69, 949.8, 601.59, 953.48, 595.25, 951.41);
        context.closePath();
        context.fillStyle = fillColor522;
        context.fill();


    }

    function drawPath617() {
        context.beginPath();
        context.moveTo(668.52, 954.07);
        context.bezierCurveTo(668.92, 945.76, 682.08, 943.93, 685.67, 950.91);
        context.bezierCurveTo(686.13, 952.48, 686.43, 954.11, 686.56, 955.79);
        context.bezierCurveTo(688.64, 959.36, 689.89, 965.13, 686.03, 967.96);
        context.bezierCurveTo(684.17, 969.07, 683.89, 971.33, 683.09, 973.17);
        context.bezierCurveTo(681.99, 973.75, 680.89, 974.33, 679.81, 974.93);
        context.bezierCurveTo(679.39, 976.93, 679.08, 979.72, 676.67, 980.25);
        context.bezierCurveTo(671.73, 980.89, 666.41, 980.53, 663.27, 976.19);
        context.bezierCurveTo(662.37, 971.36, 660.99, 966.01, 663.4, 961.41);
        context.bezierCurveTo(665.4, 959.23, 668.12, 961, 670.36, 961.76);
        context.bezierCurveTo(670.37, 959.03, 668.24, 956.73, 668.52, 954.07);
        context.closePath();
        context.fillStyle = fillColor261;
        context.fill();


    }

    function drawPath618() {
        context.beginPath();
        context.moveTo(696.87, 949.49);
        context.bezierCurveTo(702.03, 949.03, 708.43, 948.19, 712.36, 952.36);
        context.bezierCurveTo(716.07, 956.15, 714.23, 961.72, 712.96, 966.13);
        context.bezierCurveTo(715.24, 966.65, 717.93, 966.84, 719.57, 968.8);
        context.bezierCurveTo(721.84, 970.95, 721.2, 974.28, 720.75, 977.04);
        context.bezierCurveTo(719.08, 977.72, 717.43, 978.44, 715.77, 979.13);
        context.bezierCurveTo(714.27, 981.41, 712.56, 984.55, 709.31, 983.96);
        context.bezierCurveTo(701.81, 983.11, 696.16, 974.63, 697.83, 967.36);
        context.bezierCurveTo(699.09, 965.11, 700.32, 962.83, 701.19, 960.39);
        context.bezierCurveTo(699.32, 959.57, 697.49, 958.79, 695.64, 958.04);
        context.bezierCurveTo(695.28, 955.09, 695.33, 952.11, 696.87, 949.49);
        context.closePath();
        context.fillStyle = fillColor452;
        context.fill();


    }

    function drawPath619() {
        context.beginPath();
        context.moveTo(729.95, 959.75);
        context.bezierCurveTo(729.37, 956.16, 731.12, 952.29, 734.55, 950.85);
        context.bezierCurveTo(738.03, 950.49, 742.01, 950.67, 744.59, 953.4);
        context.bezierCurveTo(747.25, 955.49, 746.23, 959.33, 746.97, 962.27);
        context.bezierCurveTo(749.88, 962.67, 753.28, 963.37, 754.88, 966.15);
        context.bezierCurveTo(756.05, 970.53, 753.33, 974.95, 750.8, 978.32);
        context.bezierCurveTo(746.88, 979.99, 742.45, 977.57, 738.63, 980.24);
        context.bezierCurveTo(735.52, 977.99, 731.48, 975.71, 731.09, 971.47);
        context.bezierCurveTo(729.92, 967.8, 732.03, 964.48, 734.25, 961.79);
        context.bezierCurveTo(732.8, 961.11, 731.37, 960.43, 729.95, 959.75);
        context.closePath();
        context.fillStyle = fillColor452;
        context.fill();


    }

    function drawPath620() {
        context.beginPath();
        context.moveTo(271.76, 954.84);
        context.bezierCurveTo(273.67, 954.67, 275.6, 954.67, 277.52, 954.87);
        context.bezierCurveTo(278.27, 959.19, 283.32, 960.95, 283.57, 965.31);
        context.bezierCurveTo(284.67, 965.79, 285.76, 966.28, 286.85, 966.8);
        context.bezierCurveTo(287.68, 968.55, 288.88, 970.07, 290.69, 970.92);
        context.bezierCurveTo(292.92, 967.19, 295.33, 963.44, 298.6, 960.56);
        context.bezierCurveTo(304.44, 956.77, 312.08, 954.41, 318.84, 957.01);
        context.bezierCurveTo(322.53, 958.31, 326.8, 956.33, 330.21, 958.67);
        context.bezierCurveTo(331.88, 959.79, 334.25, 960.6, 335.11, 962.51);
        context.bezierCurveTo(335.29, 967.67, 337.63, 975.29, 330.77, 977.13);
        context.bezierCurveTo(324.47, 976.69, 318.37, 973.97, 311.95, 974.52);
        context.bezierCurveTo(308.89, 976.08, 307.04, 979.11, 304.6, 981.4);
        context.bezierCurveTo(301.93, 986.89, 307.44, 994.39, 301.8, 998.59);
        context.bezierCurveTo(298.11, 999.39, 293.76, 998.79, 290.65, 996.63);
        context.bezierCurveTo(282.79, 987.21, 276.71, 976.44, 271.08, 965.6);
        context.bezierCurveTo(268.81, 962.15, 270.79, 958.33, 271.76, 954.84);
        context.closePath();
        context.fillStyle = fillColor494;
        context.fill();


    }

    function drawPath621() {
        context.beginPath();
        context.moveTo(611.39, 958.4);
        context.bezierCurveTo(617.64, 956.67, 623.92, 955.05, 630.32, 953.93);
        context.bezierCurveTo(630.93, 960.59, 629.57, 967.24, 630.28, 973.89);
        context.bezierCurveTo(630.31, 974.72, 630.33, 975.57, 630.39, 976.44);
        context.bezierCurveTo(629.12, 982.72, 628.72, 989.17, 626.85, 995.32);
        context.bezierCurveTo(624.93, 1000.83, 626.49, 1006.75, 625.17, 1012.37);
        context.bezierCurveTo(622.97, 1022.53, 622.23, 1032.93, 621.09, 1043.25);
        context.bezierCurveTo(621.07, 1048.15, 618.65, 1052.51, 616.71, 1056.87);
        context.bezierCurveTo(613.56, 1058.6, 610.24, 1060.03, 607.04, 1061.65);
        context.bezierCurveTo(604.68, 1059.56, 602.16, 1057.6, 600.09, 1055.23);
        context.bezierCurveTo(604.72, 1029.2, 607.35, 1002.85, 610.64, 976.64);
        context.bezierCurveTo(611.43, 970.6, 612.76, 964.45, 611.39, 958.4);
        context.closePath();
        context.fillStyle = fillColor461;
        context.fill();


    }

    function drawPath622() {
        context.beginPath();
        context.moveTo(635.63, 955.04);
        context.bezierCurveTo(641.01, 951.11, 648.65, 954.72, 650.97, 960.45);
        context.bezierCurveTo(650.48, 963.35, 649.76, 966.21, 649.27, 969.11);
        context.bezierCurveTo(653.79, 969.12, 658.96, 970.51, 660.69, 975.23);
        context.bezierCurveTo(660.68, 979.04, 656.29, 980.6, 655.19, 984.04);
        context.bezierCurveTo(653.53, 990.17, 645.52, 989.25, 641.13, 986.8);
        context.bezierCurveTo(635.01, 987.16, 631.47, 981.76, 630.39, 976.44);
        context.bezierCurveTo(630.33, 975.57, 630.31, 974.72, 630.28, 973.89);
        context.bezierCurveTo(632.09, 970.91, 634.15, 968.07, 636.55, 965.53);
        context.bezierCurveTo(634.96, 964.73, 633.59, 963.6, 632.33, 962.41);
        context.bezierCurveTo(633.04, 959.84, 632.79, 956.33, 635.63, 955.04);
        context.closePath();
        context.fillStyle = fillColor452;
        context.fill();


    }

    function drawPath623() {
        context.beginPath();
        context.moveTo(230.63, 983.16);
        context.bezierCurveTo(235.4, 980.56, 240.32, 977.36, 246.04, 978.47);
        context.bezierCurveTo(247.4, 981.87, 246.07, 985.48, 245.79, 988.97);
        context.bezierCurveTo(243.4, 990.6, 240.51, 991.69, 238.68, 994);
        context.bezierCurveTo(237.47, 997.08, 236.72, 1000.33, 235.44, 1003.4);
        context.bezierCurveTo(236.23, 1004.64, 237.01, 1005.89, 237.81, 1007.16);
        context.bezierCurveTo(237.52, 1008.31, 236.96, 1010.61, 236.67, 1011.76);
        context.bezierCurveTo(239.91, 1015.43, 242.25, 1019.81, 245.48, 1023.45);
        context.bezierCurveTo(250.35, 1025.72, 256.28, 1026.6, 261.32, 1024.4);
        context.bezierCurveTo(269.75, 1017.85, 274.11, 1007.93, 281.04, 1000.03);
        context.bezierCurveTo(282.96, 999.63, 284.89, 999.25, 286.83, 998.91);
        context.bezierCurveTo(289.57, 1001.43, 291.11, 1004.64, 290.49, 1008.44);
        context.bezierCurveTo(291.08, 1010.65, 291.31, 1012.96, 291.33, 1015.28);
        context.bezierCurveTo(289.43, 1017.49, 288.28, 1020.17, 287.01, 1022.77);
        context.bezierCurveTo(284.33, 1026.17, 281.49, 1029.51, 278.08, 1032.2);
        context.bezierCurveTo(276.65, 1037.85, 270.97, 1040.2, 266.37, 1042.84);
        context.bezierCurveTo(258.67, 1045.21, 250.16, 1045.56, 242.69, 1042.08);
        context.bezierCurveTo(236.37, 1040.21, 232.07, 1034.84, 228.21, 1029.87);
        context.bezierCurveTo(225.71, 1023.64, 221.33, 1018.08, 220.88, 1011.17);
        context.bezierCurveTo(220.07, 1003.81, 220.91, 995.23, 226.45, 989.79);
        context.bezierCurveTo(228.23, 987.83, 229.43, 985.47, 230.63, 983.16);
        context.closePath();
        context.fillStyle = fillColor494;
        context.fill();


    }

    function drawPath624() {
        context.beginPath();
        context.moveTo(726.69, 996.23);
        context.bezierCurveTo(739.23, 993.63, 752.39, 994.63, 764.59, 998.36);
        context.bezierCurveTo(772.28, 1001.29, 779.33, 1005.71, 785.84, 1010.73);
        context.bezierCurveTo(793.57, 1015.72, 800.19, 1022.2, 806.6, 1028.76);
        context.bezierCurveTo(809.05, 1031.13, 812.25, 1033.01, 813.37, 1036.45);
        context.bezierCurveTo(815.12, 1041.52, 819.09, 1045.23, 821.76, 1049.79);
        context.bezierCurveTo(825.05, 1055.28, 829.13, 1060.28, 832.05, 1066.01);
        context.bezierCurveTo(836.28, 1074.52, 843.28, 1081.56, 845.99, 1090.84);
        context.bezierCurveTo(848, 1097.91, 850.35, 1104.85, 853.23, 1111.63);
        context.bezierCurveTo(855.72, 1117.44, 854.92, 1123.92, 854.47, 1130.05);
        context.bezierCurveTo(854.01, 1136.03, 851.07, 1141.39, 849.4, 1147.05);
        context.bezierCurveTo(847.27, 1147.8, 845.15, 1148.52, 843.03, 1149.25);
        context.bezierCurveTo(847.67, 1143.84, 846.04, 1136.57, 846.36, 1130.05);
        context.bezierCurveTo(846.52, 1122.36, 844.68, 1114.89, 843.47, 1107.36);
        context.bezierCurveTo(842.27, 1100.88, 839.15, 1094.99, 837.43, 1088.67);
        context.bezierCurveTo(835.75, 1086.77, 834.49, 1084.59, 833.71, 1082.2);
        context.bezierCurveTo(828.37, 1072.68, 821.71, 1063.96, 813.95, 1056.31);
        context.bezierCurveTo(814.95, 1050.84, 810.01, 1046.79, 807.65, 1042.36);
        context.bezierCurveTo(803.73, 1035.32, 796.85, 1030.96, 791.19, 1025.52);
        context.bezierCurveTo(783.8, 1018.87, 775.59, 1013.05, 766.72, 1008.56);
        context.bezierCurveTo(755.44, 1003.71, 742.57, 1001.64, 730.49, 1004.4);
        context.bezierCurveTo(719.79, 1006.03, 708.97, 1007.03, 698.23, 1008.28);
        context.bezierCurveTo(688.28, 1009.56, 679.2, 1014.04, 669.8, 1017.24);
        context.bezierCurveTo(663.53, 1019.36, 657.63, 1022.35, 651.63, 1025.11);
        context.bezierCurveTo(650.83, 1021.68, 652.23, 1017.84, 655.67, 1016.52);
        context.bezierCurveTo(666.45, 1011.83, 676.15, 1004.63, 687.65, 1001.68);
        context.bezierCurveTo(700.44, 998.45, 713.72, 998.35, 726.69, 996.23);
        context.closePath();
        context.fillStyle = fillColor299;
        context.fill();


    }

    function drawPath625() {
        context.beginPath();
        context.moveTo(606.83, 1072.04);
        context.bezierCurveTo(607.44, 1072.04, 608.68, 1072.03, 609.31, 1072.03);
        context.bezierCurveTo(608.01, 1085.04, 600.93, 1096.35, 594.85, 1107.61);
        context.bezierCurveTo(594.57, 1101.28, 592.53, 1094.36, 595.71, 1088.43);
        context.bezierCurveTo(598.36, 1082.32, 601.37, 1076.15, 606.83, 1072.04);
        context.closePath();
        context.fillStyle = fillColor523;
        context.fill();


    }

    function drawPath626() {
        context.beginPath();
        context.moveTo(620.24, 1111.88);
        context.bezierCurveTo(622.53, 1110.87, 623.84, 1115.83, 621.56, 1116.4);
        context.bezierCurveTo(619.75, 1115.96, 619.01, 1113.21, 620.24, 1111.88);
        context.closePath();
        context.fillStyle = fillColor524;
        context.fill();


    }

    function drawPath627() {
        context.beginPath();
        context.moveTo(621.61, 1118.61);
        context.bezierCurveTo(623.92, 1117.45, 625.45, 1122.59, 622.95, 1123);
        context.bezierCurveTo(621.2, 1122.53, 620.43, 1119.93, 621.61, 1118.61);
        context.closePath();
        context.fillStyle = fillColor525;
        context.fill();


    }

    function drawPath628() {
        context.beginPath();
        context.moveTo(831.6, 1140.88);
        context.bezierCurveTo(832.92, 1140.32, 834.27, 1139.91, 835.69, 1139.65);
        context.bezierCurveTo(834.95, 1141.37, 834.13, 1143.08, 833.35, 1144.81);
        context.bezierCurveTo(832.99, 1145, 832.24, 1145.39, 831.88, 1145.57);
        context.bezierCurveTo(831.79, 1143.99, 831.69, 1142.43, 831.6, 1140.88);
        context.closePath();
        context.fillStyle = fillColor266;
        context.fill();

        context.restore();
    }
}

//// Infrastructure

function clearCanvas(canvas) {
    canvas = initializeCanvas(typeof canvas === 'string' ? document.getElementById(canvas) : canvas);
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
}

// Possible arguments for 'resizing' parameter are:
//   'aspectfit': The content is proportionally resized to fit into the target rectangle.
//   'aspectfill': The content is proportionally resized to compvarely fill the target rectangle.
//   'stretch': The content is stretched to match the entire target rectangle.
//   'center': The content is centered in the target rectangle, but it is NOT resized.
function applyResizingBehavior(resizing, rect, targetRect) {
    if (targetRect === undefined || equalRects(rect, targetRect) || equalRects(targetRect, makeRect(0, 0, 0, 0))) {
        return rect;
    }

    var scales = makeSize(0, 0);
    scales.w = Math.abs(targetRect.w / rect.w);
    scales.h = Math.abs(targetRect.h / rect.h);

    switch (resizing) {
        case 'aspectfit': {
            scales.w = Math.min(scales.w, scales.h);
            scales.h = scales.w;
            break;
        }
        case 'aspectfill': {
            scales.w = Math.max(scales.w, scales.h);
            scales.h = scales.w;
            break;
        }
        case 'stretch':
        case undefined:
            break;
        case 'center': {
            scales.w = 1;
            scales.h = 1;
            break;
        }
        default:
            throw 'Unknown resizing behavior "' + resizing + '". Use "aspectfit", "aspectfill", "stretch" or "center" as resizing behavior.';
    }

    var result = makeRect(Math.min(rect.x, rect.x + rect.w), Math.min(rect.y, rect.y + rect.h), Math.abs(rect.w), Math.abs(rect.h));
    result.w *= scales.w;
    result.h *= scales.h;
    result.x = targetRect.x + (targetRect.w - result.w) / 2;
    result.y = targetRect.y + (targetRect.h - result.h) / 2;
    return result;
}

function makeRect(x, y, w, h) {
    return {x: x, y: y, w: w, h: h};
}

function equalRects(r1, r2) {
    return r1.x === r2.x && r1.y === r2.y && r1.w == r2.w && r1.h === r2.h;
}

function makeSize(w, h) {
    return {w: w, h: h};
}

function initializeCanvas(canvas) {
    if ('paintCodePixelRatio' in canvas) return canvas;
    // This function should only be called once on each canvas.
    var context = canvas.getContext('2d');

    var devicePixelRatio = window.devicePixelRatio || 1;
    var backingStorePixelRatio = context.webkitBackingStorePixelRatio
        || context.mozBackingStorePixelRatio
        || context.msBackingStorePixelRatio
        || context.oBackingStorePixelRatio
        || context.backingStorePixelRatio
        || 1;

    var pixelRatio = devicePixelRatio / backingStorePixelRatio;

    canvas.style.width = canvas.width + 'px';
    canvas.style.height = canvas.height + 'px';
    canvas.width *= pixelRatio;
    canvas.height *= pixelRatio;
    canvas.paintCodePixelRatio = pixelRatio;

    context.scale(pixelRatio, pixelRatio);
    return canvas;
}

//// Public Interface

// Drawing Methods
StyleKitName.drawCanvas1 = drawCanvas1;

// Utilities
StyleKitName.clearCanvas = clearCanvas;
StyleKitName.makeRect = makeRect;
