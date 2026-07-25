import { Head } from '@inertiajs/react';
import {Button} from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { useForm } from '@inertiajs/react';
import { dashboard } from '@/routes';


export default function Dashboard() {
    const form = useForm({name: '', price: '', description: ''});

    function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        form.post('/products', {
            onSuccess: () => form.reset(),
        });
    }
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div>
                    <h1 className="text-x1 font-semibold">Products</h1>
                    <p className="text-sm text-muted-foreground">
                        Add a new Product to your store.
                    </p>

                <form onSubmit= {submit} className="max-w-x1 space-y-2 rounded-x1 border p-4">
                    
                    <div className="space-y-2">
                    <label htmlFor="name">Name</label>
                    <Input 
                        id="name" 
                        value={form.data.name} 
                        onChange={(event)=> form.setData('name', event.target.value)}
                        />
                        {form.errors.name && <p className="text-sm text-red-600">{form.errors.name}</p>} 
                    </div>


                    <div className="space-y-2">
                    <label htmlFor="description">Description</label>
                    <Input 
                        id="description" 
                        value={form.data.description} 
                        onChange={(event)=> form.setData('description', event.target.value)}
                        />
                        {form.errors.description && <p className="text-sm text-red-600">{form.errors.description}</p>} 
                    </div>
                    <div className="space-y-2">
                    <label htmlFor="price">Price</label>
                    <Input 
                        id="price" 
                        value={form.data.price} 
                        onChange={(event)=> form.setData('price', event.target.value)}
                        />
                        {form.errors.price && <p className="text-sm text-red-600">{form.errors.price}</p>} 

                    </div>
                    <Button type="submit" disabled={form.processing}>Save Product</Button>
                </form>



                </div>
                

                
                {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div> */}

            </div>
        </> 

    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
