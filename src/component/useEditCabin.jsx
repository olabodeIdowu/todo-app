import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editCabinApi } from '../services/apiCabins';
import { toast } from 'react-hot-toast';

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: editCabinApi,
    onSuccess: (data) => {
      toast.success('Cabin successfully edited');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editCabin };
}
