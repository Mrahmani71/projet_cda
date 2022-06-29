@if (session()->has('message'))
    <div x-data="{show: true}" x-init="setTimeout(() => show = false, 3000)" x-show="show" class="fixed top-1 left-1/2 transform bg-laravrl text-white px-48 py-3 -translate-x-1/2 w-48 bg-gray-200 flex a items-center justify-center bg-green-200 z-10">
      <p class="w-3/4 text-center min-w-max text-green-800">{{session('message')}}</p>
    </div>
@endif