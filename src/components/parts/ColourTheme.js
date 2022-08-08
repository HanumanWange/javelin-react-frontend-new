import React from 'react'

const ColourTheme = () => {
  return (
    <>


<div className="theme-setting-wrapper d-none " >
        <div id="settings-trigger"><i className="ti-settings"></i></div>
        <div id="theme-settings" className="settings-panel">
          <i className="settings-close ti-close"></i>
          <p className="settings-heading">SIDEBAR SKINS</p>
          <div className="sidebar-bg-options selected" id="sidebar-light-theme">
            <div className="img-ss rounded-circle bg-light border mr-3"></div>Light
          </div>
          <div className="sidebar-bg-options" id="sidebar-dark-theme">
            <div className="img-ss rounded-circle bg-dark border mr-3"></div>Dark
          </div>
          <p className="settings-heading mt-2">HEADER SKINS</p>
          <div className="color-tiles mx-0 px-4">
            <div className="tiles success"></div>
            <div className="tiles warning"></div>
            <div className="tiles danger"></div>
            <div className="tiles info"></div>
            <div className="tiles dark"></div>
            <div className="tiles default"></div>
          </div>
        </div>
      </div>

      <div id="right-sidebar" className="settings-panel d-none">
        <i className="settings-close ti-close"></i>
        

        <ul className="nav nav-tabs border-top" id="setting-panel" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="todo-tab" data-toggle="tab" href="#todo-section" role="tab"
              aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="chats-tab" data-toggle="tab" href="#chats-section" role="tab"
              aria-controls="chats-section">CHATS</a>
          </li>
        </ul>
        


      </div>

    </>
  )
}

export default ColourTheme