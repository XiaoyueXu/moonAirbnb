import React, { memo, useState, useEffect } from "react";
import { RightWrapper, LoginModalWrapper } from "./style";
import IconProfileAvatar from "@/assets/svg/icon-profile-avatar";
import IconProfileMenu from "@/assets/svg/icon-profile-menu";
import IconGlobal from "@/assets/svg/icon-global";

const HeaderRight = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  /** 副作用代码 */
  useEffect(() => {
    function clickEvent() {
      setIsOpen(false);
    }

    //一个布尔值，表示在 DOM 树中注册了 listener 的元素，是否要先于它下面的 EventTarget 调用该 listener。
    // 当 useCapture（设为 true）时，沿着 DOM 树向上冒泡的事件不会触发 listener。
    // 当一个元素嵌套了另一个元素，并且两个元素都对同一事件注册了一个处理函数时，所发生的事件冒泡和事件捕获是两种不同的事件传播方式。
    // 事件传播模式决定了元素以哪个顺序接收事件：
    // 1) 捕获模式，触发顺序为window的click事件 -> 点击登录按钮的click事件
    // 2) 冒泡模式，触发顺序为点击登录按钮的click事件 -> window的click事件
    window.addEventListener("click", clickEvent, true);
    // TODO: 一定要记得，在return中返回卸载监听事件的函数
    // TODO: 清理函数的执行时机：每次副作用函数重新执行或组件卸载前，必须清理前一次副作用的残留资源。
    return () => window.removeEventListener("click", clickEvent, true);
  }, []);

  /** 函数定义区 */
  function openLoginModal() {
    setIsOpen(true);
  }

  /** 页面渲染区 */
  return (
    <RightWrapper>
      <div className="action-icon">登录</div>
      <div className="action-icon">注册</div>
      <div className="icon">
        <IconGlobal />
      </div>
      <div className="login-in-wrapper" onClick={() => openLoginModal()}>
        <div className="login-icon">
          <IconProfileMenu />
        </div>
        <div className="login-icon">
          <IconProfileAvatar />
        </div>

        {isOpen && (
          <LoginModalWrapper>
            <div className="item">注册</div>
            <div className="item">登录</div>
            <div className="line"></div>
            <div className="item">出租房源</div>
            <div className="item">开展体验</div>
            <div className="item">帮助</div>
          </LoginModalWrapper>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
