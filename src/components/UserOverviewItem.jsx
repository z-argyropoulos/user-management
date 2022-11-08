import {
  ListItem as MUIListItem,
  ListItemText,
  styled,
} from '@mui/material';
import UserAvatar from '@components/UserAvatar';
import RouterLink from './shared/RouterLink';
import UserTitle from './UserTitle';
import useIsOverBreakpoint from '@hooks/useIsOverBreakpoint';

const ListItem = styled(MUIListItem)(({ theme, active }) => ({
  backgroundColor: `${
    active && theme.palette.primary.main
  }!important`,
  color: `${active && theme.palette.primary.contrastText}!important`,
  width: '100%',
  padding: '0.5rem 1rem',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const UserOverviewItem = (props) => {
  const { imgSrc, imgAlt, userName, userEmail, ...listProps } = props;
  const isDesktop = useIsOverBreakpoint('tablet');

  return (
    <ListItem component={RouterLink} {...listProps}>
      <UserAvatar src={imgSrc} alt={imgAlt} size="md" />
      {isDesktop && (
        <ListItemText>
          <UserTitle title={userName} subtitle={userEmail} />
        </ListItemText>
      )}
    </ListItem>
  );
};

export default UserOverviewItem;
