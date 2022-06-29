import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.6435-9/128605485_1071473169965818_8508939777649885107_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rr-GGHYCQp4AX80bAWc&_nc_ht=scontent.fsgn5-3.fna&oh=00_AT_DA7etJY6svziIyP171FLLPEuDGuQS4sqfUB_ep6NReQ&oe=62E196E1"
                // src="https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-6/273727832_682016636157763_1569302612958504638_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=v-wEJLIfstUAX9p_dgK&_nc_ht=scontent-hkt1-2.xx&oh=00_AT_xlMhCN8KPas8C-j2thYmlDXk0xHt6DwBVYk5Gp-_-BA&oe=62BE2311"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyễn Văn A
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
