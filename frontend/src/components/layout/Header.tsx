import { Button, Layout, Menu } from 'antd';
import React, { memo } from 'react';
import { Translate } from 'react-localize-redux';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';

import { logout } from '../../redux/actions/AuthActions';
import PATHS from '../../utils/paths';

interface Props {}

const Header: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const onClickLogout = () => {
    dispatch(logout());
  };

  const onClickMenuItem = (e: any) => {
    history.push(e.key);
  };

  return (
    <Translate>
      {({ translate }) => {
        return (
          <>
            <Layout.Header className="grid-header">
              <Menu style={{ lineHeight: '64px' }} theme="dark" mode="horizontal" onClick={onClickMenuItem} selectedKeys={[location.pathname]}>
                <Menu.Item key={PATHS.HOME}>{translate('nav.home')}</Menu.Item>
                <Menu.Item key={PATHS.ENTITIES}>{translate('nav.entities')}</Menu.Item>
              </Menu>
              <div className="centred">
                <Button type="danger" shape="circle" icon="logout" onClick={onClickLogout} />
              </div>
            </Layout.Header>
          </>
        );
      }}
    </Translate>
  );
};

export default memo(Header);
