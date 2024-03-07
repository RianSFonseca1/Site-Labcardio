<template>
  <nav class="m-4 mt-0 border-2 space-y-2 border-gray-100 rounded-xl shadow-xl overflow-hidden">

        <!-- Borda Superior gradiente -->
        <div class="p-1 bg-gradient-to-r to-Laranja-2 from-Laranja-4"></div>


        <div class="flex flex-row">
            <!-- Pré Navbar 1/2 -->
            <div class="flex justify-center w-auto h-24">
                <!-- Div Logo-->
                <div class="p-2">
                    <a href="index.html" class="items-center space-x-3 rtl:space-x-reverse">
                        <img src='../img/Logo-labcardio-final.png' class="h-full" alt="" />
                    </a>
                </div>
            </div>
    
            <!-- Navbar 2/2-->
            <div class="flex flex-row w-auto relative bg-white">
                <!-- Links do Navbar/Menu Dropdown-->
                <div class="flex-row hidden items-center w-full justify-center md:flex" id="navbar-default">
                    <ul
                        class="font-medium space-x-4 flex p-2 items-center border-t-2 md:flex-row rtl:space-x-reverse md:scale-75 md:space-x-2 lg:scale-100">
                        <!-- Link para "Sobre nós" -->
                        <li>
                            <a href="">
                                <button
                                    class="relative flex h-[50px] w-40 space-x-2 items-center justify-center rounded-lg overflow-hidden bg-white text-gray-500 transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gradient-to-r to-Laranja-2 from-Laranja-4 before:duration-500 before:ease-out hover:text-white hover:before:h-56 hover:before:w-56">
                                    <svg class="relative w-auto h-6" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
    
                                    <span class="relative z-10">Institucional</span>
                                </button>
                            </a>
                        </li>
                        <!-- Link para "Exames" -->
                        <li>
                            <a href="/src/exames.html">
                                <button
                                    class="relative flex h-[50px] w-40 space-x-2 items-center justify-center rounded-lg overflow-hidden bg-white text-gray-500 transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gradient-to-r to-Laranja-2 from-Laranja-4 before:duration-500 before:ease-out hover:text-white hover:before:h-56 hover:before:w-56">
                                    <svg class="relative w-auto h-6" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
    
                                    <span class="relative z-10">Exames</span>
                                </button>
                            </a>
                        </li>
                        <!-- Link para "Unidades"-->
                        <li>
                            <a href="">
                                <button
                                    class="relative flex h-[50px] w-40 space-x-2 items-center justify-center rounded-lg overflow-hidden bg-white text-gray-500 transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gradient-to-r to-Laranja-2 from-Laranja-4 before:duration-500 before:ease-out hover:text-white hover:before:h-56 hover:before:w-56">
                                    <svg class="relative w-auto h-6" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
    
                                    <span class="relative z-10">Convênios</span>
                                </button>
                            </a>
                        </li>
                        <!-- Link para "Exames" -->
                        <li>
                            <a href="">
                                <button
                                    class="relative flex h-[50px] w-40 space-x-2 items-center justify-center rounded-lg overflow-hidden bg-white text-gray-500 transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gradient-to-r to-Laranja-2 from-Laranja-4 before:duration-500 before:ease-out hover:text-white hover:before:h-56 hover:before:w-56">
                                    <svg class="relative w-auto h-6" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
    
                                    <span class="relative z-10">Unidades</span>
                                </button>
                            </a>
                        </li>
    
                        <li>
                            <a href="">
                                <button
                                    class="relative flex h-[50px] w-40 space-x-2 items-center justify-center rounded-lg overflow-hidden bg-white text-gray-500 transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gradient-to-r to-Laranja-2 from-Laranja-4 before:duration-500 before:ease-out hover:text-white hover:before:h-56 hover:before:w-56">
                                    <svg class="relative w-auto h-6" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
    
                                    <span class="relative z-10">Contate-nos</span>
                                </button>
                            </a>
                        </li>
    
                        <li>
                            <a href="">
                                <button
                                    class="relative flex group h-[50px] w-40 space-x-2 items-center justify-center rounded-lg overflow-hidden bg-white text-gray-500 transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gradient-to-r to-Laranja-2 from-Laranja-4 before:duration-500 before:ease-out hover:text-white hover:before:h-56 hover:before:w-56">
                                    <svg class="relative w-auto h-6" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
    
                                    <span class="relative z-10">Resultados</span>
                                </button>
                            </a>
                        </li>
                    </ul>

    
                </div>
            </div>
        </div>

        <!-- Menu dropdown ativado por responsividade (Oculto em telas maiores) -->
        <div class="w-full flex justify-center sm:pb-4 md:hidden">
            <!-- Modal toggle -->
            <button data-modal-target="default-modal" data-modal-toggle="default-modal"
                class="flex flex-row space-x-2 text-white bg-gray-400 hover:bg-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="button">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
                <span>Menu</span>
            </button>

            <!-- Main modal -->
            <div id="default-modal" tabindex="-1" aria-hidden="true"
                class="hidden overflow-y-auto overflow-x-hidden fixed -top-14 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-3/5 max-w-2xl max-h-full">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow">
                        <!-- Modal header -->
                        <div class="flex items-center justify-between p-4 border-b rounded-t">
                            <h3 class="text-xl font-semibold text-Laranja-4">
                                Menu
                            </h3>
                            <button type="button"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="default-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>

                        <!-- Modal body -->
                        <div class="flex justify-center p-4 rounded-t">
                            <ul class="font-medium flex flex-col p-2 items-center justify-center rounded-lg">
                                <!-- Link para "Sobre nós" -->
                                <li>
                                    <a href="">
                                        <button
                                            class="relative flex h-[50px] w-40 items-center justify-center rounded-lg text-gray-500">
                                            <span class="relative z-10">Institucional</span>
                                        </button>
                                    </a>
                                </li>
                                <!-- Link para "Convênios" -->
                                <li>
                                    <a href="">
                                        <button
                                            class="relative flex h-[50px] w-40 items-center justify-center rounded-lg text-gray-500">
                                            <span class="relative z-10">Exames</span>
                                        </button>
                                    </a>
                                </li>
                                <!-- Link para "Unidades"-->
                                <li>
                                    <a href="">
                                        <button
                                            class="relative flex h-[50px] w-40 items-center justify-center rounded-lg text-gray-500">
                                            <span class="relative z-10">Convênios</span>
                                        </button>
                                    </a>
                                </li>
                                <!-- Link para "Exames" -->
                                <li>
                                    <a href="">
                                        <button
                                            class="relative flex h-[50px] w-40 items-center justify-center rounded-lg text-gray-500">
                                            <span class="relative z-10">Unidades</span>
                                        </button>
                                    </a>
                                </li>

                                <li>
                                    <a href="">
                                        <button
                                            class="relative flex h-[50px] w-40 items-center justify-center rounded-lg text-gray-500">
                                            <span class="relative z-10">Contate-nos</span>
                                        </button>
                                    </a>
                                </li>

                                <li>
                                    <a href="">
                                        <button
                                            class="relative flex h-[50px] w-40 items-center justify-center rounded-lg text-gray-500">
                                            <span class="relative z-10">Resultados</span>
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </div>


    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>